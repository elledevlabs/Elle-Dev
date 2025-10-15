// Language switching functionality
let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "fr" : "en";
  updateLanguage();
}

function updateLanguage() {
  const elements = document.querySelectorAll("[data-en][data-fr]");
  elements.forEach((element) => {
    element.textContent = currentLang === "en"
      ? element.getAttribute("data-en")
      : element.getAttribute("data-fr");
  });

  document.getElementById("langText").textContent =
    currentLang === "en" ? "FR" : "EN";
}

// Initialize EmailJS
(function() {
  emailjs.init("TJ5G7EDaRSFjq83_q"); // 🔹 Replace with your actual public key from EmailJS
  console.log("EmailJS initialized");
})();

// Handle contact form submission (EmailJS)
document.addEventListener("DOMContentLoaded", function() {
  updateLanguage();

  const form = document.getElementById("contactForm");
  if (!form) {
    console.error("contactForm not found");
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form submitted");

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    console.log("Sending email with params:", params);

    const serviceID = "service_0rak3de";  // e.g. "service_0rak3de"
    const templateID = "template_87j07fq"; // e.g. "template_xxxxxx"

    emailjs.send(serviceID, templateID, params)
      .then(() => {
        alert(
          currentLang === "en"
            ? "Your message has been sent successfully!"
            : "Votre message a été envoyé avec succès !"
        );
        form.reset();
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert(
          currentLang === "en"
            ? "Failed to send message. Please try again later."
            : "Échec de l'envoi du message. Veuillez réessayer plus tard."
        );
      });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }
});
