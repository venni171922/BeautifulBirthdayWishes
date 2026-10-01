// ======================================
// Birthday Wishes Website
// ======================================


// Change the birthday person's name here
const birthdayName = "My Dear";


// Put the name on the page
document.getElementById("name").textContent = birthdayName;


// ======================================
// Gift Click
// ======================================

const gift = document.getElementById("gift");
const messageBox = document.getElementById("messageBox");
const giftText = document.getElementById("giftText");

gift.addEventListener("click", function () {

    messageBox.classList.add("show");

    giftText.textContent =
        "Your special message is waiting for you! 💌";

    gift.style.animation = "none";

    createConfetti();

});


// ======================================
// Make a Wish Button
// ======================================

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");

wishButton.addEventListener("click", function () {

    wishMessage.textContent =
        "✨ May your wish find its way to you! ✨";

    createConfetti();

});


// ======================================
// Confetti Animation
// ======================================

function createConfetti() {

    const confettiContainer =
        document.getElementById("confetti");

    const symbols = [
        "✨",
        "💖",
        "🎉",
        "⭐",
        "🌸",
        "💫"
    ];

    for (let i = 0; i < 35; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (12 + Math.random() * 15) + "px";

        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        piece.style.animationDelay =
            Math.random() * 0.5 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(function () {
            piece.remove();
        }, 4500);
    }
}


// ======================================
// Welcome Effect
// ======================================

window.addEventListener("load", function () {

    setTimeout(function () {

        console.log(
            "🎂 Welcome to the Birthday Wishes website!"
        );

    }, 500);

});