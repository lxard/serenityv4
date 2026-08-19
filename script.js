const menu=document.getElementById("menu");
const nav=document.getElementById("nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const navbar=document.getElementById("navbar");
addEventListener("scroll",()=>navbar.style.background=scrollY>30?"rgba(6,6,9,.95)":"rgba(8,8,11,.8)");
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
