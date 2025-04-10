Conversation opened. 1 unread message.

Skip to content
Using Freehold Regional High School District Mail with screen readers
12 of 113
Memory Game
Inbox

Jayden Azore
Attachments
Wed, Apr 9, 6:18 PM (18 hours ago)
to me

script.js:
const gameBoard = document.getElementById("gameBoard");
const resetButton = document.getElementById("resetButton");

let cardImages = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
    "img-7.jpg",
    "img-8.jpg"
];

let cards = [...cardImages, ...cardImages];  
let flippedCards = [];
let matchedCards = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    shuffleArray(cards);

    gameBoard.innerHTML = "";
    cards.forEach((image, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
        
        const front = document.createElement("div");
        front.classList.add("front");
        front.style.backgroundImage = `url(${image})`;

        const back = document.createElement("div");
        back.classList.add("back");
        back.textContent = "?";

        card.appendChild(front);
        card.appendChild(back);
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard(e) {
    const card = e.target.closest(".card");

    if (flippedCards.length < 2 && !card.classList.contains("flipped") && !matchedCards.includes(card)) {
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.image === secondCard.dataset.image) {
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];
        if (matchedCards.length === cards.length) {
            alert("You win!");
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            flippedCards = [];
        }, 1000);
    }
}

function resetGame() {
    cards = [...cardImages, ...cardImages];
    flippedCards = [];
    matchedCards = [];
    createBoard();
}

resetButton.addEventListener("click", resetGame);

createBoard();

 10 Attachments
  •  Scanned by Gmail Security Sandbox
