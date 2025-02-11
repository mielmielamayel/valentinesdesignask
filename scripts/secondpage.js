document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    const envelopeContainer = document.getElementById("envelope-container");
    const letterContainer = document.getElementById("letter-container");
    const letterTextElement = document.getElementById("letter-text");
    const continueBtn = document.getElementById("continue-btn");

    const letterText = `Hi love koooo 💗

I really hate coding stuff talaga tbh, ay cs 
pa pinili ko. Emi lang hehe. Pero when it comes  to stuff like this, naeenjoy ko talaga kasi ur  involved with my hobbies.

Anyway wala pa tayo sa next parts pero inenterrupt ko lang to say, I love you so so much. Kahit mag NO ka pa sa next pages, mamahalin parin kita ng sobra sobra hehe. 

Lets continue to the next part na hihi 

I love you 😊💖`;

    envelope.addEventListener("click", function() {
        envelope.src = "assets/images/envelope-open.png";
        envelopeContainer.style.opacity = "0";
        setTimeout(() => {
            envelopeContainer.style.display = "none";
            letterContainer.style.display = "block";
            typeLetter();
            createFloatingHearts();
        }, 600);
    });

    function typeLetter() {
        let i = 0;
        function type() {
            if (i < letterText.length) {
                letterTextElement.innerHTML += letterText.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    function createFloatingHearts() {
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 3}s`;
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    }

    continueBtn.addEventListener("click", function() {
        window.location.href = "thirdpage.html";
    });
});
