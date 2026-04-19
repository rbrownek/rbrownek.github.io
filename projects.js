let projects=JSON.parse(sessionStorage.getItem("projects"));

const iframe=window.parent.document.getElementById("content");
const courses=window.parent.document.getElementById("courses");
const project_page=window.parent.document.getElementById("projects");


function project_cards(id){

    const space=document.getElementById(id);
    
    if(space){
        projects.forEach(project=>{
        const card=document.createElement('div');
        card.classList.add("card");
        card.innerHTML=`
           
            <div class="name">${project.name}</div>
            <div class="format">${project.format}</div>
            <div class="classifcation">${project.classification}</div>
            <div class="when">${project.when}</div>
            <div class="description">${project.description}</div>
            
        `;

        space.appendChild(card);
        card.addEventListener("click", ()=>{
            sessionStorage.setItem("selectedProject",JSON.stringify(project)); 
            iframe.style.transition = "opacity 0.3s ease";
            iframe.style.opacity = "0";
            setTimeout(() => {
            iframe.src = "showproject.html";
            iframe.style.opacity = "1";}, 300);
            courses.classList.remove("active");
            project_page.classList.add("active");
            


                });
   

    });
    }
    
}



project_cards("projects");
