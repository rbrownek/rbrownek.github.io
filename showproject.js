const project= JSON.parse(sessionStorage.getItem("selectedProject"));

document.querySelector(".info-description").innerHTML= `${project.description}`;
document.querySelector(".info-name").textContent=project.name;
document.querySelector(".info-when").textContent=project.when;
document.querySelector(".info-format").textContent=project.format;
if(project.demo){
    document.querySelector("#demo").src=project.demo;
}

const info=document.querySelector(".info");
info.innerHTML=`${project.info.map(i=>`<li>${i}</li>`).join("")}`;

document.querySelector(".close").addEventListener("click",()=>{
    const iframe=window.parent.document.getElementById("content");
    iframe.style.transition = "opacity 0.3s ease";
                iframe.style.opacity = "0";
                setTimeout(() => {
                iframe.src = "projects.html";
                iframe.style.opacity = "1";}, 300);
});
