// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic greeting based on time of day
function setGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greetingText = "Welcome!";

    if (hour < 12) {
        greetingText = "Good Morning! ☀️";
    } else if (hour < 18) {
        greetingText = "Good Afternoon! 🌤️";
    } else {
        greetingText = "Good Evening! 🌙";
    }

    greetingElement.textContent = greetingText;
}

// Run greeting function on page load
document.addEventListener("DOMContentLoaded", setGreeting);
