/* Date comune pentru toate cele 3 formate. Conținut generic (placeholder). */
window.REVISTA = {
  facultate: "Facultatea de Inginerie Mecanică, Industrială și Maritimă",
  universitate: "Universitatea „Ovidius” din Constanța",

  denumiri: {
    acta: {
      id: "acta",
      titlu: "Acta Technica Tomitana",
      scurt: "ATT",
      motto: "Cercetare în inginerie mecanică și industrială",
      descriere: "Nume latin, în tradiția seriilor „Acta” ale universităților europene. Trimite la Tomis, cetatea antică a Constanței.",
      culoare: "#094536",
      accent: "#126A1D"
    },
    tehnonav: {
      id: "tehnonav",
      titlu: "TEHNONAV Review",
      scurt: "TNR",
      motto: "Tehnică, energie și industrie în Dobrogea",
      descriere: "Continuă un brand al facultății (conferința studențească TEHNONAV Junior), deja recunoscut de studenți și parteneri.",
      culoare: "#094536",
      accent: "#126A1D"
    },
    ingenium: {
      id: "ingenium",
      titlu: "Ingenium Ponticum",
      scurt: "IP",
      motto: "Ingeniozitate tehnică în Dobrogea",
      descriere: "„Ingenium” este rădăcina cuvântului inginer; „Ponticum” ancorează revista în regiunea Constanței.",
      culoare: "#094536",
      accent: "#126A1D"
    },
    tomis: {
      id: "tomis",
      titlu: "Tomis Engineering Review",
      scurt: "TER",
      motto: "Revistă de inginerie a Universității „Ovidius”",
      descriere: "Nume în engleză, direct și ușor de citat internațional, cu ancoră locală în numele Tomis.",
      culoare: "#094536",
      accent: "#126A1D"
    }
  },

  formate: [
    {
      id: "campus",
      fisier: "format-1-campus.html",
      nr: 1,
      nume: "Campus & Cercetare",
      inspiratie: "",
      descriere: "Format de tip publicație de știri: actualitate din facultate, investigații, opinii și cercetare explicată pe înțelesul tuturor. Pagina e condusă de cele mai noi articole."
    },
    {
      id: "magazin",
      fisier: "format-2-magazin.html",
      nr: 2,
      nume: "Magazin de știință",
      inspiratie: "",
      descriere: "Format vizual, pe teme: fiecare număr are un dosar central, imagini mari, portrete de cercetători și articole lungi, pentru absolvenți, parteneri și publicul larg."
    },
    {
      id: "academic",
      fisier: "format-3-academic.html",
      nr: 3,
      nume: "Jurnal academic",
      inspiratie: "",
      descriere: "Format orientat spre indexare: volume și numere, articole cu DOI, rezumate, instrucțiuni pentru autori, evaluare colegială. Secțiunea magazin este separată, într-o zonă distinctă."
    },
    {
      id: "tipografic",
      fisier: "format-4-tipografic.html",
      nr: 4,
      nume: "Magazin tipografic",
      inspiratie: "",
      descriere: "Magazin pe numere tematice, cu aspect de publicație tipărită: cuprins, dosar, interviu, reportaje, programe de studii și agendă."
    }
  ],

  /* Programe de studii (sursa: ghidul de admitere FIMIM) */
  specializari: {
    licenta: [
      { foto: "lab-autovehicule", nume: "Autovehicule rutiere", domeniu: "Ingineria autovehiculelor" },
      { foto: "energetica-industriala", nume: "Energetică industrială", domeniu: "Inginerie energetică" },
      { foto: "iaii-transportor", nume: "Informatică aplicată în inginerie industrială (IAII)", domeniu: "Inginerie industrială" },
      { foto: "inginerie-economica", nume: "Inginerie economică în domeniul mecanic", domeniu: "Inginerie și management" },
      { foto: "dual-dpworld-terminal", nume: "Inginerie mecanică (DUAL)", domeniu: "Inginerie mecanică" }
    ],
    master: [
      { foto: "propulsie-electrica", nume: "Ingineria vehiculelor moderne", domeniu: "Inginerie mecanică" },
      { foto: "cobot", nume: "Ingineria și managementul sistemelor de producție", domeniu: "Inginerie și management" }
    ]
  },

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
      titlu: "Laboratorul de metrologie al facultății, reamenajat cu aparatură nouă",
      sapou: "Studenții de la Autovehicule rutiere și Inginerie mecanică lucrează de acum cu comparatoare, micrometre și echipamente de măsurare moderne, la standardele cerute de industrie.",
      autor: "Nume Prenume",
      data: "27 noiembrie 2026",
      minute: 4,
      tema: 1, foto: "coperta-metrologie"
    },
    {
      rubrica: "economie",
      titlu: "Investiție industrială în zona portului Constanța: ce înseamnă pentru absolvenți",
      sapou: "O nouă investiție în zona portului aduce sute de locuri de muncă. Angajatorii caută ingineri mecanici, energeticieni și specialiști în automatizare.",
      autor: "Nume Prenume",
      data: "25 noiembrie 2026",
      minute: 7,
      tema: 2, foto: "port-cariere"
    },
    {
      rubrica: "specializari",
      titlu: "O zi în laboratorul de autovehicule rutiere",
      sapou: "Prezentarea unei specializări prin ochii studenților și profesorilor: ce se învață, unde se fac stagiile, ce urmează după licență.",
      autor: "Nume Prenume",
      data: "22 noiembrie 2026",
      minute: 6,
      tema: 3, foto: "lab-autovehicule"
    },
    {
      rubrica: "evenimente",
      titlu: "Conferința studențească anuală: apel la lucrări",
      sapou: "Studenții își pot trimite lucrările până la 15 martie. Secțiuni pentru autovehicule, energetică, producție și informatică industrială.",
      autor: "Redacția",
      data: "20 noiembrie 2026",
      minute: 3,
      tema: 4, foto: "conferinta-studenteasca"
    },
    {
      rubrica: "studenti",
      titlu: "Ce aș fi vrut să știu în primul an de inginerie",
      sapou: "Articol scris de un student pentru colegii mai mici: sfaturi despre examene, proiecte, practică și viața din campus.",
      autor: "Nume Prenume, anul III",
      data: "18 noiembrie 2026",
      minute: 5,
      tema: 5, foto: "primul-an"
    },
    {
      rubrica: "opinie",
      titlu: "De ce industria regională are nevoie de mai mulți ingineri",
      sapou: "Un cadru didactic al facultății scrie despre distanța dintre ce cer angajatorii din regiune și câți ingineri absolvă în fiecare an.",
      autor: "Nume Prenume",
      data: "15 noiembrie 2026",
      minute: 5,
      tema: 6, foto: "imm-atelier"
    },
    {
      rubrica: "fimim",
      titlu: "Rezultatele unui proiect de cercetare finanțat, prezentate public",
      sapou: "Echipa proiectului a prezentat rezultatele a trei ani de cercetare, alături de partenerii industriali și de studenții implicați.",
      autor: "Nume Prenume",
      data: "12 noiembrie 2026",
      minute: 4,
      tema: 1, foto: "proiect-cercetare"
    },
    {
      rubrica: "evenimente",
      titlu: "Competiția de vehicule construite de studenți ajunge la a doua ediție",
      sapou: "Echipele de studenți construiesc și testează propriile vehicule. Înscrierile sunt deschise până la sfârșitul lunii aprilie.",
      autor: "Redacția",
      data: "10 noiembrie 2026",
      minute: 3,
      tema: 4, foto: "formula-student"
    },
    {
      rubrica: "studenti",
      titlu: "Practica de vară la un producător de componente auto: jurnal de stagiu",
      sapou: "Experiența unui student într-un stagiu de practică, povestită pas cu pas pentru cei care aplică anul viitor.",
      autor: "Nume Prenume, anul II",
      data: "8 noiembrie 2026",
      minute: 6,
      tema: 5, foto: "practica-componente-auto"
    }
  ],

  /* Articole științifice (generice), în engleză, ca într-un jurnal indexat */
  cercetare: [
    {
      tip: "Research Article",
      titlu: "Numerical Analysis of [Phenomenon] in [Vehicle Component] Under Variable Loading Conditions",
      autori: "A. Author, B. Author, C. Author",
      afiliere: "Faculty of Mechanical, Industrial and Maritime Engineering, Ovidius University of Constanța, Romania",
      doi: "10.XXXXX/xxx.2026.01.001",
      pagini: "1–12", foto: "fuzeta-mef",
      cuvinte: ["finite element analysis", "automotive engineering", "fatigue"],
      rezumat: "The study investigates the behaviour of a vehicle component under variable loading. A finite element model was validated against bench measurements, and the results identify the critical zones and the expected service life. The conclusions support design changes that reduce mass while preserving fatigue strength."
    },
    {
      tip: "Research Article",
      titlu: "Experimental Study on [Material] Wear in [Industrial Process]",
      autori: "D. Author, E. Author",
      afiliere: "Ovidius University of Constanța, Romania; Partner University, Country",
      doi: "10.XXXXX/xxx.2026.01.002",
      pagini: "13–24", foto: "tribometru",
      cuvinte: ["tribology", "materials", "manufacturing"],
      rezumat: "Wear tests were carried out on a pin-on-disc tribometer under dry and lubricated conditions. The measured friction coefficients and wear rates are discussed in relation to surface hardness, and practical recommendations are given for industrial use."
    },
    {
      tip: "Review",
      titlu: "A Review of [Technology] Applications in Port Equipment and Industrial Maintenance",
      autori: "F. Author",
      afiliere: "Ovidius University of Constanța, Romania",
      doi: "10.XXXXX/xxx.2026.01.003",
      pagini: "25–40", foto: "troliu-macara",
      cuvinte: ["review", "port equipment", "maintenance"],
      rezumat: "This review summarises recent developments in condition monitoring and predictive maintenance of port equipment, outlines the main research directions and identifies open questions for future work."
    },
    {
      tip: "Short Communication",
      titlu: "Preliminary Results on [Energy System] Efficiency in the Dobrogea Region",
      autori: "G. Author, H. Author",
      afiliere: "Ovidius University of Constanța, Romania",
      doi: "10.XXXXX/xxx.2026.01.004",
      pagini: "41–46", foto: "energetica-industriala",
      cuvinte: ["renewable energy", "efficiency", "Dobrogea"],
      rezumat: "Early measurements of energy use in industrial plants from the Dobrogea region are reported, together with first estimates of the savings achievable through heat recovery."
    }
  ],

  /* Cercetare explicată pentru publicul larg (pentru formatele 1 și 2) */
  cercetareExplicata: [
    {
      titlu: "Cum pot fi făcute autovehiculele mai eficiente energetic",
      sapou: "O echipă din facultate testează soluții noi pentru reducerea consumului și a emisiilor.",
      autor: "Nume Prenume",
      tema: 7, foto: "propulsie-electrica"
    },
    {
      titlu: "Materiale care rezistă mai mult la uzură și coroziune",
      sapou: "Cercetătorii studiază comportarea materialelor în condițiile climatice ale litoralului.",
      autor: "Nume Prenume",
      tema: 8, foto: "coroziune-epruvete"
    },
    {
      titlu: "Roboți industriali pentru întreprinderile mici",
      sapou: "Cum pot fi automatizate procesele de fabricație fără investiții uriașe.",
      autor: "Nume Prenume",
      tema: 9, foto: "cobot"
    }
  ]
};

