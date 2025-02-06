window.addEventListener("DOMContentLoaded",()=>{
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click",() => {
        removeActive();
        panel.classList.add("active");
    });
 })

//below function will remove the all active classes

function removeActive(){
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

});