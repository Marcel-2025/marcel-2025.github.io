'use strict';
const button=document.querySelector('.menu');const nav=document.getElementById('navlinks');
if(button&&nav){function close(){nav.classList.remove('open');button.setAttribute('aria-expanded','false')}button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){close();button.focus()}})}
