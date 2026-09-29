# NOYELO Theme – Einrichtung

Dieses Theme basiert auf Dawn 16. Die Shopify-Kernfunktionen (Varianten, Warenkorb, Checkout, Suche, Kundenkonten, Märkte, Übersetzungen, dynamische Quellen) bleiben erhalten. Alles NOYELO-Spezifische ist über den Theme-Editor steuerbar.

## 0. Look & mitgelieferte Bilder
- Farbwelt: Weiß, Wolkenblau (`#EEF4FA`, `#DCE8F5`), Navy (`#1E2A44`), goldene Sterne. Anpassbar unter **Theme-Einstellungen › Farben** und **› NOYELO**.
- **Hauptprodukt** (Theme-Einstellungen › NOYELO): Seine echten Produktfotos erscheinen automatisch im Hero, im Produkt-Highlight und in weiteren Sections. Ohne Auswahl wird das erste Produkt im Shop genutzt.
- **Logo & Favicon:** Das NOYELO-Logo ist als Vektorgrafik im Theme hinterlegt (`assets/noyelo-logo.svg`, weiße Version für dunkle Flächen, Favicon aus dem Wolkenzeichen) und erscheint automatisch in Header, Footer und auf der Passwortseite. Wird unter **Theme-Einstellungen › Logo** eine Datei gewählt, hat diese Vorrang. Das Logo im Checkout stellst du separat unter **Einstellungen › Checkout › Anpassen** ein.
- Das Theme bringt eigene, gerenderte NOYELO-Illustrationen mit (Kissen auf Wolken, Produktansichten, Material, Querschnitt, Schlafpositionen, Nachtszene). Sie liegen als `assets/ny-*.webp` im Theme und erscheinen automatisch, solange in einer Section kein eigenes Bild gewählt ist (Einstellung **„Standardbild“**). Eigene Fotos ersetzen sie jederzeit.
- **Produktbilder** hängen am Produkt, nicht am Theme: Die quadratischen Dateien aus `noyelo-produktbilder.zip` unter **Produkte › NOYELO Kissen › Medien** hochladen.
- Die Illustrationen zeigen ein generiertes NOYELO-Kissen mit Logo-Etikett. Überall, wo ein Produkt verkauft wird (Produkt-Highlight, Produktseite, Warenkorb), erscheinen deine echten Produktfotos.

## 1. Logo & Marke
- **Theme-Einstellungen › Logo:** Logo hochladen (SVG oder PNG mit transparentem Hintergrund) und die Breite festlegen.
- **Theme-Einstellungen › NOYELO:** Akzentfarbe, Soft-Fläche, Logobreite mobil, Schwellenwert für kostenlosen Versand, Vertrauenshinweis im Warenkorb, Sticky-Warenkorb-Button auf Mobilgeräten.
- **Header › NOYELO: Transparenter Header:** Auf der Startseite liegt der Header transparent über dem Hero. Für dunkle Hero-Bilder „Textfarbe: Hell“ wählen und optional ein helles Logo hinterlegen.

## 2. Navigation (Onlineshop › Navigation)
| Menü | Handle | Inhalt |
| --- | --- | --- |
| Hauptmenü | `main-menu` | Kissen · Schlafzubehör · Über NOYELO · FAQ |
| Footer | `footer` | Versand & Zahlung · Rückgabe · Kontakt · FAQ · Kissen-Ratgeber |
| Unternehmen (neu anlegen) | frei wählbar | Über NOYELO · Kontakt · … |

Im Footer (Theme-Editor › Footer) die Spalte „Unternehmen“ mit dem neuen Menü verbinden. Die Spalte **Rechtliches** listet automatisch alle Richtlinien aus **Einstellungen › Richtlinien** (Impressum, Datenschutz, AGB, Widerruf, Versand).

## 3. Seiten & Vorlagen
Unter **Onlineshop › Seiten › Seite hinzufügen** anlegen, rechts unter „Theme-Vorlage“ die passende Vorlage wählen. Die URL-Handles in Klammern werden von den Buttons im Theme verlinkt (z. B. „Kontakt aufnehmen“ → `/pages/kontakt`).

