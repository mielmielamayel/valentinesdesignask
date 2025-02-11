document.addEventListener("DOMContentLoaded", function() {
    let tapCount = 0;
    const overlay = document.getElementById("grayOverlay");
    const tapCountText = document.getElementById("tapCountText");
    const messageBox = document.getElementById("message-box");
    const messageText = document.getElementById("message-text");
    const floatingHearts = document.getElementById("floating-hearts");
    const passwordInput = document.getElementById("lock-input");

    overlay.addEventListener("click", function() {
        tapCount++;
        tapCountText.innerText = `Taps: ${tapCount} / 10`;

        if (tapCount >= 10) {
            overlay.style.opacity = "0"; 
            setTimeout(() => overlay.style.display = "none", 500); 
        }
    });

    let password = "143";
    let enteredPassword = "";

    window.enterNumber = function(num) {
        if (enteredPassword.length < 3) {
            enteredPassword += num;
            passwordInput.value = "*".repeat(enteredPassword.length);
        }
    };

    window.clearInput = function() {
        enteredPassword = "";
        passwordInput.value = "";
    };

    window.checkPassword = function() {
        if (enteredPassword === password) {
            showMessage(
                "",
                true
            );
        } else {
            showMessage(
                "",
                false
            );
        }
    };

    function showMessage(message, success) {
        messageText.innerText = message;
        messageBox.classList.add("show"); 

        if (success) {
            createFloatingHearts();
            setTimeout(() => window.location.href = "fourthpage.html", 3000);
        } else {
            setTimeout(() => {
                messageBox.classList.remove("show");
                clearInput();
            }, 2000);
        }
    }

    function createFloatingHearts() {
        floatingHearts.innerHTML = ""; 
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${1 + Math.random()}s`;
            floatingHearts.appendChild(heart);
        }
    }
});
