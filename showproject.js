const project= JSON.parse(sessionStorage.getItem("selectedProject"));

document.querySelector(".info-description").innerHTML= `${project.description}`;
document.querySelector(".info-name").textContent=project.name;
document.querySelector(".info-when").textContent=project.when;
document.querySelector(".info-format").textContent=project.format;

const info=document.querySelector(".info");
info.innerHTML=`${project.info.map(i=>`<li>${i}</li>`).join("")}`;

document.querySelector(".close").addEventListener("click",()=>window.parent.document.getElementById("content").src="projects.html");