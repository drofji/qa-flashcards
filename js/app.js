'use strict';

// ─── I18N ───
const TX = {
  en: {
    appTitle:'QA FlashCards', appSub:'Study Cards · Flashcard App',
    lTopics:'Topics', lWelcome:'Welcome!',
    lWelcomeDesc:'Create a topic on the left or import a JSON file.',
    lAddCard:'+ Add new card', lQuestion:'Question', lAnswer:'Answer',
    lClear:'Clear', lSaveCard:'Save card',
    lTabCards:'Edit', lTabPractice:'Practice',
    lArea:'Area',
    lRename:'Rename', lNewTopicTitle:'New Topic',
    lTopicName:'Topic name', lTopicColor:'Color',
    lCancel:'Cancel', lCreate:'Create',
    lRenameTitle:'Rename Topic', lNewName:'New name',
    lCancelR:'Cancel', lSave:'Save',
    lDeleteTitle:'Delete Topic?', lDeleteDesc:'This cannot be undone. All cards will be deleted.',
    lCancelD:'Cancel', lDelete:'Delete',
    lImportTitle:'Import Topics', lImportFileDesc:'Select a JSON file with exported topics.',
    iTabFile:'File', lChooseFile:'Choose file', lImportUrlDesc:'Enter a JSON URL.',
    lCancelI:'Cancel', lDoImport:'Import',
    lEditCardTitle:'Edit Card', lEditQ:'Question', lEditA:'Answer',
    lCancelE:'Cancel', lSaveE:'Save', lExportTopic:'Export topic',
    lLibrary: 'Library', ihkLibrary: 'IHK AP2 FA Preparation (2026)',
    searchPhGlobal: 'Search topics & cards...',
    searchPhLocal: 'Search in topic...',
    cardsUnit:'card', cardsUnitP:'cards',
    practiceFlip:'Click to flip',
    nothingHere:'No cards yet', nothingHereDesc:'Switch to Edit and add some cards.',
    importedOk:'Topic(s) imported!', importError:'Import failed.',
    topicCreated:'Topic created!', topicDeleted:'Topic deleted.',
    topicRenamed:'Renamed!', cardSaved:'Card saved!',
    cardDeleted:'Card deleted.', cardEdited:'Card updated!',
    exportedOk:'Exported!', selectFile:'Please select a file or enter a URL.',
    noTopic:'No topic selected.', searchPh:'Search…',
    fetchErr:'Could not load URL.', delCardQ:'Delete this card?',
    btnSkip:'Later ⏱', btnKnow:'I know it ✓', btnRestart:'Restart 🔄',
    finTitle:'All done! 🎉', finSub:'You answered every card.',
    sDone:'Known', sLater:'Later', sLeft:'Remaining',
    progLabel:'Progress', pctLabel:'Known',
    lblQ:'Question', lblA:'Answer',
    keyHint:'Space = flip · → = known · ↓ = later',
    errFields:'Please fill in both fields.', errName:'Please enter a name.',
  },
  de: {
    appTitle:'QA FlashCards', appSub:'Lernkarten · Karteikarten',
    lTopics:'Themen', lWelcome:'Willkommen!',
    lWelcomeDesc:'Erstelle ein Thema links oder importiere eine JSON-Datei.',
    lAddCard:'+ Neue Karte hinzufügen', lQuestion:'Frage', lAnswer:'Antwort',
    lClear:'Leeren', lSaveCard:'Karte speichern',
    lTabCards:'Bearbeiten', lTabPractice:'Üben',
    lArea:'Bereich',
    lRename:'Umbenennen', lNewTopicTitle:'Neues Thema',
    lTopicName:'Themenname', lTopicColor:'Farbe',
    lCancel:'Abbrechen', lCreate:'Erstellen',
    lRenameTitle:'Thema umbenennen', lNewName:'Neuer Name',
    lCancelR:'Abbrechen', lSave:'Speichern',
    lDeleteTitle:'Thema löschen?', lDeleteDesc:'Alle Karten werden gelöscht.',
    lCancelD:'Abbrechen', lDelete:'Löschen',
    lImportTitle:'Themen importieren', lImportFileDesc:'Wähle eine JSON-Datei.',
    iTabFile:'Datei', lChooseFile:'Datei auswählen', lImportUrlDesc:'JSON-URL eingeben.',
    lCancelI:'Abbrechen', lDoImport:'Importieren',
    lEditCardTitle:'Karte bearbeiten', lEditQ:'Frage', lEditA:'Antwort',
    lCancelE:'Abbrechen', lSaveE:'Speichern', lExportTopic:'Thema exportieren',
    lLibrary: 'Bibliothek', ihkLibrary: 'IHK AP2 FA Vorbereitung (2026)',
    searchPhGlobal: 'Themen & Karten suchen...',
    searchPhLocal: 'Im Thema suchen...',
    cardsUnit:'Karte', cardsUnitP:'Karten',
    practiceFlip:'Klicken zum Umdrehen',
    nothingHere:'Keine Karten', nothingHereDesc:'Wechsle zu Bearbeiten und füge Karten hinzu.',
    importedOk:'Importiert!', importError:'Import fehlgeschlagen.',
    topicCreated:'Erstellt!', topicDeleted:'Gelöscht.',
    topicRenamed:'Umbenannt!', cardSaved:'Gespeichert!',
    cardDeleted:'Gelöscht.', cardEdited:'Aktualisiert!',
    exportedOk:'Exportiert!', selectFile:'Bitte Datei oder URL angeben.',
    noTopic:'Kein Thema ausgewählt.', searchPh:'Suchen…',
    fetchErr:'URL konnte nicht geladen werden.', delCardQ:'Karte löschen?',
    btnSkip:'Später ⏱', btnKnow:'Gewusst ✓', btnRestart:'Neustart 🔄',
    finTitle:'Geschafft! 🎉', finSub:'Alle Karten beantwortet.',
    sDone:'Gewusst', sLater:'Später', sLeft:'Verbleibend',
    progLabel:'Fortschritt', pctLabel:'Gewusst',
    lblQ:'Frage', lblA:'Antwort',
    keyHint:'Leertaste = umdrehen · → = gewusst · ↓ = später',
    errFields:'Bitte beide Felder ausfüllen.', errName:'Bitte Namen eingeben.',
  }
};
let lang = localStorage.getItem('fc_lang') || 'en';
const t = k => (TX[lang] || TX.en)[k] || k;

