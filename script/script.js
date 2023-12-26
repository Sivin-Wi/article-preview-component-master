const containerShareOne = document.querySelector(".containerShareOne");
const containerShareTwo = document.querySelector(".containerShareTwo");
const shareButtonOne = document.getElementById("btn-1");
const shareButtonTwo = document.getElementById("btn-2");


if(innerWidth < 1024){
    shareButtonOne.addEventListener("click",()=>{
        containerShareOne.style.visibility = "hidden";
        containerShareTwo.style.display = "flex";
    })
    console.log(innerWidth);
}else{
    shareButtonOne.addEventListener("mouseover",()=>{
        containerShareTwo.style.transition = "display 0.3s ease"
        containerShareTwo.style.display = (containerShareTwo.style.display === "none") ? "block" : "none"
        shareButtonOne.style.transition = "background-color 0.3s ease"
        shareButtonOne.style.backgroundColor = (shareButtonOne.style.backgroundColor === "hsl(210, 46%, 95%)") ? "hsl(217, 19%, 35%)" : "hsl(210, 46%, 95%)";

    })
}


