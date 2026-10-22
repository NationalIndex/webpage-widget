/* Index 2.0 dashboard widget. Usage: <div id="idx" data-code="EN.3"></div><script src=".../widget.js" defer></script> */
(function () {
  var base = (document.currentScript || {src: ''}).src.replace(/[^\/]*$/, '');
  var CSS = "<style>\n.idxd{--c:#1F5A96;--tint:#E6EEF7;--ink:#1B2833;--ink-3:#7D8A94;--line:#E0E5E2;--line-2:#EDF0EE;font-family:Inter,system-ui,-apple-system,\"Segoe UI\",Roboto,Arial,sans-serif;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 1px 2px rgba(20,40,60,.06),0 4px 16px rgba(20,40,60,.06)}\n.idxd *{box-sizing:border-box}\n.idxd-h{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;border-bottom:1px solid var(--line-2)}\n.idxd-l{display:flex;align-items:center;gap:10px;font-size:13px;font-weight:600;min-width:0}\n.idxd-live{width:8px;height:8px;border-radius:50%;background:var(--c);flex:none}\n.idxd-pg{font-weight:500;color:var(--ink-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.idxd-r{display:flex;align-items:center;gap:16px;flex:none}\n.idxd-share{position:relative}\n.idxd-share>button{font-size:12.5px;font-weight:600;font-family:inherit;color:var(--c);background:none;border:1px solid var(--line);border-radius:999px;padding:5px 12px;cursor:pointer}\n.idxd-share>button:hover{background:var(--tint)}\n.idxd-menu{position:absolute;right:0;top:calc(100% + 6px);z-index:40;min-width:150px;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 4px 16px rgba(20,40,60,.12);padding:6px;display:flex;flex-direction:column}\n.idxd-menu[hidden]{display:none}\n.idxd-menu button,.idxd-menu a{font-size:13px;font-family:inherit;color:var(--ink);text-align:left;background:none;border:none;border-radius:6px;padding:7px 10px;cursor:pointer;text-decoration:none}\n.idxd-menu button:hover,.idxd-menu a:hover{background:var(--line-2)}\n.idxd-open{font-size:12.5px;font-weight:600;color:var(--c);text-decoration:none;white-space:nowrap}\n.idxd-open:hover{text-decoration:underline}\n.idxd-mp{padding:12px 16px;border-bottom:1px solid var(--line-2);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr) auto;gap:12px;align-items:end}\n.idxd-f label{display:block;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--ink-3);margin-bottom:5px}\n.idxd-f select{width:100%;appearance:none;-webkit-appearance:none;border:1px solid var(--line);border-left:5px solid var(--c);border-radius:8px;padding:10px 34px 10px 12px;font-size:14px;font-weight:600;font-family:inherit;color:var(--ink);background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%2355636E' stroke-width='2'/%3E%3C/svg%3E\") no-repeat right 12px center;cursor:pointer;text-overflow:ellipsis;margin:0;height:auto}\n.idxd-f select:hover,.idxd-f select:focus{border-color:var(--c);outline:none;background-color:var(--tint)}\n@keyframes idxflash{0%{box-shadow:0 0 0 0 var(--c);background-color:var(--tint)}40%{box-shadow:0 0 0 6px rgba(0,0,0,0);background-color:var(--tint)}100%{box-shadow:0 0 0 0 rgba(0,0,0,0)}}\n.idxd-f select.flash{animation:idxflash 1s ease-out 3}\n@media (prefers-reduced-motion:reduce){.idxd-f select.flash{animation:none;background-color:var(--tint)}}\n.idxd-dl{border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--ink);font-size:13px;font-weight:600;font-family:inherit;padding:10px 14px;cursor:pointer;white-space:nowrap}\n.idxd-dl:hover{background:var(--tint);border-color:var(--c)}\n.idxd-dl[hidden]{display:none}\n.idxd-frame{position:relative;width:100%;padding-top:56.25%;background:#EEF1EF;overflow:hidden}\n.idxd-frame iframe{position:absolute;top:0;left:0;width:100%;height:calc(100% + 26px);border:0}\n.idxd-load{position:absolute;inset:0;display:grid;place-items:center;background:#F3F5F4;transition:opacity .3s;z-index:2;color:var(--ink-3);font-size:13px}\n.idxd-load.done{opacity:0;pointer-events:none}\n.idxd-tip{padding:10px 16px;font-size:12.5px;color:var(--ink-3);border-top:1px solid var(--line-2)}\n@media (max-width:640px){.idxd-mp{grid-template-columns:1fr}.idxd-h{flex-wrap:wrap}}\n</style>", HTML = "<div class=\"idxd-h\">\n  <div class=\"idxd-l\"><span class=\"idxd-live\"></span><span>Interactive dashboard</span><span class=\"idxd-pg\"></span></div>\n  <div class=\"idxd-r\">\n    <div class=\"idxd-share\"><button type=\"button\" class=\"idxd-sb\" aria-haspopup=\"true\" aria-expanded=\"false\">&#10150; Share</button>\n      <div class=\"idxd-menu\" hidden>\n        <button type=\"button\" data-s=\"copy\">Copy link</button>\n        <a data-s=\"mail\" href=\"#\" target=\"_blank\" rel=\"noopener\">Email</a>\n        <a data-s=\"li\" href=\"#\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>\n        <a data-s=\"x\" href=\"#\" target=\"_blank\" rel=\"noopener\">X</a>\n      </div></div>\n    <a class=\"idxd-open\" href=\"#\" target=\"_blank\" rel=\"noopener\">Open full screen &#8599;</a>\n  </div>\n</div>\n<div class=\"idxd-mp\">\n  <div class=\"idxd-f\"><label>Sub-indicator</label><select class=\"idxd-sub\"></select></div>\n  <div class=\"idxd-f\"><label>Metric</label><select class=\"idxd-met\"></select></div>\n  <button type=\"button\" class=\"idxd-dl\" hidden>&#8681; Download data (CSV)</button>\n</div>\n<div class=\"idxd-frame\"><div class=\"idxd-load\">Loading dashboard&hellip;</div>\n  <iframe title=\"Agri-Food Indicators dashboard\" allowfullscreen loading=\"eager\"></iframe></div>\n<div class=\"idxd-tip\">Pick a sub-indicator and metric in the menus above to change the chart, and use the series list in the dashboard to show or hide lines.</div>";
  function run(root, D, PBI, ROWS) {
var code = root.dataset.code, rec = D[code]; if (!rec) { root.textContent = 'Unknown indicator code: ' + code; return; }
  if (root.dataset.color) root.style.setProperty('--c', root.dataset.color);
  if (root.dataset.tint) root.style.setProperty('--tint', root.dataset.tint);
  var $ = function (s) { return root.querySelector(s); };
  var G = rec[1], title = rec[0];
  var sub = $('.idxd-sub'), met = $('.idxd-met'), fr = $('iframe'), load = $('.idxd-load');
  var num = function (c) { return c.split('.').pop(); };
  var cur = G[0][2][0], page = '';
  sub.innerHTML = G.map(function (g, k) { return '<option value="' + k + '">' + num(g[0]) + '. ' + g[1] + '</option>'; }).join('');
  function fill() { met.innerHTML = G[sub.value][2].map(function (m, k) { return '<option value="' + k + '">' + num(m[1]) + '. ' + m[2] + '</option>'; }).join(''); }
  function flash() { [sub, met].forEach(function (e) { e.classList.remove('flash'); void e.offsetWidth; e.classList.add('flash'); }); }
  function show(m, quiet) {
    cur = m;
    var url = PBI + '&pageName=' + encodeURIComponent(m[0]);
    $('.idxd-pg').textContent = '· ' + code + ' ' + title + ' · ' + m[1];
    $('.idxd-open').href = url;
    if (page !== m[0]) { page = m[0]; load.classList.remove('done'); fr.src = url; }
    try { var u = new URL(location.href); u.searchParams.set('metric', m[0]); history.replaceState(null, '', u); } catch (e) {}
    if (!quiet) flash();
  }
  var want = ''; try { want = new URL(location.href).searchParams.get('metric') || ''; } catch (e) {}
  var startMet = 0;
  G.forEach(function (g, k) { g[2].forEach(function (m, n) { if (m[0] === want) { cur = m; sub.value = k; startMet = n; } }); });
  fill(); if (startMet) met.value = startMet;
  sub.onchange = function () { fill(); show(G[sub.value][2][0]); };
  met.onchange = function () { show(G[sub.value][2][met.value]); };
  fr.addEventListener('load', function () { load.classList.add('done'); });
  show(cur, true); flash();
  var sb = $('.idxd-sb'), menu = $('.idxd-menu');
  sb.onclick = function (e) {
    e.stopPropagation(); var open = menu.hidden; menu.hidden = !open; sb.setAttribute('aria-expanded', open);
    if (open) { var u = location.href, t = document.title, q = encodeURIComponent;
      menu.querySelector('[data-s=mail]').href = 'mailto:?subject=' + q(t) + '&body=' + q(t + '\n' + u);
      menu.querySelector('[data-s=li]').href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + q(u);
      menu.querySelector('[data-s=x]').href = 'https://twitter.com/intent/tweet?text=' + q(t) + '&url=' + q(u); }
  };
  document.addEventListener('click', function () { menu.hidden = true; sb.setAttribute('aria-expanded', false); });
  menu.querySelector('[data-s=copy]').onclick = function (e) {
    var b = e.currentTarget, done = function () { b.textContent = 'Link copied'; setTimeout(function () { b.textContent = 'Copy link'; menu.hidden = true; }, 1200); };
    if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(done, done);
    else { var ta = document.createElement('textarea'); ta.value = location.href; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); done(); }
  };
  var dl = $('.idxd-dl'), rowsUrl = ROWS;
  if (rowsUrl) {
    dl.hidden = false;
    dl.onclick = function () {
      var go = function () {
        var q = function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; };
        var g = G[sub.value], rows = window.METRIC_ROWS[cur[0]] || [];
        var lines = [['Indicator', 'Sub-indicator', 'Metric code', 'Metric', 'Series', 'Period', 'Value', 'Unit', 'Source'].map(q).join(',')]
          .concat(rows.map(function (r) { return [code + ' ' + title, g[0] + ' ' + g[1], cur[1], cur[2], r[0], r[1], r[2], r[3], r[4]].map(q).join(','); }));
        var url = URL.createObjectURL(new Blob(['﻿' + lines.join('\r\n')], {type: 'text/csv;charset=utf-8'}));
        var a = document.createElement('a'); a.href = url; a.download = 'index2_' + cur[1] + '.csv';
        document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      };
      if (window.METRIC_ROWS) return go();
      var s = document.createElement('script'); s.src = rowsUrl; s.onload = go; document.head.appendChild(s);
    };
  }
  }
  function start() {
    var root = document.getElementById('idx'); if (!root) return;
    fetch(base + 'config.json', {cache: 'no-cache'}).then(function (r) { return r.json(); }).then(function (c) {
      var code = root.dataset.code, col = c.colors[code] || [];
      if (!root.dataset.color && col[0]) root.dataset.color = col[0];
      if (!root.dataset.tint && col[1]) root.dataset.tint = col[1];
      root.className = 'idxd'; root.innerHTML = CSS + HTML;
      run(root, c.indicators, c.pbi, base + 'metric_data.js');
    }).catch(function () { root.textContent = 'The interactive dashboard could not be loaded. Please try again later.'; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