const TXT_IDS = ['appTitle','appSub','lTopics','lWelcome','lWelcomeDesc',
  'lAddCard','lQuestion','lAnswer','lClear','lSaveCard','lTabCards','lTabPractice',
  'lRename','lNewTopicTitle','lTopicName','lTopicColor','lCancel','lCreate',
  'lRenameTitle','lNewName','lCancelR','lSave','lDeleteTitle','lDeleteDesc',
  'lCancelD','lDelete','lImportTitle','lImportFileDesc','iTabFile','lChooseFile',
  'lImportUrlDesc','lCancelI','lDoImport','lEditCardTitle','lEditQ','lEditA',
  'lCancelE','lSaveE','lExportTopic','lLibrary','lArea'];

function applyLang() {
  TXT_IDS.forEach(id => { const el=document.getElementById(id); if(el) el.textContent=t(id); });
  if(document.getElementById('searchGlobal')) document.getElementById('searchGlobal').placeholder = t('searchPhGlobal');
  if(document.getElementById('searchLocal')) document.getElementById('searchLocal').placeholder = t('searchPhLocal');
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang===lang));
  renderTopics();
  renderLibrary();
  if(curTopic){ renderCards(); if(curTab==='practice') renderPractice(); }
}

function setLang(l) {
  lang = l;
  localStorage.setItem('fc_lang', l);
  applyLang();
}

// ─── COLORS ───
const COLORS = ['#5288c1','#81c784','#e57373','#ffb74d','#ce93d8','#4dd0e1','#f06292','#aed581','#ff8a65','#90a4ae'];
let selColor = COLORS[0];
function buildColors() {
  const row = document.getElementById('colorRow');
  row.innerHTML = '';
  COLORS.forEach(c => {
    const d = document.createElement('div');
    d.className = 'cldot' + (c===selColor?' sel':'');
    d.style.background = c;
    d.onclick = () => { selColor=c; buildColors(); };
    row.appendChild(d);
  });
}

