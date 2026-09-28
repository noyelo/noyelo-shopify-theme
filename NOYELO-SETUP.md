# NOYELO Theme – Einrichtung

Dieses Theme basiert auf Dawn 16. Die Shopify-Kernfunktionen (Varianten, Warenkorb, Checkout, Suche, Kundenkonten, Märkte, Übersetzungen, dynamische Quellen) bleiben erhalten. Alles NOYELO-Spezifische ist über den Theme-Editor steuerbar.

## 1. Logo & Marke
- **Theme-Einstellungen › Logo:** Logo hochladen (SVG oder PNG mit transparentem Hintergrund) und die Breite festlegen.
- **Theme-Einstellungen › NOYELO:** Akzentfarbe, Soft-Fläche, Logobreite mobil, Schwellenwert für kostenlosen Versand, Vertrauenshinweis im Warenkorb, Sticky-Warenkorb-Button auf Mobilgeräten.
- **Header › NOYELO: Transparenter Header:** Auf der Startseite liegt der Header transparent über dem Hero. Für dunkle Hero-Bilder „Textfarbe: Hell“ wählen und optional ein helles Logo hinterlegen.

## 2. Navigation (Onlineshop › Navigation)
| Menü | Handle | Inhalt |
| --- | --- | --- |
| Hauptmenü | `main-menu` | Kissen · Schlafzubehör · Über NOYELO · FAQ |
| Footer | `footer` | Versand · Rückgabe · Kontakt · FAQ |
| Unternehmen (neu anlegen) | frei wählbar | Über NOYELO · Kontakt · … |

Im Footer (Theme-Editor › Footer) die Spalte „Unternehmen“ mit dem neuen Menü verbinden. Die Spalte **Rechtliches** listet automatisch alle Richtlinien aus **Einstellungen › Richtlinien** (Impressum, Datenschutz, AGB, Widerruf, Versand).

## 3. Seiten & Vorlagen
| Seite | Vorlage |
| --- | --- |
| Über NOYELO | `page.about` |
| FAQ | `page.faq` |
| Versand, Kontakt, … | Standard (`page` / `page.contact`) |

## 4. Produkt
- Vorlage `product` enthält: Galerie, Kaufbereich (Bewertung, Preis, Vorteile, Varianten, Menge, Warenkorb-Button, Versand/Testphase/Zahlung), danach Vorteile, Detailbilder, Material, Schichtaufbau, Ergonomie, Vergleich, FAQ, Bewertungen und passende Produkte.
- Bilder für die Storytelling-Sections im Theme-Editor pro Section auswählen, oder über dynamische Quellen mit Produkt-Metafeldern verbinden.
- Produktbilder möglichst im gleichen Format (z. B. 1:1) hochladen, damit die Galerie ruhig wirkt.
- **Startseite › NOYELO Produkt-Highlight:** das Hauptkissen auswählen.

## 5. Bewertungen
- Die Sterne neben dem Produktnamen lesen die Standard-Metafelder `reviews.rating` und `reviews.rating_count`. Die meisten Review-Apps (Judge.me, Okendo, Yotpo usw.) befüllen sie automatisch.
- Das App-Widget lässt sich in der Section **NOYELO Bewertungen** als App-Block einfügen.
- **Wichtig:** Die mitgelieferten Beispielbewertungen (Namen beginnen mit „Beispiel:“) sind Platzhalter. Ersetze oder lösche sie vor der Veröffentlichung – veröffentliche nur echte Kundenbewertungen.

## 6. Warenkorb
- Der Warenkorb ist als seitlicher Drawer eingestellt (Theme-Einstellungen › Warenkorb).
- Der Fortschrittsbalken für kostenlosen Versand nutzt den Schwellenwert aus **Theme-Einstellungen › NOYELO**, in der Standardwährung des Shops. In anderen Währungen/Märkten wird er ausgeblendet, damit keine falschen Beträge erscheinen. Den Betrag zusätzlich in den Versandeinstellungen hinterlegen.

## 7. Schriften
Standard ist **DM Sans** aus der Shopify-Schriftbibliothek (keine externen Anfragen, DSGVO-freundlich). Ändern unter **Theme-Einstellungen › Typografie**.

## 8. Dateien
| Bereich | Dateien |
| --- | --- |
| Globales Styling | `assets/noyelo-base.css` |
| Sections | `assets/noyelo-sections.css`, `sections/noyelo-*.liquid` |
| Produktseite | `assets/noyelo-product.css`, `sections/main-product.liquid` (NOYELO-Blöcke) |
| Footer | `sections/footer.liquid`, `assets/noyelo-footer.css` |
| JavaScript | `assets/noyelo.js` (Footer-Akkordeon, Karussell, Sticky-Warenkorb-Button) |
| Snippets | `snippets/noyelo-*.liquid` (Icons, Sterne, Bilder, Versand-Fortschritt) |
