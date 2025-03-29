document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const hour = new Date().getHours();
    
    let greetingText = "Welcome!";
    if (hour < 12) greetingText = "Good Morning! ☀️";
    else if (hour < 18) greetingText = "Good Afternoon! 🌤️";
    else greetingText = "Good Evening! 🌙";

    greetingElement.textContent = greetingText;
});
