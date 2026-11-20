# CineWave – Landingpage

Statische, responsive Website für **CineWave – Video Player & Filmsammlung** (Flondy Dev.), Schwester-App von Sound Wave.
Online: https://marcel-2025.github.io/Cine-Wave-Landingpage/ · Repo: https://github.com/Marcel-2025/Cine-Wave-Landingpage

## Stand: Version 2.0 (16.11.2026) – passend zur App 0.2.1

- Branding: **Popcorn-Icon** als Haupt-Icon (Navbar, Hero, Favicon, Footer); Sound Wave = Musiknote, CineWave = Popcorn.
- **Echte Screenshots** der Windows-App 0.2.1 (`assets/app/`, 31 Bilder) mit einer Demo-Bibliothek aus fiktiven Filmen – kein Mockup mehr.
- Abschnitte: Funktionen (8 Karten), Demo-Bibliothek, Screenshots (17), Player & Skins, Geräte (Desktop/Tablet/Handy/Steam Deck), Design Studio (10 Welten, 6 Screenshots), Marke/Icons, Demo-Artwork, **Stand & Versionen** (Status-Karten, Changelog 0.1.0–0.2.1, Download-Platzhalter), Premium (Pakete wie in der App), FAQ.
- Keine Download-Links, keine Store-Badges, keine Preise – erst nach Freigabe durch Marcel.
- Keine externen Skripte, Fonts, Tracking oder Einbettungen.

## Start

`index.html` im Browser öffnen oder lokal: `python -m http.server 8000` → http://localhost:8000

## Dateien

- `index.html`, `css/styles.css`, `js/app.js` – Seite, Stil, Interaktion (Menü, Filmwechsel, Screenshot-Galerie, Geräte-Tabs inkl. Steam Deck, Themen, Lightbox).
- `assets/app/` – echte App-Screenshots 0.2.1 (JPG, Desktop 1600 px, Tablet 820 px, Handy 390 px, Designwelten).
- `assets/icons/` – 4 App-Icons (512/1024) + `favicon.png`; `assets/artwork/` – 7 fiktive Demo-Filme (Poster + Backdrop); `assets/marketing/`, `assets/screenshots/`, `assets/devices/` – älteres Designset (auf der Seite nur noch die Vorstellungsgrafik).
- `datenschutz.html`, `impressum.html` – **noch Entwürfe mit Platzhaltern** (Betreiber, Anschrift, Hosting) – vor der nächsten Veröffentlichung ausfüllen.

## Vor dem Hochladen

1. Impressum und Datenschutz vervollständigen (Seite ist bereits öffentlich).
2. Download-Platzhalter erst nach Freigabe gegen echte Links tauschen (GitHub Releases / Google Play).
3. Screenshots nach jedem größeren App-Update neu aufnehmen (Skript: `tests/` im CineWave_Windows-Projekt).
