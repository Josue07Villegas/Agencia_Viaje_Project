const navToggle=document.querySelector('.nav-toggle');
const navMenu=document.querySelector('.nav-menu');
if(navToggle&&navMenu){navToggle.addEventListener('click',()=>{navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',navMenu.classList.contains('open'));});}
const currentPage=document.body.dataset.page;
document.querySelectorAll('[data-page]').forEach(link=>{if(link.dataset.page===currentPage)link.classList.add('active');});