// ─── DB ───
let db;
function initDB() {
  return new Promise((res,rej) => {
    const r = indexedDB.open('fc_db', 1);
    r.onupgradeneeded = e => {
      const d = e.target.result;
      if(!d.objectStoreNames.contains('topics')) d.createObjectStore('topics',{keyPath:'id'});
    };
    r.onsuccess = e => { db=e.target.result; res(); };
    r.onerror = e => rej(e);
  });
}
const dbAll = () => new Promise((res,rej) => { const r=db.transaction('topics','readonly').objectStore('topics').getAll(); r.onsuccess=()=>res(r.result); r.onerror=e=>rej(e); });
const dbPut = o => new Promise((res,rej) => { const r=db.transaction('topics','readwrite').objectStore('topics').put(o); r.onsuccess=()=>res(); r.onerror=e=>rej(e); });
const dbDel = id => new Promise((res,rej) => { const r=db.transaction('topics','readwrite').objectStore('topics').delete(id); r.onsuccess=()=>res(); r.onerror=e=>rej(e); });

// ─── STATE ───
let topics=[], curTopic=null, curTab='practice';
let pQ=[], pL=[], pD=[], pCur=null, pFlip=false;
let delId=null, editId=null, renameId=null, importItab='file', importFile=null;
const uid = () => Date.now().toString(36)+Math.random().toString(36).slice(2);

// ─── TOAST ───
function toast(msg, type='info', dur=3000) {
  const c=document.getElementById('toasts'), el=document.createElement('div');
  el.className='toast '+ ({success:'tok',error:'terr',info:'tinf'}[type]||'tinf');
  el.innerHTML=`<span>${{success:'✅',error:'❌',info:'ℹ️'}[type]||''}</span> ${msg}`;
  c.appendChild(el);
  setTimeout(()=>{ el.style.transition='.3s'; el.style.opacity='0'; el.style.transform='translateX(20px)'; setTimeout(()=>el.remove(),320); }, dur);
}

// ─── MODAL ───
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.overlay').forEach(o => o.addEventListener('click', e => { if(e.target===o) o.classList.remove('open'); }));

// ─── UTILS ───
const esc = s => { const d=document.createElement('div'); d.textContent=s; return d.innerHTML; };
const fmt = (s, img) => {
  const iwrap = (src, alt='', cls='') => `<div class="iwrap ${cls}"><img src="${src}" alt="${alt}"><button class="zb" title="Zoom" onclick="event.stopPropagation();zoomImg('${src}')">🔍</button></div>`;
  let h = '';
  if (s) {
    h = esc(s);
    h = h.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    h = h.replace(/__(.*?)__/g, '<b>$1</b>');
    h = h.replace(/\*(.*?)\*/g, '<i>$1</i>');
    h = h.replace(/_(.*?)_/g, '<i>$1</i>');
    h = h.replace(/\\n/g, '<br>');
    h = h.replace(/!\[(.*?)\]\(([^)]+)\)/g, (m, alt, src) => {
      const rs = src.replace(/&amp;/g, '&');
      return iwrap(rs, alt);
    });
    h = h.split(/\r?\n/).map(l => {
      const tr = l.trim();
      if(tr.startsWith('### ')) return `<h3>${tr.substring(4)}</h3>`;
      if(tr.startsWith('## '))  return `<h2>${tr.substring(3)}</h2>`;
      if(tr.startsWith('# '))   return `<h1>${tr.substring(2)}</h1>`;
      if(tr.startsWith('- '))   return '• ' + tr.substring(2);
      return l;
    }).join('<br>');
  }
  if (s && img) return `<div class="fmt-flex"><div class="fmt-text">${h}</div><div class="fmt-img">${iwrap(img, '', 'in-flex')}</div></div>`;
  if (img) return iwrap(img);
  return h;
};
const shuffle = a => { const r=[...a]; for(let i=r.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]; } return r; };

// ─── SIDEBAR TOGGLE ───
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }
function closeMobile() { if(window.innerWidth<=640) document.getElementById('sidebar').classList.remove('open'); }

