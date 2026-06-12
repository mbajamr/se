
async function loadSection(id,file){
 const r=await fetch(file);
 document.getElementById(id).innerHTML=await r.text();
}
loadSection("header","content/menu.html");
loadSection("banner","content/banner.html");
loadSection("about","content/about_services.html");
loadSection("projects","content/projects_clients_certs.html");
loadSection("contact","content/contact.html");
loadSection("footer","content/footer.html");

function toggleMenu(){
 const m=document.getElementById("menu");
 if(m) m.classList.toggle("active");
}
