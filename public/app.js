// Progressive enhancement: page content and links work without JavaScript.
const root=document.documentElement;
const ru=root.lang==='ru';

for(const link of document.querySelectorAll('[data-language]')){
  link.addEventListener('click',()=>{
    if(location.hash)link.hash=location.hash;
  });
}

const copyButton=document.querySelector('[data-copy-email]');
copyButton?.addEventListener('click',async()=>{
  const status=document.querySelector('[data-copy-status]');
  try{
    if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
    status.textContent=copyButton.dataset.success;
  }catch{
    status.textContent=copyButton.dataset.failure;
  }
});

const audience=document.querySelector('[data-audience]');
if(audience){
  const controls=audience.querySelector('[data-audience-controls]');
  controls.hidden=false;
  const buttons=[...controls.querySelectorAll('button')];
  const select=(id)=>{
    for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.audience===id));
    for(const panel of audience.querySelectorAll('[data-audience-panel]'))panel.hidden=panel.dataset.audiencePanel!==id;
  };
  select('guest');
  for(const button of buttons)button.addEventListener('click',()=>{
    select(button.dataset.audience);
    document.querySelector('[data-announcement]').textContent=ru?(button.dataset.audience==='guest'?'Показана главная для гостя':'Показана главная участника'):(button.dataset.audience==='guest'?'Showing the guest homepage':'Showing the member homepage');
  });
}

const dialog=document.querySelector('[data-lightbox]');
if(dialog&&typeof dialog.showModal==='function'){
  let trigger=null;
  for(const link of document.querySelectorAll('[data-inspect]'))link.addEventListener('click',event=>{
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();trigger=link;
    const image=dialog.querySelector('img');
    image.src=link.href;image.alt=link.querySelector('img')?.alt||link.dataset.alt||'';
    dialog.querySelector('figcaption').textContent=link.dataset.caption||'';
    dialog.showModal();dialog.scrollTop=0;
  });
  dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>trigger?.focus({preventScroll:true}));
}

const contents=[...document.querySelectorAll('[data-contents] a')];
if(contents.length&&'IntersectionObserver' in window){
  const sections=contents.map(link=>document.getElementById(link.hash.slice(1))).filter(Boolean);
  const visible=new Set();
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries)entry.isIntersecting?visible.add(entry.target.id):visible.delete(entry.target.id);
    const current=sections.find(section=>visible.has(section.id));
    if(current)for(const link of contents){if(link.hash==='#'+current.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');}
  },{rootMargin:'-140px 0px -45% 0px',threshold:0});
  sections.forEach(section=>observer.observe(section));
}