| Seite (Handle) | Vorlage | Inhalt |
| --- | --- | --- |
| Über NOYELO (`ueber-uns`) | `page.about` | Markengeschichte, Werte, Testphase, Newsletter |
| FAQ (`faq`) | `page.faq` | Fragen & Antworten mit FAQ-Schema für Google |
| Kontakt (`kontakt`) | `page.contact` | Kontaktformular (Name, E-Mail, Bestellnummer, Nachricht), Servicezeiten |
| Versand & Zahlung (`versand`) | `page.shipping` | Seitenkopf, 4 Info-Karten, Seitentext, FAQ |
| Rückgabe & Erstattung (`rueckgabe`) | `page.returns` | Seitenkopf, 30-Nächte-Test, Seitentext, FAQ |
| Kissen-Ratgeber (`ratgeber`) | `page.guide` | Schlafpositionen, Vergleich, Produkt-Highlight, FAQ |
| Alle anderen Textseiten | `page` (Standard) | Seitenkopf mit Breadcrumbs + Text + Hilfe-Box |

Der Text, den du im Seiten-Editor schreibst, erscheint in der Section **NOYELO Seiteninhalt**. Rechtstexte (Impressum, Datenschutz, AGB, Widerruf, Versand) unter **Einstellungen › Richtlinien** pflegen – sie werden automatisch im NOYELO-Stil angezeigt und im Footer verlinkt.

Weitere gestaltete Vorlagen: `collection` (Kategorie mit Vertrauensleiste + Newsletter), `cart` (Warenkorbseite mit Versandfortschritt), `404` (Suche + Produktempfehlung).

## 3b. Bestand zum Testen
Damit „In den Warenkorb“ funktioniert, muss das Produkt verfügbar sein: **Produkte › Kissen › Inventar** – bei jeder Variante eine Menge eintragen (z. B. 100) **oder** „Weiter verkaufen, wenn nicht vorrätig“ aktivieren. Alternativ „Menge erfassen“ deaktivieren. Das geht nur im Shopify-Admin, nicht über das Theme.

## 4. Produkt
- Vorlage `product` enthält: Galerie, Kaufbereich (Bewertung, Preis, Vorteile, Varianten, Menge, Warenkorb-Button, Versand/Testphase/Zahlung, Produktdetails, Material & Aufbau, Pflege, Versand & Rückgabe), danach Vorteile, Detailbilder, Schlafpositionen, Material, Vergleich, Schichtaufbau mit Hotspots, FAQ, Bewertungen und passende Produkte.
- **Produktdetails** (Block „NOYELO Produktdetails“): Tabelle mit bis zu 9 Zeilen. **Maße, Gewicht und Zertifikate vor dem Livegang eintragen** – Zeilen ohne Wert sind im Shop ausgeblendet und im Theme-Editor als Hinweis sichtbar. Werte lassen sich per dynamischer Quelle mit Produkt-Metafeldern verbinden.
- **Schichtaufbau mit Hotspots** (Section „NOYELO Bild mit Hotspots“, Sprungmarke `#aufbau`): pulsierende Punkte auf dem Querschnitt; Hover (Desktop) oder Antippen (Mobil) zeigt eine Info-Karte. Punkte pro Block per Prozent-Position verschieben. Texte an das echte Produkt anpassen.
- Bilder für die Storytelling-Sections im Theme-Editor pro Section auswählen, oder über dynamische Quellen mit Produkt-Metafeldern verbinden.
- Produktbilder möglichst im gleichen Format (z. B. 1:1) hochladen, damit die Galerie ruhig wirkt.
- **Startseite › NOYELO Produkt-Highlight:** das Hauptkissen auswählen.

## 4b. Neue Elemente
- **Mengen-Angebote** (Produktseite, Block „NOYELO Mengen-Angebote“): 1 / 2 / 4 Kissen. Setzt nur die Menge. Rabatte wie „2 Kissen sparen“ bitte als automatischen Rabatt unter **Rabatte** anlegen und erst dann im Text bewerben.
- **Schlafpositionen** (Section mit Tabs): Seiten-, Rücken-, Bauchschläfer. Texte an dein Produkt anpassen.
- **Logo-Leiste „Bekannt aus“** ist auf der Startseite angelegt, aber **ausgeblendet**. Nur mit echten Presse-/Testerwähnungen und geklärten Logo-Rechten einblenden.

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
