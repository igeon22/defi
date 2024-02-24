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


let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll =  document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll vers le bas
    document.querySelector("header").classList.add("hidden");
  } else {
    // Scroll vers le haut
    document.querySelector("header").classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour gérer le scroll vers le haut lorsqu'on est en haut de la page
}, false);

function reveal() {
    var reveals = document.querySelectorAll(".features");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();