// ─── RENDER TOPICS ───
function renderTopics() {
  const q = document.getElementById('searchGlobal')?.value.toLowerCase() || '';
  const list = document.getElementById('topicsList');
  list.innerHTML = '';

  // Enhanced Global Search
  let results = [];
  if (q) {
    topics.forEach(tp => {
      let topicMatches = tp.name.toLowerCase().includes(q);
      let matchingCards = tp.cards.filter(c =>
        c.q.toLowerCase().includes(q) ||
        c.a.toLowerCase().includes(q) ||
        (c.area && c.area.toLowerCase().includes(q))
      );
      if (topicMatches || matchingCards.length > 0) {
        results.push({ topic: tp, cardMatches: matchingCards });
      }
    });
  } else {
    results = topics.map(tp => ({ topic: tp, cardMatches: [] }));
  }

  if(!results.length) {
    list.innerHTML = `<div style="padding:16px;text-align:center;font-size:13px;color:#4a6b8a">${q?'No results found':'No topics yet'}</div>`;
    return;
  }

  results.forEach(res => {
    const tp = res.topic;
    const n=tp.cards.length, el=document.createElement('div');
    el.className='titem'+(curTopic?.id===tp.id?' active':'');

    let subInfo = `${n} ${n===1?t('cardsUnit'):t('cardsUnitP')}`;
    if (q && res.cardMatches.length > 0) {
      subInfo = `${res.cardMatches.length} matches`;
    }

    // Highlight topic name if matches
    let displayName = esc(tp.name);
    if (q && tp.name.toLowerCase().includes(q)) {
      const reg = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      displayName = displayName.replace(reg, '<mark style="background:#ffb74d;color:#000;border-radius:2px;padding:0 2px">$1</mark>');
    }

    el.innerHTML=`<div class="tdot" style="background:${tp.color}"></div>
      <div class="tname">${displayName}</div>
      <div class="tbadge">${subInfo}</div>
      <div class="tacts">
        <button class="cta" onclick="event.stopPropagation();openRenameFor('${tp.id}')">✏️</button>
        <button class="cta" onclick="event.stopPropagation();exportOne('${tp.id}')">📤</button>
        <button class="cta del" onclick="event.stopPropagation();askDelete('${tp.id}')">🗑</button>
      </div>`;
    el.addEventListener('click', () => {
      selectTopic(tp.id);
      if (q && res.cardMatches.length > 0) {
        document.getElementById('searchLocal').value = q;
        renderCards();
      }
    });
    list.appendChild(el);
  });
  document.getElementById('btnExportTopic').style.display = curTopic ? 'flex' : 'none';
}

// ─── SELECT TOPIC ───
function selectTopic(id, forceTab) {
  curTopic = topics.find(tp=>tp.id===id) || null;
  renderTopics();
  const empty = document.getElementById('emptyState');
  const tv    = document.getElementById('topicView');
  if(curTopic) {
    empty.style.display = 'none';
    tv.style.display = 'flex';
    document.getElementById('thdrName').textContent = curTopic.name;
    updateMeta();
    document.getElementById('btnExportTopic').style.display = 'flex';
    initPractice();
    switchTab(forceTab || 'practice');
    closeMobile();
  } else {
    empty.style.display = 'flex';
    tv.style.display = 'none';
    document.getElementById('btnExportTopic').style.display = 'none';
  }
}

function updateMeta() {
  if(!curTopic) return;
  const n=curTopic.cards.length;
  document.getElementById('thdrMeta').textContent=`${n} ${n===1?t('cardsUnit'):t('cardsUnitP')}`;
}

// ─── TABS ───
function switchTab(tab) {
  curTab = tab;
  document.querySelectorAll('.tabbar button').forEach(b => b.classList.toggle('active', b.dataset.tab===tab));
  document.getElementById('panePractice').className = 'pane'+(tab==='practice'?' on':'');
  document.getElementById('paneCards').className    = 'pane'+(tab==='cards'?' on':'');
  if(tab==='practice') renderPractice();
  if(tab==='cards')    renderCards();
}

