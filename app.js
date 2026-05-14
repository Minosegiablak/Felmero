// ═══════════════════════════════════════════
// NYILÁSZÁRÓ FELMÉRŐ - Alkalmazás kód
// Automatikusan betöltődik az index.html-ből
// ═══════════════════════════════════════════

(function() {
  // CSS beinjektálása
  const style = document.createElement('style');
  style.textContent = '@import url(\'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Barlow:wght@300;400;500;600&display=swap\');\n\n:root {\n  --black:#0a0a0a; --dark:#111; --dark2:#1a1a1a; --dark3:#242424;\n  --gray:#2e2e2e; --gray2:#3d3d3d; --gray3:#5a5a5a; --silver:#8a8a8a;\n  --light:#c8c8c8; --white:#f0f0f0;\n  --red:#cc2222; --red2:#e03333; --red3:#ff4444;\n  --red-dim:rgba(204,34,34,0.15); --red-glow:rgba(204,34,34,0.3);\n  --orange:#e08800; --orange-dim:rgba(224,136,0,0.15);\n}\n*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}\nbody{background:var(--black);color:var(--white);font-family:\'Barlow\',sans-serif;font-size:16px;min-height:100vh;overflow-x:hidden;}\n\n/* HEADER */\n#app-header{background:var(--dark);border-bottom:1px solid var(--red);padding:0 16px;height:52px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;}\n.header-logo{font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:700;color:var(--white);letter-spacing:2px;text-transform:uppercase;}\n.header-logo span{color:var(--red);}\n.header-right{display:flex;align-items:center;gap:10px;}\n.header-user{font-size:12px;color:var(--silver);font-family:\'Share Tech Mono\',monospace;}\n.autosave{font-size:11px;color:var(--gray3);font-family:\'Share Tech Mono\',monospace;display:flex;align-items:center;gap:4px;}\n.autosave.saved{color:#44aa44;}\n.autosave.saving{color:var(--orange);}\n\n/* SCREENS */\n.screen{display:none;min-height:100vh;}\n.screen.active{display:block;}\n\n/* NAV */\n.nav-tabs{display:flex;background:var(--dark);border-bottom:1px solid var(--gray);overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;}\n.nav-tabs::-webkit-scrollbar{display:none;}\n.nav-tab{flex:0 0 auto;padding:13px 18px;background:transparent;border:none;color:var(--silver);font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:600;letter-spacing:1px;cursor:pointer;text-transform:uppercase;border-bottom:2px solid transparent;transition:all .2s;white-space:nowrap;}\n.nav-tab.active{color:var(--red);border-bottom-color:var(--red);}\n.nav-tab:hover:not(.active){color:var(--light);}\n.counter-badge{background:var(--red);color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin-left:5px;}\n\n/* CONTENT */\n.content{padding:16px;max-width:900px;margin:0 auto;}\n.page{display:none;}\n.page.active{display:block;}\n\n/* FORM */\n.form-group{margin-bottom:16px;}\nlabel{display:block;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--silver);margin-bottom:6px;font-family:\'Rajdhani\',sans-serif;}\ninput[type=text],input[type=password],input[type=email],input[type=number],select,textarea{width:100%;background:var(--dark2);border:1px solid var(--gray2);color:var(--white);padding:12px 14px;font-family:\'Barlow\',sans-serif;font-size:15px;outline:none;transition:border-color .2s;-webkit-appearance:none;appearance:none;border-radius:0;}\ninput:focus,select:focus,textarea:focus{border-color:var(--red);background:var(--dark3);}\nselect{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath fill=\'%23cc2222\' d=\'M6 8L0 0h12z\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:40px;cursor:pointer;}\nselect option{background:var(--dark2);color:var(--white);}\ntextarea{resize:vertical;min-height:70px;}\n.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}\n.grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;}\n@media(max-width:600px){.grid-2,.grid-3{grid-template-columns:1fr;}}\n\n/* BUTTONS */\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:12px 20px;font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;border:none;cursor:pointer;transition:all .2s;}\n.btn-primary{background:var(--red);color:#fff;width:100%;}\n.btn-primary:hover{background:var(--red2);}\n.btn-primary:active{transform:scale(.98);}\n.btn-secondary{background:transparent;color:var(--light);border:1px solid var(--gray2);}\n.btn-secondary:hover{border-color:var(--silver);color:#fff;}\n.btn-danger{background:transparent;color:var(--red);border:1px solid var(--red);}\n.btn-danger:hover{background:var(--red-dim);}\n.btn-icon{background:transparent;border:none;color:var(--silver);cursor:pointer;padding:6px;font-size:18px;transition:color .2s;}\n.btn-icon:hover{color:var(--red);}\n.btn-small{padding:8px 14px;font-size:12px;}\n.btn-orange{background:var(--orange);color:#fff;}\n.btn-orange:hover{background:#f09900;}\n\n/* CARD */\n.card{background:var(--dark);border:1px solid var(--gray);border-left:3px solid var(--red);padding:18px;margin-bottom:14px;}\n.card-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}\n.card-title{font-family:\'Rajdhani\',sans-serif;font-size:17px;font-weight:700;letter-spacing:1px;color:#fff;text-transform:uppercase;}\n\n/* SECTION HEAD */\n.section-head{display:flex;align-items:center;gap:10px;margin-bottom:16px;margin-top:24px;}\n.section-head:first-child{margin-top:0;}\n.section-head h2{font-family:\'Rajdhani\',sans-serif;font-size:20px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;}\n.section-head::after{content:\'\';flex:1;height:1px;background:linear-gradient(to right,var(--gray),transparent);}\n\n/* TOGGLE */\n.toggle-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--gray);}\n.toggle-row:last-child{border-bottom:none;}\n.toggle-label{font-size:14px;color:var(--light);font-weight:500;}\n.toggle{position:relative;width:48px;height:26px;flex-shrink:0;}\n.toggle input{opacity:0;width:0;height:0;}\n.toggle-slider{position:absolute;inset:0;background:var(--gray);cursor:pointer;transition:.3s;}\n.toggle-slider:before{content:\'\';position:absolute;width:20px;height:20px;left:3px;bottom:3px;background:var(--silver);transition:.3s;}\n.toggle input:checked+.toggle-slider{background:var(--red);}\n.toggle input:checked+.toggle-slider:before{transform:translateX(22px);background:#fff;}\n\n/* COND FIELD */\n.cond-field{display:none;padding-top:14px;}\n.cond-field.visible{display:block;}\n\n/* TYPE GRID */\n.type-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:8px;margin-bottom:20px;}\n.type-btn{background:var(--dark2);border:1px solid var(--gray2);color:var(--light);padding:12px 6px;text-align:center;cursor:pointer;transition:all .2s;font-family:\'Rajdhani\',sans-serif;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;display:flex;flex-direction:column;align-items:center;gap:5px;}\n.type-btn .type-icon{font-size:22px;}\n.type-btn:hover{border-color:var(--red);color:#fff;background:var(--dark3);}\n.type-btn.selected{border-color:var(--red);background:var(--red-dim);color:var(--red3);}\n\n/* ITEM CARD */\n.item-card{background:var(--dark2);border:1px solid var(--gray);border-left:3px solid var(--gray3);padding:12px 14px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:border-color .2s;}\n.item-card:hover{border-left-color:var(--red);}\n.item-card.modified{border-left-color:var(--orange);}\n.item-info{flex:1;}\n.item-name{font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:600;color:#fff;}\n.item-meta{font-size:12px;color:var(--silver);font-family:\'Share Tech Mono\',monospace;margin-top:2px;}\n.item-actions{display:flex;gap:6px;align-items:center;}\n.modified-badge{font-size:10px;color:var(--orange);font-family:\'Share Tech Mono\',monospace;}\n\n/* MODAL */\n.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:200;overflow-y:auto;-webkit-overflow-scrolling:touch;}\n.modal-overlay.active{display:flex;align-items:flex-start;justify-content:center;padding:14px;}\n.modal{background:var(--dark);border:1px solid var(--gray);border-top:3px solid var(--red);width:100%;max-width:680px;margin:auto;}\n.modal-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--gray);}\n.modal-title{font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:700;letter-spacing:2px;text-transform:uppercase;}\n.modal-body{padding:20px;}\n.modal-footer{padding:14px 20px;border-top:1px solid var(--gray);display:flex;gap:10px;justify-content:flex-end;}\n\n/* BADGE */\n.badge{display:inline-block;font-family:\'Share Tech Mono\',monospace;font-size:10px;padding:2px 7px;border:1px solid;text-transform:uppercase;letter-spacing:1px;}\n.badge-red{color:var(--red3);border-color:var(--red);background:var(--red-dim);}\n.badge-gray{color:var(--silver);border-color:var(--gray2);}\n.badge-orange{color:var(--orange);border-color:var(--orange);background:var(--orange-dim);}\n.badge-green{color:#44cc44;border-color:#44cc44;background:rgba(68,204,68,.1);}\n\n/* STATUS BAR */\n.status-bar{background:var(--dark2);border:1px solid var(--gray);padding:8px 14px;margin-bottom:16px;display:flex;align-items:center;gap:10px;font-family:\'Share Tech Mono\',monospace;font-size:12px;color:var(--silver);}\n.status-felmeresszam{color:var(--red);font-weight:700;font-size:13px;}\n\n/* TOAST */\n.toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%) translateY(100px);background:var(--dark3);border:1px solid var(--red);color:#fff;padding:10px 22px;font-family:\'Rajdhani\',sans-serif;font-size:15px;font-weight:600;letter-spacing:1px;z-index:999;transition:transform .3s;white-space:nowrap;pointer-events:none;}\n.toast.show{transform:translateX(-50%) translateY(0);}\n\n/* SEP */\n.sep{height:1px;background:var(--gray);margin:16px 0;}\n\n/* INFO BOX */\n.info-box{background:var(--dark2);border:1px solid var(--gray2);border-left:3px solid var(--red);padding:12px 14px;font-size:13px;color:var(--silver);margin-bottom:16px;}\n\n/* EMPTY STATE */\n.empty-state{text-align:center;padding:40px 20px;color:var(--gray3);}\n.empty-state .es-icon{font-size:44px;margin-bottom:14px;}\n.empty-state h3{font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;color:var(--gray2);}\n\n/* SUMMARY */\n.summary-block{background:var(--dark2);border:1px solid var(--gray2);padding:14px;margin-bottom:16px;}\n.summary-row{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--gray);font-size:13px;}\n.summary-row:last-child{border-bottom:none;}\n.summary-key{color:var(--silver);}\n.summary-val{color:#fff;font-weight:500;}\n\n/* ADMIN */\n.admin-section{background:var(--dark);border:1px solid var(--gray);margin-bottom:16px;}\n.admin-section-head{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--gray);cursor:pointer;user-select:none;}\n.admin-section-head h3{font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--red3);}\n.admin-section-body{padding:14px 18px;}\n.option-list{list-style:none;}\n.option-item{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--gray);}\n.option-item:last-child{border-bottom:none;}\n.option-item-name{font-size:14px;color:var(--light);flex:1;}\n.option-item-sub{font-size:11px;color:var(--silver);font-family:\'Share Tech Mono\',monospace;margin-top:2px;}\n\n/* FOTO */\n.foto-upload-area{border:2px dashed var(--gray2);background:var(--dark2);padding:18px;text-align:center;cursor:pointer;transition:border-color .2s;position:relative;}\n.foto-upload-area:hover{border-color:var(--red);}\n.foto-upload-area input[type=file]{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;border:none;padding:0;}\n.foto-preview{margin-top:10px;position:relative;display:inline-block;}\n.foto-preview img{max-width:100%;max-height:180px;object-fit:cover;border:2px solid var(--red);display:block;}\n.foto-preview-remove{position:absolute;top:-8px;right:-8px;background:var(--red);color:#fff;border:none;border-radius:50%;width:24px;height:24px;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:700;}\n\n/* SZERKEZET */\n.szerkezet-card{background:var(--dark);border:1px solid var(--gray);border-left:3px solid var(--orange);margin-bottom:12px;}\n.szerkezet-header{background:#1a1200;border-bottom:1px solid #3a2800;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;}\n.szerkezet-title{font-family:\'Rajdhani\',sans-serif;font-size:15px;font-weight:700;color:#ffaa00;letter-spacing:1px;text-transform:uppercase;}\n.szerkezet-elemek{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;border-bottom:1px solid var(--gray);}\n.szerkezet-elem{flex:0 0 auto;min-width:170px;max-width:210px;border-right:2px solid var(--orange);padding:10px;background:var(--dark2);}\n.szerkezet-elem:last-child{border-right:none;}\n.szerkezet-elem-num{font-family:\'Share Tech Mono\',monospace;font-size:9px;color:var(--orange);margin-bottom:3px;}\n.szerkezet-elem-tipus{font-family:\'Rajdhani\',sans-serif;font-size:13px;font-weight:700;color:#fff;margin-bottom:3px;}\n.szerkezet-elem-meret{font-family:\'Share Tech Mono\',monospace;font-size:12px;color:var(--red3);margin-bottom:5px;}\n.szerkezet-elem-info{font-size:10px;color:var(--silver);line-height:1.5;}\n.szerkezet-footer{padding:8px 14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;}\n.szerkezet-ossz{font-family:\'Share Tech Mono\',monospace;font-size:11px;color:var(--orange);}\n.szerkezet-form-section{background:#0f0800;border:1px solid #3a2800;border-left:3px solid var(--orange);padding:18px;margin-bottom:14px;display:none;}\n.szerkezet-form-section.visible{display:block;}\n\n/* STATUSZ */\n.statusz-vegleges{background:#003300;border:2px solid #44cc44;color:#44cc44;padding:8px 16px;text-align:center;font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:700;letter-spacing:3px;margin-bottom:14px;}\n.statusz-ujrameres{background:#330000;border:2px solid var(--red);color:var(--red3);padding:8px 16px;text-align:center;font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:700;letter-spacing:3px;margin-bottom:14px;}\n\n/* HELYSZIN INFO */\n.helyszin-select{width:100%;background:var(--dark2);border:1px solid var(--gray2);color:#fff;padding:10px 12px;font-size:14px;border-radius:0;-webkit-appearance:none;outline:none;}\n.helyszin-select:focus{border-color:var(--red);}\n\n/* PRINT */\n#print-area{display:none;}\n@media print{\n  *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}\n  body{background:#fff!important;color:#000!important;font-family:Arial,sans-serif!important;}\n  #app-header,.nav-tabs,.screen,.modal-overlay,.toast{display:none!important;}\n  #print-area{display:block!important;}\n  @page{size:A4 portrait;margin:8mm;}\n  .pr-item{page-break-inside:avoid;}\n  .pr-page{padding:8mm 10mm;}\n}';
  document.head.appendChild(style);

  // HTML beinjektálása
  document.getElementById('app-root').innerHTML = '<!-- HEADER -->\n<div id="app-header" style="display:none;">\n  <div class="header-logo">Nyilász<span>á</span>ró <span>▸</span> Felmérő</div>\n  <div class="header-right">\n    <div class="autosave" id="autosave-indicator">💾 Mentve</div>\n    <span class="header-user" id="header-username"></span>\n    <button class="btn btn-secondary btn-small" onclick="downloadSelf()" title="Letölti az alkalmazást index.html-ként">⬇ index.html</button>\n    <button class="btn btn-secondary btn-small" onclick="doLogout()">Ki</button>\n  </div>\n</div>\n\n<!-- APP SCREEN -->\n<div id="screen-app" class="screen active">\n\n  <div class="nav-tabs">\n    <button class="nav-tab active" onclick="showPage(\'page-felmeres\',this)">📋 Felmérés</button>\n    <button class="nav-tab" onclick="showPage(\'page-tetelek\',this)">🗒️ Tételek <span id="badge-count" class="counter-badge" style="display:none">0</span></button>\n    <button class="nav-tab" onclick="showPage(\'page-pdf\',this)">📄 PDF</button>\n    <button class="nav-tab admin-only" onclick="showPage(\'page-admin\',this)">⚙️ Admin</button>\n  </div>\n\n  <!-- ── FELMÉRÉS PAGE ── -->\n  <div id="page-felmeres" class="page active">\n    <div class="content">\n\n      <!-- Felmérési szám + státusz -->\n      <div class="status-bar">\n        <span class="status-felmeresszam" id="felmeres-szam-display">FM-2026-0001</span>\n        <span style="color:var(--gray3)">·</span>\n        <span id="statusz-display" style="font-size:11px;">—</span>\n        <span style="flex:1"></span>\n        <select id="statusz-select" onchange="setStatusz(this.value)" style="background:transparent;border:1px solid var(--gray2);color:var(--silver);padding:4px 8px;font-size:11px;font-family:\'Share Tech Mono\',monospace;width:auto;">\n          <option value="">— Státusz —</option>\n          <option value="vegleges">✅ VÉGLEGES</option>\n          <option value="ujrameres">⚠️ ÚJRAMÉRÉS SZÜKSÉGES</option>\n        </select>\n      </div>\n\n      <!-- Ügyfél adatok -->\n      <div class="section-head"><h2>Ügyfél adatai</h2></div>\n      <div class="card">\n        <div class="grid-2">\n          <div class="form-group">\n            <label>Munka típusa *</label>\n            <select id="u-munkatipus" onchange="autoSave()">\n              <option value="">— Válasszon —</option>\n              <option value="bontás+beépítés">🔨 Bontás + beépítés</option>\n              <option value="csak beépítés">🏗️ Csak beépítés (új építés)</option>\n              <option value="tokba építés">📐 Tokba építés</option>\n            </select>\n          </div>\n          <div class="form-group">\n            <label>Ügyfél neve *</label>\n            <input type="text" id="u-nev" placeholder="Kovács Péter" oninput="autoSave()">\n          </div>\n          <div class="form-group">\n            <label>\n              Helyszín / Cím\n              <button type="button" onclick="getGPS()" id="gps-btn" style="margin-left:6px;background:var(--red);border:none;color:#fff;padding:2px 8px;font-size:10px;font-family:\'Rajdhani\',sans-serif;font-weight:700;letter-spacing:1px;cursor:pointer;vertical-align:middle;">📍 GPS</button>\n              <span id="gps-status" style="font-size:10px;color:var(--silver);margin-left:4px;"></span>\n            </label>\n            <input type="text" id="u-cim" placeholder="1234 Budapest, Fő u. 1." oninput="autoSave()">\n          </div>\n          <div class="form-group">\n            <label>Felmérő neve</label>\n            <input type="text" id="u-felmero" oninput="autoSave()">\n          </div>\n          <div class="form-group">\n            <label>Dátum</label>\n            <input type="text" id="u-datum" oninput="autoSave()">\n          </div>\n          <div class="form-group">\n            <label>Telefon</label>\n            <input type="text" id="u-tel" placeholder="+36 30 123 4567" oninput="autoSave()">\n          </div>\n        </div>\n      </div>\n\n      <!-- Helyszín infók -->\n      <div class="section-head"><h2>Helyszín információk</h2></div>\n      <div class="card">\n        <div id="helyszin-info-container"></div>\n      </div>\n\n      <!-- Módválasztó -->\n      <div class="section-head"><h2>Új tétel hozzáadása</h2></div>\n      <div style="display:flex;gap:10px;margin-bottom:14px;">\n        <button class="btn btn-secondary" id="btn-egyes" onclick="setFelmeresMode(\'egyes\')" style="flex:1;border-color:var(--red);color:var(--red);">🪟 Egyedi tétel</button>\n        <button class="btn btn-secondary" id="btn-szerkezet" onclick="setFelmeresMode(\'szerkezet\')" style="flex:1;">🔗 Sorolt szerkezet</button>\n      </div>\n\n      <!-- SZERKEZET FORM -->\n      <div class="szerkezet-form-section" id="szerkezet-form">\n        <div style="font-family:\'Rajdhani\',sans-serif;font-size:15px;font-weight:700;color:#ffaa00;letter-spacing:2px;margin-bottom:14px;">🔗 SOROLT SZERKEZET</div>\n        <div class="form-group">\n          <label>Szerkezet neve / helye *</label>\n          <input type="text" id="sz-nev" placeholder="pl. Erkély összeállítás – Nappali">\n        </div>\n        <div class="grid-2">\n          <div class="form-group">\n            <label>Illesztés módja</label>\n            <select id="sz-illesztes">\n              <option>Sorolt (összeépített)</option>\n              <option>Tokos (közös tokba)</option>\n              <option>Önálló (egymás mellé)</option>\n            </select>\n          </div>\n          <div class="form-group">\n            <label>Megjegyzés</label>\n            <input type="text" id="sz-megj" placeholder="">\n          </div>\n        </div>\n        <label style="display:block;margin-bottom:8px;">Elemek (balról jobbra)</label>\n        <div id="sz-elemek-lista" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px;"></div>\n        <button class="btn btn-secondary btn-small" onclick="addSzerkezetElem()" style="border-color:var(--orange);color:var(--orange);margin-bottom:12px;">+ Elem hozzáadása</button>\n\n        <!-- Elem mini form -->\n        <div id="sz-elem-form" style="display:none;background:var(--dark3);border:1px solid #3a2800;padding:14px;margin-bottom:12px;">\n          <div style="font-family:\'Rajdhani\',sans-serif;font-size:12px;font-weight:700;color:var(--orange);letter-spacing:1px;margin-bottom:10px;">ÚJ ELEM</div>\n          <div class="grid-2">\n            <div class="form-group">\n              <label>Típus</label>\n              <select id="sze-tipus">\n                <option value="ablak">Ablak</option>\n                <option value="bejajto">Bejárati ajtó</option>\n                <option value="belsoajto">Belső ajtó</option>\n              </select>\n            </div>\n            <div class="form-group">\n              <label>Pozíció</label>\n              <input type="text" id="sze-helyiseg" placeholder="pl. Bal oldali ablak">\n            </div>\n            <div class="form-group">\n              <label>Szélesség (mm)</label>\n              <input type="number" id="sze-szelesseg" placeholder="900">\n            </div>\n            <div class="form-group">\n              <label>Magasság (mm)</label>\n              <input type="number" id="sze-magassag" placeholder="1500">\n            </div>\n            <div class="form-group">\n              <label>Tokprofil</label>\n              <select id="sze-profil"></select>\n            </div>\n            <div class="form-group">\n              <label>Üvegtípus</label>\n              <select id="sze-uveg"></select>\n            </div>\n            <div class="form-group">\n              <label>Nyitási mód</label>\n              <select id="sze-nyitas">\n                <option value="">— Válasszon —</option>\n                <option>Fix</option><option>Bukó-nyíló (BNY)</option>\n                <option>Nyíló (NY)</option><option>Bukó (BU)</option>\n                <option>Toló</option><option>Csúszó-toló (PSK)</option>\n              </select>\n            </div>\n            <div class="form-group">\n              <label>Nyílásirány</label>\n              <select id="sze-irany">\n                <option value="">—</option>\n                <option>Bal</option><option>Jobb</option><option>Közép</option><option>Nincs</option>\n              </select>\n            </div>\n            <div class="form-group">\n              <label>Szín</label>\n              <select id="sze-szin"></select>\n            </div>\n            <div class="form-group">\n              <label>Redőny előkészítés</label>\n              <select id="sze-redony">\n                <option value="">Nem</option><option value="igen">Igen</option>\n              </select>\n            </div>\n          </div>\n          <div class="form-group">\n            <label>Megjegyzés</label>\n            <input type="text" id="sze-megj" placeholder="">\n          </div>\n          <div style="display:flex;gap:10px;">\n            <button class="btn btn-orange btn-small" onclick="saveSzerkezetElem()">✓ Elem mentése</button>\n            <button class="btn btn-secondary btn-small" onclick="cancelSzerkezetElem()">Mégsem</button>\n          </div>\n        </div>\n\n        <div style="display:flex;gap:10px;">\n          <button class="btn btn-orange" onclick="saveSzerkezet()" style="flex:1;">🔗 Szerkezet mentése</button>\n          <button class="btn btn-secondary" onclick="cancelSzerkezet()">Mégsem</button>\n        </div>\n      </div>\n\n      <!-- Típus választó -->\n      <div class="type-grid" id="type-grid"></div>\n\n      <!-- Tétel form -->\n      <div id="item-form" style="display:none;">\n        <div class="card" id="item-form-card">\n          <div class="card-header">\n            <div class="card-title" id="form-type-title">Tétel adatai</div>\n            <button class="btn btn-icon" onclick="cancelItemForm()">✕</button>\n          </div>\n\n          <!-- Alap adatok -->\n          <div class="form-group">\n            <label>Helyiség / Pozíció *</label>\n            <input type="text" id="f-helyiseg" placeholder="pl. Nappali – bal ablak">\n          </div>\n          <div class="grid-2">\n            <div class="form-group">\n              <label>Szélesség (mm)</label>\n              <input type="number" id="f-szelesseg" placeholder="1200" min="100" max="9999">\n            </div>\n            <div class="form-group">\n              <label>Magasság (mm)</label>\n              <input type="number" id="f-magassag" placeholder="1400" min="100" max="9999">\n            </div>\n          </div>\n          <div class="form-group">\n            <label>Darabszám</label>\n            <input type="number" id="f-db" value="1" min="1" max="99">\n          </div>\n\n          <!-- ABLAK / BEJÁRATI AJTÓ -->\n          <div id="sec-ablak" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Tokprofil</label>\n                <select id="f-profil"></select>\n              </div>\n              <div class="form-group">\n                <label>Üvegtípus</label>\n                <select id="f-uveg"></select>\n              </div>\n              <div class="form-group">\n                <label>Üvegezési osztály</label>\n                <select id="f-uveg-osztaly"></select>\n              </div>\n              <div class="form-group">\n                <label>Nyitási mód</label>\n                <select id="f-nyitas">\n                  <option value="">— Válasszon —</option>\n                  <option>Fix (nem nyitható)</option>\n                  <option>Bukó-nyíló (BNY)</option>\n                  <option>Nyíló (NY)</option>\n                  <option>Bukó (BU)</option>\n                  <option>Toló</option>\n                  <option>Billenő</option>\n                  <option>Csúszó-toló (PSK)</option>\n                  <option>Harmonika</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Nyílásirány</label>\n                <select id="f-irany">\n                  <option value="">— Válasszon —</option>\n                  <option>Bal</option><option>Jobb</option>\n                  <option>Közép</option><option>Nincs (fix/toló)</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Szín (keret)</label>\n                <select id="f-szin"></select>\n              </div>\n              <div class="form-group">\n                <label>Tokbeépítés módja</label>\n                <select id="f-tokbeep">\n                  <option value="">— Válasszon —</option>\n                  <option>Vakolat alá</option>\n                  <option>Vakolatra</option>\n                  <option>Renovációs tok</option>\n                  <option>Egyéb</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Takaróléc</label>\n                <select id="f-takaroles">\n                  <option value="">Nincs</option>\n                  <option>Csak kívül</option>\n                  <option>Csak belül</option>\n                  <option>Kívül és belül</option>\n                </select>\n              </div>\n            </div>\n\n            <!-- Párkányfogadó profil -->\n            <div class="toggle-row">\n              <span class="toggle-label">Párkányfogadó profil (PF)?</span>\n              <label class="toggle">\n                <input type="checkbox" id="t-pf" onchange="toggleCond(\'pf-sec\',this.checked)">\n                <span class="toggle-slider"></span>\n              </label>\n            </div>\n            <div id="pf-sec" class="cond-field">\n              <div class="form-group" style="padding-top:10px;">\n                <label>PF elhelyezés</label>\n                <select id="f-pf-elhelyezes">\n                  <option value="">— Válasszon —</option>\n                  <option>Méreten belül (MB)</option>\n                  <option>Méreten kívül (MK)</option>\n                </select>\n              </div>\n            </div>\n\n            <!-- Redőny előkészítés -->\n            <div class="toggle-row">\n              <span class="toggle-label">Redőny előkészítés szükséges?</span>\n              <label class="toggle">\n                <input type="checkbox" id="t-redony-prep" onchange="toggleCond(\'redony-prep-sec\',this.checked); applyAlapkeszletRedony()">\n                <span class="toggle-slider"></span>\n              </label>\n            </div>\n            <div id="redony-prep-sec" class="cond-field">\n              <div class="grid-2" style="padding-top:10px;">\n                <div class="form-group">\n                  <label>Redőny típus</label>\n                  <select id="f-redony-tipus"></select>\n                </div>\n                <div class="form-group">\n                  <label>Redőny vezérlés</label>\n                  <select id="f-redony-vez">\n                    <option value="">— Válasszon —</option>\n                    <option>Kézi (szalagos)</option>\n                    <option>Kézi (kurblis)</option>\n                    <option>Motoros (230V)</option>\n                    <option>Motoros (Smart)</option>\n                    <option>Solar motoros</option>\n                  </select>\n                </div>\n                <div class="form-group">\n                  <label>Redőny lamella</label>\n                  <select id="f-redony-lamella"></select>\n                </div>\n                <div class="form-group">\n                  <label>Redőny elhelyezés</label>\n                  <select id="f-redony-elhelyezes">\n                    <option value="">— Válasszon —</option>\n                    <option>Méreten belül (MB)</option>\n                    <option>Méreten kívül (MK)</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <!-- Szúnyogháló -->\n            <div class="toggle-row">\n              <span class="toggle-label">Szúnyogháló szükséges?</span>\n              <label class="toggle">\n                <input type="checkbox" id="t-szunyog" onchange="toggleCond(\'szunyog-sec\',this.checked)">\n                <span class="toggle-slider"></span>\n              </label>\n            </div>\n            <div id="szunyog-sec" class="cond-field">\n              <div class="grid-2" style="padding-top:10px;">\n                <div class="form-group">\n                  <label>Szúnyogháló típus</label>\n                  <select id="f-szunyog-tipus"></select>\n                </div>\n                <div class="form-group">\n                  <label>Szúnyogháló szélesség (mm)</label>\n                  <input type="number" id="f-szunyog-sz" placeholder="eltérő méret">\n                </div>\n                <div class="form-group">\n                  <label>Szúnyogháló magasság (mm)</label>\n                  <input type="number" id="f-szunyog-m" placeholder="eltérő méret">\n                </div>\n              </div>\n            </div>\n\n            <!-- Osztó -->\n            <div class="toggle-row">\n              <span class="toggle-label">Van osztó?</span>\n              <label class="toggle">\n                <input type="checkbox" id="t-oszto" onchange="toggleCond(\'oszto-sec\',this.checked)">\n                <span class="toggle-slider"></span>\n              </label>\n            </div>\n            <div id="oszto-sec" class="cond-field">\n              <div class="form-group" style="padding-top:10px;">\n                <label>Osztó leírása</label>\n                <input type="text" id="f-oszto" placeholder="pl. Függőleges 450mm-re, vízszintes 800mm-re">\n              </div>\n            </div>\n          </div>\n\n          <!-- BELSŐ AJTÓ -->\n          <div id="sec-belsoajto" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Ajtólap típus</label>\n                <select id="f-ajto-lap"></select>\n              </div>\n              <div class="form-group">\n                <label>Tok típus</label>\n                <select id="f-ajto-tok">\n                  <option value="">—</option>\n                  <option>Normál tok</option><option>Blokk tok</option>\n                  <option>Tégla tok</option><option>Pakoló tok</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Nyílásirány</label>\n                <select id="f-ajto-irany">\n                  <option value="">—</option>\n                  <option>Bal</option><option>Jobb</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Falvastagság (mm)</label>\n                <input type="number" id="f-ajto-falv" placeholder="100">\n              </div>\n              <div class="form-group">\n                <label>Szín / Felület</label>\n                <select id="f-ajto-szin"></select>\n              </div>\n              <div class="form-group">\n                <label>Kilincs</label>\n                <select id="f-ajto-kilincs">\n                  <option value="">—</option>\n                  <option>Igen – kilincs+zár</option>\n                  <option>Igen – kilincs, zár nélkül</option>\n                  <option>Nem</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <!-- REDŐNY önálló -->\n          <div id="sec-redony" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Redőny típus</label>\n                <select id="f-onallo-redony-tipus"></select>\n              </div>\n              <div class="form-group">\n                <label>Vezérlés</label>\n                <select id="f-onallo-vez">\n                  <option value="">—</option>\n                  <option>Kézi (szalagos)</option><option>Kézi (kurblis)</option>\n                  <option>Motoros (230V)</option><option>Motoros (Smart)</option>\n                  <option>Solar motoros</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Lamella</label>\n                <select id="f-onallo-lamella"></select>\n              </div>\n              <div class="form-group">\n                <label>Szín</label>\n                <select id="f-onallo-szin"></select>\n              </div>\n              <div class="form-group">\n                <label>Beépítés módja</label>\n                <select id="f-onallo-beep">\n                  <option value="">—</option>\n                  <option>Tokba épített</option><option>Tokra szerelékes</option>\n                  <option>Falpárkányos</option><option>Mennyezeti</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Elhelyezés</label>\n                <select id="f-onallo-elhelyezes">\n                  <option value="">—</option>\n                  <option>Méreten belül (MB)</option>\n                  <option>Méreten kívül (MK)</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <!-- ROLÓ -->\n          <div id="sec-rolo" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Roló típus</label>\n                <select id="f-rolo-tipus"></select>\n              </div>\n              <div class="form-group">\n                <label>Vezérlés</label>\n                <select id="f-rolo-vez">\n                  <option value="">—</option>\n                  <option>Láncos kézi</option><option>Motoros (230V)</option>\n                  <option>Motoros (Smart)</option><option>Spring (rugós)</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Anyag / szövet</label>\n                <select id="f-rolo-anyag"></select>\n              </div>\n              <div class="form-group">\n                <label>Rögzítés</label>\n                <select id="f-rolo-rogzites">\n                  <option value="">—</option>\n                  <option>Mennyezeti</option><option>Fali</option>\n                  <option>Tok felső</option><option>Ablakszárny</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <!-- ZSALÚZIA -->\n          <div id="sec-zsaluzia" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Zsalúzia típus</label>\n                <select id="f-zsal-tipus"></select>\n              </div>\n              <div class="form-group">\n                <label>Lamella szélesség</label>\n                <select id="f-zsal-lamella">\n                  <option value="">—</option>\n                  <option>16 mm (micro)</option><option>25 mm</option>\n                  <option>50 mm</option><option>89 mm (vertikális)</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Szín</label>\n                <select id="f-zsal-szin"></select>\n              </div>\n              <div class="form-group">\n                <label>Vezérlés</label>\n                <select id="f-zsal-vez">\n                  <option value="">—</option>\n                  <option>Kézi (zsinóros)</option><option>Motoros</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <!-- GARÁZSKAPU -->\n          <div id="sec-garazs" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Kapu típus</label>\n                <select id="f-garazs-tipus"></select>\n              </div>\n              <div class="form-group">\n                <label>Nyitási mód</label>\n                <select id="f-garazs-nyitas">\n                  <option value="">—</option>\n                  <option>Szekcionált (felfutó)</option><option>Billenő</option>\n                  <option>Toló</option><option>Forgó (kétrészes)</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Meghajtás</label>\n                <select id="f-garazs-meghajtás">\n                  <option value="">—</option>\n                  <option>Kézi</option><option>Motoros (230V)</option><option>Motoros (Smart)</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Szín</label>\n                <select id="f-garazs-szin"></select>\n              </div>\n              <div class="form-group">\n                <label>Hőszigetelés</label>\n                <select id="f-garazs-szigetelés">\n                  <option value="">—</option>\n                  <option>Nincs (egyrétegű)</option>\n                  <option>20mm PU hab</option><option>40mm PU hab</option><option>67mm PU hab</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Beépítési nyílás (mm)</label>\n                <input type="text" id="f-garazs-meret" placeholder="2500 x 2125">\n              </div>\n            </div>\n          </div>\n\n          <!-- PERGOLA -->\n          <div id="sec-pergola" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Pergola típus</label>\n                <select id="f-pergola-tipus"></select>\n              </div>\n              <div class="form-group">\n                <label>Lamella irány</label>\n                <select id="f-pergola-irany">\n                  <option value="">—</option>\n                  <option>Forgó lamella</option><option>Fix lamella</option>\n                  <option>Nyitható tető</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Vezérlés</label>\n                <select id="f-pergola-vez">\n                  <option value="">—</option>\n                  <option>Kézi</option><option>Motoros (távirányító)</option><option>Motoros (Smart)</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Szín</label>\n                <select id="f-pergola-szin"></select>\n              </div>\n              <div class="form-group">\n                <label>Mélység (mm)</label>\n                <input type="number" id="f-pergola-mely" placeholder="3000">\n              </div>\n              <div class="form-group">\n                <label>Oldalfal</label>\n                <select id="f-pergola-oldalfal">\n                  <option value="">Nem</option>\n                  <option>Üveg oldalfal</option><option>Screen oldalfal</option><option>Vászon oldalfal</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <!-- SZÚNYOGHÁLÓ önálló -->\n          <div id="sec-szunyoghalo" class="cond-field">\n            <div class="sep"></div>\n            <div class="grid-2">\n              <div class="form-group">\n                <label>Szúnyogháló típus</label>\n                <select id="f-szunyog-onallo"></select>\n              </div>\n              <div class="form-group">\n                <label>Rögzítési mód</label>\n                <select id="f-szunyog-rogzites">\n                  <option value="">—</option>\n                  <option>Fix (keret)</option><option>Nyíló (szárnyba)</option>\n                  <option>Felcsévélős</option><option>Plisszé</option>\n                </select>\n              </div>\n              <div class="form-group">\n                <label>Szín</label>\n                <select id="f-szunyog-szin"></select>\n              </div>\n            </div>\n          </div>\n\n          <!-- Fotó -->\n          <div class="sep"></div>\n          <div class="form-group">\n            <label>📸 Helyszíni fotó</label>\n            <div class="foto-upload-area">\n              <input type="file" id="f-foto" accept="image/*" capture="environment" onchange="handleFotoUpload(this)">\n              <div style="font-size:28px;margin-bottom:6px;">📷</div>\n              <div style="font-size:12px;color:var(--silver);">Kattints vagy húzz ide egy képet</div>\n            </div>\n            <div id="foto-preview-container"></div>\n          </div>\n\n          <!-- Megjegyzés toggle -->\n          <div class="toggle-row">\n            <span class="toggle-label">Megjegyzés ehhez a tételhez?</span>\n            <label class="toggle">\n              <input type="checkbox" id="t-megj" onchange="toggleCond(\'megj-sec\',this.checked)">\n              <span class="toggle-slider"></span>\n            </label>\n          </div>\n          <div id="megj-sec" class="cond-field">\n            <div class="form-group" style="padding-top:10px;">\n              <label>Megjegyzés</label>\n              <textarea id="f-megj" placeholder="Speciális kérés, helyszíni megjegyzés..."></textarea>\n            </div>\n          </div>\n\n          <div style="display:flex;gap:10px;margin-top:12px;">\n            <button class="btn btn-primary" onclick="saveItem()" style="flex:1;">+ Tétel mentése</button>\n            <button class="btn btn-secondary" onclick="cancelItemForm()">Mégsem</button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Általános megjegyzés -->\n      <div class="section-head" style="margin-top:24px;"><h2>Általános megjegyzés</h2></div>\n      <div class="card">\n        <div class="form-group" style="margin:0;">\n          <textarea id="u-altmegj" placeholder="A teljes munkára vonatkozó megjegyzés az iroda számára..." style="min-height:90px;" oninput="autoSave()"></textarea>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- ── TÉTELEK PAGE ── -->\n  <div id="page-tetelek" class="page">\n    <div class="content">\n      <div class="section-head"><h2>Felmért tételek</h2></div>\n      <div id="ugyfel-summary" class="summary-block" style="display:none;"></div>\n      <div id="item-list-container">\n        <div class="empty-state">\n          <div class="es-icon">📋</div>\n          <h3>Még nincs tétel</h3>\n          <p>Menj a Felmérés fülre és adj hozzá nyilászárókat!</p>\n        </div>\n      </div>\n      <div id="tetelek-actions" style="display:none;margin-top:16px;">\n        <button class="btn btn-danger btn-small" onclick="clearAll()">🗑 Összes törlése</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- ── PDF PAGE ── -->\n  <div id="page-pdf" class="page">\n    <div class="content">\n      <div class="section-head"><h2>PDF generálás</h2></div>\n      <div class="info-box">📄 Kattints a gombra — megnyílik egy új ablak ahol a "Mentés PDF-ként" opcióval tudod elmenteni.</div>\n      <div class="card">\n        <div class="card-header"><div class="card-title">Összefoglaló</div></div>\n        <div id="pdf-summary-info" style="color:var(--silver);font-size:13px;">Még nincsenek tételek.</div>\n      </div>\n      <button class="btn btn-primary" onclick="generatePDF()">🖨️ PDF generálása</button>\n    </div>\n  </div>\n\n  <!-- ── ADMIN PAGE ── -->\n  <div id="page-admin" class="page">\n    <div class="content">\n      <div class="section-head"><h2>Admin Panel</h2></div>\n\n      <!-- Cég adatok -->\n      <div class="admin-section">\n        <div class="admin-section-head" onclick="toggleAdminSection(this)">\n          <h3>🏢 Cég adatok</h3><span>▼</span>\n        </div>\n        <div class="admin-section-body">\n          <div class="grid-2">\n            <div class="form-group"><label>Cég neve</label><input type="text" id="a-cegnev" oninput="saveCegAdatok()"></div>\n            <div class="form-group"><label>Iroda email</label><input type="email" id="a-email" oninput="saveCegAdatok()"></div>\n            <div class="form-group"><label>Telefon</label><input type="text" id="a-tel" oninput="saveCegAdatok()"></div>\n            <div class="form-group"><label>Webcím</label><input type="text" id="a-web" oninput="saveCegAdatok()"></div>\n            <div class="form-group" style="grid-column:1/-1;"><label>Cím</label><input type="text" id="a-cegcim" oninput="saveCegAdatok()"></div>\n          </div>\n          <div style="font-size:12px;color:var(--silver);">💾 Automatikusan ment gépelés közben</div>\n        </div>\n      </div>\n\n      <!-- Alapkészlet -->\n      <div class="admin-section">\n        <div class="admin-section-head" onclick="toggleAdminSection(this)">\n          <h3>⚡ Céges alapkészlet (ablak)</h3><span>▼</span>\n        </div>\n        <div class="admin-section-body">\n          <div class="info-box">Ezekkel az értékekkel tölt be automatikusan minden új ablak tétel.</div>\n          <div class="grid-2">\n            <div class="form-group"><label>Tokprofil</label><select id="ak-profil"></select></div>\n            <div class="form-group"><label>Üvegtípus</label><select id="ak-uveg"></select></div>\n            <div class="form-group"><label>Szín</label><select id="ak-szin"></select></div>\n            <div class="form-group"><label>Nyitási mód</label>\n              <select id="ak-nyitas">\n                <option value="">—</option>\n                <option>Fix</option><option>Bukó-nyíló (BNY)</option>\n                <option>Nyíló (NY)</option><option>Bukó (BU)</option><option>Toló</option>\n              </select>\n            </div>\n            <div class="form-group"><label>Nyílásirány</label>\n              <select id="ak-irany">\n                <option value="">—</option>\n                <option>Bal</option><option>Jobb</option><option>Közép</option><option>Nincs</option>\n              </select>\n            </div>\n            <div class="form-group"><label>Tokbeépítés</label>\n              <select id="ak-tokbeep">\n                <option value="">—</option>\n                <option>Vakolat alá</option><option>Vakolatra</option><option>Renovációs tok</option>\n              </select>\n            </div>\n          </div>\n          <div class="toggle-row">\n            <span class="toggle-label">Redőny előkészítés alapértelmezett?</span>\n            <label class="toggle">\n              <input type="checkbox" id="ak-redony-check">\n              <span class="toggle-slider"></span>\n            </label>\n          </div>\n          <div class="grid-2" style="padding-top:10px;">\n            <div class="form-group"><label>Redőny típus</label><select id="ak-redony-tipus"></select></div>\n            <div class="form-group"><label>Redőny lamella</label><select id="ak-redony-lamella"></select></div>\n          </div>\n          <button class="btn btn-primary btn-small" onclick="saveAlapkeszlet()">Alapkészlet mentése</button>\n        </div>\n      </div>\n\n      <!-- Felmérési szám -->\n      <div class="admin-section">\n        <div class="admin-section-head" onclick="toggleAdminSection(this)">\n          <h3>🔢 Felmérési szám</h3><span>▼</span>\n        </div>\n        <div class="admin-section-body">\n          <div class="info-box">Jelenlegi számláló: <strong id="current-counter">—</strong></div>\n          <div class="form-group"><label>Számláló visszaállítása</label><input type="number" id="counter-reset-val" placeholder="pl. 1" min="1"></div>\n          <button class="btn btn-primary btn-small" onclick="resetCounter()">Számláló visszaállítása</button>\n        </div>\n      </div>\n\n      <!-- Felhasználók -->\n      <div class="admin-section">\n        <div class="admin-section-head" onclick="toggleAdminSection(this)">\n          <h3>👤 Felhasználók</h3><span>▼</span>\n        </div>\n        <div class="admin-section-body">\n          <ul class="option-list" id="users-list"></ul>\n          <div class="sep"></div>\n          <div class="grid-2">\n            <div class="form-group"><label>Felhasználónév</label><input type="text" id="new-user-name"></div>\n            <div class="form-group"><label>Jelszó</label><input type="password" id="new-user-pass"></div>\n          </div>\n          <div class="form-group"><label>Név</label><input type="text" id="new-user-nev" placeholder="Kovács Péter"></div>\n          <div class="form-group"><label>Szerepkör</label>\n            <select id="new-user-role">\n              <option value="felmero">Felmérő</option>\n              <option value="admin">Admin</option>\n            </select>\n          </div>\n          <button class="btn btn-primary btn-small" onclick="addUser()">+ Felhasználó hozzáadása</button>\n        </div>\n      </div>\n\n      <!-- Helyszín kérdések -->\n      <div class="admin-section">\n        <div class="admin-section-head" onclick="toggleAdminSection(this)">\n          <h3>📍 Helyszín kérdések</h3><span>▼</span>\n        </div>\n        <div class="admin-section-body">\n          <ul class="option-list" id="helyszin-kerdesek-list"></ul>\n          <div class="sep"></div>\n          <div class="grid-2">\n            <div class="form-group"><label>Kérdés szövege</label><input type="text" id="new-hs-label" placeholder="pl. Van erkély?"></div>\n            <div class="form-group"><label>Válasz lehetőségek (vesszővel)</label><input type="text" id="new-hs-opciok" placeholder="Igen, Nem, Nem tudni"></div>\n          </div>\n          <button class="btn btn-primary btn-small" onclick="addHelyszinKerdes()">+ Kérdés hozzáadása</button>\n        </div>\n      </div>\n\n      <!-- Opció listák -->\n      <div id="admin-option-sections"></div>\n\n      <!-- Export / Import -->\n      <div class="admin-section">\n        <div class="admin-section-head" onclick="toggleAdminSection(this)">\n          <h3>📦 Export / Import</h3><span>▼</span>\n        </div>\n        <div class="admin-section-body">\n          <div class="info-box">Exportáld a beállításokat JSON fájlba, majd importáld a tableteken.</div>\n          <div style="display:flex;gap:10px;flex-wrap:wrap;">\n            <button class="btn btn-secondary" onclick="exportJSON()">⬇ Export JSON</button>\n            <button class="btn btn-secondary" onclick="document.getElementById(\'import-file\').click()">⬆ Import JSON</button>\n            <input type="file" id="import-file" accept=".json" style="display:none" onchange="importJSON(this)">\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<!-- EDIT MODAL -->\n<div class="modal-overlay" id="edit-modal">\n  <div class="modal">\n    <div class="modal-header">\n      <div class="modal-title">Tétel részletei</div>\n      <button class="btn btn-icon" onclick="closeEditModal()">✕</button>\n    </div>\n    <div class="modal-body" id="edit-modal-body"></div>\n    <div class="modal-footer">\n      <button class="btn btn-danger btn-small" onclick="deleteItemFromModal()">🗑 Törlés</button>\n      <button class="btn btn-secondary btn-small" onclick="closeEditModal()">Bezárás</button>\n      <button class="btn btn-primary btn-small" onclick="saveEditedItem()">💾 Mentés</button>\n    </div>\n  </div>\n</div>\n\n<div class="toast" id="toast"></div>\n<div id="print-area"></div>';

  // App inicializálása
  // ═══════════════════════════════════════════
//  DEFAULT DB
// ═══════════════════════════════════════════
const DEFAULT_DB = {
  ceg: { nev:'Ablak Kft.', email:'iroda@ablak.hu', tel:'+36 1 234 5678', web:'www.ablak.hu', cim:'1234 Budapest, Minta u. 1.' },
  users: [
    { username:'admin', password:'1', role:'admin', nev:'Adminisztrátor' },
    { username:'felmero1', password:'1', role:'felmero', nev:'Kovács Péter' }
  ],
  alapkeszlet: {
    profil:'', uveg:'', szin:'', nyitas:'', irany:'', tokbeep:'',
    redony: false, redonyTipus:'', redonyLamella:''
  },
  counter: 1,
  helyszin_kerdesek: [
    { id:'lift', label:'Van lift?', opciok:['Igen','Nem','Nem tudni'] },
    { id:'lift_fer', label:'Befér az áru a liftbe?', opciok:['Igen','Nem','Nem biztos'] },
    { id:'emelet', label:'Hányadik emelet?', opciok:['Földszint','1. emelet','2. emelet','3. emelet','4. emelet','5+ emelet'] },
    { id:'parkolas', label:'Parkolás', opciok:['Ingyenes','Fizetős','Nehéz parkolni','Udvari parkoló'] },
    { id:'tobb_ember', label:'Kell több ember a pakoláshoz?', opciok:['Igen','Nem'] },
    { id:'hulladek', label:'Kell hulladék elszállítás?', opciok:['Igen','Nem'] },
  ],
  options: {
    profilok:[
      {nev:'VEKA 70 AD',sub:'70mm, 6 kamra'},{nev:'VEKA 76 AD',sub:'76mm, 6 kamra'},
      {nev:'Salamander BluEvolution 73',sub:'73mm'},{nev:'Rehau Geneo',sub:'86mm'},
      {nev:'Schüco AWS 70',sub:'alumínium'},{nev:'Alumil M9600',sub:'alumínium'},
    ],
    uvegek:[
      {nev:'4/16/4 Ar – Low-E',sub:'Ug=1.0'},{nev:'4/14/4/14/4 Triple',sub:'Ug=0.6'},
      {nev:'4/16/4 Biztonsági (VSG)',sub:''},{nev:'4/16/4 Hangcsillapító',sub:'Rw=44dB'},
      {nev:'4/16/4 Napvédő',sub:'g=0.35'},
    ],
    uveg_osztalyok:[
      {nev:'P2A',sub:'alapbiztonsági'},{nev:'P4A',sub:'betörésgátló'},
      {nev:'P6B',sub:'robbantásgátló'},{nev:'Nincs követelmény',sub:''},
    ],
    redony_tipusok:[
      {nev:'PVC redőny',sub:''},{nev:'Alumínium extrudált',sub:''},{nev:'Alumínium rollált',sub:''},{nev:'Páncélredőny',sub:''},
    ],
    redony_lamellak:[
      {nev:'PVC C-45 fehér',sub:''},{nev:'PVC C-45 bézs',sub:''},
      {nev:'ALU extrudált 55/10',sub:''},{nev:'ALU rollált 37/8',sub:''},{nev:'Páncél 77/8',sub:''},
    ],
    szinek:[
      {nev:'Fehér (RAL 9016)',sub:''},{nev:'Antracit (RAL 7016)',sub:''},
      {nev:'Barna (RAL 8014)',sub:''},{nev:'Arany tölgy dekór',sub:''},
      {nev:'Dió dekór',sub:''},{nev:'Fekete (RAL 9005)',sub:''},
      {nev:'Ezüst (RAL 9006)',sub:''},{nev:'Egyéb (RAL)',sub:''},
    ],
    szunyoghalo_tipusok:[
      {nev:'Fix keretes',sub:''},{nev:'Szárnyba nyíló',sub:''},
      {nev:'Felcsévélős',sub:''},{nev:'Plisszé',sub:''},
    ],
    rolo_tipusok:[
      {nev:'Beltéri roló',sub:''},{nev:'Sötétítő (blackout)',sub:''},{nev:'Screen roló',sub:''},{nev:'Dupla roló',sub:''},
    ],
    rolo_anyagok:[
      {nev:'Fehér szövet',sub:''},{nev:'Szürke szövet',sub:''},
      {nev:'Screen 5%',sub:''},{nev:'Blackout fehér',sub:''},
    ],
    zsaluzia_tipusok:[
      {nev:'Alumínium zsalúzia',sub:''},{nev:'Fa zsalúzia',sub:''},{nev:'Vertikális zsalúzia',sub:''},
    ],
    garazs_tipusok:[
      {nev:'Szekcionált (acél)',sub:''},{nev:'Szekcionált (fa dekór)',sub:''},
      {nev:'Szekcionált (üveg betétes)',sub:''},{nev:'Billenő kapu',sub:''},
    ],
    pergola_tipusok:[
      {nev:'Alumínium (forgó lamellas)',sub:''},{nev:'Alumínium (fix)',sub:''},{nev:'Fa pergola',sub:''},
    ],
    nyitasi_modok:[
      {nev:'Fix (nem nyitható)',sub:''},{nev:'Bukó-nyíló (BNY)',sub:''},
      {nev:'Nyíló (NY)',sub:''},{nev:'Bukó (BU)',sub:''},
      {nev:'Toló',sub:''},{nev:'Billenő',sub:''},
      {nev:'Csúszó-toló (PSK)',sub:''},{nev:'Harmonika',sub:''},
    ],
    nyilasiranyok:[
      {nev:'Bal',sub:''},{nev:'Jobb',sub:''},
      {nev:'Közép',sub:''},{nev:'Nincs (fix/toló)',sub:''},
    ],
    tokbeepitesi_modok:[
      {nev:'Vakolat alá',sub:''},{nev:'Vakolatra',sub:''},
      {nev:'Renovációs tok',sub:''},{nev:'Egyéb',sub:''},
    ],
    takaroles_tipusok:[
      {nev:'Csak kívül',sub:''},{nev:'Csak belül',sub:''},{nev:'Kívül és belül',sub:''},
    ],
    redony_vezerlések:[
      {nev:'Kézi (szalagos)',sub:''},{nev:'Kézi (kurblis)',sub:''},
      {nev:'Motoros (230V)',sub:''},{nev:'Motoros (Smart)',sub:''},{nev:'Solar motoros',sub:''},
    ],
    redony_elhelyezések:[
      {nev:'Méreten belül (MB)',sub:''},{nev:'Méreten kívül (MK)',sub:''},
    ],
    szunyoghalo_rogzitesek:[
      {nev:'Fix (keret)',sub:''},{nev:'Nyíló (szárnyba)',sub:''},
      {nev:'Felcsévélős',sub:''},{nev:'Plisszé',sub:''},
    ],
    rolo_vezerlések:[
      {nev:'Láncos kézi',sub:''},{nev:'Motoros (230V)',sub:''},
      {nev:'Motoros (Smart)',sub:''},{nev:'Spring (rugós)',sub:''},
    ],
    rolo_rogzitesek:[
      {nev:'Mennyezeti',sub:''},{nev:'Fali',sub:''},
      {nev:'Tok felső',sub:''},{nev:'Ablakszárny',sub:''},
    ],
    zsaluzia_lamellak:[
      {nev:'16 mm (micro)',sub:''},{nev:'25 mm',sub:''},
      {nev:'50 mm',sub:''},{nev:'89 mm (vertikális)',sub:''},
    ],
    zsaluzia_vezerlések:[
      {nev:'Kézi (zsinóros)',sub:''},{nev:'Motoros',sub:''},
    ],
    garazs_nyitasok:[
      {nev:'Szekcionált (felfutó)',sub:''},{nev:'Billenő',sub:''},
      {nev:'Toló',sub:''},{nev:'Forgó (kétrészes)',sub:''},
    ],
    garazs_meghajtasok:[
      {nev:'Kézi',sub:''},{nev:'Motoros (230V)',sub:''},{nev:'Motoros (Smart)',sub:''},
    ],
    garazs_szigetelések:[
      {nev:'Nincs (egyrétegű)',sub:''},{nev:'20mm PU hab',sub:''},
      {nev:'40mm PU hab',sub:''},{nev:'67mm PU hab',sub:''},
    ],
    pergola_iranyok:[
      {nev:'Forgó lamella',sub:''},{nev:'Fix lamella',sub:''},{nev:'Nyitható tető',sub:''},
    ],
    pergola_vezerlések:[
      {nev:'Kézi',sub:''},{nev:'Motoros (távirányító)',sub:''},{nev:'Motoros (Smart)',sub:''},
    ],
    pergola_oldalfalak:[
      {nev:'Nincs',sub:''},{nev:'Üveg oldalfal',sub:''},
      {nev:'Screen oldalfal',sub:''},{nev:'Vászon oldalfal',sub:''},
    ],
    ajto_tok_tipusok:[
      {nev:'Normál tok',sub:''},{nev:'Blokk tok',sub:''},
      {nev:'Tégla tok',sub:''},{nev:'Pakoló tok',sub:''},
    ],
    ajto_kilincsek:[
      {nev:'Igen – kilincs+zár',sub:''},{nev:'Igen – kilincs, zár nélkül',sub:''},{nev:'Nem',sub:''},
    ],
    pf_elhelyezések:[
      {nev:'Méreten belül (MB)',sub:''},{nev:'Méreten kívül (MK)',sub:''},
    ],
    ajto_lap_tipusok:[
      {nev:'Sima tömör',sub:''},{nev:'Üvegbetétes (1/3)',sub:''},
      {nev:'Üvegbetétes (1/2)',sub:''},{nev:'Kazettás',sub:''},
    ],
    ajto_szinek:[
      {nev:'Fehér',sub:''},{nev:'Szürke',sub:''},{nev:'Natúr tölgy',sub:''},{nev:'Fekete',sub:''},
    ],
  }
};

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let db = JSON.parse(localStorage.getItem('nf_db') || 'null') || JSON.parse(JSON.stringify(DEFAULT_DB));
let items = JSON.parse(localStorage.getItem('nf_items') || '[]');
let currentUser = null;
let currentType = null;
let currentFotoBase64 = null;
let editingIndex = null;
let currentSzerkezetElemek = [];
let autoSaveTimer = null;

function saveDB(){ localStorage.setItem('nf_db', JSON.stringify(db)); }
function saveItems(){ localStorage.setItem('nf_items', JSON.stringify(items)); }

// ═══════════════════════════════════════════
//  AUTOSAVE
// ═══════════════════════════════════════════
function autoSave(){
  const ind = document.getElementById('autosave-indicator');
  if(ind){ ind.textContent='⏳ Mentés...'; ind.className='autosave saving'; }
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(()=>{
    saveUgyfelAdatok();
    const now = new Date();
    const t = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
    if(ind){ ind.textContent='💾 Mentve '+t; ind.className='autosave saved'; }
  }, 800);
}

function saveUgyfelAdatok(){
  const u = {
    nev: document.getElementById('u-nev')?.value||'',
    cim: document.getElementById('u-cim')?.value||'',
    felmero: document.getElementById('u-felmero')?.value||'',
    datum: document.getElementById('u-datum')?.value||'',
    tel: document.getElementById('u-tel')?.value||'',
    munkatipus: document.getElementById('u-munkatipus')?.value||'',
    altmegj: document.getElementById('u-altmegj')?.value||'',
    statusz: document.getElementById('statusz-select')?.value||'',
  };
  localStorage.setItem('nf_ugyfel', JSON.stringify(u));
}

function loadUgyfelAdatok(){
  const u = JSON.parse(localStorage.getItem('nf_ugyfel')||'{}');
  if(u.nev) document.getElementById('u-nev').value=u.nev;
  if(u.cim) document.getElementById('u-cim').value=u.cim;
  if(u.felmero) document.getElementById('u-felmero').value=u.felmero;
  if(u.datum) document.getElementById('u-datum').value=u.datum;
  if(u.tel) document.getElementById('u-tel').value=u.tel;
  if(u.munkatipus) document.getElementById('u-munkatipus').value=u.munkatipus;
  if(u.altmegj) document.getElementById('u-altmegj').value=u.altmegj;
  if(u.statusz){ document.getElementById('statusz-select').value=u.statusz; setStatusz(u.statusz); }
}

// ═══════════════════════════════════════════
//  FELMÉRÉSI SZÁM
// ═══════════════════════════════════════════
function getFelmeresszam(){
  const year = new Date().getFullYear();
  const num = String(db.counter||1).padStart(4,'0');
  return `FM-${year}-${num}`;
}

function incrementCounter(){
  db.counter = (db.counter||1) + 1;
  saveDB();
}

function resetCounter(){
  const val = parseInt(document.getElementById('counter-reset-val').value)||1;
  db.counter = val;
  saveDB();
  document.getElementById('current-counter').textContent = getFelmeresszam();
  toast('✅ Számláló visszaállítva');
}

// ═══════════════════════════════════════════
//  STÁTUSZ
// ═══════════════════════════════════════════
function setStatusz(val){
  const disp = document.getElementById('statusz-display');
  if(!disp) return;
  if(val==='vegleges') disp.textContent='✅ VÉGLEGES';
  else if(val==='ujrameres') disp.textContent='⚠️ ÚJRAMÉRÉS SZÜKSÉGES';
  else disp.textContent='—';
  autoSave();
}

// ═══════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════
function toast(msg,dur=2500){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}

// ═══════════════════════════════════════════
//  AUTH + INIT
// ═══════════════════════════════════════════
function downloadSelf(){
  const a=document.createElement('a');
  a.href=window.location.href;
  a.download='index.html';
  a.click();
  toast('⬇ index.html letöltve!');
}

function doLogout(){
  currentUser=null;
  document.getElementById('app-header').style.display='none';
  location.reload();
}

// ═══════════════════════════════════════════
//  PAGE NAV
// ═══════════════════════════════════════════
function showPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b=>b.classList.remove('active'));
  const p=document.getElementById(id); if(p) p.classList.add('active');
  if(btn) btn.classList.add('active');
  if(id==='page-tetelek') renderItems();
  if(id==='page-pdf') updatePDFSummary();
  if(id==='page-admin') loadAdminPanel();
}

