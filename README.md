# Prototip: revista online FIMIM

Prototip static pentru revista online a **Facultății de Inginerie Mecanică, Industrială și Maritimă**, Universitatea „Ovidius” din Constanța.

Revista are două părți, păstrate separat în toate formatele:

- **Jurnalul științific**: articole originale evaluate colegial, în limba engleză, cu DOI, organizate în volume și numere (ținta: indexare).
- **Magazinul**: știri FIMIM, specializări, economia și industria Dobrogei, evenimente, articole „de la student la student”, opinii.

Toate textele sunt **generice** (placeholder). Culorile sunt verdele de pe site-ul facultății (#094536 și #126A1D). Ilustrațiile sunt machete 3D transparente, randate cu three.js (`assets/img/3d/`, sursele în `instrumente/randare-3d/`).

## Ce conține

| Pagina | Rol |
|---|---|
| `index.html` | Pagina principală: alegerea denumirii și a formatului |
| `format-1-campus.html` | Formatul 1, **Campus & Cercetare**, inspirat de Delta (TU Delft): publicație de știri, condusă de actualitate |
| `format-2-magazin.html` | Formatul 2, **Magazin de știință**, inspirat de Globe (ETH Zürich): numere tematice, imagini mari, lectură lungă |
| `format-3-academic.html` | Formatul 3, **Jurnal academic**: structură clasică de jurnal indexat, cu magazinul într-o zonă separată |
| `format-4-tipografic.html` | Formatul 4, **Magazin tipografic**: structură Globe, cu tipografia din specificația PDF (Palatino, etichete Helvetica, casete și tabele booktabs) |
| `pagina-<format>.html` | Paginile interne ale fiecărui format (toate meniurile și submeniurile), cu conținut din `assets/js/pagini.js`, de exemplu `pagina-academic.html?p=colegiul-editorial` |

Denumiri disponibile: **Acta Technica Tomitana**, **TEHNONAV Review**, **Ingenium Ponticum**, **Tomis Engineering Review**.

Pe fiecare pagină de format, bara neagră de sus permite schimbarea denumirii și trecerea la celelalte formate. Denumirea aleasă se păstrează (în adresă, prin `?n=...`, și în browser).

## Vizualizare locală

Deschideți `index.html` direct în browser (dublu clic). Nu este nevoie de instalare.

## Publicare pe GitHub Pages

1. Creați un depozit nou pe GitHub (de exemplu `revista-fimim`).
2. Încărcați **conținutul** acestui folder în rădăcina depozitului (fișierul `index.html` trebuie să fie în rădăcină):
   - din browser: *Add file → Upload files*, trageți toate fișierele și folderul `assets`, apoi *Commit changes*;
   - sau din linia de comandă:
     ```bash
     git init
     git add .
     git commit -m "Prototip revista FIMIM"
     git branch -M main
     git remote add origin https://github.com/UTILIZATOR/revista-fimim.git
     git push -u origin main
     ```
3. În depozit: **Settings → Pages**. La *Source* alegeți **Deploy from a branch**, ramura **main**, folderul **/ (root)**, apoi **Save**.
4. După 1–2 minute site-ul este disponibil la `https://UTILIZATOR.github.io/revista-fimim/`.

Fișierul `.nojekyll` (gol) dezactivează procesarea Jekyll, ca GitHub Pages să servească fișierele exact așa cum sunt.

## Structura fișierelor

```
index.html
format-1-campus.html
format-2-magazin.html
format-3-academic.html
format-4-tipografic.html
assets/
  css/base.css        stiluri comune și bara de prototip
  css/campus.css      formatul 1
  css/magazin.css     formatul 2
  css/academic.css    formatul 3
  css/tipografic.css  formatul 4
  js/data.js          denumiri, formate, specializări, articole generice
  js/pagini.js        conținutul paginilor interne (meniuri și submeniuri)
  js/pagina.js        randarea paginilor interne
  js/app.js           logica comună (denumirea aleasă, bara, legături, imagini)
  img/3d/*.webp       machete 3D transparente
pagina-campus.html, pagina-magazin.html, pagina-academic.html, pagina-tipografic.html
instrumente/randare-3d/   sursele machetelor 3D (opțional)
.nojekyll
```

## Modificări frecvente

- **Texte, articole, rubrici, denumiri, culori**: toate sunt în `assets/js/data.js`. Fiecare denumire are câmpurile `culoare` și `accent`, folosite automat de toate formatele.
- **Imaginile** sunt desenate automat (SVG) în culorile revistei. Pentru fotografii reale, înlocuiți apelurile `A.imagine(...)` din pagini cu etichete `<img>`.
- Fonturile se încarcă de la Google Fonts; fără internet se folosesc fonturile sistemului.