// ─── CARDS ───
function renderCards() {
  if(!curTopic) return;
  const q = document.getElementById('searchLocal')?.value.toLowerCase() || '';

  // Sort: recently updated or created at the top
  curTopic.cards.sort((a, b) => {
    const timeA = a.updatedAt || a.createdAt || 0;
    const timeB = b.updatedAt || b.createdAt || 0;
    return timeB - timeA;
  });

  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';

  const filtered = curTopic.cards.filter(c =>
    c.q.toLowerCase().includes(q) ||
    c.a.toLowerCase().includes(q) ||
    (c.area && c.area.toLowerCase().includes(q))
  );

  if(!filtered.length) {
    grid.innerHTML=`<div style="grid-column:1/-1;padding:32px;text-align:center;color:#4a6b8a">
      <div style="font-size:40px;margin-bottom:8px">🃏</div>
      <div style="font-size:15px;font-weight:700;color:#7d9bbf;margin-bottom:4px">${q ? 'No matching cards' : t('nothingHere')}</div>
      <div style="font-size:13px">${q ? '' : t('nothingHereDesc')}</div></div>`;
    return;
  }

  filtered.forEach(card => {
    const el=document.createElement('div'); el.className='ccard';

    // Highlight helper
    const highlight = (text) => {
      const formatted = fmt(text);
      if (!q) return formatted;
      const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return formatted.replace(new RegExp(`(${safeQ})`, 'gi'), '<mark style="background:#ffb74d;color:#000;border-radius:2px;padding:0 2px">$1</mark>');
    };

    const qContent = highlight(card.q);
    const aContent = highlight(card.a);

    el.innerHTML=`
      <div class="cq">
        <span class="pill pq">${t('lblQ')}</span>
        <div style="flex:1">
          ${card.area ? `<span class="pill parea" style="margin-bottom:6px;display:inline-block;cursor:pointer" onclick="event.stopPropagation();filterByArea('${esc(card.area)}')">${esc(card.area)}</span>` : ''}
          <div class="card-text">${qContent}</div>
          ${card.imgQ ? fmt('', card.imgQ) : ''}
        </div>
      </div>
      <div class="ca">
        <span class="pill pa">${t('lblA')}</span>
        <div style="flex:1">
          <div>${aContent}</div>
          ${card.imgA ? fmt('', card.imgA) : ''}
        </div>
      </div>
      <div class="cfoot">
        <button class="cta" onclick="openEdit('${card.id}')">✏️</button>
        <button class="cta del" onclick="delCard('${card.id}')">🗑</button>
      </div>`;
    grid.appendChild(el);
  });
  updateMeta();
}

function toggleAdd() {
  const b=document.getElementById('addBody'), t=document.getElementById('addToggle');
  const open=b.classList.toggle('open'); t.classList.toggle('open',open);
}

async function saveCard() {
  if(!curTopic){ toast(t('noTopic'),'error'); return; }
  const q=document.getElementById('inpQ').value.trim(), a=document.getElementById('inpA').value.trim();
  const area=document.getElementById('inpArea')?.value.trim() || '';
  const imgQ=tempImgs.inpQ, imgA=tempImgs.inpA;
  if((!q && !imgQ) || (!a && !imgA)){ toast(t('errFields'),'error'); return; }
  const now = Date.now();
  curTopic.cards.push({id:uid(),q,a,area,imgQ,imgA,createdAt:now,updatedAt:now});
  clearCard();
  await dbPut(curTopic); renderCards(); renderTopics(); toast(t('cardSaved'),'success');
}

function clearCard() {
  document.getElementById('inpQ').value=''; document.getElementById('inpA').value='';
  if(document.getElementById('inpArea')) document.getElementById('inpArea').value='';
  tempImgs.inpQ=null; tempImgs.inpA=null;
  renderImgPreview('inpQ'); renderImgPreview('inpA');
}

function delCard(id) {
  if(!curTopic||!confirm(t('delCardQ'))) return;
  curTopic.cards=curTopic.cards.filter(c=>c.id!==id);
  dbPut(curTopic); renderCards(); renderTopics(); toast(t('cardDeleted'),'info');
}

function openEdit(id) {
  const card=curTopic?.cards.find(c=>c.id===id); if(!card) return;
  editId=id;
  document.getElementById('inpEditQ').value=card.q || '';
  document.getElementById('inpEditA').value=card.a || '';
  if(document.getElementById('inpEditArea')) document.getElementById('inpEditArea').value=card.area || '';
  tempImgs.inpEditQ = card.imgQ || null;
  tempImgs.inpEditA = card.imgA || null;
  renderImgPreview('inpEditQ');
  renderImgPreview('inpEditA');
  openModal('mEditCard');
}

async function saveEdit() {
  const card=curTopic?.cards.find(c=>c.id===editId); if(!card) return;
  const q=document.getElementById('inpEditQ').value.trim(), a=document.getElementById('inpEditA').value.trim();
  const area=document.getElementById('inpEditArea')?.value.trim() || '';
  const imgQ=tempImgs.inpEditQ, imgA=tempImgs.inpEditA;
  if((!q && !imgQ) || (!a && !imgA)){ toast(t('errFields'),'error'); return; }
  card.q=q; card.a=a; card.area=area; card.imgQ=imgQ; card.imgA=imgA;
  card.updatedAt = Date.now();
  await dbPut(curTopic); closeModal('mEditCard'); renderCards(); toast(t('cardEdited'),'success');
}

