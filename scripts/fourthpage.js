document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const heartContainer = document.getElementById("heart-container");
    const yesSound = document.getElementById("yes-sound");
    const funnyMessage = document.getElementById("funny-message");

    let yesSize = 1;
    let noSize = 1;   
    let noClickCount = 0;
    let noPosition = 0; 

    noBtn.addEventListener("click", () => {
        noSize = Math.max(0.6, noSize - 0.1); 
        yesSize += 0.2;
        noPosition += 30; 

        noBtn.style.transform = `scale(${noSize}) translateX(${noPosition}px)`;
        yesBtn.style.transform = `scale(${yesSize})`;

        noClickCount++;

        if (noClickCount === 5) {
            funnyMessage.classList.remove("hidden");
        }
    });

    yesBtn.addEventListener("click", () => {
        yesSound.play();

        for (let i = 0; i < 10; i++) {
            createFloatingHeart();
        }

        setTimeout(() => {
            window.location.href = "fifthpage.html"; 
        }, 2500);
    });

    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        const randomX = Math.random() * window.innerWidth;
        heart.style.left = `${randomX}px`;
        heart.style.bottom = "0px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});