/* Fotografii (assets/img/foto): legende */
window.FOTO = {
 "dual-cne-simulator": "O studentă urmărește explicația unui instructor lângă un pupitru de pregătire pe simulator.",
 "dual-oil-terminal": "Un student și o ingineră examinează un manometru pe un stand didactic, lângă rezervoare de depozitare.",
 "dual-cfr-cale": "O studentă și un mentor examinează un instrument de măsurare a ecartamentului pe un tronson didactic.",
 "dual-dpworld-terminal": "Un mentor și o studentă privesc macaralele de cheu de pe o platformă protejată.",
 "coperta-metrologie": "Doi studenți măsoară un arbore cu un comparator într-un laborator de inginerie.",
 "coperta-autobuz-electric": "Autobuz electric pe o arteră din apropierea portului, la amurg.",
 "coperta-ruptura-oboseala": "Detaliu de suprafață de rupere a unei piese metalice, pe fundal verde închis.",
 "coperta-motor-electric": "Motor electric deschis pe un banc, cu rotorul, statorul și bobinajele de cupru la vedere.",
 "coperta-autoturism-hibrid": "Autoturism hibrid în secțiune transparentă: motorul termic, motorul electric, invertorul și bateria de tracțiune, legate prin cablurile de înaltă tensiune.",
 "port-cariere": "Macarale de cheu, un cargou și linii ferate într-un port comercial.",
 "parcuri-eoliene": "Turbine eoliene pe culmile joase și terenurile agricole ale Dobrogei.",
 "parc-industrial": "Hale de producție și căi de acces într-un parc industrial de coastă.",
 "atelier-feroviar": "O studentă și un mentor examinează roata unui boghiu demontat într-un atelier feroviar.",
 "lab-autovehicule": "Un autoturism este poziționat pe rolele unui stand de încercări.",
 "conferinta-studenteasca": "O prezentatoare explică un prototip în fața studenților, într-un amfiteatru.",
 "primul-an": "Doi studenți discută un desen de ansamblu în sala de proiect.",
 "imm-atelier": "Un mentor și un tânăr inginer examinează o piesă prelucrată într-un atelier.",
 "proiect-cercetare": "O echipă prezintă un prototip cu senzori și răspunde întrebărilor publicului.",
 "formula-student": "Un monopost studențesc de tip Formula Student pe un traseu cu jaloane.",
 "practica-componente-auto": "O stagiară verifică o piesă auto prelucrată, lângă o mașină CNC.",
 "propulsie-electrica": "Ansamblu de propulsie electrică și cabluri portocalii pe un stand de încercări.",
 "coroziune-epruvete": "Epruvete de oțel cu grade diferite de coroziune, într-o cameră de test.",
 "cobot": "Un cobot cu gripper paralel poziționează o piesă într-un dispozitiv.",
 "iaii-transportor": "Un student pune în funcțiune un mic transportor didactic cu senzori optici.",
 "inginerie-economica": "O echipă discută organizarea posturilor de lucru pe o machetă de atelier.",
 "energetica-industriala": "O ingineră inspectează aparatura unei instalații industriale cu pompe și conducte.",
 "fuzeta-mef": "O fuzetă reală și modelul ei discretizat, vizibil pe monitor.",
 "troliu-macara": "Un tehnician inspectează un troliu de macara pe cheu.",
 "tribometru": "Disc metalic cu pistă circulară de uzură într-un tribometru cu pin.",
 "portret-cercetatoare": "Portret ilustrativ al unei cercetătoare într-un laborator de materiale.",
 "portret-profesor": "Portret ilustrativ al unui profesor în laboratorul de autovehicule.",
 "portret-student": "Portret ilustrativ al unui student într-un laborator de automatizări.",
 "portret-absolvent": "Portret ilustrativ al unui inginer de producție într-un atelier.",
 "portret-doctoranda": "Portret ilustrativ al unei doctorande într-un laborator de energetică.",
 "portret-partener": "Portret ilustrativ al unei reprezentante a industriei portuare."
};