// ─── PRACTICE ───
function initPractice() {
  if(!curTopic||!curTopic.cards.length){ pQ=[];pL=[];pD=[];pCur=null;pFlip=false; return; }
  pQ=shuffle(curTopic.cards.map((_,i)=>i)); pL=[];pD=[];pCur=null;pFlip=false;
  nextCard();
}

function nextCard() {
  if(pQ.length){ pCur=pQ.shift(); }
  else if(pL.length){ pQ=shuffle(pL);pL=[];pCur=pQ.shift(); }
  else { pCur=null; }
  pFlip=false;
}

function flipCard() {
  if(pCur===null) return;
  pFlip=!pFlip;
  const el=document.getElementById('fcInn'); if(el) el.classList.toggle('flip',pFlip);
}

function markDone()  { if(pCur===null)return; pD.push(pCur); nextCard(); renderPractice(); }
function markLater() {
  if(pCur===null)return;
  pL.push(pCur); nextCard();
  if(pCur===null&&pQ.length===0&&pL.length){ pQ=shuffle(pL);pL=[];pCur=pQ.shift();pFlip=false; }
  renderPractice();
}
function restartPractice() { initPractice(); renderPractice(); }

function renderPractice() {
  const wrap=document.getElementById('pracWrap');
  if(!curTopic||!curTopic.cards.length){
    wrap.innerHTML=`<div class="pempty">${t('nothingHere')}<br><small style="font-size:12px;margin-top:8px;display:block;color:#4a6b8a">${t('nothingHereDesc')}</small></div>`;
    return;
  }
  const total=curTopic.cards.length, doneN=pD.length, laterN=pL.length, leftN=pQ.length+(pCur!==null?1:0);
  if(pCur===null&&pQ.length===0&&pL.length===0){
    wrap.innerHTML=`<div class="pfinish">
      <div class="ficon">🎉</div>
      <div class="ftitle">${t('finTitle')}</div>
      <div class="fsub">${t('finSub')}</div>
      ${buildProg(total,doneN,laterN)}
      <button class="pbtn pbtn-restart" onclick="restartPractice()">${t('btnRestart')}</button>
    </div>`;
    return;
  }
  const card=curTopic.cards[pCur];
  wrap.innerHTML=`
    <div class="pstats">
      <div class="chip cdone">✓ ${doneN} ${t('sDone')}</div>
      <div class="chip cleft">📚 ${leftN} ${t('sLeft')}</div>
      ${laterN>0?`<div class="chip clater">⏱ ${laterN} ${t('sLater')}</div>`:''}
    </div>
    <div class="fcard" onclick="flipCard()">
      <div class="fcinn${pFlip?' flip':''}" id="fcInn">
        <div class="fcface fcfront">
          <div class="fcpill fcpq">${t('lblQ')}</div>
          ${card.area ? `<span class="pill parea" style="margin-bottom:12px">${esc(card.area)}</span>` : ''}
          <div class="fctxt">${fmt(card.q, card.imgQ)}</div>
          <div class="fchint">↩ ${t('practiceFlip')}</div>
        </div>
        <div class="fcface fcback">
          <div class="fcpill fcpa">${t('lblA')}</div>
          <div class="fctxt">${fmt(card.a, card.imgA)}</div>
        </div>
      </div>
    </div>
    <div class="progarea">${buildProg(total,doneN,laterN)}</div>
    <div class="pctrls">
      <button class="pbtn pbtn-skip" onclick="markLater()">${t('btnSkip')}</button>
      <button class="pbtn pbtn-know" onclick="markDone()">${t('btnKnow')}</button>
    </div>
    <div class="keyhint">${t('keyHint')}</div>`;
}

function buildProg(total,doneN,laterN) {
  const dp=total?Math.round(doneN/total*100):0, lp=total?Math.round(laterN/total*100):0;
  let dots='';
  const max=Math.min(total,48);
  for(let i=0;i<max;i++){
    let cls='d-pend';
    if(pD.includes(i)) cls='d-done';
    else if(pL.includes(i)) cls='d-later';
    else if(i===pCur) cls='d-cur';
    dots+=`<div class="dot ${cls}"></div>`;
  }
  return `<div class="proglabels"><span>${t('progLabel')}</span><span class="pct">${dp}% ${t('pctLabel')}</span></div>
    <div class="progtrack"><div class="progdone" style="width:${dp}%"></div><div class="proglater" style="left:${dp}%;width:${lp}%"></div></div>
    ${total<=48?`<div class="progdots">${dots}</div>`:''}`;
}

