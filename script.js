// ── PARTICLES
(function(){
  const container = document.getElementById('particles');
  const count = 30;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random()*100}%;
      width: ${Math.random()*3+1}px;
      height: ${Math.random()*3+1}px;
      animation-duration: ${Math.random()*15+8}s;
      animation-delay: ${Math.random()*10}s;
      opacity: ${Math.random()*0.5+0.1};
    `;
    container.appendChild(p);
  }
})();

// ── NAVBAR SCROLL
window.addEventListener('scroll', function(){
  const nb = document.getElementById('navbar');
  if(window.scrollY > 50) nb.classList.add('scrolled');
  else nb.classList.remove('scrolled');
});

// ── MOBILE NAV
function toggleNav(){
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ── SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── LIGHTBOX
document.querySelectorAll('.real-img').forEach(item => {
  item.addEventListener('click', function(){
    const img = this.querySelector('img');
    const cap = this.querySelector('[style*="color:var(--gold-pale)"]');
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-caption').textContent = cap ? cap.textContent : img.alt;
    document.getElementById('lightbox').classList.add('open');
  });
});
document.getElementById('lightbox').addEventListener('click', function(e){
  if(e.target === this) closeLightbox();
});
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLightbox(); });

// ── CONTACT FORM → WHATSAPP
function handleSubmit(event){
  const btn = event.target;

  const name    = document.getElementById('order-name').value.trim();
  const phone   = document.getElementById('order-phone').value.trim();
  const email   = document.getElementById('order-email').value.trim();
  const service = document.getElementById('order-service').value.trim();
  const message = document.getElementById('order-message').value.trim();

  if(!name || !phone || !service){
    alert('தயவுசெய்து பெயர், தொலைபேசி மற்றும் சேவை வகை உள்ளிடவும்.');
    return;
  }

  const text =
    '🔔 *புதிய ஆர்டர் - Prabhu Laser*%0A' +
    '━━━━━━━━━━━━━━━━━━%0A' +
    '👤 *பெயர்:* ' + name + '%0A' +
    '📞 *தொலைபேசி:* ' + phone + '%0A' +
    '✉️ *மின்னஞ்சல்:* ' + (email || 'தரப்படவில்லை') + '%0A' +
    '⚙️ *சேவை வகை:* ' + service + '%0A' +
    '📝 *செய்தி:* ' + (message || 'தரப்படவில்லை') + '%0A' +
    '━━━━━━━━━━━━━━━━━━';

  window.open('https://wa.me/919965988885?text=' + text, '_blank');

  btn.textContent = '✓ WhatsApp திறக்கப்படுகிறது!';
  btn.style.background = 'linear-gradient(135deg,#2ed573,#1a9e4a)';
  setTimeout(()=>{
    btn.textContent = 'ஆர்டர் அனுப்புங்கள்';
    btn.style.background = '';
  }, 3000);
}