// ═══════════════════════════════════════════
//  GPS
// ═══════════════════════════════════════════
function getGPS(){
  const btn=document.getElementById('gps-btn');
  const st=document.getElementById('gps-status');
  if(!navigator.geolocation){st.textContent='❌ Nem támogatott';return;}
  btn.textContent='⏳'; btn.disabled=true; st.textContent='Helymeghatározás...';
  navigator.geolocation.getCurrentPosition(async(pos)=>{
    const {latitude:lat,longitude:lon}=pos.coords;
    st.textContent='📍 Cím keresése...';
    try{
      const r=await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=hu`);
      const d=await r.json();
      document.getElementById('u-cim').value=d.display_name||`${lat.toFixed(5)},${lon.toFixed(5)}`;
    }catch{document.getElementById('u-cim').value=`${lat.toFixed(5)},${lon.toFixed(5)}`;}
    btn.textContent='📍 GPS'; btn.disabled=false; st.textContent='✅';
    setTimeout(()=>st.textContent='',2500); autoSave();
  },(e)=>{
    st.textContent='❌ Nem sikerült'; btn.textContent='📍 GPS'; btn.disabled=false;
    setTimeout(()=>st.textContent='',2500);
  },{enableHighAccuracy:true,timeout:10000});
}

// ═══════════════════════════════════════════
//  HELYSZÍN INFO
// ═══════════════════════════════════════════
function renderHelyszinInfo(){
  const c=document.getElementById('helyszin-info-container'); if(!c) return;
  const ks=db.helyszin_kerdesek||[];
  if(ks.length===0){c.innerHTML='<div style="color:var(--gray3);font-size:13px;">Nincs beállított kérdés.</div>';return;}
  c.innerHTML=ks.map(k=>`
    <div class="toggle-row" style="flex-wrap:wrap;gap:8px;">
      <span class="toggle-label" style="min-width:160px;">${k.label}</span>
      <select class="helyszin-select" id="hs-${k.id}" onchange="autoSave()">
        <option value="">— Válasszon —</option>
        ${k.opciok.map(o=>`<option value="${o}">${o}</option>`).join('')}
      </select>
    </div>
  `).join('');
}

function getHelyszinValaszok(){
  const ks=db.helyszin_kerdesek||[];
  const r={};
  ks.forEach(k=>{const el=document.getElementById('hs-'+k.id);if(el&&el.value)r[k.label]=el.value;});
  return r;
}

// ═══════════════════════════════════════════
//  TYPE GRID
// ═══════════════════════════════════════════
const TYPES=[
  {id:'ablak',label:'Ablak',icon:'🪟',secs:['sec-ablak']},
  {id:'bejajto',label:'Bejárati ajtó',icon:'🚪',secs:['sec-ablak']},
  {id:'belsoajto',label:'Belső ajtó',icon:'🚪',secs:['sec-belsoajto']},
  {id:'redony',label:'Redőny',icon:'🔲',secs:['sec-redony']},
  {id:'rolo',label:'Roló',icon:'🟫',secs:['sec-rolo']},
  {id:'zsaluzia',label:'Zsalúzia',icon:'🔳',secs:['sec-zsaluzia']},
  {id:'szunyoghalo',label:'Szúnyogháló',icon:'🕸️',secs:['sec-szunyoghalo']},
  {id:'garazs',label:'Garázskapu',icon:'🏠',secs:['sec-garazs']},
  {id:'pergola',label:'Pergola',icon:'⛱️',secs:['sec-pergola']},
];

function initTypeGrid(){
  const g=document.getElementById('type-grid');
  g.innerHTML=TYPES.map(t=>`
    <button class="type-btn" onclick="selectType('${t.id}',this)">
      <span class="type-icon">${t.icon}</span>${t.label}
    </button>
  `).join('');
}

function selectType(id,btn){
  document.querySelectorAll('.type-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected'); currentType=id;
  document.getElementById('item-form').style.display='block';
  const t=TYPES.find(x=>x.id===id);
  document.getElementById('form-type-title').textContent=(t?t.label:'Tétel')+' adatai';
  document.querySelectorAll('[id^="sec-"]').forEach(s=>s.classList.remove('visible'));
  if(t) t.secs.forEach(s=>{const el=document.getElementById(s);if(el)el.classList.add('visible');});
  // Alapkészlet betöltése ablakhoz
  if(id==='ablak'||id==='bejajto') applyAlapkeszlet();
  setTimeout(()=>document.getElementById('item-form').scrollIntoView({behavior:'smooth',block:'start'}),100);
}

function applyAlapkeszlet(){
  const ak=db.alapkeszlet||{};
  if(ak.profil) setSelectVal('f-profil',ak.profil);
  if(ak.uveg) setSelectVal('f-uveg',ak.uveg);
  if(ak.szin) setSelectVal('f-szin',ak.szin);
  if(ak.nyitas) setSelectVal('f-nyitas',ak.nyitas);
  if(ak.irany) setSelectVal('f-irany',ak.irany);
  if(ak.tokbeep) setSelectVal('f-tokbeep',ak.tokbeep);
}

function applyAlapkeszletRedony(){
  const ak=db.alapkeszlet||{};
  if(document.getElementById('t-redony-prep')?.checked){
    if(ak.redonyTipus) setSelectVal('f-redony-tipus',ak.redonyTipus);
    if(ak.redonyLamella) setSelectVal('f-redony-lamella',ak.redonyLamella);
  }
}

function setSelectVal(id,val){
  const el=document.getElementById(id);
  if(!el) return;
  for(let o of el.options){ if(o.value===val||o.text.startsWith(val)){el.value=o.value;break;} }
}

function cancelItemForm(){
  document.getElementById('item-form').style.display='none';
  document.querySelectorAll('.type-btn').forEach(b=>b.classList.remove('selected'));
  currentType=null; clearItemForm();
}

function clearItemForm(){
  ['f-helyiseg','f-megj'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  ['f-szelesseg','f-magassag'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  document.getElementById('f-db').value='1';
  document.getElementById('t-megj').checked=false;
  document.getElementById('megj-sec').classList.remove('visible');
  document.getElementById('t-redony-prep').checked=false;
  document.getElementById('redony-prep-sec').classList.remove('visible');
  document.getElementById('t-szunyog').checked=false;
  document.getElementById('szunyog-sec').classList.remove('visible');
  document.getElementById('t-oszto').checked=false;
  document.getElementById('oszto-sec').classList.remove('visible');
  document.getElementById('t-pf').checked=false;
  document.getElementById('pf-sec').classList.remove('visible');
  document.querySelectorAll('#item-form select').forEach(s=>s.selectedIndex=0);
  currentFotoBase64=null;
  document.getElementById('f-foto').value='';
  document.getElementById('foto-preview-container').innerHTML='';
}

function toggleCond(id,show){
  const el=document.getElementById(id);if(el)el.classList.toggle('visible',show);
}

// ═══════════════════════════════════════════
//  FOTÓ
// ═══════════════════════════════════════════
function handleFotoUpload(input){
  const file=input.files[0]; if(!file) return;
  if(file.size>5*1024*1024){toast('❌ Max 5MB!');return;}
  const r=new FileReader();
  r.onload=e=>{currentFotoBase64=e.target.result;renderFotoPreview(currentFotoBase64);};
  r.readAsDataURL(file);
}
function renderFotoPreview(src){
  const c=document.getElementById('foto-preview-container');
  if(!src){c.innerHTML='';return;}
  c.innerHTML=`<div class="foto-preview"><img src="${src}"><button class="foto-preview-remove" onclick="removeFoto()">✕</button></div>`;
}
function removeFoto(){
  currentFotoBase64=null;
  document.getElementById('f-foto').value='';
  document.getElementById('foto-preview-container').innerHTML='';
}
function removeFotoFromItem(i){items[i].foto=null;saveItems();openEditModal(i);toast('🗑 Fotó törölve');}
function addFotoToItem(i,input){
  const file=input.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=e=>{items[i].foto=e.target.result;saveItems();openEditModal(i);toast('✅ Fotó hozzáadva');};
  r.readAsDataURL(file);
}

// ═══════════════════════════════════════════
//  POPULATE SELECTS
// ═══════════════════════════════════════════
function populateSelects(){
  const o=db.options;
  fillSelect('f-profil',o.profilok); fillSelect('f-uveg',o.uvegek);
  fillSelect('f-uveg-osztaly',o.uveg_osztalyok);
  fillSelect('f-nyitas',o.nyitasi_modok);
  fillSelect('f-irany',o.nyilasiranyok);
  fillSelect('f-tokbeep',o.tokbeepitesi_modok);
  fillSelect('f-takaroles',[{nev:'Nincs',sub:''},...(o.takaroles_tipusok||[])]);
  fillSelect('f-szin',o.szinek);
  fillSelect('f-pf-elhelyezes',o.pf_elhelyezések);
  fillSelect('f-redony-tipus',o.redony_tipusok); fillSelect('f-redony-lamella',o.redony_lamellak);
  fillSelect('f-redony-vez',o.redony_vezerlések);
  fillSelect('f-redony-elhelyezes',o.redony_elhelyezések);
  fillSelect('f-szunyog-tipus',o.szunyoghalo_tipusok);
  fillSelect('f-ajto-lap',o.ajto_lap_tipusok);
  fillSelect('f-ajto-tok',o.ajto_tok_tipusok);
  fillSelect('f-ajto-kilincs',o.ajto_kilincsek);
  fillSelect('f-ajto-szin',o.ajto_szinek);
  fillSelect('f-onallo-redony-tipus',o.redony_tipusok); fillSelect('f-onallo-lamella',o.redony_lamellak);
  fillSelect('f-onallo-vez',o.redony_vezerlések);
  fillSelect('f-onallo-szin',o.szinek);
  fillSelect('f-onallo-elhelyezes',o.redony_elhelyezések);
  fillSelect('f-onallo-beep',[{nev:'Tokba épített'},{nev:'Tokra szerelékes'},{nev:'Falpárkányos'},{nev:'Mennyezeti'}]);
  fillSelect('f-rolo-tipus',o.rolo_tipusok); fillSelect('f-rolo-anyag',o.rolo_anyagok);
  fillSelect('f-rolo-vez',o.rolo_vezerlések);
  fillSelect('f-rolo-rogzites',o.rolo_rogzitesek);
  fillSelect('f-zsal-tipus',o.zsaluzia_tipusok);
  fillSelect('f-zsal-lamella',o.zsaluzia_lamellak);
  fillSelect('f-zsal-szin',o.szinek);
  fillSelect('f-zsal-vez',o.zsaluzia_vezerlések);
  fillSelect('f-garazs-tipus',o.garazs_tipusok);
  fillSelect('f-garazs-nyitas',o.garazs_nyitasok);
  fillSelect('f-garazs-meghajtás',o.garazs_meghajtasok);
  fillSelect('f-garazs-szin',o.szinek);
  fillSelect('f-garazs-szigetelés',o.garazs_szigetelések);
  fillSelect('f-pergola-tipus',o.pergola_tipusok);
  fillSelect('f-pergola-irany',o.pergola_iranyok);
  fillSelect('f-pergola-vez',o.pergola_vezerlések);
  fillSelect('f-pergola-szin',o.szinek);
  fillSelect('f-pergola-oldalfal',o.pergola_oldalfalak);
  fillSelect('f-szunyog-onallo',o.szunyoghalo_tipusok);
  fillSelect('f-szunyog-rogzites',o.szunyoghalo_rogzitesek);
  fillSelect('f-szunyog-szin',o.szinek);
  fillSelect('sze-profil',o.profilok); fillSelect('sze-uveg',o.uvegek); fillSelect('sze-szin',o.szinek);
  fillSelect('sze-nyitas',o.nyitasi_modok); fillSelect('sze-irany',o.nyilasiranyok);
}

function fillSelect(id,items){
  const el=document.getElementById(id); if(!el) return;
  el.innerHTML='<option value="">— Válasszon —</option>'+
    (items||[]).map(i=>`<option value="${i.nev}">${i.nev}${i.sub?' – '+i.sub:''}</option>`).join('');
}

// ═══════════════════════════════════════════
//  SAVE ITEM
// ═══════════════════════════════════════════
function saveItem(){
  if(!currentType){toast('Válassz típust!');return;}
  const helyiseg=document.getElementById('f-helyiseg').value.trim();
  if(!helyiseg){toast('Add meg a helyiség nevét!');document.getElementById('f-helyiseg').focus();return;}

  const item={
    id:Date.now(), type:currentType,
    typeLabel:TYPES.find(t=>t.id===currentType)?.label||currentType,
    helyiseg,
    szelesseg:document.getElementById('f-szelesseg').value,
    magassag:document.getElementById('f-magassag').value,
    db:document.getElementById('f-db').value||'1',
    megj:document.getElementById('t-megj').checked?document.getElementById('f-megj').value.trim():'',
    createdAt:Date.now(), modifiedAt:null,
  };

  if(item.foto=currentFotoBase64||null);

  if(currentType==='ablak'||currentType==='bejajto'){
    item.profil=document.getElementById('f-profil').value;
    item.uveg=document.getElementById('f-uveg').value;
    item.uvegOsztaly=document.getElementById('f-uveg-osztaly').value;
    item.nyitas=document.getElementById('f-nyitas').value;
    item.irany=document.getElementById('f-irany').value;
    item.szin=document.getElementById('f-szin').value;
    item.tokbeep=document.getElementById('f-tokbeep').value;
    item.takaroles=document.getElementById('f-takaroles').value;
    item.pf=document.getElementById('t-pf').checked;
    if(item.pf) item.pfElhelyezes=document.getElementById('f-pf-elhelyezes').value;
    item.redonyPrep=document.getElementById('t-redony-prep').checked;
    if(item.redonyPrep){
      item.redonyTipus=document.getElementById('f-redony-tipus').value;
      item.redonyVez=document.getElementById('f-redony-vez').value;
      item.redonyLamella=document.getElementById('f-redony-lamella').value;
      item.redonyElhelyezes=document.getElementById('f-redony-elhelyezes').value;
    }
    item.szunyog=document.getElementById('t-szunyog').checked;
    if(item.szunyog){
      item.szunyogTipus=document.getElementById('f-szunyog-tipus').value;
      item.szunyogSz=document.getElementById('f-szunyog-sz').value;
      item.szunyogM=document.getElementById('f-szunyog-m').value;
    }
    item.oszto=document.getElementById('t-oszto').checked;
    if(item.oszto) item.osztoLeiras=document.getElementById('f-oszto').value;
  }
  if(currentType==='belsoajto'){
    item.ajtoLap=document.getElementById('f-ajto-lap').value;
    item.ajtoTok=document.getElementById('f-ajto-tok').value;
    item.ajtoIrany=document.getElementById('f-ajto-irany').value;
    item.ajtoFalv=document.getElementById('f-ajto-falv').value;
    item.ajtoSzin=document.getElementById('f-ajto-szin').value;
    item.ajtoKilincs=document.getElementById('f-ajto-kilincs').value;
  }
  if(currentType==='redony'){
    item.redonyTipus=document.getElementById('f-onallo-redony-tipus').value;
    item.redonyVez=document.getElementById('f-onallo-vez').value;
    item.redonyLamella=document.getElementById('f-onallo-lamella').value;
    item.szin=document.getElementById('f-onallo-szin').value;
    item.redonyBeep=document.getElementById('f-onallo-beep').value;
    item.redonyElhelyezes=document.getElementById('f-onallo-elhelyezes').value;
  }
  if(currentType==='rolo'){
    item.roloTipus=document.getElementById('f-rolo-tipus').value;
    item.roloVez=document.getElementById('f-rolo-vez').value;
    item.roloAnyag=document.getElementById('f-rolo-anyag').value;
    item.roloRogz=document.getElementById('f-rolo-rogzites').value;
  }
  if(currentType==='zsaluzia'){
    item.zsalTipus=document.getElementById('f-zsal-tipus').value;
    item.zsalLamella=document.getElementById('f-zsal-lamella').value;
    item.zsalSzin=document.getElementById('f-zsal-szin').value;
    item.zsalVez=document.getElementById('f-zsal-vez').value;
  }
  if(currentType==='garazs'){
    item.garazsTipus=document.getElementById('f-garazs-tipus').value;
    item.garazsNyitas=document.getElementById('f-garazs-nyitas').value;
    item.garazsMeghajtás=document.getElementById('f-garazs-meghajtás').value;
    item.garazsSzin=document.getElementById('f-garazs-szin').value;
    item.garazsSzig=document.getElementById('f-garazs-szigetelés').value;
    item.garazsMeret=document.getElementById('f-garazs-meret').value;
  }
  if(currentType==='pergola'){
    item.pergolaTipus=document.getElementById('f-pergola-tipus').value;
    item.pergolaIrany=document.getElementById('f-pergola-irany').value;
    item.pergolaVez=document.getElementById('f-pergola-vez').value;
    item.pergolaSzin=document.getElementById('f-pergola-szin').value;
    item.pergolaMely=document.getElementById('f-pergola-mely').value;
    item.pergolaOldalfal=document.getElementById('f-pergola-oldalfal').value;
  }
  if(currentType==='szunyoghalo'){
    item.szunyogTipus=document.getElementById('f-szunyog-onallo').value;
    item.szunyogRogz=document.getElementById('f-szunyog-rogzites').value;
    item.szunyogSzin=document.getElementById('f-szunyog-szin').value;
  }

  items.push(item);
  saveItems(); updateBadge(); cancelItemForm();
  incrementCounter();
  toast('✅ Tétel mentve!');
}

// ═══════════════════════════════════════════
//  RENDER ITEMS
// ═══════════════════════════════════════════
function updateBadge(){
  const b=document.getElementById('badge-count');
  if(items.length>0){b.textContent=items.length;b.style.display='inline-flex';}
  else b.style.display='none';
}

function renderItems(){
  const container=document.getElementById('item-list-container');
  const actions=document.getElementById('tetelek-actions');
  const summary=document.getElementById('ugyfel-summary');
  updateBadge();

  const nev=document.getElementById('u-nev')?.value;
  const cim=document.getElementById('u-cim')?.value;
  if(nev||cim){
    summary.style.display='block';
    summary.innerHTML=`
      ${nev?`<div class="summary-row"><span class="summary-key">Ügyfél:</span><span class="summary-val">${nev}</span></div>`:''}
      ${cim?`<div class="summary-row"><span class="summary-key">Helyszín:</span><span class="summary-val">${cim}</span></div>`:''}
      <div class="summary-row"><span class="summary-key">Tételek:</span><span class="summary-val">${items.length} db</span></div>
      <div class="summary-row"><span class="summary-key">Felmérési szám:</span><span class="summary-val">${getFelmeresszam()}</span></div>
    `;
  } else summary.style.display='none';

  if(items.length===0){
    container.innerHTML=`<div class="empty-state"><div class="es-icon">📋</div><h3>Még nincs tétel</h3><p>Menj a Felmérés fülre!</p></div>`;
    actions.style.display='none'; return;
  }
  actions.style.display='flex';

  container.innerHTML=items.map((item,i)=>{
    if(item.isSzerkezet){
      const tw=item.totalW||item.elemek.reduce((s,e)=>s+parseInt(e.szelesseg||0),0);
      const mh=item.maxH||Math.max(...item.elemek.map(e=>parseInt(e.magassag||0)));
      return `
        <div class="szerkezet-card">
          <div class="szerkezet-header">
            <div>
              <div class="szerkezet-title">🔗 ${item.nev}</div>
              <div style="font-size:10px;color:var(--orange);margin-top:2px;">${item.illesztes} · ${item.elemek.length} elem · ${tw}×${mh}mm</div>
            </div>
            <div style="display:flex;gap:6px;align-items:center;">
              ${item.modifiedAt?`<span class="modified-badge">✏️ ${formatTime(item.modifiedAt)}</span>`:''}
              <span class="badge badge-orange">#${i+1}</span>
              <button class="btn btn-icon" onclick="copyItem(${i})" title="Másolás">📋</button>
              <button class="btn btn-icon" onclick="deleteItem(${i})">🗑</button>
            </div>
          </div>
          <div class="szerkezet-elemek">
            ${item.elemek.map((e,ei)=>`
              <div class="szerkezet-elem">
                <div class="szerkezet-elem-num">#${ei+1} ${e.typeLabel}</div>
                <div class="szerkezet-elem-tipus">${e.helyiseg}</div>
                <div class="szerkezet-elem-meret">${e.szelesseg}×${e.magassag}mm</div>
                <div class="szerkezet-elem-info">
                  ${e.profil?e.profil+'<br>':''}${e.uveg?e.uveg+'<br>':''}
                  ${e.nyitas?e.nyitas:''}${e.irany?' · '+e.irany:''}
                  ${e.redonyPrep?'<br>🔲 Redőny':''}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="szerkezet-footer">
            <span class="szerkezet-ossz">Teljes: ${tw}×${mh}mm</span>
            ${item.megj?`<span style="font-size:11px;color:var(--silver);">📝 ${item.megj}</span>`:''}
          </div>
        </div>
      `;
    }
    return `
      <div class="item-card ${item.modifiedAt?'modified':''}" onclick="openEditModal(${i})">
        <div class="item-info">
          <div class="item-name">
            <span class="badge badge-gray" style="margin-right:6px;">#${i+1}</span>
            ${item.typeLabel} — ${item.helyiseg}
            ${item.modifiedAt?`<span class="modified-badge" style="margin-left:6px;">✏️ ${formatTime(item.modifiedAt)}</span>`:''}
          </div>
          <div class="item-meta">
            ${item.szelesseg&&item.magassag?item.szelesseg+'×'+item.magassag+'mm':''}
            ${item.db>1?' · '+item.db+'db':''}
            ${item.profil?' · '+item.profil:''}
            ${item.redonyPrep?' · 🔲 Red.':''}
            ${item.pf?' · PF':''}
            ${item.szunyog?' · 🕸️':''}
            ${item.oszto?' · osztó':''}
            ${item.foto?' · 📸':''}
          </div>
        </div>
        <div class="item-actions">
          <button class="btn btn-icon" onclick="event.stopPropagation();copyItem(${i})" title="Másolás">📋</button>
          <button class="btn btn-icon" onclick="event.stopPropagation();deleteItem(${i})">🗑</button>
        </div>
      </div>
    `;
  }).join('');
}

function formatTime(ts){
  if(!ts) return '';
  const d=new Date(ts);
  return d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0');
}

function copyItem(i){
  const orig=items[i];
  const copy=JSON.parse(JSON.stringify(orig));
  copy.id=Date.now(); copy.helyiseg=orig.helyiseg+' (másolat)';
  copy.createdAt=Date.now(); copy.modifiedAt=null;
  items.splice(i+1,0,copy);
  saveItems(); renderItems(); updateBadge();
  toast('📋 Tétel másolva!');
}

function deleteItem(i){
  if(!confirm('Törlöd ezt a tételt?')) return;
  items.splice(i,1); saveItems(); renderItems(); toast('🗑 Tétel törölve');
}
function clearAll(){
  if(!confirm('Biztosan törlöd az összes tételt?')) return;
  items=[]; saveItems(); renderItems(); toast('🗑 Összes tétel törölve');
}

// ═══════════════════════════════════════════
//  EDIT MODAL
// ═══════════════════════════════════════════
function openEditModal(i){
  editingIndex=i;
  const item=items[i];
  const rows=Object.entries({
    'Típus':item.typeLabel,'Helyiség':item.helyiseg,
    'Szélesség (mm)':item.szelesseg,'Magasság (mm)':item.magassag,'Darabszám':item.db,
    'Tokprofil':item.profil,'Üveg':item.uveg,'Üvegezési osztály':item.uvegOsztaly,
    'Nyitási mód':item.nyitas,'Nyílásirány':item.irany,'Szín':item.szin,
    'Tokbeépítés':item.tokbeep,'Takaróléc':item.takaroles,
    'PF profil':item.pf?`Igen – ${item.pfElhelyezes||''}`:undefined,
    'Redőny előkészítés':item.redonyPrep?'IGEN':undefined,
    'Redőny típus':item.redonyTipus,'Redőny vezérlés':item.redonyVez,
    'Redőny lamella':item.redonyLamella,'Redőny elhelyezés':item.redonyElhelyezes,
    'Szúnyogháló':item.szunyog?'IGEN':undefined,
    'Szúnyogháló típus':item.szunyogTipus,
    'Szúnyogháló méret':item.szunyogSz&&item.szunyogM?`${item.szunyogSz}×${item.szunyogM}mm`:undefined,
    'Osztó':item.oszto?item.osztoLeiras:undefined,
    'Ajtólap':item.ajtoLap,'Ajtó tok':item.ajtoTok,'Ajtó irány':item.ajtoIrany,
    'Falvastagság':item.ajtoFalv?item.ajtoFalv+'mm':undefined,
    'Roló típus':item.roloTipus,'Roló anyag':item.roloAnyag,
    'Zsalúzia típus':item.zsalTipus,'Zsalúzia lamella':item.zsalLamella,
    'Garázskapu':item.garazsTipus,'Pergola':item.pergolaTipus,
  }).filter(([k,v])=>v&&v!==''&&v!==undefined);

  document.getElementById('edit-modal-body').innerHTML=`
    <div class="summary-block">
      ${rows.map(([k,v])=>`<div class="summary-row"><span class="summary-key">${k}</span><span class="summary-val">${v}</span></div>`).join('')}
    </div>
    <div class="form-group">
      <label>Megjegyzés módosítása</label>
      <textarea id="edit-megj">${item.megj||''}</textarea>
    </div>
    ${item.foto?`
      <div class="form-group">
        <label>📸 Csatolt fotó</label>
        <img src="${item.foto}" style="max-width:100%;max-height:180px;object-fit:contain;border:2px solid var(--red);display:block;">
        <button class="btn btn-danger btn-small" style="margin-top:6px;" onclick="removeFotoFromItem(${i})">🗑 Fotó törlése</button>
      </div>`:
    `<div class="form-group">
        <label>📸 Fotó hozzáadása</label>
        <div class="foto-upload-area">
          <input type="file" accept="image/*" capture="environment" onchange="addFotoToItem(${i},this)">
          <div style="font-size:22px;">📷</div>
          <div style="font-size:12px;color:var(--silver);">Kattints</div>
        </div>
      </div>`}
  `;
  document.getElementById('edit-modal').classList.add('active');
}

function closeEditModal(){ document.getElementById('edit-modal').classList.remove('active'); editingIndex=null; }

function saveEditedItem(){
  if(editingIndex===null) return;
  items[editingIndex].megj=document.getElementById('edit-megj').value;
  items[editingIndex].modifiedAt=Date.now();
  saveItems(); renderItems(); closeEditModal(); toast('✅ Mentve');
}

function deleteItemFromModal(){
  if(editingIndex===null) return;
  if(!confirm('Törlöd ezt a tételt?')) return;
  items.splice(editingIndex,1); saveItems(); renderItems(); closeEditModal(); toast('🗑 Törölve');
}

// ═══════════════════════════════════════════
//  SZERKEZET
// ═══════════════════════════════════════════
function setFelmeresMode(mode){
  const btnE=document.getElementById('btn-egyes');
  const btnS=document.getElementById('btn-szerkezet');
  const szF=document.getElementById('szerkezet-form');
  const tG=document.getElementById('type-grid');
  const iF=document.getElementById('item-form');
  if(mode==='szerkezet'){
    btnS.style.borderColor='var(--orange)'; btnS.style.color='var(--orange)';
    btnE.style.borderColor=''; btnE.style.color='';
    szF.classList.add('visible'); tG.style.display='none'; iF.style.display='none';
    currentSzerkezetElemek=[]; renderSzerkezetElemekLista();
  } else {
    btnE.style.borderColor='var(--red)'; btnE.style.color='var(--red)';
    btnS.style.borderColor=''; btnS.style.color='';
    szF.classList.remove('visible'); tG.style.display='grid';
  }
}

function addSzerkezetElem(){
  document.getElementById('sz-elem-form').style.display='block';
  fillSelect('sze-profil',db.options.profilok);
  fillSelect('sze-uveg',db.options.uvegek);
  fillSelect('sze-szin',db.options.szinek);
}

function cancelSzerkezetElem(){ document.getElementById('sz-elem-form').style.display='none'; }

function saveSzerkezetElem(){
  const sz=document.getElementById('sze-szelesseg').value;
  const m=document.getElementById('sze-magassag').value;
  if(!sz||!m){toast('Add meg a méretet!');return;}
  const tv=document.getElementById('sze-tipus').value;
  currentSzerkezetElemek.push({
    tipus:tv, typeLabel:TYPES.find(t=>t.id===tv)?.label||tv,
    helyiseg:document.getElementById('sze-helyiseg').value||'Elem',
    szelesseg:sz, magassag:m,
    profil:document.getElementById('sze-profil').value,
    uveg:document.getElementById('sze-uveg').value,
    nyitas:document.getElementById('sze-nyitas').value,
    irany:document.getElementById('sze-irany').value,
    szin:document.getElementById('sze-szin').value,
    redonyPrep:document.getElementById('sze-redony').value==='igen',
    megj:document.getElementById('sze-megj').value,
  });
  renderSzerkezetElemekLista(); cancelSzerkezetElem(); toast('✅ Elem hozzáadva');
}

function renderSzerkezetElemekLista(){
  const lista=document.getElementById('sz-elemek-lista'); if(!lista) return;
  if(currentSzerkezetElemek.length===0){
    lista.innerHTML='<div style="color:var(--gray3);font-size:13px;">Még nincs elem</div>'; return;
  }
  const tw=currentSzerkezetElemek.reduce((s,e)=>s+parseInt(e.szelesseg||0),0);
  const mh=Math.max(...currentSzerkezetElemek.map(e=>parseInt(e.magassag||0)));
  lista.innerHTML=currentSzerkezetElemek.map((e,i)=>`
    <div style="display:flex;align-items:center;gap:8px;background:var(--dark2);border:1px solid #3a2800;border-left:3px solid var(--orange);padding:8px 10px;">
      <span style="font-family:'Share Tech Mono',monospace;font-size:10px;color:var(--orange);min-width:20px;">#${i+1}</span>
      <div style="flex:1;">
        <div style="font-family:'Rajdhani',sans-serif;font-weight:700;color:#fff;font-size:13px;">${e.typeLabel} — ${e.helyiseg}</div>
        <div style="font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--red3);">${e.szelesseg}×${e.magassag}mm</div>
      </div>
      <button onclick="deleteSzerkezetElem(${i})" style="background:none;border:none;color:var(--gray3);font-size:15px;cursor:pointer;">🗑</button>
    </div>
  `).join('')+`<div style="font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--orange);padding:4px 0;">Teljes: ${tw}×${mh}mm (${currentSzerkezetElemek.length} elem)</div>`;
}

function deleteSzerkezetElem(i){ currentSzerkezetElemek.splice(i,1); renderSzerkezetElemekLista(); }

function saveSzerkezet(){
  const nev=document.getElementById('sz-nev').value.trim();
  if(!nev){toast('Add meg a szerkezet nevét!');return;}
  if(currentSzerkezetElemek.length<1){toast('Adj hozzá legalább 1 elemet!');return;}
  const tw=currentSzerkezetElemek.reduce((s,e)=>s+parseInt(e.szelesseg||0),0);
  const mh=Math.max(...currentSzerkezetElemek.map(e=>parseInt(e.magassag||0)));
  items.push({
    id:Date.now(), isSzerkezet:true, nev, helyiseg:nev,
    typeLabel:'Sorolt szerkezet',
    illesztes:document.getElementById('sz-illesztes').value,
    megj:document.getElementById('sz-megj').value,
    elemek:[...currentSzerkezetElemek],
    totalW:tw, maxH:mh, createdAt:Date.now(), modifiedAt:null,
  });
  saveItems(); updateBadge(); cancelSzerkezet(); incrementCounter(); toast('✅ Szerkezet mentve!');
}

function cancelSzerkezet(){
  document.getElementById('sz-nev').value='';
  document.getElementById('sz-megj').value='';
  document.getElementById('sz-elem-form').style.display='none';
  currentSzerkezetElemek=[];
  renderSzerkezetElemekLista();
  setFelmeresMode('egyes');
}

// ═══════════════════════════════════════════
//  PDF
// ═══════════════════════════════════════════
function updatePDFSummary(){
  const el=document.getElementById('pdf-summary-info');
  const nev=document.getElementById('u-nev')?.value||'—';
  const cim=document.getElementById('u-cim')?.value||'—';
  const datum=document.getElementById('u-datum')?.value||'—';
  const statusz=document.getElementById('statusz-select')?.value||'';
  el.innerHTML=`
    <div class="summary-row"><span class="summary-key">Ügyfél:</span><span class="summary-val">${nev}</span></div>
    <div class="summary-row"><span class="summary-key">Helyszín:</span><span class="summary-val">${cim}</span></div>
    <div class="summary-row"><span class="summary-key">Dátum:</span><span class="summary-val">${datum}</span></div>
    <div class="summary-row"><span class="summary-key">Felmérési szám:</span><span class="summary-val">${getFelmeresszam()}</span></div>
    <div class="summary-row"><span class="summary-key">Tételek:</span><span class="summary-val">${items.length} db</span></div>
    <div class="summary-row"><span class="summary-key">Státusz:</span><span class="summary-val">${statusz==='vegleges'?'✅ VÉGLEGES':statusz==='ujrameres'?'⚠️ ÚJRAMÉRÉS':'—'}</span></div>
  `;
}

function getItemFields(item){
  const f=[];
  if(item.szelesseg&&item.magassag) f.push(['Méret',`${item.szelesseg}×${item.magassag}mm`]);
  if(item.profil) f.push(['Tokprofil',item.profil]);
  if(item.uveg) f.push(['Üveg',item.uveg]);
  if(item.uvegOsztaly) f.push(['Üveg osztály',item.uvegOsztaly]);
  if(item.nyitas) f.push(['Nyitás',item.nyitas]);
  if(item.irany) f.push(['Irány',item.irany]);
  if(item.szin) f.push(['Szín',item.szin]);
  if(item.tokbeep) f.push(['Tokbeépítés',item.tokbeep]);
  if(item.takaroles) f.push(['Takaróléc',item.takaroles]);
  if(item.pf) f.push(['PF profil',`IGEN – ${item.pfElhelyezes||''}`]);
  if(item.redonyPrep){
    f.push(['Redőny előkészítés','IGEN']);
    if(item.redonyTipus) f.push(['Redőny típus',item.redonyTipus]);
    if(item.redonyVez) f.push(['Redőny vezérlés',item.redonyVez]);
    if(item.redonyLamella) f.push(['Redőny lamella',item.redonyLamella]);
    if(item.redonyElhelyezes) f.push(['Redőny elhelyezés',item.redonyElhelyezes]);
  }
  if(item.szunyog){
    f.push(['Szúnyogháló','IGEN']);
    if(item.szunyogTipus) f.push(['Szúnyogháló típus',item.szunyogTipus]);
    if(item.szunyogSz&&item.szunyogM) f.push(['Szúnyogháló méret',`${item.szunyogSz}×${item.szunyogM}mm`]);
  }
  if(item.oszto&&item.osztoLeiras) f.push(['Osztó',item.osztoLeiras]);
  if(item.ajtoLap) f.push(['Ajtólap',item.ajtoLap]);
  if(item.ajtoTok) f.push(['Ajtó tok',item.ajtoTok]);
  if(item.ajtoIrany) f.push(['Nyílásirány',item.ajtoIrany]);
  if(item.ajtoFalv) f.push(['Falvastagság',item.ajtoFalv+'mm']);
  if(item.ajtoSzin) f.push(['Ajtó szín',item.ajtoSzin]);
  if(item.ajtoKilincs) f.push(['Kilincs',item.ajtoKilincs]);
  if(item.redonyTipus&&!item.redonyPrep) f.push(['Redőny típus',item.redonyTipus]);
  if(item.redonyVez&&!item.redonyPrep) f.push(['Vezérlés',item.redonyVez]);
  if(item.redonyLamella&&!item.redonyPrep) f.push(['Lamella',item.redonyLamella]);
  if(item.redonyElhelyezes&&!item.redonyPrep) f.push(['Elhelyezés',item.redonyElhelyezes]);
  if(item.redonyBeep) f.push(['Beépítés',item.redonyBeep]);
  if(item.roloTipus) f.push(['Roló típus',item.roloTipus]);
  if(item.roloVez) f.push(['Vezérlés',item.roloVez]);
  if(item.roloAnyag) f.push(['Anyag',item.roloAnyag]);
  if(item.roloRogz) f.push(['Rögzítés',item.roloRogz]);
  if(item.zsalTipus) f.push(['Zsalúzia',item.zsalTipus]);
  if(item.zsalLamella) f.push(['Lamella',item.zsalLamella]);
  if(item.zsalSzin) f.push(['Szín',item.zsalSzin]);
  if(item.zsalVez) f.push(['Vezérlés',item.zsalVez]);
  if(item.garazsTipus) f.push(['Kapu típus',item.garazsTipus]);
  if(item.garazsNyitas) f.push(['Nyitás',item.garazsNyitas]);
  if(item.garazsMeghajtás) f.push(['Meghajtás',item.garazsMeghajtás]);
  if(item.garazsSzin) f.push(['Szín',item.garazsSzin]);
  if(item.garazsSzig) f.push(['Hőszigetelés',item.garazsSzig]);
  if(item.garazsMeret) f.push(['Beép. nyílás',item.garazsMeret]);
  if(item.pergolaTipus) f.push(['Pergola típus',item.pergolaTipus]);
  if(item.pergolaIrany) f.push(['Lamella irány',item.pergolaIrany]);
  if(item.pergolaVez) f.push(['Vezérlés',item.pergolaVez]);
  if(item.pergolaSzin) f.push(['Szín',item.pergolaSzin]);
  if(item.pergolaMely) f.push(['Mélység',item.pergolaMely+'mm']);
  if(item.pergolaOldalfal) f.push(['Oldalfal',item.pergolaOldalfal]);
  if(item.szunyogTipus&&item.type==='szunyoghalo') f.push(['Típus',item.szunyogTipus]);
  if(item.szunyogRogz) f.push(['Rögzítés',item.szunyogRogz]);
  if(item.szunyogSzin) f.push(['Szín',item.szunyogSzin]);
  return f;
}

function generatePDF(){
  if(items.length===0){toast('Nincs tétel!');return;}

  const nev=document.getElementById('u-nev')?.value||'—';
  const cim=document.getElementById('u-cim')?.value||'—';
  const datum=document.getElementById('u-datum')?.value||new Date().toLocaleDateString('hu-HU');
  const felmero=document.getElementById('u-felmero')?.value||'—';
  const munkatipus=document.getElementById('u-munkatipus')?.value||'';
  const altmegj=document.getElementById('u-altmegj')?.value||'';
  const statuszVal=document.getElementById('statusz-select')?.value||'';
  const felmeresszam=getFelmeresszam();
  const hv=getHelyszinValaszok();

  // Statusz sáv
  let statuszSav='';
  if(statuszVal==='vegleges') statuszSav=`<div style="background:#003300;border:2px solid #44cc44;color:#44cc44;padding:10px;text-align:center;font-size:18px;font-weight:bold;letter-spacing:4px;margin-bottom:10px;">✅ VÉGLEGES FELMÉRÉS</div>`;
  else if(statuszVal==='ujrameres') statuszSav=`<div style="background:#330000;border:2px solid #cc2222;color:#ff4444;padding:10px;text-align:center;font-size:18px;font-weight:bold;letter-spacing:4px;margin-bottom:10px;">⚠️ ÚJRAMÉRÉS SZÜKSÉGES</div>`;

  // Összesítő táblázat
  const typeCounts={};
  const extraCounts={redony:0,szunyog:0,pf:0,takaroles:0};
  items.forEach(item=>{
    if(item.isSzerkezet){
      typeCounts['Sorolt szerkezet']=(typeCounts['Sorolt szerkezet']||0)+1;
      item.elemek.forEach(e=>{ typeCounts[e.typeLabel]=(typeCounts[e.typeLabel]||0)+1; });
    } else {
      const db2=parseInt(item.db||1);
      typeCounts[item.typeLabel]=(typeCounts[item.typeLabel]||0)+db2;
      if(item.redonyPrep) extraCounts.redony+=db2;
      if(item.szunyog) extraCounts.szunyog+=db2;
      if(item.pf) extraCounts.pf+=db2;
      if(item.takaroles) extraCounts.takaroles+=db2;
    }
  });
  const osszesenDb=Object.values(typeCounts).reduce((a,b)=>a+b,0);
  const osszesitoHTML=`
    <div style="margin-bottom:12px;">
      <div style="background:#0a0a0a;color:#fff;padding:6px 10px;font-size:10px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">ÖSSZESÍTŐ</div>
      <table style="width:100%;border-collapse:collapse;font-size:10px;">
        ${Object.entries(typeCounts).map(([k,v])=>`
          <tr style="border-bottom:1px solid #eee;">
            <td style="padding:4px 8px;color:#333;">${k}</td>
            <td style="padding:4px 8px;font-weight:bold;text-align:right;color:#111;">${v} db</td>
          </tr>
        `).join('')}
        ${extraCounts.redony>0?`<tr style="border-bottom:1px solid #eee;"><td style="padding:4px 8px;color:#555;">↳ ebből redőny előkészítés</td><td style="padding:4px 8px;text-align:right;color:#cc2222;">${extraCounts.redony} db</td></tr>`:''}
        ${extraCounts.szunyog>0?`<tr style="border-bottom:1px solid #eee;"><td style="padding:4px 8px;color:#555;">↳ ebből szúnyogháló</td><td style="padding:4px 8px;text-align:right;color:#cc2222;">${extraCounts.szunyog} db</td></tr>`:''}
        ${extraCounts.pf>0?`<tr style="border-bottom:1px solid #eee;"><td style="padding:4px 8px;color:#555;">↳ ebből PF profil</td><td style="padding:4px 8px;text-align:right;color:#cc2222;">${extraCounts.pf} db</td></tr>`:''}
        ${extraCounts.takaroles>0?`<tr style="border-bottom:1px solid #eee;"><td style="padding:4px 8px;color:#555;">↳ ebből takaróléc</td><td style="padding:4px 8px;text-align:right;color:#cc2222;">${extraCounts.takaroles} db</td></tr>`:''}
        <tr style="background:#f5f5f5;border-top:2px solid #333;">
          <td style="padding:5px 8px;font-weight:bold;color:#111;">ÖSSZESEN</td>
          <td style="padding:5px 8px;font-weight:bold;text-align:right;color:#111;">${osszesenDb} db</td>
        </tr>
      </table>
    </div>
  `;

  // Helyszín info
  const hvEntries=Object.entries(hv);
  const helyszinHTML=hvEntries.length>0?`
    <div style="background:#f5f5f5;border:1px solid #ddd;padding:7px 10px;margin-bottom:10px;font-size:9px;">
      <div style="font-weight:bold;color:#cc2222;margin-bottom:4px;font-size:8px;text-transform:uppercase;letter-spacing:1px;">📍 Helyszín információk</div>
      <table style="width:100%;border-collapse:collapse;">
        ${hvEntries.map(([k,v])=>`<tr><td style="padding:2px 6px;color:#555;font-weight:bold;width:55%;">${k}</td><td style="padding:2px 6px;color:#111;">${v}</td></tr>`).join('')}
      </table>
    </div>
  `:'';

  // Tételek HTML
  const itemsHTML=items.map((item,idx)=>{
    if(item.isSzerkezet){
      const tw=item.totalW||item.elemek.reduce((s,e)=>s+parseInt(e.szelesseg||0),0);
      const mh=item.maxH||Math.max(...item.elemek.map(e=>parseInt(e.magassag||0)));
      const cw=Math.floor(100/item.elemek.length);
      return `
        <div style="margin-bottom:10px;border:1px solid #ddd;border-left:3px solid #e08800;page-break-inside:avoid;">
          <div style="background:#1a0f00;color:#ffaa00;padding:5px 10px;display:flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="background:#e08800;color:#fff;padding:1px 6px;font-size:9px;font-weight:bold;">#${idx+1}</span>
              <span style="font-size:11px;font-weight:bold;letter-spacing:1px;">🔗 SOROLT SZERKEZET — ${item.nev}</span>
            </div>
            <span style="font-size:9px;">${item.illesztes}</span>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:9px;">
            <tr style="background:#fff8ee;">
              ${item.elemek.map((e,ei)=>`
                <td style="width:${cw}%;padding:5px 7px;border-right:2px solid #e08800;vertical-align:top;">
                  <div style="font-size:7px;font-weight:bold;color:#e08800;text-transform:uppercase;margin-bottom:2px;">#${ei+1} ${e.typeLabel}</div>
                  <div style="font-weight:bold;color:#111;margin-bottom:2px;">${e.helyiseg}</div>
                  <div style="font-family:monospace;color:#cc2222;font-size:11px;font-weight:bold;margin-bottom:3px;">${e.szelesseg}×${e.magassag}mm</div>
                  <div style="color:#555;font-size:8px;line-height:1.5;">
                    ${e.profil?'<b>Profil:</b> '+e.profil+'<br>':''}
                    ${e.uveg?'<b>Üveg:</b> '+e.uveg+'<br>':''}
                    ${e.nyitas?'<b>Nyitás:</b> '+e.nyitas+(e.irany?' · '+e.irany:'')+'<br>':''}
                    ${e.szin?'<b>Szín:</b> '+e.szin+'<br>':''}
                    ${e.redonyPrep?'<b style="color:#cc2222;">Redőny előkész.: IGEN</b><br>':''}
                    ${e.megj?'<i>'+e.megj+'</i>':''}
                  </div>
                </td>
              `).join('')}
            </tr>
          </table>
          <div style="background:#fff8ee;padding:5px 10px;display:flex;justify-content:space-between;border-top:1px solid #eee;font-size:9px;">
            <span style="font-weight:bold;color:#e08800;">Teljes: ${tw}×${mh}mm</span>
            ${item.megj?`<span style="color:#666;">📝 ${item.megj}</span>`:''}
            ${item.modifiedAt?`<span style="color:#e08800;">✏️ Módosítva: ${formatTime(item.modifiedAt)}</span>`:''}
          </div>
        </div>
      `;
    }

    // Normál tétel
    const fields=getItemFields(item);
    const fieldRows=[];
    for(let fi=0;fi<fields.length;fi+=2){
      const bg=Math.floor(fi/2)%2===0?'#fff':'#f9f9f9';
      fieldRows.push(`
        <tr style="background:${bg};">
          <td style="padding:4px 7px;border-right:1px solid #eee;border-bottom:1px solid #eee;width:25%;">
            <div style="font-size:7px;font-weight:bold;color:#888;text-transform:uppercase;">${fields[fi][0]}</div>
            <div style="font-size:10px;color:#111;font-weight:500;">${fields[fi][1]}</div>
          </td>
          ${fields[fi+1]?`<td style="padding:4px 7px;border-bottom:1px solid #eee;width:25%;">
            <div style="font-size:7px;font-weight:bold;color:#888;text-transform:uppercase;">${fields[fi+1][0]}</div>
            <div style="font-size:10px;color:#111;font-weight:500;">${fields[fi+1][1]}</div>
          </td>`:'<td style="border-bottom:1px solid #eee;"></td>'}
        </tr>
      `);
    }

    return `
      <div style="margin-bottom:10px;border:1px solid #ddd;page-break-inside:avoid;">
        <div style="background:#0a0a0a;color:#fff;padding:5px 10px;display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:7px;">
            <span style="background:#cc2222;color:#fff;padding:1px 6px;font-size:9px;font-weight:bold;">#${idx+1}</span>
            <span style="font-size:11px;font-weight:bold;letter-spacing:1px;">${item.typeLabel.toUpperCase()} — ${item.helyiseg}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            ${item.modifiedAt?`<span style="font-size:8px;color:#e08800;">✏️ Módosítva: ${formatTime(item.modifiedAt)}</span>`:''}
            ${item.db>1?`<span style="font-size:10px;color:#ff8888;">${item.db} db</span>`:''}
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse;">${fieldRows.join('')}</table>
        ${item.megj?`<div style="border-left:3px solid #cc2222;background:#fff8f8;padding:5px 8px;font-size:9px;color:#333;"><b style="color:#cc2222;font-size:8px;text-transform:uppercase;">Megjegyzés:</b> ${item.megj}</div>`:''}
        ${item.foto?`<div style="padding:6px;background:#f9f9f9;border-top:1px solid #eee;"><div style="font-size:7px;font-weight:bold;color:#888;margin-bottom:4px;">📸 HELYSZÍNI FOTÓ</div><img src="${item.foto}" style="max-width:100%;max-height:150px;object-fit:contain;border:1px solid #ddd;display:block;"></div>`:''}
      </div>
    `;
  }).join('');

  // Általános megjegyzés
  const altmejgHTML=altmegj?`
    <div style="border:2px solid #cc2222;background:#fff8f8;padding:10px;margin-top:10px;">
      <div style="font-size:9px;font-weight:bold;color:#cc2222;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px;">📝 ÁLTALÁNOS MEGJEGYZÉS</div>
      <div style="font-size:11px;color:#333;">${altmegj}</div>
    </div>
  `:'';

  const html=`
    <div style="background:#0a0a0a;color:#fff;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:14px;font-weight:bold;letter-spacing:2px;">${db.ceg.nev||'Ablak Kft.'}</div>
        <div style="font-size:9px;color:#ccc;">${db.ceg.cim||''}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:11px;color:#ff4444;font-weight:bold;">${felmeresszam}</div>
        <div style="font-size:9px;color:#ccc;">NYILÁSZÁRÓ FELMÉRÉSI LAP</div>
      </div>
    </div>
    <div style="height:3px;background:#cc2222;margin-bottom:10px;"></div>

    ${statuszSav}

    <div style="font-size:18px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin-bottom:2px;">FELMÉRÉSI DOKUMENTÁCIÓ</div>
    <div style="font-size:9px;color:#666;margin-bottom:10px;">${munkatipus?'Munka típusa: '+munkatipus+' · ':''} Felmérő: ${felmero} · Dátum: ${datum}</div>

    <div style="display:flex;border:1px solid #ddd;margin-bottom:10px;">
      <div style="flex:1;padding:7px 10px;border-right:1px solid #ddd;">
        <div style="font-size:7px;font-weight:bold;color:#888;text-transform:uppercase;margin-bottom:2px;">Ügyfél neve</div>
        <div style="font-size:13px;font-weight:bold;">${nev}</div>
      </div>
      <div style="flex:1;padding:7px 10px;">
        <div style="font-size:7px;font-weight:bold;color:#888;text-transform:uppercase;margin-bottom:2px;">Helyszín / Cím</div>
        <div style="font-size:12px;font-weight:bold;">${cim}</div>
      </div>
    </div>

    ${helyszinHTML}
    ${osszesitoHTML}

    <div style="background:#cc2222;color:#fff;padding:4px 8px;font-size:9px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">TÉTELEK</div>

    ${itemsHTML}
    ${altmejgHTML}

    <div style="display:flex;justify-content:space-between;margin-top:20px;padding-top:10px;">
      <div style="text-align:center;width:45%;">
        <div style="border-top:1px solid #999;padding-top:5px;font-size:9px;color:#666;">Ügyfél aláírása</div>
      </div>
      <div style="text-align:center;width:45%;">
        <div style="border-top:1px solid #999;padding-top:5px;font-size:9px;color:#666;">Felmérő aláírása</div>
      </div>
    </div>
    <div style="border-top:1px solid #ddd;padding-top:6px;display:flex;justify-content:space-between;font-size:8px;color:#888;margin-top:12px;">
      <span>${db.ceg.email||''}</span>
      <span>${db.ceg.tel||''}</span>
      <span>${db.ceg.web||''}</span>
    </div>
  `;

  const pw=window.open('','_blank','width=960,height=800');
  if(!pw){toast('❌ Engedélyezd a felugró ablakokat!');return;}
  pw.document.write(`<!DOCTYPE html><html lang="hu"><head><meta charset="UTF-8"><title>Felmérés – ${nev}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:Arial,sans-serif;background:#fff;}
    .btn-bar{text-align:center;padding:12px;background:#111;border-bottom:3px solid #cc2222;position:sticky;top:0;z-index:99;}
    .btn-print{background:#cc2222;color:#fff;border:none;padding:12px 30px;font-size:15px;font-weight:bold;cursor:pointer;letter-spacing:1px;margin-right:8px;}
    .btn-close{background:#444;color:#fff;border:none;padding:12px 18px;font-size:13px;cursor:pointer;}
    .page{max-width:210mm;margin:0 auto;padding:10mm 12mm;}
    @media print{.btn-bar{display:none!important;}*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}@page{size:A4 portrait;margin:8mm;}div[style*="page-break-inside:avoid"]{page-break-inside:avoid;}}
  </style></head><body>
  <div class="btn-bar">
    <button class="btn-print" onclick="window.print()">🖨️ Mentés PDF-ként / Nyomtatás</button>
    <button class="btn-close" onclick="window.close()">✕ Bezárás</button>
  </div>
  <div class="page">${html}</div>
  </body></html>`);
  pw.document.close();
  toast('✅ PDF előnézet megnyílt!');
}

// ═══════════════════════════════════════════
//  ADMIN
// ═══════════════════════════════════════════
function toggleAdminSection(head){
  const body=head.nextElementSibling;
  const arrow=head.querySelector('span');
  const isHidden = body.style.display==='' || body.style.display==='none';
  body.style.display=isHidden?'block':'none';
  arrow.textContent=isHidden?'▼':'▶';
}

function loadAdminPanel(){
  document.getElementById('a-cegnev').value=db.ceg.nev||'';
  document.getElementById('a-email').value=db.ceg.email||'';
  document.getElementById('a-tel').value=db.ceg.tel||'';
  document.getElementById('a-web').value=db.ceg.web||'';
  document.getElementById('a-cegcim').value=db.ceg.cim||'';
  document.getElementById('current-counter').textContent=getFelmeresszam();
  renderUsers();
  renderHelyszinKerdesekAdmin();
  loadAlapkeszletAdmin();
  renderOptionSections();
}

function saveCegAdatok(){
  db.ceg.nev=document.getElementById('a-cegnev').value.trim();
  db.ceg.email=document.getElementById('a-email').value.trim();
  db.ceg.tel=document.getElementById('a-tel').value.trim();
  db.ceg.web=document.getElementById('a-web').value.trim();
  db.ceg.cim=document.getElementById('a-cegcim').value.trim();
  saveDB(); toast('✅ Cég adatok mentve');
}

function loadAlapkeszletAdmin(){
  const ak=db.alapkeszlet||{};
  fillSelect('ak-profil',db.options.profilok);
  fillSelect('ak-uveg',db.options.uvegek);
  fillSelect('ak-szin',db.options.szinek);
  fillSelect('ak-redony-tipus',db.options.redony_tipusok);
  fillSelect('ak-redony-lamella',db.options.redony_lamellak);
  if(ak.profil) setSelectVal('ak-profil',ak.profil);
  if(ak.uveg) setSelectVal('ak-uveg',ak.uveg);
  if(ak.szin) setSelectVal('ak-szin',ak.szin);
  if(ak.nyitas) setSelectVal('ak-nyitas',ak.nyitas);
  if(ak.irany) setSelectVal('ak-irany',ak.irany);
  if(ak.tokbeep) setSelectVal('ak-tokbeep',ak.tokbeep);
  if(ak.redonyTipus) setSelectVal('ak-redony-tipus',ak.redonyTipus);
  if(ak.redonyLamella) setSelectVal('ak-redony-lamella',ak.redonyLamella);
  document.getElementById('ak-redony-check').checked=ak.redony||false;
}

function saveAlapkeszlet(){
  db.alapkeszlet={
    profil:document.getElementById('ak-profil').value,
    uveg:document.getElementById('ak-uveg').value,
    szin:document.getElementById('ak-szin').value,
    nyitas:document.getElementById('ak-nyitas').value,
    irany:document.getElementById('ak-irany').value,
    tokbeep:document.getElementById('ak-tokbeep').value,
    redony:document.getElementById('ak-redony-check').checked,
    redonyTipus:document.getElementById('ak-redony-tipus').value,
    redonyLamella:document.getElementById('ak-redony-lamella').value,
  };
  saveDB(); toast('✅ Alapkészlet mentve');
}

function renderUsers(){
  const list=document.getElementById('users-list');
  list.innerHTML=db.users.map((u,i)=>`
    <li class="option-item">
      <div>
        <div class="option-item-name">${u.nev||u.username}</div>
        <div class="option-item-sub">${u.username} · ${u.role==='admin'?'⚙️ Admin':'🔧 Felmérő'}</div>
      </div>
      ${db.users.length>1?`<button class="btn btn-icon" onclick="deleteUser(${i})">🗑</button>`:''}
    </li>
  `).join('');
}

function addUser(){
  const name=document.getElementById('new-user-name').value.trim();
  const pass=document.getElementById('new-user-pass').value.trim();
  const nev=document.getElementById('new-user-nev').value.trim();
  const role=document.getElementById('new-user-role').value;
  if(!name||!pass){toast('Töltsd ki a mezőket!');return;}
  if(db.users.find(u=>u.username===name)){toast('Foglalt felhasználónév!');return;}
  db.users.push({username:name,password:pass,role,nev:nev||name});
  saveDB(); renderUsers();
  document.getElementById('new-user-name').value='';
  document.getElementById('new-user-pass').value='';
  document.getElementById('new-user-nev').value='';
  toast('✅ Felhasználó hozzáadva');
}

function deleteUser(i){
  if(!confirm('Törlöd?')) return;
  db.users.splice(i,1); saveDB(); renderUsers(); toast('🗑 Törölve');
}

// Helyszín kérdések
function renderHelyszinKerdesekAdmin(){
  const list=document.getElementById('helyszin-kerdesek-list'); if(!list) return;
  const ks=db.helyszin_kerdesek||[];
  list.innerHTML=ks.length===0?'<li style="color:var(--gray3);padding:6px 0;font-size:13px;">Nincs kérdés</li>':
    ks.map((k,i)=>`
      <li class="option-item">
        <div>
          <div class="option-item-name">${k.label}</div>
          <div class="option-item-sub">${k.opciok.join(', ')}</div>
        </div>
        <button class="btn btn-icon" onclick="deleteHelyszinKerdes(${i})">🗑</button>
      </li>
    `).join('');
}

function addHelyszinKerdes(){
  const label=document.getElementById('new-hs-label').value.trim();
  const opciokStr=document.getElementById('new-hs-opciok').value.trim();
  if(!label||!opciokStr){toast('Töltsd ki mindkét mezőt!');return;}
  const opciok=opciokStr.split(',').map(s=>s.trim()).filter(Boolean);
  if(!db.helyszin_kerdesek) db.helyszin_kerdesek=[];
  db.helyszin_kerdesek.push({id:'hs_'+Date.now(),label,opciok});
  saveDB(); renderHelyszinKerdesekAdmin(); renderHelyszinInfo();
  document.getElementById('new-hs-label').value='';
  document.getElementById('new-hs-opciok').value='';
  toast('✅ Kérdés hozzáadva');
}

function deleteHelyszinKerdes(i){
  if(!confirm('Törlöd?')) return;
  db.helyszin_kerdesek.splice(i,1); saveDB();
  renderHelyszinKerdesekAdmin(); renderHelyszinInfo(); toast('🗑 Törölve');
}

// Opció szekciók
const OPTION_SECTIONS=[
  {key:'profilok',label:'🪟 Tokprofilok',sub:true},
  {key:'uvegek',label:'🔷 Üvegtípusok',sub:true},
  {key:'uveg_osztalyok',label:'🛡️ Üvegezési osztályok',sub:true},
  {key:'nyitasi_modok',label:'🔄 Nyitási módok',sub:false},
  {key:'nyilasiranyok',label:'↔️ Nyílásirányok',sub:false},
  {key:'tokbeepitesi_modok',label:'🧱 Tokbeépítési módok',sub:false},
  {key:'takaroles_tipusok',label:'📐 Takaróléc típusok',sub:false},
  {key:'redony_tipusok',label:'🔲 Redőny típusok',sub:true},
  {key:'redony_lamellak',label:'▬ Redőny lamellák',sub:true},
  {key:'redony_vezerlések',label:'⚙️ Redőny vezérlések',sub:false},
  {key:'redony_elhelyezések',label:'📏 Redőny elhelyezések',sub:false},
  {key:'szinek',label:'🎨 Színek (ablak/ajtó)',sub:false},
  {key:'szunyoghalo_tipusok',label:'🕸️ Szúnyogháló típusok',sub:true},
  {key:'szunyoghalo_rogzitesek',label:'🔩 Szúnyogháló rögzítési módok',sub:false},
  {key:'rolo_tipusok',label:'🟫 Roló típusok',sub:true},
  {key:'rolo_anyagok',label:'🧵 Roló anyagok',sub:true},
  {key:'rolo_vezerlések',label:'⚙️ Roló vezérlések',sub:false},
  {key:'rolo_rogzitesek',label:'🔩 Roló rögzítések',sub:false},
  {key:'zsaluzia_tipusok',label:'🔳 Zsalúzia típusok',sub:true},
  {key:'zsaluzia_lamellak',label:'▬ Zsalúzia lamella szélességek',sub:false},
  {key:'zsaluzia_vezerlések',label:'⚙️ Zsalúzia vezérlések',sub:false},
  {key:'garazs_tipusok',label:'🏠 Garázskapu típusok',sub:true},
  {key:'garazs_nyitasok',label:'🔄 Garázskapu nyitási módok',sub:false},
  {key:'garazs_meghajtasok',label:'⚙️ Garázskapu meghajtások',sub:false},
  {key:'garazs_szigetelések',label:'🌡️ Garázskapu hőszigetelések',sub:false},
  {key:'pergola_tipusok',label:'⛱️ Pergola típusok',sub:true},
  {key:'pergola_iranyok',label:'🔄 Pergola lamella irányok',sub:false},
  {key:'pergola_vezerlések',label:'⚙️ Pergola vezérlések',sub:false},
  {key:'pergola_oldalfalak',label:'🧱 Pergola oldalfal típusok',sub:false},
  {key:'ajto_lap_tipusok',label:'🚪 Belső ajtólap típusok',sub:true},
  {key:'ajto_tok_tipusok',label:'🔲 Belső ajtó tok típusok',sub:false},
  {key:'ajto_kilincsek',label:'🔑 Kilincs típusok',sub:false},
  {key:'ajto_szinek',label:'🎨 Belső ajtó színek',sub:false},
  {key:'pf_elhelyezések',label:'📐 PF profil elhelyezések',sub:false},
];

function renderOptionSections(){
  const c=document.getElementById('admin-option-sections');
  c.innerHTML=OPTION_SECTIONS.map(sec=>`
    <div class="admin-section">
      <div class="admin-section-head" onclick="toggleAdminSection(this)">
        <h3>${sec.label}</h3><span>▼</span>
      </div>
      <div class="admin-section-body">
        <ul class="option-list" id="opt-list-${sec.key}"></ul>
        <div class="sep"></div>
        <div class="grid-2">
          <div class="form-group"><label>Megnevezés</label><input type="text" id="opt-nev-${sec.key}" placeholder="Új opció neve"></div>
          ${sec.sub?`<div class="form-group"><label>Részlet (opcionális)</label><input type="text" id="opt-sub-${sec.key}" placeholder="pl. 70mm"></div>`:'<div></div>'}
        </div>
        <button class="btn btn-primary btn-small" onclick="addOption('${sec.key}',${sec.sub})">+ Hozzáadás</button>
      </div>
    </div>
  `).join('');
  OPTION_SECTIONS.forEach(sec=>renderOptionList(sec.key));
}

function renderOptionList(key){
  const list=document.getElementById('opt-list-'+key); if(!list) return;
  const its=db.options[key]||[];
  list.innerHTML=its.length===0?'<li style="color:var(--gray3);padding:6px 0;font-size:13px;">Nincs opció</li>':
    its.map((item,i)=>`
      <li class="option-item">
        <div>
          <div class="option-item-name">${item.nev}</div>
          ${item.sub?`<div class="option-item-sub">${item.sub}</div>`:''}
        </div>
        <button class="btn btn-icon" type="button" onclick="deleteOptionByName('${key}','${item.nev.replace(/'/g,"\\'")}')">🗑</button>
      </li>
    `).join('');
}

function addOption(key,hasSub){
  const nev=document.getElementById('opt-nev-'+key)?.value.trim();
  const sub=hasSub?(document.getElementById('opt-sub-'+key)?.value.trim()||''):'';
  if(!nev){toast('Add meg a megnevezést!');return;}
  if(!db.options[key]) db.options[key]=[];
  db.options[key].push({nev,sub});
  saveDB(); renderOptionList(key); populateSelects(); loadAlapkeszletAdmin();
  document.getElementById('opt-nev-'+key).value='';
  if(hasSub) document.getElementById('opt-sub-'+key).value='';
  toast('✅ Opció hozzáadva');
}

function deleteOption(key,i){
  if(!confirm('Törlöd ezt az opciót?')) return;
  if(!db.options[key]) return;
  db.options[key].splice(i,1);
  saveDB();
  renderOptionList(key);
  populateSelects();
  toast('🗑 Törölve');
}

function deleteOptionByName(key,nev){
  if(!confirm('Törlöd: '+nev+'?')) return;
  if(!db.options[key]) return;
  db.options[key]=db.options[key].filter(x=>x.nev!==nev);
  saveDB();
  renderOptionList(key);
  populateSelects();
  toast('🗑 Törölve');
}

// Export / Import
function exportJSON(){
  const data=JSON.stringify(db,null,2);
  const blob=new Blob([data],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='felmero_beallitasok_'+new Date().toISOString().slice(0,10)+'.json';
  a.click(); URL.revokeObjectURL(url); toast('✅ JSON exportálva');
}

function importJSON(input){
  const file=input.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const imp=JSON.parse(e.target.result);
      if(!imp.options||!imp.users) throw new Error('Érvénytelen');
      if(!confirm('Importálás felülírja a jelenlegi beállításokat. Folytatod?')) return;
      db=imp; saveDB(); populateSelects(); loadAdminPanel(); renderHelyszinInfo();
      toast('✅ Adatbázis importálva!');
    }catch(err){toast('❌ Hibás JSON fájl!');}
    input.value='';
  };
  reader.readAsText(file);
}

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
window.addEventListener('load',()=>{
  // Auto belépés
  currentUser=db.users.find(x=>x.role==='admin')||{username:'admin',role:'admin',nev:'Felmérő'};
  document.getElementById('header-username').textContent=currentUser.nev||currentUser.username;
  document.getElementById('app-header').style.display='flex';
  document.getElementById('u-felmero').value=currentUser.nev||'';
  document.getElementById('u-datum').value=new Date().toLocaleDateString('hu-HU');
  document.getElementById('felmeres-szam-display').textContent=getFelmeresszam();
  document.querySelectorAll('.admin-only').forEach(el=>el.style.display='flex');

  initTypeGrid();
  populateSelects();
  renderHelyszinInfo();
  renderItems();
  loadUgyfelAdatok();
  updateBadge();

  document.getElementById('edit-modal').addEventListener('click',function(e){
    if(e.target===this) closeEditModal();
  });

  // Autosave indikátor
  const ind=document.getElementById('autosave-indicator');
  if(ind){ind.textContent='💾 Mentve';ind.className='autosave saved';}
});
})();
