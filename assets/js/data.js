/* Date comune pentru toate cele 3 formate. Conținut generic (placeholder). */
window.REVISTA = {
  facultate: "Facultatea de Inginerie Mecanică, Industrială și Maritimă",
  universitate: "Universitatea „Ovidius” din Constanța",

  denumiri: {
    acta: {
      id: "acta",
      titlu: "Acta Technica Tomitana",
      scurt: "ATT",
      motto: "Cercetare în inginerie mecanică, industrială și maritimă",
      descriere: "Nume latin, în tradiția seriilor „Acta” ale universităților europene. Trimite la Tomis, cetatea antică a Constanței.",
      culoare: "#1f3a5f",
      accent: "#b8862b"
    },
    tehnonav: {
      id: "tehnonav",
      titlu: "TEHNONAV Review",
      scurt: "TNR",
      motto: "Tehnică, navigație și industrie la Marea Neagră",
      descriere: "Continuă un brand deja cunoscut în facultate (conferința TEHNONAV) și leagă revista de profilul naval și maritim.",
      culoare: "#0b4f6c",
      accent: "#e07a2f"
    },
    ingenium: {
      id: "ingenium",
      titlu: "Ingenium Ponticum",
      scurt: "IP",
      motto: "Ingeniozitate tehnică pe malul Pontului Euxin",
      descriere: "„Ingenium” este rădăcina cuvântului inginer; „Ponticum” plasează revista în spațiul Mării Negre.",
      culoare: "#3d2f5b",
      accent: "#2f9c8f"
    },
    tomis: {
      id: "tomis",
      titlu: "Tomis Engineering Review",
      scurt: "TER",
      motto: "Revistă de inginerie a Universității „Ovidius”",
      descriere: "Nume în engleză, direct și ușor de citat internațional, cu ancoră locală în numele Tomis.",
      culoare: "#2b3a2f",
      accent: "#c0392b"
    }
  },

  formate: [
    {
      id: "campus",
      fisier: "format-1-campus.html",
      nr: 1,
      nume: "Campus & Cercetare",
      inspiratie: "inspirat de Delta (TU Delft)",
      descriere: "Format de tip publicație de știri: actualitate din facultate, investigații, opinii și cercetare explicată pe înțelesul tuturor. Pagina e condusă de cele mai noi articole."
    },
    {
      id: "magazin",
      fisier: "format-2-magazin.html",
      nr: 2,
      nume: "Magazin de știință",
      inspiratie: "inspirat de Globe (ETH Zürich)",
      descriere: "Format vizual, pe teme: fiecare număr are un dosar central, imagini mari, portrete de cercetători și articole lungi, pentru absolvenți, parteneri și publicul larg."
    },
    {
      id: "academic",
      fisier: "format-3-academic.html",
      nr: 3,
      nume: "Jurnal academic",
      inspiratie: "structură clasică de jurnal indexat",
      descriere: "Format orientat spre indexare: volume și numere, articole cu DOI, rezumate, instrucțiuni pentru autori, evaluare colegială. Secțiunea magazin este separată, într-o zonă distinctă."
    }
  ],

  /* Rubricile părții de magazin */
  rubrici: {
    fimim: "Știri FIMIM",
    specializari: "Specializări",
    economie: "Economie & Industrie Dobrogea",
    evenimente: "Evenimente",
    studenti: "De la student la student",
    opinie: "Opinie"
  },

  /* Articole de magazin (generice) */
  magazin: [
    {
      rubrica: "fimim",
      titlu: "Titlul unei știri importante din facultate, pe două rânduri",
      sapou: "Șapou de două-trei rânduri care rezumă știrea: ce s-a întâmplat, cine este implicat și de ce contează pentru studenți și cadre didactice.",
      autor: "Nume Prenume",
      data: "27 noiembrie 2026",
      minute: 4,
      tema: 1
    },
    {
      rubrica: "economie",
      titlu: "Investiție industrială în zona portului Constanța: ce înseamnă pentru absolvenți",
      sapou: "Text generic despre o investiție din Dobrogea, locurile de muncă create și competențele tehnice cerute de angajatori.",
      autor: "Nume Prenume",
      data: "25 noiembrie 2026",
      minute: 7,
      tema: 2
    },
    {
      rubrica: "specializari",
      titlu: "O zi la laboratorul de motoare navale",
      sapou: "Prezentarea unei specializări prin ochii studenților și profesorilor: ce se învață, unde se fac stagiile, ce urmează după licență.",
      autor: "Nume Prenume",
      data: "22 noiembrie 2026",
      minute: 6,
      tema: 3
    },
    {
      rubrica: "evenimente",
      titlu: "Conferința studențească anuală: apel la lucrări",
      sapou: "Detalii generice despre o conferință sau competiție a facultății: termene, secțiuni, premii și modul de înscriere.",
      autor: "Redacția",
      data: "20 noiembrie 2026",
      minute: 3,
      tema: 4
    },
    {
      rubrica: "studenti",
      titlu: "Ce aș fi vrut să știu în primul an de inginerie",
      sapou: "Articol scris de un student pentru colegii mai mici: sfaturi despre examene, proiecte, practică și viața din campus.",
      autor: "Nume Prenume, anul III",
      data: "18 noiembrie 2026",
      minute: 5,
      tema: 5
    },
    {
      rubrica: "opinie",
      titlu: "De ce industria regională are nevoie de mai mulți ingineri",
      sapou: "Text de opinie generic, semnat de un cadru didactic sau de un partener industrial, despre relația dintre facultate și piața muncii.",
      autor: "Nume Prenume",
      data: "15 noiembrie 2026",
      minute: 5,
      tema: 6
    },
    {
      rubrica: "fimim",
      titlu: "Rezultatele unui proiect de cercetare finanțat, prezentate public",
      sapou: "Știre generică despre finalizarea unui proiect: echipa, partenerii, rezultatele și pașii următori.",
      autor: "Nume Prenume",
      data: "12 noiembrie 2026",
      minute: 4,
      tema: 1
    },
    {
      rubrica: "evenimente",
      titlu: "Competiția de vehicule construite de studenți ajunge la a doua ediție",
      sapou: "Text generic despre o competiție tehnică: echipe, regulament, calendar și parteneri.",
      autor: "Redacția",
      data: "10 noiembrie 2026",
      minute: 3,
      tema: 4
    },
    {
      rubrica: "studenti",
      titlu: "Practica de vară pe un șantier naval: jurnal de stagiu",
      sapou: "Experiența unui student într-un stagiu de practică, povestită pas cu pas pentru cei care aplică anul viitor.",
      autor: "Nume Prenume, anul II",
      data: "8 noiembrie 2026",
      minute: 6,
      tema: 5
    }
  ],

  /* Articole științifice (generice), în engleză, ca într-un jurnal indexat */
  cercetare: [
    {
      tip: "Research Article",
      titlu: "Numerical Analysis of [Phenomenon] in [Marine Component] Under Variable Loading Conditions",
      autori: "A. Author, B. Author, C. Author",
      afiliere: "Faculty of Mechanical, Industrial and Maritime Engineering, Ovidius University of Constanța, Romania",
      doi: "10.XXXXX/xxx.2026.01.001",
      pagini: "1–12",
      cuvinte: ["finite element analysis", "marine engineering", "fatigue"],
      rezumat: "This placeholder abstract describes the aim of the study, the methods used, the main results and the conclusions. It is typically 150–250 words long and written in English, as required by international indexing databases."
    },
    {
      tip: "Research Article",
      titlu: "Experimental Study on [Material] Wear in [Industrial Process]",
      autori: "D. Author, E. Author",
      afiliere: "Ovidius University of Constanța, Romania; Partner University, Country",
      doi: "10.XXXXX/xxx.2026.01.002",
      pagini: "13–24",
      cuvinte: ["tribology", "materials", "manufacturing"],
      rezumat: "Placeholder abstract. The experimental setup, the measured parameters and the statistical treatment of data are briefly presented, followed by the key findings and their relevance for industry."
    },
    {
      tip: "Review",
      titlu: "A Review of [Technology] Applications in Port and Offshore Engineering",
      autori: "F. Author",
      afiliere: "Ovidius University of Constanța, Romania",
      doi: "10.XXXXX/xxx.2026.01.003",
      pagini: "25–40",
      cuvinte: ["review", "offshore", "port engineering"],
      rezumat: "Placeholder abstract for a review article summarising the state of the art, the main research directions and open questions in the field."
    },
    {
      tip: "Short Communication",
      titlu: "Preliminary Results on [Energy System] Efficiency in the Black Sea Region",
      autori: "G. Author, H. Author",
      afiliere: "Ovidius University of Constanța, Romania",
      doi: "10.XXXXX/xxx.2026.01.004",
      pagini: "41–46",
      cuvinte: ["renewable energy", "efficiency", "Black Sea"],
      rezumat: "Placeholder abstract for a short communication presenting early results that are of immediate interest to the community."
    }
  ],

  /* Cercetare explicată pentru publicul larg (pentru formatele 1 și 2) */
  cercetareExplicata: [
    {
      titlu: "Cum pot fi făcute navele mai eficiente energetic",
      sapou: "O echipă din facultate testează soluții noi pentru reducerea consumului de combustibil. Text generic de popularizare a științei.",
      autor: "Nume Prenume",
      tema: 7
    },
    {
      titlu: "Materiale care rezistă mai mult în apă sărată",
      sapou: "Cercetătorii studiază coroziunea în condițiile specifice Mării Negre. Text generic, pe înțelesul publicului larg.",
      autor: "Nume Prenume",
      tema: 8
    },
    {
      titlu: "Roboți industriali pentru întreprinderile mici",
      sapou: "Cum pot fi automatizate procesele de fabricație fără investiții uriașe. Text generic de popularizare.",
      autor: "Nume Prenume",
      tema: 9
    }
  ]
};
