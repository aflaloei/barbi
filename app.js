
const cards = [
    "שאלה: מה היית רוצה שיקרה הלילה?",
    "משימה: תני לי פקודה ברורה – בלי להסביר.",
    "פנטזיה: אתה עונד קולר – ואני מושכת אותך אחריי לחדר.",
    "שובר: שובר שליטה מוחלטת – המלכה שולטת למשך 15 דקות.",
    "עונש: תנקה את המלכה בעדינות אחרי שהיא גומרת.",
];

let index = 0;

function startGame() {
    document.getElementById("gameArea").style.display = "block";
    showCard();
}

function nextCard() {
    index = (index + 1) % cards.length;
    showCard();
}

function showCard() {
    document.getElementById("cardText").innerText = cards[index];
}
