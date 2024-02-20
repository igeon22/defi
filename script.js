let sideContainer = document.querySelector(".side-btn");

sideContainer.addEventListener("click",()=>{
    let firstBtn = document.querySelector(".f");
    firstBtn.classList.toggle("fm")
    let secBtn = document.querySelector(".s");
    secBtn.classList.toggle("sm")
    let lastBtn = document.querySelector(".e");
    lastBtn.classList.toggle("em")
    document.querySelector("nav").classList.toggle("hd")
});