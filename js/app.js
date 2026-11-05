/* MuFase Retro FX Suite | GitHub Pages static redeemer
   La comprobación se hace en el navegador. NO constituye control seguro de acceso.
   El archivo de descarga de GitHub Pages siempre puede ser accesible por su URL.
*/
(() => {
  'use strict';
  const plugins = window.MUFASE_PLUGINS || [];
  const hashes = new Set(window.MUFASE_CODE_HASHES || []);
  const $ = id => document.getElementById(id);
  const grid = $('pluginGrid');
  const dialog = $('pluginDialog');
  let activeFilter = 'Todos';
  let openIndex = 0;

  function renderCatalog() {
    const items = plugins.filter(p => activeFilter === 'Todos' || p.category === activeFilter);
    grid.replaceChildren();
    items.forEach((p) => {
      const index = plugins.findIndex(q => q.id === p.id);
      const card = document.createElement('a');
      card.href = p.page;
      card.className = 'plugin-card';
      card.setAttribute('aria-label', `Ver ficha técnica de ${p.id}, ${p.title}`);
      const photo = document.createElement('div'); photo.className = 'plugin-photo';
      const badge = document.createElement('span'); badge.className = 'plugin-topline'; badge.textContent = 'MUFASE / RETRO FX';
      const img = new Image(); img.src = p.thumb; img.alt = ''; img.loading = 'lazy'; img.width = 640; img.height = 420;
      photo.append(badge, img);
      const body = document.createElement('div'); body.className = 'plugin-content';
      const cat = document.createElement('div'); cat.className = 'plugin-category'; cat.textContent = p.category;
      const line = document.createElement('div'); line.className = 'plugin-titleline';
      const h = document.createElement('h3'); h.textContent = p.id;
      const arrow = document.createElement('span'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true');
      line.append(h, arrow);
      const desc = document.createElement('p'); desc.textContent = p.description;
      const controlLabel = document.createElement('div'); controlLabel.className = 'plugin-control-line'; controlLabel.textContent = 'Controles: ' + p.controls.map(c => c.name).join(' · ');
      const detailsLink = document.createElement('span'); detailsLink.className = 'plugin-details-action'; detailsLink.textContent = 'Ver ficha técnica  →';
      body.append(cat, line, desc, controlLabel, detailsLink); card.append(photo, body);
      grid.append(card);
    });
    $('catalogCount').textContent = `${items.length} ${items.length === 1 ? 'plugin' : 'plugins'}`;
  }

  function showPlugin(index) {
    openIndex = (index + plugins.length) % plugins.length;
    const p = plugins[openIndex];
    $('dialogTitle').textContent = `${p.id} · ${p.title}`;
    $('dialogDescription').textContent = p.description;
    $('dialogImage').src = p.image;
    $('dialogImage').alt = `Captura real ampliada del procesador ${p.id}`;
    $('dialogNumber').textContent = `${String(openIndex + 1).padStart(2,'0')} / ${plugins.length}`;
    if (!dialog.open) dialog.showModal();
  }

  $('filterTabs').addEventListener('click', e => {
    const btn = e.target.closest('button[data-filter]'); if (!btn) return;
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('button[data-filter]').forEach(el => {
      const on = el === btn; el.classList.toggle('active',on);el.setAttribute('aria-pressed',String(on));
    });
    renderCatalog();
  });
  $('closeDialog').addEventListener('click',()=>dialog.close());
  $('prevPlugin').addEventListener('click',()=>showPlugin(openIndex-1));
  $('nextPlugin').addEventListener('click',()=>showPlugin(openIndex+1));
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener('keydown', e => {
    if (!dialog.open) return;
    if (e.key === 'ArrowRight') showPlugin(openIndex+1);
    else if (e.key === 'ArrowLeft') showPlugin(openIndex-1);
  });
  renderCatalog();

  const mobileMenu = $('mobileMenu'); const nav = $('siteNav');
  mobileMenu.addEventListener('click',()=>{
    const open = nav.classList.toggle('is-open');
    mobileMenu.setAttribute('aria-expanded',String(open));
    mobileMenu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  });
  nav.querySelectorAll('a').forEach(el=>el.addEventListener('click',()=>{nav.classList.remove('is-open'); mobileMenu.setAttribute('aria-expanded','false');}));
  $('footerYear').textContent = new Date().getFullYear();

  const field=$('redeemCode'),form=$('redeemForm'),message=$('formMessage'),button=$('validateButton'),success=$('redeemedBox');
  const config = window.MUFASE_DOWNLOAD || {url:'downloads/MuFase_Retro_Archivo_Prueba.png',fileName:'MuFase_Retro_Archivo_Prueba.png',label:'Descargar archivo de prueba',isDemo:true};
  const link=$('downloadLink');link.href=config.url;link.download=config.fileName;
  link.innerHTML=`<span aria-hidden="true">↓</span> ${config.label}`;
  if (!config.isDemo) {
    $('redeemDisclaimer').textContent='El archivo descargable corresponde a la versión que se haya publicado para esta colección. Comprueba su procedencia antes de instalarlo.';
    $('downloadNote').textContent='Descarga el archivo oficial proporcionado por MuFase y sigue sus instrucciones de instalación.';
    $('faqDownloadAnswer').textContent='El enlace dirige al archivo configurado por el propietario de MuFase. La compatibilidad depende de la versión compilada y de tu DAW.';
  }
  function normalizeCode(value) {return value.toUpperCase().replace(/[^A-Z0-9]/g,'');}
  function displayCode(value){
    const compact = normalizeCode(value).slice(0,18); // MFR + 15 characters
    const a=compact.slice(0,3), b=compact.slice(3);
    return [a,b.slice(0,5),b.slice(5,10),b.slice(10,15)].filter(Boolean).join('-');
  }
  field.addEventListener('input',()=>{
    const pos=field.selectionStart;
    field.value=displayCode(field.value);
    field.setAttribute('aria-invalid','false');message.textContent='';
  });
  $('clearCode').addEventListener('click',()=>{field.value='';message.textContent='';field.focus()});
  function hex(data){return [...new Uint8Array(data)].map(x=>x.toString(16).padStart(2,'0')).join('');}
  async function sha256(value){
    if (!crypto?.subtle) throw new Error('Abre esta web mediante HTTPS (GitHub Pages) o un servidor local.');
    return hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)));
  }
  form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    const canonical=displayCode(field.value);
    const normalized=normalizeCode(canonical);
    if(!/^MFR[A-HJ-NP-Z2-9]{15}$/.test(normalized)){
      message.textContent='Revisa el formato. El código debe ser MFR-XXXXX-XXXXX-XXXXX.';
      field.setAttribute('aria-invalid','true');field.focus();return;
    }
    button.disabled=true;button.textContent='Validando código…';message.textContent='';
    try{
      const digest=await sha256(canonical);
      if(hashes.has(digest)){
        $('redeemedIdentifier').textContent=`Código verificado ·•••• ${normalized.slice(-5)}`;
        form.hidden=true;success.hidden=false;
        try {localStorage.setItem('mufase-last-redeem',normalized.slice(-5));}catch(_){/* blocked */}
        success.scrollIntoView({behavior:'smooth',block:'nearest'});
      }else{
        message.textContent='Este código no es válido. Verifica que esté escrito correctamente.';
        field.setAttribute('aria-invalid','true');field.focus();
      }
    }catch(error){message.textContent=error.message || 'No se pudo validar el código.';}
    finally{button.disabled=false;button.innerHTML='Validar mi código <span aria-hidden="true">↗</span>';}
  });
  $('anotherCode').addEventListener('click',()=>{success.hidden=true;form.hidden=false;field.value='';message.textContent='';field.focus();});
})();
