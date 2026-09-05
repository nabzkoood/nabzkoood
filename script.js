// ===========================
// Mobile Menu
// ===========================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
// ===========================
// Dark Mode
// ===========================

const themeBtn = document.querySelector("#theme-btn");

const body = document.body;


themeBtn.addEventListener("click", () => {

    body.classList.toggle("light-mode");


    if(body.classList.contains("light-mode")){

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme","light");

    }else{

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme","dark");

    }

});


// Load Saved Theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "light"){

    body.classList.add("light-mode");

    themeBtn.textContent = "☀️";

}


// ===========================
// Typing Effect
// ===========================

const typingText = document.querySelector("#typing");


const words = [

    "Web Developer 💻",

    "Flutter Developer 📱",

    "Game Developer 🎮",

    "AI Enthusiast 🤖"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    let currentWord = words[wordIndex];


    if(!deleting){

        typingText.textContent = currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }


    }else{


        typingText.textContent = currentWord.substring(0,charIndex--);


        if(charIndex < 0){

            deleting = false;

            wordIndex++;


            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(typeEffect,100);

}


typeEffect();
// ===========================
// Skill Bar Animation
// ===========================

const skills = document.querySelectorAll(".progress");


function showSkills(){

    skills.forEach(skill => {


        const skillPosition = skill.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(skillPosition < screenHeight - 100){

            skill.style.width = skill.getAttribute("data-width");

        }


    });

}


window.addEventListener("scroll", showSkills);


// ===========================
// Scroll Reveal Animation
// ===========================


const hiddenElements = document.querySelectorAll("section, .card, .project-card, .service-card, .certificate-card");


function revealOnScroll(){


    hiddenElements.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;


        const triggerPoint = window.innerHeight - 120;


        if(elementTop < triggerPoint){

            element.classList.add("show");

        }


    });


}


window.addEventListener("scroll", revealOnScroll);


revealOnScroll();
// ===========================
// Back To Top Button
// ===========================

const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===========================
// Contact Form
// ===========================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});

// ===========================
// Active Navbar Link
// ===========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

console.log("Nabz Code Portfolio Loaded Successfully 🚀");

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});
