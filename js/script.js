
// ================= FAQ ACCORDION =================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }
        else{
            answer.style.display = "block";
        }

    });

});

// ================= DARK MODE =================

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }
        else{
            counter.innerText = target;
        }

    };

    updateCounter();

});

// ================= FAKE LIVE STOCK UPDATE =================

const prices = document.querySelectorAll(".price");

setInterval(() => {

    prices.forEach(price => {

        let currentPrice =
        parseFloat(price.innerText.replace("$", "").replace(",", ""));

        let randomChange =
        (Math.random() * 10 - 5).toFixed(2);

        currentPrice += parseFloat(randomChange);

        price.innerText =
        "$" + currentPrice.toFixed(2);

    });

}, 3000);

// ================= SCROLL PROGRESS BAR =================

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar")
    .style.width = progress + "%";

});

// ================= HAMBURGER MENU =================

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ================= TYPING EFFECT =================

const text =
"Real-time stock insights, crypto tracking, market analytics and investment tools.";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.querySelector(".typing-text")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 50);
    }

}

typeEffect();

// ================= SCROLL TO TOP =================

const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }
    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ================= ADVANCED IMAGE SLIDER =================

const slides =
document.querySelectorAll(".slide");

const dots =
document.querySelectorAll(".dot");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

let currentIndex = 0;

// Show Slide Function

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    dots.forEach(dot => {

        dot.classList.remove("active-dot");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active-dot");

}

// Next Slide

function nextSlide(){

    currentIndex++;

    if(currentIndex >= slides.length){

        currentIndex = 0;
    }

    showSlide(currentIndex);

}

// Previous Slide

function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);

}

// Button Events

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

// Dot Navigation

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentIndex = index;

        showSlide(currentIndex);

    });

});

// Auto Slide

let autoSlide = setInterval(nextSlide, 4000);

// Pause on Hover

const slider =
document.querySelector(".slider-container");

slider.addEventListener("mouseover", () => {

    clearInterval(autoSlide);

});

slider.addEventListener("mouseout", () => {

    autoSlide = setInterval(nextSlide, 4000);

});