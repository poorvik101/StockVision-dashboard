// ================= LOADER =================

window.addEventListener("load", () => {

    document.querySelector(".loader-wrapper")
    .style.display = "none";

});

// ================= FORM VALIDATION =================

const form =
document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const message =
    document.getElementById("message").value;

    if(name === "" ||
       email === "" ||
       phone === "" ||
       message === ""){

        alert("Please fill all fields.");

        return;
    }

    if(phone.length < 10){

        alert("Enter valid phone number.");

        return;
    }

    alert("Message Sent Successfully!");

    form.reset();

});

// ================= NEWSLETTER =================

document.getElementById("subscribeBtn")
.addEventListener("click", () => {

    const email =
    document.getElementById("newsletterEmail")
    .value;

    if(email === ""){

        alert("Please enter email.");

    }
    else{

        alert("Subscribed Successfully!");

        document.getElementById("newsletterEmail")
        .value = "";

    }

});

// ================= SCROLL REVEAL =================

function revealSections(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

// ================= THEME TOGGLE =================

const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});
