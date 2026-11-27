/* Logica comună: denumirea aleasă, bara de prototip, imagini generice. */
(function () {
  var R = window.REVISTA;
  var CHEIE = "fimim-revista-denumire";

  function citesteDenumire() {
    var p = new URLSearchParams(location.search).get("n");
    if (p && R.denumiri[p]) { salveaza(p); return p; }
    try {
      var s = localStorage.getItem(CHEIE);
      if (s && R.denumiri[s]) return s;
    } catch (e) {}
    return "acta";
  }
  function salveaza(id) {
    try { localStorage.setItem(CHEIE, id); } catch (e) {}
  }

  R.magazin.forEach(function (a, i) { a.idx = i; a.tipLink = "articol"; });
  R.cercetareExplicata.forEach(function (a, i) { a.idx = i; a.tipLink = "explicat"; });
  R.cercetare.forEach(function (a, i) { a.idx = i; a.tipLink = "articol-stiintific"; });
  var idCurent = citesteDenumire();
  var formatCurent = null;
  var FISIER = { campus: "format-1-campus.html", magazin: "format-2-magazin.html", academic: "format-3-academic.html", tipografic: "format-4-tipografic.html" };
  /* Legătură către o pagină internă a formatului curent (pagina-<format>.html?p=...) */
  function link(p, par) {
    if (!formatCurent) return "#";
    if (!p) return FISIER[formatCurent] + "?n=" + idCurent;
    var u = "pagina-" + formatCurent + ".html?p=" + encodeURIComponent(p) + "&n=" + idCurent;
    if (par) Object.keys(par).forEach(function (k) { u += "&" + k + "=" + encodeURIComponent(par[k]); });
    return u;
  }
  var D = R.denumiri[idCurent];

  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* Imagine generică (SVG) pentru fiecare temă: valuri, roți dințate, grilă tehnică etc. */
  function imagine(tema, eticheta) {
    var c1 = D.culoare, c2 = D.accent;
    var forme = {
      1: '<circle cx="300" cy="200" r="120" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2"/><circle cx="300" cy="200" r="70" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/><line x1="0" y1="200" x2="600" y2="200" stroke="#fff" stroke-opacity=".2"/>',
      2: '<path d="M0 300 L80 260 L80 180 L140 180 L140 230 L220 230 L220 140 L260 140 L260 230 L340 230 L340 200 L420 200 L420 120 L470 120 L470 230 L600 230 L600 400 L0 400Z" fill="#000" fill-opacity=".25"/><line x1="440" y1="120" x2="520" y2="60" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>',
      3: engrenaj(300, 200, 90, 12) + engrenaj(440, 120, 50, 8),
      4: '<rect x="120" y="80" width="360" height="240" rx="6" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="2"/><rect x="150" y="120" width="140" height="10" fill="#fff" fill-opacity=".5"/><rect x="150" y="145" width="220" height="6" fill="#fff" fill-opacity=".3"/><rect x="150" y="160" width="200" height="6" fill="#fff" fill-opacity=".3"/>',
      5: '<circle cx="220" cy="190" r="45" fill="#fff" fill-opacity=".25"/><circle cx="380" cy="190" r="45" fill="#fff" fill-opacity=".25"/><path d="M145 400 L145 330 A75 75 0 0 1 295 330 L295 400Z M305 400 L305 330 A75 75 0 0 1 455 330 L455 400Z" fill="#fff" fill-opacity=".25"/>',
      6: '<text x="300" y="250" text-anchor="middle" font-family="Georgia, serif" font-size="200" fill="#fff" fill-opacity=".25">&#8222;</text>',
      7: '<line x1="0" y1="300" x2="600" y2="300" stroke="#fff" stroke-opacity=".3" stroke-width="2"/><path d="M140 280 L150 235 Q160 215 185 212 L250 208 L300 170 Q315 160 335 160 L400 160 Q420 160 432 175 L465 210 L470 212 Q480 214 480 230 L480 280 Z" fill="#fff" fill-opacity=".35"/><circle cx="205" cy="285" r="28" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="6"/><circle cx="415" cy="285" r="28" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="6"/>',
      8: hexagoane(),
      9: '<path d="M200 330 L200 260 L280 200 L360 230 L420 170" stroke="#fff" stroke-opacity=".55" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="280" cy="200" r="14" fill="#fff" fill-opacity=".6"/><circle cx="360" cy="230" r="14" fill="#fff" fill-opacity=".6"/><rect x="170" y="330" width="60" height="20" fill="#fff" fill-opacity=".4"/>'
    };
    var grid = '<pattern id="g' + tema + '" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0 L0 0 0 30" fill="none" stroke="#fff" stroke-opacity=".07"/></pattern>';
    var unghi = (tema * 37) % 360;
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + esc(eticheta || "Imagine generică") + '">' +
      '<defs><linearGradient id="l' + tema + '" gradientTransform="rotate(' + unghi + ' .5 .5)"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient>' + grid + '</defs>' +
      '<rect width="600" height="400" fill="url(#l' + tema + ')"/><rect width="600" height="400" fill="url(#g' + tema + ')"/>' +
      "</svg>";
    var model = MODELE[tema] || MODELE[1];
    return '<div class="imagine">' + svg + '<img class="macheta" src="assets/img/3d/' + model + '.webp" alt="' + esc(eticheta || "Machetă 3D") + '"></div>';
  }
  /* Machete 3D transparente (randate cu three.js, vezi instrumente/randare-3d) */
  var MODELE = { 1: "turbine", 2: "crane", 3: "gears", 4: "engine", 5: "caliper", 6: "bulb", 7: "car", 8: "lattice", 9: "robot" };

  function engrenaj(cx, cy, r, dinti) {
    var d = "";
    for (var i = 0; i < dinti * 2; i++) {
      var a = (Math.PI * i) / dinti;
      var rr = i % 2 ? r : r + r * 0.18;
      d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1) + " ";
    }
    return '<path d="' + d + 'Z" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/><circle cx="' + cx + '" cy="' + cy + '" r="' + r * 0.35 + '" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>';
  }
  function valuri() {
    var s = "";
    for (var k = 0; k < 4; k++) {
      var y = 290 + k * 25;
      s += '<path d="M0 ' + y + " Q75 " + (y - 18) + " 150 " + y + " T300 " + y + " T450 " + y + " T600 " + y + '" stroke="#fff" stroke-opacity="' + (0.45 - k * 0.08) + '" stroke-width="2" fill="none"/>';
    }
    return s;
  }
  function hexagoane() {
    var s = "";
    for (var row = 0; row < 6; row++) for (var col = 0; col < 9; col++) {
      var x = col * 70 + (row % 2) * 35, y = row * 60 + 20, r = 30;
      var p = "";
      for (var i = 0; i < 6; i++) {
        var a = (Math.PI / 3) * i + Math.PI / 6;
        p += (x + r * Math.cos(a)).toFixed(1) + "," + (y + r * Math.sin(a)).toFixed(1) + " ";
      }
      s += '<polygon points="' + p + '" fill="none" stroke="#fff" stroke-opacity="' + (0.1 + ((row + col) % 4) * 0.1) + '" stroke-width="2"/>';
    }
    return s;
  }

  /* Bara de prototip (sus): schimbare denumire și format */
  function bara(fmt) {
    formatCurent = fmt.replace(/^pagina-/, "");
    var el = document.createElement("div");
    el.className = "bara-prototip";
    var optiuni = Object.keys(R.denumiri).map(function (k) {
      return '<option value="' + k + '"' + (k === idCurent ? " selected" : "") + ">" + esc(R.denumiri[k].titlu) + "</option>";
    }).join("");
    var taburi = R.formate.map(function (f) {
      return '<a href="' + f.fisier + "?n=" + idCurent + '"' + (f.id === formatCurent ? ' class="activ" aria-current="page"' : "") +
        '><span class="nr">' + f.nr + "</span> " + esc(f.nume) + "</a>";
    }).join("");
    el.innerHTML =
      '<div class="bp-interior">' +
      '<a class="bp-acasa" href="index.html?n=' + idCurent + '">&larr; Alegere</a>' +
      '<label class="bp-nume"><span>Denumire</span><select aria-label="Denumirea revistei">' + optiuni + "</select></label>" +
      '<nav class="bp-formate" aria-label="Formate">' + taburi + "</nav>" +
      "</div>";
    el.querySelector("select").addEventListener("change", function (e) {
      salveaza(e.target.value);
      location.search = "?n=" + e.target.value;
    });
    document.body.insertBefore(el, document.body.firstChild);
  }

  /* Completează elementele cu atribute data-* */
  function completeaza() {
    var root = document.documentElement;
    root.style.setProperty("--brand", D.culoare);
    root.style.setProperty("--accent", D.accent);
    document.querySelectorAll("[data-titlu]").forEach(function (e) { e.textContent = D.titlu; });
    document.querySelectorAll("[data-scurt]").forEach(function (e) { e.textContent = D.scurt; });
    document.querySelectorAll("[data-motto]").forEach(function (e) { e.textContent = D.motto; });
    document.querySelectorAll("[data-facultate]").forEach(function (e) { e.textContent = R.facultate; });
    document.querySelectorAll("[data-universitate]").forEach(function (e) { e.textContent = R.universitate; });
    document.querySelectorAll("[data-an]").forEach(function (e) { e.textContent = new Date().getFullYear(); });
    document.querySelectorAll("a[data-p]").forEach(function (a) {
      var par = a.dataset.id != null ? { id: a.dataset.id } : null;
      a.href = link(a.dataset.p, par);
    });
    document.querySelectorAll("a[data-acasa]").forEach(function (a) { a.href = link(""); });
    document.querySelectorAll("a[data-format]").forEach(function (a) { a.href = FISIER[a.dataset.format] + "?n=" + idCurent; });
    var pref = document.title;
    document.title = D.titlu + (pref ? " · " + pref : "");
  }

  function specializari() {
    function bloc(titlu, lista) {
      return '<div class="spec-bloc"><h3 class="spec-titlu">' + titlu + '</h3><ul class="spec-lista">' + lista.map(function (s) {
        return '<li><a href="' + link("specializari") + '"><strong>' + esc(s.nume) + '</strong><span>' + esc(s.domeniu) + "</span></a></li>";
      }).join("") + "</ul></div>";
    }
    return '<div class="spec-grila">' + bloc("Licență", R.specializari.licenta) + bloc("Master", R.specializari.master) + "</div>";
  }

  window.APP = {
    specializari: specializari,
    link: link,
    href: function (a) { return a && a.tipLink ? link(a.tipLink, { id: a.idx }) : link("stiri"); },
    R: R,
    D: D,
    id: idCurent,
    esc: esc,
    imagine: imagine,
    bara: bara,
    completeaza: completeaza,
    salveaza: salveaza,
    rubrica: function (k) { return R.rubrici[k] || k; }
  };
})();
