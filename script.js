// Smooth scroll for anchor links (if used)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Simple contact form handler (simulated)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      alert('Please fill all fields.');
      return;
    }
    alert(`Thanks ${name}! Your message has been noted.\nEmail: ${email}`);
    form.reset();
  });
}
