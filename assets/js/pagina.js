/* Randarea paginilor interne (comună celor 4 formate). Pagina citește ?p=slug&id=N din adresă. */
(function () {
  var P1 = "Proiectul a pornit acum doi ani, dintr-o colaborare între facultate și un partener industrial din regiune. Astăzi implică trei cadre didactice, doi doctoranzi și peste zece studenți.";
  var P2 = "Al doilea paragraf oferă detalii: date, cifre, declarații și contextul în care se desfășoară proiectul sau evenimentul descris.";
  var P3 = "Studenții interesați se pot alătura echipei încă din anul al doilea. Detalii despre program și laboratoare găsiți pe paginile facultății.";
  var A = window.APP, R = A.R, e = A.esc, L = A.link, PG = window.PAGINI, G = window.GRUPURI, PD = window.PAGINI_DATE;
  var q = new URLSearchParams(location.search);
  var slug = q.get("p") || "despre";
  var id = parseInt(q.get("id") || "0", 10) || 0;
  var pg = PG[slug] || PG.despre;

  function card(a, i) {
    return '<a class="pg-card" href="' + L("articol", { id: i }) + '">' + A.imagine(a.tema, a.titlu, a.foto) +
      '<span class="pg-rubrica">' + e(A.rubrica(a.rubrica)) + "</span><h3>" + e(a.titlu) + "</h3><p>" + e(a.sapou) + '</p><span class="pg-meta">' + e(a.autor) + " · " + e(a.data) + "</span></a>";
  }
  function sectiuni(s) {
    return (s || []).map(function (x) {
      var h = x.h ? "<h2>" + e(x.h) + "</h2>" : "";
      (x.p || []).forEach(function (t) { h += "<p>" + e(t) + "</p>"; });
      if (x.lista) h += "<ul>" + x.lista.map(function (t) { return "<li>" + e(t) + "</li>"; }).join("") + "</ul>";
      if (x.tabel) h += '<table class="pg-tabel">' + x.tabel.map(function (r) { return "<tr><th>" + e(r[0]) + "</th><td>" + e(r[1]) + "</td></tr>"; }).join("") + "</table>";
      if (x.persoane) h += '<ul class="pg-persoane">' + x.persoane.map(function (p) { return "<li><b>" + e(p[1]) + "</b><span>" + e(p[0]) + "</span></li>"; }).join("") + "</ul>";
      if (x.galerie) h += '<div class="pg-galerie">' + x.galerie.map(function (f) { return '<figure class="pg-figura">' + A.imagine(1, "", f) + "<figcaption>" + e(window.FOTO[f] || "") + "</figcaption></figure>"; }).join("") + "</div>";
      if (x.articole) h += '<div class="pg-carduri">' + x.articole.map(function (i) { return card(R.magazin[i], i); }).join("") + "</div>";
      return h;
    }).join("");
  }
  function formular(f) {
    var h = '<form class="pg-form" onsubmit="this.querySelector(\'.pg-ok\').hidden=false;return false">';
    (f.campuri || []).forEach(function (c) { h += "<label>" + e(c) + '<input type="text"></label>'; });
    (f.optiuni || []).forEach(function (o) { h += '<label class="pg-bifa"><input type="checkbox" checked> ' + e(o) + "</label>"; });
    if (f.text) h += "<label>" + e(f.text) + '<textarea rows="5"></textarea></label>';
    if (f.fisier) h += "<label>" + e(f.fisier) + '<input type="file"></label>';
    h += '<button type="submit">Trimite</button><p class="pg-ok" hidden>Mulțumim! Mesajul a fost înregistrat.</p></form>';
    return h;
  }

  var corp = "", titlu = pg.titlu, sapou = pg.sapou || "", imagineSus = pg.tema ? A.imagine(pg.tema, titlu, pg.foto) : "";

  switch (pg.tip) {
    case "rubrica":
      var lista = R.magazin.map(function (a, i) { return [a, i]; }).filter(function (x) { return x[0].rubrica === pg.rubrica; });
      var restul = R.magazin.map(function (a, i) { return [a, i]; }).filter(function (x) { return x[0].rubrica !== pg.rubrica; }).slice(0, 6 - Math.min(lista.length, 6));
      corp = '<div class="pg-carduri">' + lista.concat(restul).map(function (x) { return card(x[0], x[1]); }).join("") + "</div>" +
        '<nav class="pg-paginare"><span class="activ">1</span><a href="#">2</a><a href="#">3</a><a href="#">Următoarea &rarr;</a></nav>';
      break;
    case "explicate":
      corp = '<div class="pg-carduri">' + R.cercetareExplicata.map(function (a, i) {
        return '<a class="pg-card" href="' + L("explicat", { id: i }) + '">' + A.imagine(a.tema, a.titlu, a.foto) + '<span class="pg-rubrica">Cercetare explicată</span><h3>' + e(a.titlu) + "</h3><p>" + e(a.sapou) + '</p><span class="pg-meta">' + e(a.autor) + "</span></a>";
      }).join("") + "</div>";
      break;
    case "oameni":
      corp = '<div class="pg-carduri">' + [["Cercetătoare, laboratorul de materiale", 5, "portret-cercetatoare"], ["Profesor, Autovehicule rutiere", 7, "portret-profesor"], ["Student, anul IV, IAII", 9, "portret-student"], ["Absolvent, inginer în industrie", 1, "portret-absolvent"], ["Doctorandă, Energetică industrială", 8, "portret-doctoranda"], ["Partener industrial, sectorul portuar", 2, "portret-partener"]].map(function (o, i) {
        return '<a class="pg-card" href="' + L("articol", { id: (i * 2) % R.magazin.length }) + '">' + A.imagine(o[1], "Portret", o[2]) + '<span class="pg-rubrica">Portret</span><h3>Interviu: „Ce m-a adus în inginerie”</h3><p>' + e(o[0]) + "</p></a>";
      }).join("") + "</div>";
      break;
    case "articol":
    case "explicat":
      var a = pg.tip === "articol" ? R.magazin[id % R.magazin.length] : R.cercetareExplicata[id % R.cercetareExplicata.length];
      var rub = pg.tip === "articol" ? A.rubrica(a.rubrica) : "Cercetare explicată";
      titlu = a.titlu; sapou = a.sapou; imagineSus = "";
      corp = '<div class="pg-meta pg-meta-sus"><span class="pg-rubrica">' + e(rub) + "</span> · " + e(a.autor) + (a.data ? " · " + e(a.data) : "") + (a.minute ? " · " + a.minute + " min de citit" : "") + "</div>" +
        '<figure class="pg-figura">' + A.imagine(a.tema, a.titlu, a.foto) + "<figcaption>" + e((a.foto && window.FOTO[a.foto]) || "") + (a.foto ? " Imagine ilustrativă generată cu IA." : "") + "</figcaption></figure>" +
        "<p>" + e(P1) + "</p><p>" + e(P2) + "</p><h2>Subtitlu intermediar</h2><p>" + e(P3) + '</p><blockquote class="pg-citat">„Cel mai mult contează ce învață studenții lucrând direct pe echipamente reale.”</blockquote><p>' + e(P2) + "</p><h2>Ce urmează</h2><p>" + e(P1) + "</p>" +
        '<div class="pg-autor"><div class="pg-avatar">NP</div><div><b>' + e(a.autor) + "</b><br>Scurtă prezentare a autorului: rol, departament, domenii de interes.</div></div>" +
        '<div class="pg-distribuie">Distribuie: <a href="#">E-mail</a> · <a href="#">LinkedIn</a> · <a href="#">Facebook</a> · <a href="#">Copiază linkul</a></div>' +
        '<h2>Citește și</h2><div class="pg-carduri">' + [1, 2, 3].map(function (k) { var j = (id + k) % R.magazin.length; return card(R.magazin[j], j); }).join("") + "</div>";
      break;
    case "stiintific":
      var s = R.cercetare[id % R.cercetare.length];
      titlu = s.titlu; sapou = "";
      corp = '<div class="pg-meta pg-meta-sus"><span class="pg-rubrica">' + e(s.tip) + "</span> · Vol. 1, Nr. 1 (2026) · pp. " + e(s.pagini) + "</div>" +
        '<p class="pg-autori"><b>' + e(s.autori) + "</b><br><i>" + e(s.afiliere) + "</i></p>" +
        '<table class="pg-tabel"><tr><th>DOI</th><td>https://doi.org/' + e(s.doi) + "</td></tr><tr><th>Primit</th><td>12.08.2026</td></tr><tr><th>Revizuit</th><td>20.10.2026</td></tr><tr><th>Acceptat</th><td>05.11.2026</td></tr><tr><th>Publicat</th><td>15.12.2026</td></tr><tr><th>Licență</th><td>CC BY 4.0</td></tr></table>" +
        '<p class="pg-butoane"><a class="pg-buton plin" href="#">Descarcă PDF</a><a class="pg-buton" href="#">Citare (BibTeX / RIS)</a><a class="pg-buton" href="#">Statistici</a></p>' +
        (s.foto ? '<figure class="pg-figura">' + A.imagine(1, s.titlu, s.foto) + "<figcaption><b>Fig. 1.</b> " + e(window.FOTO[s.foto] || "") + " Imagine ilustrativă generată cu IA.</figcaption></figure>" : "") + '<h2>Abstract</h2><p lang="en">' + e(s.rezumat) + "</p><p><b>Keywords:</b> " + s.cuvinte.map(e).join("; ") + "</p>" +
        ["1. Introduction", "2. Materials and Methods", "3. Results", "4. Discussion", "5. Conclusions"].map(function (h) { return "<h2 lang=\"en\">" + h + '</h2><p lang="en">The full text of this section is available in the PDF version of the article.</p>'; }).join("") +
        '<h2 lang="en">References</h2><ol class="pg-ref" lang="en"><li>A. Author, B. Author, "Title of the cited article," <i>Journal Name</i>, vol. 1, no. 1, pp. 1–10, 2024.</li><li>C. Author, <i>Title of the Book</i>, 2nd ed. City: Publisher, 2022.</li><li>D. Author et al., "Conference paper title," in <i>Proc. Conference</i>, 2023, pp. 100–105.</li></ol>' +
        '<h2>Alte articole din acest număr</h2><ul>' + R.cercetare.map(function (x, i) { return i === id ? "" : '<li><a href="' + L("articol-stiintific", { id: i }) + '">' + e(x.titlu) + "</a></li>"; }).join("") + "</ul>";
      break;
    case "cuprins":
      corp = '<div class="pg-editorial"><b>Editorial.</b> Redactorul-șef prezintă primul număr al jurnalului și domeniile acoperite. <a href="' + L("despre-jurnal") + '">Citește editorialul (PDF)</a></div>';
      var grupe = { "Research Article": "Articole de cercetare", "Review": "Articole de sinteză", "Short Communication": "Comunicări scurte" };
      Object.keys(grupe).forEach(function (t) {
        corp += "<h2>" + grupe[t] + "</h2>";
        R.cercetare.forEach(function (x, i) {
          if (x.tip !== t) return;
          corp += '<div class="pg-art"><a href="' + L("articol-stiintific", { id: i }) + '"><b>' + e(x.titlu) + "</b></a><br>" + e(x.autori) + '<br><span class="pg-meta">pp. ' + e(x.pagini) + " · DOI " + e(x.doi) + "</span></div>";
        });
      });
      break;
    case "arhiva-jurnal":
      corp = '<table class="pg-tabel pg-tabel-lat"><tr><th>Volum</th><th>Număr</th><th>Data publicării</th><th>Articole</th></tr>' +
        '<tr><td>Vol. 1</td><td><a href="' + L("numar-curent") + '">Nr. 1 (2026)</a></td><td>15.12.2026</td><td>' + R.cercetare.length + '</td></tr><tr><td>Vol. 2</td><td>Nr. 1 (2027), în pregătire</td><td>06.2027</td><td>–</td></tr></table>';
      break;
    case "arhiva":
      corp = '<div class="pg-carduri">' + PD.numere.map(function (n) { return '<a class="pg-card" href="' + L("dosar") + '">' + A.imagine(n[2], n[1]) + '<span class="pg-rubrica">' + e(n[0]) + "</span><h3>" + e(n[1]) + "</h3><p>Număr tematic, PDF și online.</p></a>"; }).join("") + "</div>";
      break;
    case "colegiu":
      corp = PD.colegiu.map(function (g) { return "<h2>" + e(g[0]) + '</h2><ul class="pg-persoane">' + g[1].map(function (p) { return "<li><b>" + e(p[0]) + "</b><span>" + e(p[1]) + "</span></li>"; }).join("") + "</ul>"; }).join("");
      break;
    case "echipa":
      corp = '<ul class="pg-persoane">' + pg.echipa.map(function (p) { return "<li><b>" + e(p[1]) + "</b><span>" + e(p[0]) + "</span></li>"; }).join("") + "</ul><h2>Colaboratori</h2><p>Studenții interesați să scrie pentru revistă se pot alătura redacției. <a href=\"" + L("trimite-subiect") + "\">Scrieți-ne.</a></p>";
      break;
    case "indexare":
      corp = '<table class="pg-tabel pg-tabel-lat"><tr><th>Bază de date</th><th>Stare</th></tr>' + PD.indexare.map(function (r) { return "<tr><td>" + e(r[0]) + "</td><td>" + e(r[1]) + "</td></tr>"; }).join("") + "</table><p>" + e(P3) + "</p>";
      break;
    case "parteneri":
      corp = '<h2>Învățământ dual și practică</h2><div class="pg-carduri">' + [["dual-cne-simulator", "CNE Cernavodă", "Pregătire pe simulator"], ["dual-oil-terminal", "Oil Terminal", "Măsurări și instrumentație"], ["dual-cfr-cale", "CFR", "Geometria căii ferate"], ["dual-dpworld-terminal", "DP World (CSCT)", "Operațiuni la terminalul de containere"], ["atelier-feroviar", "Atelier feroviar", "Mecanică aplicată"]].map(function (d) {
        return '<div class="pg-card">' + A.imagine(1, d[1], d[0]) + '<span class="pg-rubrica">' + e(d[1]) + "</span><h3>" + e(d[2]) + "</h3><p>" + e(window.FOTO[d[0]] || "") + "</p></div>";
      }).join("") + "</div><h2>Alți parteneri</h2>" + '<ul class="pg-logo">' + PD.parteneri.map(function (p) { return "<li><span>Logo</span>" + e(p) + "</li>"; }).join("") + "</ul><h2>Devino partener</h2><p>" + e(P1) + ' <a href="' + L("contact") + '">Contactați redacția.</a></p>';
      break;
    case "specializari":
      corp = [["Licență (4 ani, 240 de credite)", R.specializari.licenta], ["Master (2 ani, 120 de credite)", R.specializari.master]].map(function (g) {
        return "<h2>" + g[0] + '</h2><div class="pg-programe">' + g[1].map(function (s, i) {
          return '<div class="pg-program">' + A.imagine([7, 1, 9, 2, 3, 7, 9][i % 7], s.nume, s.foto) + "<div><h3>" + e(s.nume) + '</h3><span class="pg-meta">Domeniul: ' + e(s.domeniu) + "</span><p>" + e(PD.descriereProgram[s.nume] || "") + "</p><ul><li>Ce înveți: discipline fundamentale și de specialitate, laboratoare, proiecte.</li><li>Practică: la companii partenere din Dobrogea.</li><li>Cariere: inginer de proiectare, exploatare, mentenanță, management.</li></ul></div></div>";
        }).join("") + "</div>";
      }).join("") + '<p class="pg-sursa">Informații complete despre admitere pe site-ul facultății.</p>';
      break;
    case "pasi":
      corp = '<ol class="pg-pasi">' + pg.pasi.map(function (p) { return "<li><b>" + e(p[0]) + "</b><p>" + e(p[1]) + "</p></li>"; }).join("") + "</ol>";
      break;
    case "descarcari":
      corp = '<ul class="pg-fisiere">' + pg.fisiere.map(function (f) { return '<li><span class="pg-ico">&#8681;</span><a href="#">' + e(f[0]) + "</a><span class=\"pg-meta\">" + e(f[1]) + "</span></li>"; }).join("") + "</ul><p>" + e(P3) + "</p>";
      break;
    case "formular":
      corp = formular(pg);
      break;
    case "contact":
      corp = '<div class="pg-contact"><div><h2>Redacția</h2><p>Facultatea de Inginerie Mecanică, Industrială și Maritimă<br>Universitatea „Ovidius” din Constanța<br>Adresa redacției, Constanța</p><p>E-mail: revista@exemplu.ro<br>Telefon: +40 2XX XXX XXX</p><p>Program: luni–vineri, 9:00–15:00</p></div><div><h2>Scrieți-ne</h2>' + formular({ campuri: ["Nume și prenume", "Adresă de e-mail", "Subiect"], text: "Mesaj" }) + '</div></div><div class="pg-harta">Campusul universitar, Constanța</div>';
      break;
    case "asociatii":
      corp = A.asociatii();
      break;
    default:
      corp = sectiuni(pg.sectiuni);
  }

  /* meniul lateral: paginile din același grup */
  var grup = G[pg.grup] || G.redactie;
  var lateral = "<h4>" + e(grup.titlu) + "</h4><ul>" + grup.pagini.map(function (s) {
    var x = PG[s]; if (!x) return "";
    return '<li><a href="' + L(s) + '"' + (s === slug ? ' class="activ" aria-current="page"' : "") + ">" + e(x.titlu.replace(/^Număr curent:.*/, "Număr curent")) + "</a></li>";
  }).join("") + "</ul>";
  var alt = pg.grup === "magazin" || pg.grup === "redactie" || pg.grup === "asociatii" ? G.jurnal : G.magazin;
  lateral += "<h4>" + e(alt.titlu) + "</h4><ul>" + alt.pagini.slice(0, 5).map(function (s) { return '<li><a href="' + L(s) + '">' + e(PG[s].titlu.replace(/^Număr curent:.*/, "Număr curent")) + "</a></li>"; }).join("") + "</ul>";

  var fir = '<a href="' + L("") + '">Acasă</a> / ' + e(grup.titlu) + " / " + e(titlu.length > 60 ? titlu.slice(0, 57) + "…" : titlu);

  document.getElementById("pagina").innerHTML =
    '<div class="pg-fir">' + fir + "</div>" +
    '<div class="pg-grila"><article class="pg-corp"><h1>' + e(titlu) + "</h1>" + (sapou ? '<p class="pg-sapou">' + e(sapou) + "</p>" : "") +
    (imagineSus ? '<figure class="pg-figura">' + imagineSus + "</figure>" : "") + corp +
    '<p class="pg-actualizat">Ultima actualizare: 27.11.2026</p></article><aside class="pg-lateral">' + lateral + "</aside></div>";
  document.title = titlu;
})();
