/* Conținut generic pentru toate paginile interne (meniuri și submeniuri), comun celor 4 formate.
   Fiecare pagină: titlu, sapou, grup (pentru meniul lateral) și conținut (secțiuni sau un tip special). */
(function () {
  var P = "Text generic. ";
  function par(n, tema) {
    var baze = [
      "Acest paragraf ține locul unui text real și arată cum va arăta pagina după completarea conținutului de către redacție.",
      "Aici se vor descrie pe scurt contextul, obiectivele și informațiile esențiale pe care cititorul trebuie să le afle.",
      "Textul definitiv va fi redactat de echipa revistei și aprobat conform procedurilor editoriale ale facultății.",
      "Paragraful poate conține trimiteri la alte pagini ale revistei, la documente oficiale sau la date de contact.",
      "Informațiile vor fi actualizate periodic, iar data ultimei modificări va fi afișată la finalul paginii."
    ];
    var out = [];
    for (var i = 0; i < n; i++) out.push((tema ? tema + " " : "") + baze[i % baze.length]);
    return out;
  }

  window.GRUPURI = {
    jurnal: { titlu: "Jurnalul științific", pagini: ["numar-curent", "arhiva-jurnal", "despre-jurnal", "colegiul-editorial", "instructiuni-autori", "evaluare", "etica", "indexare"] },
    despreJurnal: { titlu: "Despre jurnal", pagini: ["despre-jurnal", "scop", "acces-deschis", "colegiul-editorial", "indexare"] },
    autori: { titlu: "Pentru autori", pagini: ["instructiuni-autori", "ghid-redactare", "sablon", "trimitere", "taxe", "declaratie", "evaluare"] },
    etica: { titlu: "Etică și politici", pagini: ["etica", "anti-plagiat", "licenta", "acces-deschis"] },
    magazin: { titlu: "Magazin", pagini: ["stiri", "cercetare-explicata", "specializari", "economie", "evenimente", "studenti", "opinie", "oameni", "dosar"] },
    redactie: { titlu: "Despre revistă", pagini: ["despre", "redactia", "statut", "trimite-subiect", "parteneri", "abonare", "arhiva", "contact", "confidentialitate"] }
  };

  window.PAGINI = {
    /* ---------- Magazin: rubrici ---------- */
    stiri: { titlu: "Știri FIMIM", grup: "magazin", tip: "rubrica", rubrica: "fimim", sapou: "Actualitatea facultății: proiecte, rezultate, decizii, oameni și noutăți din laboratoare." },
    economie: { titlu: "Economie & Industrie Dobrogea", grup: "magazin", tip: "rubrica", rubrica: "economie", sapou: "Investiții, port, energie și industrie în regiunea Constanței, cu accent pe ce înseamnă pentru ingineri și absolvenți." },
    evenimente: { titlu: "Evenimente", grup: "magazin", tip: "rubrica", rubrica: "evenimente", sapou: "Conferințe, competiții, zile ale porților deschise, târguri de cariere și alte evenimente ale facultății." },
    studenti: { titlu: "De la student la student", grup: "magazin", tip: "rubrica", rubrica: "studenti", sapou: "Articole scrise de studenți pentru colegii lor: experiențe, sfaturi, stagii de practică și viața din campus." },
    opinie: { titlu: "Opinie", grup: "magazin", tip: "rubrica", rubrica: "opinie", sapou: "Texte semnate de cadre didactice, cercetători, absolvenți și parteneri. Opiniile aparțin autorilor." },
    "cercetare-explicata": { titlu: "Cercetare explicată", grup: "magazin", tip: "explicate", sapou: "Proiectele de cercetare ale facultății, povestite pentru cititorii care nu sunt specialiști." },
    oameni: { titlu: "Oameni", grup: "magazin", tip: "oameni", sapou: "Portrete și interviuri cu cadre didactice, cercetători, studenți și absolvenți ai facultății." },
    dosar: {
      titlu: "Dosar: Mobilitatea de mâine", grup: "magazin", tema: 7,
      sapou: "Dosarul tematic al numărului curent: vehicule mai eficiente, energie curată și fabricație digitală.",
      sectiuni: [
        { h: "Introducere", p: par(2) },
        { h: "Laboratoarele implicate", p: par(2), lista: ["Laboratorul de autovehicule rutiere", "Laboratorul de energetică industrială", "Laboratorul de sisteme de producție digitale"] },
        { h: "Articolele dosarului", articole: [2, 6, 3, 1] },
        { h: "Ce urmează", p: par(1) }
      ]
    },
    specializari: { titlu: "Specializări", grup: "magazin", tip: "specializari", sapou: "Programele de studii de licență și master ale Facultății de Inginerie Mecanică, Industrială și Maritimă." },

    /* ---------- Articole (cu parametru id) ---------- */
    articol: { titlu: "Articol", grup: "magazin", tip: "articol" },
    explicat: { titlu: "Cercetare explicată", grup: "magazin", tip: "explicat" },
    "articol-stiintific": { titlu: "Articol științific", grup: "jurnal", tip: "stiintific" },

    /* ---------- Despre revistă / redacție ---------- */
    despre: {
      titlu: "Despre revistă", grup: "redactie",
      sapou: "Revista online a Facultății de Inginerie Mecanică, Industrială și Maritimă a Universității „Ovidius” din Constanța.",
      sectiuni: [
        { h: "Misiune", p: par(2) },
        { h: "Două secțiuni distincte", p: ["Revista are un jurnal științific (articole originale în limba engleză, evaluate colegial, cu DOI) și un magazin (știri, specializări, economie regională, evenimente, articole ale studenților)."], lista: ["Jurnalul științific urmează standardele internaționale de publicare și vizează indexarea.", "Magazinul se adresează studenților, absolvenților, partenerilor și publicului larg."] },
        { h: "Periodicitate", p: ["Jurnalul apare semestrial (iunie și decembrie). Magazinul se actualizează săptămânal online și are două numere tematice pe an."] },
        { h: "Istoric", p: par(2) }
      ]
    },
    redactia: { titlu: "Echipa redacțională", grup: "redactie", tip: "echipa", sapou: "Persoanele care coordonează conținutul magazinului și al jurnalului științific.",
      echipa: [["Redactor-șef", "Prof. univ. dr. ing. Nume Prenume"], ["Redactor-șef adjunct", "Conf. univ. dr. ing. Nume Prenume"], ["Secretar de redacție", "Ș.l. dr. ing. Nume Prenume"], ["Editor magazin", "Nume Prenume"], ["Editor foto și grafică", "Nume Prenume"], ["Redactori studenți", "Nume Prenume, Nume Prenume, Nume Prenume"], ["Tehnoredactare și web", "Nume Prenume"]] },
    statut: { titlu: "Statut editorial și independență", grup: "redactie", sapou: "Principiile după care funcționează redacția.",
      sectiuni: [{ h: "Independență editorială", p: par(2) }, { h: "Corecturi și drept la replică", p: par(1), lista: ["Erorile se corectează vizibil, cu data corecturii.", "Persoanele vizate pot solicita drept la replică.", "Solicitările se trimit la adresa redacției."] }, { h: "Conflicte de interese", p: par(1) }] },
    "trimite-subiect": { titlu: "Trimite un subiect", grup: "redactie", tip: "formular", sapou: "Aveți o știre, o idee de articol sau un eveniment? Scrieți-ne.",
      campuri: ["Nume și prenume", "Adresă de e-mail", "Statut (student, cadru didactic, absolvent, partener)", "Subiect propus"], text: "Descrieți pe scurt subiectul" },
    parteneri: { titlu: "Parteneri industriali", grup: "redactie", tip: "parteneri", sapou: "Companii și instituții din Dobrogea care colaborează cu facultatea pentru practică, proiecte și angajări." },
    abonare: { titlu: "Abonare", grup: "redactie", tip: "formular", sapou: "Primiți buletinul săptămânal și numerele tematice ale revistei.",
      campuri: ["Nume și prenume", "Adresă de e-mail"], optiuni: ["Buletinul săptămânal", "Numerele tematice (PDF)", "Apelurile la lucrări ale jurnalului"] },
    arhiva: { titlu: "Arhivă", grup: "redactie", tip: "arhiva", sapou: "Numerele tematice ale magazinului." },
    contact: { titlu: "Contact", grup: "redactie", tip: "contact", sapou: "Datele de contact ale redacției." },
    confidentialitate: { titlu: "Protecția datelor", grup: "redactie", sapou: "Cum sunt prelucrate datele personale ale cititorilor și autorilor.",
      sectiuni: [{ h: "Date colectate", p: par(1), lista: ["Numele și adresa de e-mail, pentru abonare.", "Datele autorilor, pentru procesul editorial.", "Date statistice anonime de vizitare."] }, { h: "Temeiul prelucrării", p: par(1) }, { h: "Drepturile dumneavoastră", p: par(1) }, { h: "Contact responsabil cu protecția datelor", p: ["dpo@exemplu.ro"] }] },

    /* ---------- Jurnal științific ---------- */
    "numar-curent": { titlu: "Număr curent: Vol. 1, Nr. 1 (2026)", grup: "jurnal", tip: "cuprins", sapou: "Ediția inaugurală a jurnalului științific. Publicat la 15 decembrie 2026." },
    "arhiva-jurnal": { titlu: "Arhiva jurnalului", grup: "jurnal", tip: "arhiva-jurnal", sapou: "Toate volumele și numerele publicate." },
    "despre-jurnal": { titlu: "Despre jurnal", grup: "despreJurnal", sapou: "Jurnal științific cu acces deschis, evaluare colegială dublu-anonimă și publicare semestrială.",
      sectiuni: [{ h: "Prezentare", p: par(2) }, { h: "Date de identificare", tabel: [["ISSN online", "XXXX-XXXX"], ["Prefix DOI", "10.XXXXX"], ["Editor", "Universitatea „Ovidius” din Constanța"], ["Periodicitate", "semestrială (iunie, decembrie)"], ["Limba articolelor", "engleză"], ["Licență", "CC BY 4.0"]] }, { h: "Istoric", p: par(1) }] },
    scop: { titlu: "Scop și domenii", grup: "despreJurnal", sapou: "Domeniile acoperite de jurnal.",
      sectiuni: [{ h: "Scop", p: par(1) }, { h: "Domenii", lista: ["Ingineria autovehiculelor și mobilitate", "Inginerie energetică și eficiență energetică", "Inginerie industrială și sisteme de producție digitale", "Informatică aplicată în inginerie", "Inginerie mecanică: proiectare, materiale, tribologie", "Inginerie economică și management industrial", "Echipamente și tehnologii portuare"] }, { h: "Tipuri de articole", lista: ["Research Article (articol original)", "Review (articol de sinteză)", "Short Communication (comunicare scurtă)", "Case Study (studiu de caz industrial)"] }] },
    "acces-deschis": { titlu: "Politica de acces deschis", grup: "etica", sapou: "Toate articolele sunt disponibile gratuit, imediat după publicare.",
      sectiuni: [{ h: "Acces deschis", p: par(2) }, { h: "Arhivare", p: par(1), lista: ["Arhivare pe serverul universității", "Depozitare în arhive digitale (de exemplu, LOCKSS / PKP PN)", "Auto-arhivare permisă autorilor"] }] },
    "colegiul-editorial": { titlu: "Colegiul editorial", grup: "despreJurnal", tip: "colegiu", sapou: "Redactorii și membrii comitetului științific al jurnalului." },
    "instructiuni-autori": { titlu: "Instrucțiuni pentru autori", grup: "autori", sapou: "Pașii pentru pregătirea și trimiterea unui manuscris.",
      sectiuni: [{ h: "Înainte de trimitere", lista: ["Verificați că subiectul se încadrează în domeniile jurnalului.", "Folosiți șablonul oficial (DOCX sau LaTeX).", "Pregătiți declarația de originalitate semnată."] }, { h: "Structura manuscrisului", lista: ["Titlu, autori, afilieri, ORCID", "Rezumat (150–250 de cuvinte) și 3–6 cuvinte-cheie", "Introducere, Materiale și metode, Rezultate, Discuții, Concluzii", "Bibliografie în stil IEEE"] }, { h: "Dimensiune", p: ["Articolele originale au între 6 și 12 pagini în șablonul jurnalului; comunicările scurte, între 3 și 5 pagini."] }, { h: "Procesul după trimitere", p: par(1) }] },
    "ghid-redactare": { titlu: "Ghid de redactare", grup: "autori", sapou: "Reguli de formatare și stil.",
      sectiuni: [{ h: "Format", tabel: [["Pagină", "A4, margini 2 cm"], ["Font", "Palatino Linotype 11 pt"], ["Titlu", "17 pt, aldin"], ["Titluri de secțiune", "14 pt, aldin"], ["Figuri", "minimum 300 dpi, numerotate"], ["Tabele", "stil booktabs, fără linii verticale"]] }, { h: "Bibliografie", p: ["Referințele se numerotează în ordinea apariției în text, în stil IEEE."] }, { h: "Unități și formule", p: par(1) }] },
    sablon: { titlu: "Șablon articol", grup: "autori", tip: "descarcari", sapou: "Descărcați șablonul oficial al jurnalului.",
      fisiere: [["Șablon Word (DOCX)", "120 KB"], ["Șablon LaTeX (ZIP)", "340 KB"], ["Exemplu de articol formatat (PDF)", "410 KB"]] },
    trimitere: { titlu: "Trimiterea unui manuscris", grup: "autori", tip: "formular", sapou: "Manuscrisele se trimit prin platforma online a jurnalului.",
      campuri: ["Autor corespondent", "Adresă de e-mail", "Afiliere", "Titlul manuscrisului", "Tipul articolului"], text: "Scrisoare de intenție către redactor", fisier: "Manuscris (DOCX sau PDF)" },
    taxe: { titlu: "Taxe de publicare", grup: "autori", sapou: "Jurnalul nu percepe taxe de trimitere sau de publicare.",
      sectiuni: [{ h: "Fără taxe", p: ["Costurile de publicare sunt acoperite de Universitatea „Ovidius” din Constanța."] }, { h: "Exemplare tipărite", p: par(1) }] },
    declaratie: { titlu: "Declarație de originalitate", grup: "autori", tip: "descarcari", sapou: "Formularul pe care autorii îl semnează la trimitere.",
      fisiere: [["Declarație de originalitate (DOCX)", "40 KB"], ["Acord privind licența CC BY 4.0 (PDF)", "60 KB"]] },
    evaluare: { titlu: "Evaluare colegială", grup: "jurnal", tip: "pasi", sapou: "Toate articolele trec printr-o evaluare dublu-anonimă.",
      pasi: [["Verificare inițială", "Redacția verifică încadrarea în domenii, formatul și originalitatea (raport anti-plagiat)."], ["Alegerea evaluatorilor", "Doi evaluatori independenți, din afara instituției autorilor."], ["Evaluare", "Evaluatorii completează formularul de evaluare în maximum 4 săptămâni."], ["Decizie", "Acceptare, revizii minore, revizii majore sau respingere."], ["Revizuire", "Autorii trimit versiunea revizuită și răspunsul la observații."], ["Publicare", "Articolul primește DOI și este publicat în numărul următor."]] },
    etica: { titlu: "Etică și politici", grup: "etica", sapou: "Jurnalul urmează recomandările COPE (Committee on Publication Ethics).",
      sectiuni: [{ h: "Responsabilitățile autorilor", lista: ["Originalitatea lucrării", "Declararea conflictelor de interese", "Contribuția reală a tuturor coautorilor"] }, { h: "Responsabilitățile evaluatorilor", lista: ["Confidențialitate", "Obiectivitate", "Declararea conflictelor de interese"] }, { h: "Responsabilitățile redacției", p: par(1) }, { h: "Retragerea articolelor", p: par(1) }] },
    "anti-plagiat": { titlu: "Politica anti-plagiat", grup: "etica", sapou: "Toate manuscrisele sunt verificate cu un program de detectare a similitudinilor.",
      sectiuni: [{ h: "Verificare", p: par(1) }, { h: "Praguri", tabel: [["Sub 15%", "acceptabil, cu citare corectă"], ["15–25%", "revizie obligatorie"], ["Peste 25%", "respingere"]] }] },
    licenta: { titlu: "Licență și drepturi de autor", grup: "etica", sapou: "Articolele sunt publicate sub licența Creative Commons Attribution 4.0 (CC BY 4.0).",
      sectiuni: [{ h: "Drepturi de autor", p: ["Autorii păstrează drepturile de autor și acordă jurnalului dreptul de primă publicare."] }, { h: "Reutilizare", p: par(1) }] },
    indexare: { titlu: "Indexare", grup: "despreJurnal", tip: "indexare", sapou: "Bazele de date în care jurnalul este (sau urmează să fie) indexat." }
  };

  /* Date suplimentare pentru tipurile speciale */
  window.PAGINI_DATE = {
    colegiu: [
      ["Redactor-șef", [["Prof. univ. dr. ing. Nume Prenume", "Universitatea „Ovidius” din Constanța, România"]]],
      ["Redactori asociați", [["Conf. univ. dr. ing. Nume Prenume", "Universitatea „Ovidius” din Constanța, România"], ["Prof. dr. Nume Prenume", "Universitate parteneră, Țară"], ["Assoc. Prof. Nume Prenume", "Universitate parteneră, Țară"]]],
      ["Comitet științific", [["Prof. dr. ing. Nume Prenume", "Universitatea Politehnica București, România"], ["Prof. dr. ing. Nume Prenume", "Universitatea Tehnică „Gheorghe Asachi” din Iași, România"], ["Prof. dr. Nume Prenume", "Universitate parteneră, Țară"], ["Prof. dr. Nume Prenume", "Universitate parteneră, Țară"], ["Dr. ing. Nume Prenume", "Partener industrial, România"]]],
      ["Secretariat de redacție", [["Ș.l. dr. ing. Nume Prenume", "Universitatea „Ovidius” din Constanța, România"]]]
    ],
    indexare: [["Crossref (DOI)", "activ"], ["Google Scholar", "activ"], ["DOAJ", "în evaluare"], ["EBSCO", "planificat"], ["CEEOL", "planificat"], ["Scopus", "obiectiv pe termen lung"]],
    parteneri: ["Companie de componente auto", "Operator portuar", "Producător de energie regenerabilă", "Firmă de service și mentenanță industrială", "Companie de automatizări", "Constructor de echipamente industriale", "Centru de cercetare regional", "Asociație de profil"],
    numere: [["Nr. 1 · Iarna 2026", "Mobilitatea de mâine", 7], ["Nr. 0 · Vara 2026", "Număr pilot: fabrica digitală", 9], ["Nr. 2 · Vara 2027", "Energie și tranziție (în pregătire)", 1], ["Nr. 3 · Iarna 2027", "Materiale noi (în pregătire)", 8]],
    descriereProgram: {
      "Autovehicule rutiere": "Proiectarea, fabricarea, exploatarea și întreținerea autovehiculelor, inclusiv a celor hibride și electrice.",
      "Energetică industrială": "Producerea, transportul și utilizarea eficientă a energiei în industrie, inclusiv surse regenerabile.",
      "Informatică aplicată în inginerie industrială (IAII)": "Programare, baze de date și sisteme informatice pentru producție, automatizare și industria digitală.",
      "Inginerie economică în domeniul mecanic": "Combinație de inginerie mecanică, economie și management pentru conducerea proceselor industriale.",
      "Inginerie mecanică (DUAL)": "Program dual, cu pregătire practică la companii partenere pe toată durata studiilor.",
      "Ingineria vehiculelor moderne": "Master dedicat sistemelor avansate ale vehiculelor: propulsie alternativă, electronică, siguranță.",
      "Ingineria și managementul sistemelor de producție": "Master pentru proiectarea, organizarea și optimizarea sistemelor de producție."
    }
  };
})();
