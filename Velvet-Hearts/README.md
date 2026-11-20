# Velvet Hearts – Premium Landingpage

Statische Website im Bordeaux-, Violett-, Creme- und Gold-Design. Grundlage: Versionsübersicht, Chronik, Regeln und Patch Notes (Stand 17.11.2026, v0.8.0).

## Lokal öffnen
ZIP entpacken. `index.html` öffnen. Verzeichnisstruktur beibehalten. Kein Build, keine Server-Abhängigkeiten. Die Illustrationen sind lokale SVG-Designs, keine echten Spiel-Screenshots. Die Landingpage ist deutschsprachig.

## Vor Live-Schaltung (Blocker)
- `datenschutz.html` und `impressum.html`: alle eckigen Platzhalter durch überprüfte Angaben ersetzen. Entwurfswarnung erst entfernen, wenn die Angaben stimmen. Flondy Dev ist eine Projektbezeichnung, kein bestätigter Rechtsträger.
- Webhoster, Serverprotokolle, Empfänger, E-Mail-Anbieter, Speicherfristen und etwaige Drittlandübermittlungen konkretisieren.
- Finalen Android-Build samt Manifest, WebView, Billing, Bibliotheken, Android-Backup-Regeln, Sprachdiensten und tatsächlichen Datenflüssen prüfen. DSGVO-/TDDDG-Bedingungen und ggf. Art. 9 prüfen; mit Datensicherheitsformular abgleichen. Der Datenschutztext ist ausdrücklich ein Entwurf, keine rechtliche Freigabe.
- Aktuellen Store-Stand, Alterskennzeichnung, Produktnamen, Preise und Funktionsumfang verifizieren. Kein Store-Link erfunden. v0.8 ist laut Chronik eine private Testfassung; Google-Play-Fassung ist separat geplant.
- Nach Veröffentlichung bestätigte Store-URL ergänzen. HTTPS verwenden. Die Datenschutzseite muss öffentlich direkt ohne Login erreichbar sein; URL in App und Play Console hinterlegen. Kein AAB/Swift/Unity oder Installationspaket in diesem Website-ZIP.
- Echte Spiel-Screenshots später optional durch eigene freigegebene Bilder ersetzen und Bildunterschriften anpassen.

## Hosting
Alle Dateien samt `assets/` im selben Zielverzeichnis hochladen (z.B. GitHub Pages oder statischer Webhost). `index.html` ist die Startseite. Rechtliche Unterseiten behalten relative Links. Website verwendet weder externe Schriftarten noch Tracking-Skripte oder Cookies. Host kann trotzdem technische Zugriffsdaten verarbeiten.

## Quellen zur Datenschutzvorlage
- DSGVO: https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=de
- § 25 TDDDG: https://www.gesetze-im-internet.de/ttdsg/__25.html
- § 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
- Google Play Nutzerdaten: https://support.google.com/googleplay/android-developer/answer/10144311?hl=de
- Google Play Datensicherheit: https://support.google.com/googleplay/android-developer/answer/10787469?hl=de
- Google Datenschutz: https://policies.google.com/privacy?hl=de
