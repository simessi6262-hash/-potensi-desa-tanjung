// ===================================
// HAMBURGER MENU MOBILE
// ===================================


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}



// Tutup menu setelah klik link

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});








// ===================================
// ANIMASI SCROLL REVEAL
// ===================================


const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){

    const windowHeight = window.innerHeight;


    reveals.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;


        const revealPoint = 120;



        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }


    });


}



window.addEventListener(
    "scroll",
    revealOnScroll
);



revealOnScroll();








// ===================================
// SMOOTH SCROLL
// ===================================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});