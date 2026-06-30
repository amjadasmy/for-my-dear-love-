document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       💖 FLOATING HEARTS
    ========================== */
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";
        heart.style.opacity = Math.random();

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    setInterval(createHeart, 250);


    /* =========================
       ✨ TYPEWRITER EFFECT
    ========================== */
    const textElement = document.querySelector("p");
    if (textElement) {
        const fullText = textElement.innerText;
        textElement.innerText = "";

        let i = 0;

        function typeWriter() {
            if (i < fullText.length) {
                textElement.innerHTML += fullText.charAt(i);
                i++;
                setTimeout(typeWriter, 25);
            }
        }

        typeWriter();
    }


    /* =========================
       💫 BUTTON EFFECT
    ========================== */
    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("mouseover", () => {
            btn.style.transform = "scale(1.1)";
            btn.style.boxShadow = "0 0 25px gold";
        });

        btn.addEventListener("mouseout", () => {
            btn.style.transform = "scale(1)";
            btn.style.boxShadow = "0 0 15px rgba(255,215,0,0.4)";
        });
    }


    /* =========================
       🎵 OPTIONAL MUSIC
       (uncomment to use)
    ========================== */

    /*
    const music = new Audio("music.mp3");
    music.loop = true;
    music.volume = 0.5;

    document.body.addEventListener("click", () => {
        music.play();
    }, { once: true });
    */

});
