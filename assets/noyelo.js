/* NOYELO — small progressive enhancements. No dependencies. */
(() => {
  const desktopQuery = window.matchMedia('(min-width: 750px)');

  /* Footer: accordion on mobile, always open on tablet/desktop */
  const syncFooterGroups = () => {
    document.querySelectorAll('[data-ny-footer-group]').forEach((group) => {
      const summary = group.querySelector('summary');
      if (desktopQuery.matches) {
        group.setAttribute('open', '');
        summary?.setAttribute('tabindex', '-1');
      } else {
        if (!group.dataset.nyTouched) group.removeAttribute('open');
        summary?.removeAttribute('tabindex');
      }
    });
  };

  document.addEventListener('click', (event) => {
    const summary = event.target.closest('[data-ny-footer-group] > summary');
    if (!summary) return;
    if (desktopQuery.matches) {
      event.preventDefault();
      return;
    }
    summary.parentElement.dataset.nyTouched = 'true';
  });

  /* Header height for layouts without Dawn's sticky header element */
  const setHeaderHeight = () => {
    const header = document.querySelector('.section-header');
    if (!header || document.querySelector('sticky-header')) return;
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
  };

  const init = () => {
    syncFooterGroups();
    setHeaderHeight();
  };

  desktopQuery.addEventListener('change', syncFooterGroups);
  window.addEventListener('resize', setHeaderHeight, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', init);
})();

/* Horizontal scroller with previous/next buttons (reviews, benefits on mobile) */
if (!customElements.get('ny-carousel')) {
  customElements.define(
    'ny-carousel',
    class NyCarousel extends HTMLElement {
      connectedCallback() {
        this.track = this.querySelector('[data-ny-track]');
        this.prev = this.querySelector('[data-ny-prev]');
        this.next = this.querySelector('[data-ny-next]');
        if (!this.track) return;

        this.update = this.update.bind(this);
        this.prev?.addEventListener('click', () => this.scrollByItem(-1));
        this.next?.addEventListener('click', () => this.scrollByItem(1));
        this.track.addEventListener('scroll', this.update, { passive: true });
        window.addEventListener('resize', this.update, { passive: true });
        this.update();
      }

      disconnectedCallback() {
        window.removeEventListener('resize', this.update);
      }

      scrollByItem(direction) {
        const item = this.track.firstElementChild;
        if (!item) return;
        const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.track.scrollBy({
          left: direction * (item.getBoundingClientRect().width + gap),
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
      }

      update() {
        const maxScroll = this.track.scrollWidth - this.track.clientWidth - 2;
        const scrollable = maxScroll > 0;
        this.classList.toggle('is-scrollable', scrollable);
        if (this.prev) this.prev.disabled = !scrollable || this.track.scrollLeft <= 2;
        if (this.next) this.next.disabled = !scrollable || this.track.scrollLeft >= maxScroll;
      }
    }
  );
}

/* Mobile sticky add-to-cart: mirrors the main product form, never duplicates cart logic */
if (!customElements.get('ny-sticky-atc')) {
  customElements.define(
    'ny-sticky-atc',
    class NyStickyAtc extends HTMLElement {
      connectedCallback() {
        const sectionId = this.dataset.section;
        this.mainButton = document.getElementById(`ProductSubmitButton-${sectionId}`);
        this.mainPrice = document.getElementById(`price-${sectionId}`);
        this.button = this.querySelector('[data-ny-sticky-button]');
        this.buttonLabel = this.querySelector('[data-ny-sticky-label]');
        this.price = this.querySelector('[data-ny-sticky-price]');

        if (!this.mainButton || !this.button) {
          this.hidden = true;
          return;
        }

        this.button.addEventListener('click', () => {
          if (this.mainButton.disabled) return;
          this.mainButton.click();
        });

        this.syncButton = this.syncButton.bind(this);
        this.syncPrice = this.syncPrice.bind(this);
        this.buttonObserver = new MutationObserver(this.syncButton);
        this.buttonObserver.observe(this.mainButton, {
          attributes: true,
          attributeFilter: ['disabled', 'aria-disabled', 'class'],
          childList: true,
          subtree: true,
          characterData: true,
        });
        if (this.mainPrice) {
          this.priceObserver = new MutationObserver(this.syncPrice);
          this.priceObserver.observe(this.mainPrice, { childList: true, subtree: true, characterData: true });
        }
        this.syncButton();
        this.syncPrice();

        const form = this.mainButton.closest('product-form') || this.mainButton;
        this.visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            const pastForm = !entry.isIntersecting && entry.boundingClientRect.top < 0;
            this.classList.toggle('is-visible', pastForm);
            this.setAttribute('aria-hidden', pastForm ? 'false' : 'true');
            this.toggleAttribute('inert', !pastForm);
          },
          { threshold: 0 }
        );
        this.visibilityObserver.observe(form);
        this.setAttribute('aria-hidden', 'true');
        this.toggleAttribute('inert', true);
      }

      disconnectedCallback() {
        this.buttonObserver?.disconnect();
        this.priceObserver?.disconnect();
        this.visibilityObserver?.disconnect();
      }

      syncButton() {
        const disabled = this.mainButton.hasAttribute('disabled');
        this.button.disabled = disabled;
        const loading = this.mainButton.classList.contains('loading');
        this.button.classList.toggle('loading', loading);
        this.button.querySelector('.loading__spinner')?.classList.toggle('hidden', !loading);
        const text = this.mainButton.querySelector('span')?.textContent.trim();
        if (text && this.buttonLabel) this.buttonLabel.textContent = text;
      }

      syncPrice() {
        if (!this.price || !this.mainPrice) return;
        const onSale = this.mainPrice.querySelector('.price--on-sale');
        const value = onSale
          ? this.mainPrice.querySelector('.price__sale .price-item--last')
          : this.mainPrice.querySelector('.price__regular span.price-item--regular');
        if (value) this.price.textContent = value.textContent.trim();
      }
    }
  );
}