// ─── NEW TOPIC ───
function openNewTopic() {
  selColor=COLORS[Math.floor(Math.random()*COLORS.length)];
  buildColors();
  document.getElementById('inpTopicName').value='';
  openModal('mNewTopic');
  setTimeout(()=>document.getElementById('inpTopicName').focus(),150);
}
async function createTopic() {
  const name=document.getElementById('inpTopicName').value.trim();
  if(!name){ toast(t('errName'),'error'); return; }
  const tp={id:uid(),name,color:selColor,cards:[]};
  topics.push(tp); await dbPut(tp);
  closeModal('mNewTopic'); renderTopics();
  selectTopic(tp.id,'cards');
  setTimeout(()=>{
    const b=document.getElementById('addBody'),tg=document.getElementById('addToggle');
    if(!b.classList.contains('open')){ b.classList.add('open'); tg.classList.add('open'); }
    document.getElementById('inpQ').focus();
  },80);
  toast(t('topicCreated'),'success');
}

// ─── RENAME ───
function openRename() { if(curTopic) openRenameFor(curTopic.id); }
function openRenameFor(id) {
  renameId=id;
  const tp=topics.find(tp=>tp.id===id);
  document.getElementById('inpRename').value=tp?tp.name:'';
  openModal('mRename');
  setTimeout(()=>document.getElementById('inpRename').focus(),150);
}
async function doRename() {
  const tp=topics.find(tp=>tp.id===renameId), name=document.getElementById('inpRename').value.trim();
  if(!tp||!name) return;
  tp.name=name; await dbPut(tp); closeModal('mRename');
  if(curTopic?.id===tp.id) document.getElementById('thdrName').textContent=name;
  renderTopics(); toast(t('topicRenamed'),'success');
}

// ─── DELETE ───
function askDelete(id) { delId=id; openModal('mDelete'); }
async function deleteTopic() {
  if(!delId) return;
  topics=topics.filter(tp=>tp.id!==delId); await dbDel(delId);
  if(curTopic?.id===delId) curTopic=null;
  closeModal('mDelete'); selectTopic(curTopic?.id||null); renderTopics();
  toast(t('topicDeleted'),'info'); delId=null;
}

// ─── EXPORT ───
function doExport(data,name) {
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
  a.download=name; a.click(); toast(t('exportedOk'),'success');
}
function exportAll()     { doExport(topics,'flashcards_all.json'); }
function exportCurrent() { if(!curTopic){toast(t('noTopic'),'error');return;} exportOne(curTopic.id); }
function exportOne(id)   { const tp=topics.find(tp=>tp.id===id); if(tp) doExport([tp],`flashcards_${tp.name.replace(/\s+/g,'_')}.json`); }

// ─── IMPORT ───
function openImport() {
  importFile=null;
  document.getElementById('fileNameDisplay').textContent='';
  document.getElementById('inpUrl').value='';
  document.getElementById('inpPaste').value='';
  switchItab('file'); openModal('mImport');
}
function switchItab(tab) {
  importItab=tab;
  document.querySelectorAll('.itab').forEach(b=>b.classList.toggle('active',b.dataset.itab===tab));
  document.getElementById('ipFile').style.display  = tab==='file' ?'block':'none';
  document.getElementById('ipUrl').style.display   = tab==='url'  ?'block':'none';
  document.getElementById('ipPaste').style.display = tab==='paste'?'block':'none';
}
function onFileChange(e) {
  importFile=e.target.files[0];
  document.getElementById('fileNameDisplay').textContent=importFile?importFile.name:'';
}
async function doImport() {
  let data;
  try {
    if(importItab==='file'){ if(!importFile){toast(t('selectFile'),'error');return;} data=JSON.parse(await importFile.text()); }
    else if(importItab==='url'){ const u=document.getElementById('inpUrl').value.trim(); if(!u){toast(t('selectFile'),'error');return;} const r=await fetch(u); data=await r.json(); }
    else { data=JSON.parse(document.getElementById('inpPaste').value); }
    await mergeTopics(data); closeModal('mImport');
  } catch(e){ console.error(e); toast(t('importError'),'error'); }
}
async function mergeTopics(data) {
  if(!Array.isArray(data)) data=[data];
  let n=0;
  const now = Date.now();
  for(const raw of data){
    if(!raw.name) continue;
    const ex=topics.find(tp=>tp.name===raw.name);
    if(ex){
      const qs=new Set(ex.cards.map(c=>c.q));
      (raw.cards||[]).forEach(c=>{
        if(!qs.has(c.q)) ex.cards.push({
          id:uid(), q:c.q||'', a:c.a||'', area:c.area||'',
          imgQ:c.imgQ||null, imgA:c.imgA||null,
          createdAt: c.createdAt||now, updatedAt: c.updatedAt||now
        });
      });
      await dbPut(ex);
    } else {
      const tp={
        id:uid(),
        name:raw.name,
        color:raw.color||COLORS[Math.floor(Math.random()*COLORS.length)],
        cards:(raw.cards||[]).map(c=>({
          id:uid(), q:c.q||'', a:c.a||'', area:c.area||'',
          imgQ:c.imgQ||null, imgA:c.imgA||null,
          createdAt: c.createdAt||now, updatedAt: c.updatedAt||now
        }))
      };
      topics.push(tp);
      await dbPut(tp);
    }
    n++;
  }
  renderTopics(); toast(`${t('importedOk')} (${n})`,'success');
}
async function checkUrlImport() {
  const url=new URLSearchParams(location.search).get('import_from_url'); if(!url) return;
  try { toast('🔄 Importing…','info',5000); const r=await fetch(url); await mergeTopics(await r.json()); history.replaceState({},'',location.pathname); }
  catch(e){ toast(t('fetchErr'),'error'); }
}

