const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "من فضلك املأ جميع الحقول.";
        return;
    }

    formMessage.textContent = "تم إرسال رسالتك بنجاح!";
    contactForm.reset();
}
);

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    
    button.addEventListener("click", function () {
        alert("سيتم إضافة رابط المشروع هنا لاحقًا.");
    });
});
