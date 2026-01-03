// Language switching functionality
let currentLang = "en"

function toggleLanguage() {
  currentLang = currentLang === "en" ? "fr" : "en"
  updateLanguage()
}

function updateLanguage() {
  const elements = document.querySelectorAll("[data-en][data-fr]")
  elements.forEach((element) => {
    if (currentLang === "en") {
      element.textContent = element.getAttribute("data-en")
    } else {
      element.textContent = element.getAttribute("data-fr")
    }
  })

  document.getElementById("langText").textContent = currentLang === "en" ? "FR" : "EN"
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
  }
})

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Here you would typically send the form data to a server
  // For now, we'll just show a success message
  alert(
    currentLang === "en"
      ? "Thank you for your message! We'll get back to you soon."
      : "Merci pour votre message ! Nous vous répondrons bientôt.",
  )

  // Reset form
  this.reset()
})

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage()
})