function filterByArea(area) {
  const searchInput = document.getElementById('searchLocal');
  if (searchInput) {
    searchInput.value = area;
    renderCards();
  }
}

function zoomImg(src) {
  document.getElementById('zoomImg').src = src;
  openModal('mZoom');
}

// ─── IMAGE UPLOAD ───
let currentImgTarget = null;
let tempImgs = { inpQ: null, inpA: null, inpEditQ: null, inpEditA: null };

function pickImg(id) {
  currentImgTarget = id;
  document.getElementById('imgUpload').click();
}

function onImgSelected(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (re) => {
    tempImgs[currentImgTarget] = re.target.result;
    renderImgPreview(currentImgTarget);
    e.target.value = '';
  };
  reader.readAsDataURL(file);
}

function renderImgPreview(id) {
  const containerId = id === 'inpQ' ? 'preQ' : id === 'inpA' ? 'preA' : id === 'inpEditQ' ? 'preEditQ' : 'preEditA';
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  if (tempImgs[id]) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = tempImgs[id];
    const btn = document.createElement('button');
    btn.className = 'del';
    btn.innerText = 'X';
    btn.onclick = () => {
      tempImgs[id] = null;
      renderImgPreview(id);
    };
    div.appendChild(img);
    div.appendChild(btn);
    container.appendChild(div);
  }
}

// ─── KEYBOARD ───
document.addEventListener('keydown', e => {
  const modal=document.querySelector('.overlay.open');
  if(e.key==='Escape'&&modal){ modal.classList.remove('open'); return; }
  if(modal) return;
  if(curTab==='practice'){
    if(e.key===' ')          { e.preventDefault(); flipCard(); }
    if(e.key==='ArrowRight') { e.preventDefault(); if(pFlip) markDone(); }
    if(e.key==='ArrowDown')  { e.preventDefault(); markLater(); }
  }
});

// ─── LIBRARY ───
const LIB = [
  { name: 'ihkLibrary', file: 'imports/ihk_ap2_fa_2026.json' }
];

function renderLibrary() {
  const list = document.getElementById('libList');
  if(!list) return;
  list.innerHTML = '';
  LIB.forEach(item => {
    const el = document.createElement('div');
    el.className = 'titem';
    el.innerHTML = `<div class="tdot" style="background:#5288c1"></div>
      <div class="tname">${esc(t(item.name))}</div>
      <div class="tacts"><button class="cta">📥</button></div>`;
    el.addEventListener('click', () => importPredefined(item.file));
    list.appendChild(el);
  });
}

async function importPredefined(file) {
  try {
    const r = await fetch(file);
    if(!r.ok) throw new Error();
    const data = await r.json();
    await mergeTopics(data);
  } catch(e) {
    console.error(e);
    toast(t('importError'), 'error');
  }
}

// ─── INIT ───
async function init() {
  await initDB();
  topics = await dbAll();
  applyLang();
  buildColors();
  await checkUrlImport();
  if(topics.length) selectTopic(topics[0].id,'practice');
}
init();
