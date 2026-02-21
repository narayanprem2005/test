document.addEventListener('DOMContentLoaded',function(){
  // set year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // mobile nav toggle
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>nav.classList.toggle('open'))
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href && href.startsWith('#')){
        const el=document.querySelector(href);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}) }
      }
    })
  })

  // simple contact form handler
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=data.get('name')||''; const email=data.get('email')||''; const message=data.get('message')||'';
      if(!name||!email||!message){ alert('Please complete all fields.'); return }
      alert('Thanks, '+name+"! We'll get back to you soon.");
      form.reset();
    })
  }
})
