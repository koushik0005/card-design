
const card = document.getElementById("card")
const details = document.getElementById("details");

card.addEventListener("mouseenter", ()=>{
    details.classList.add("open");
    details.classList.remove("close");
})


card.addEventListener("mouseleave", ()=>{
    details.classList.remove("open");
    details.classList.add("close");
})
