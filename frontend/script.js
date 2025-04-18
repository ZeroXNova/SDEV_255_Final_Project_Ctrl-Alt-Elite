//eventlistener,triggers when DOM is loaded
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/courses");
    const courses = await response.json();

    let html = "";
    for (let course of courses){
        html+= `<li>${course.courseName} - ${course.description} | Credits: ${course.credits} | Subject Area: ${course.subjectArea}</li>`;
    } 
    document.querySelector("#addedcourse").innerHTML = html;
});