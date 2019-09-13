

document.querySelectorAll(".tabButton").forEach(e=>{
    e.onclick = (event)=>{
        document.querySelector(".activeButton").classList.remove("activeButton");
        event.target.classList.add("activeButton");

        document.querySelector(".show").classList.add("hide");
        document.querySelector(".show").classList.remove("show");
        
        document.querySelector("#" + event.target.dataset.page).classList.remove("hide");
        document.querySelector("#" + event.target.dataset.page).classList.add("show")

    }
})