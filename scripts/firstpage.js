document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const heartContainer = document.getElementById("heart-container");
    const loginContainer = document.getElementById("login-container");
    const loginButton = document.getElementById("login-btn");
    const errorMessage = document.getElementById("error-message");

    heart.addEventListener("click", function() {
        window.open("https://open.spotify.com/track/43iIQbw5hx986dUEZbr3eN?si=1cf0999f78d04d11", "_blank");

        heartContainer.style.opacity = "0"; 
        setTimeout(() => {
            heartContainer.style.display = "none";
            loginContainer.style.display = "block";
        }, 600);
    });

    loginButton.addEventListener("click", function() {
        const username = document.getElementById("username").value.trim().toUpperCase();
        const password = document.getElementById("password").value.trim().toUpperCase();

        if (username === "ELISHA AEDRIENNE" && password === "VILLALUZ") {
            window.location.href = "secondpage.html";
        } else {
            errorMessage.style.display = "block";
        }
    });
});
