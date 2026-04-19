const courses=JSON.parse(sessionStorage.getItem("courses"));
const course_space=document.querySelector(".course-space");
(()=>{
    courses.forEach(course=>{
        const card=document.createElement('div');
        card.classList.add("card");
        card.innerHTML=`
            <div class="header">
            <div class="course">${course.classification}</div>
            <div class="when">Took in: ${course.when}</div>
            </div>
            <div class="info">${course.course_info}</div>
        `;
        course_space.appendChild(card);


    });
})();