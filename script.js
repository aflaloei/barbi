const cards = {
  questions: [
    "מה הדבר הכי מפתיע שגרם לך להתחרמן?",
    "ספרי לברבי שלך מה החלום הכי פרוע שלך...",
    "מה המקום הכי לא צפוי שהיית רוצה לגעת בו בי?",
    "מה הפנטזיה שעדיין לא סיפרת לי עליה?"
  ],
  tasks: [
    "לבש חוטיני ורוד, שלח תמונה למלכה.",
    "לטף את עצמך מול המראה בזמן שאתה לוחש 'אני של המלכה'.",
    "הברבי מתפשט לאט מול המלכה – בלי מילים.",
    "תעשה למלכה עיסוי רגליים למשך 7 דקות."
  ],
  fantasies: [
    "הברבי מקבל קולר – המלכה מחליטה מה תלבש ומה תעשה.",
    "המלכה קושרת את הברבי לעיניים ומובילה אותו בכל החדר.",
    "אתה מגיש למלכה מגש עם ממתקים, לבוש רק בסרט ורוד.",
    "המלכה שולטת בך עם מילות הפעלה סודיות למשך 10 דקות."
  ],
  punishments: [
    "נקה את הרצפה עירום בזמן שהמלכה צופה.",
    "לק בלשון את כף הרגל של המלכה.",
    "ספוג עונש – המלכה תבחר מילה, אתה שואל רשות לדבר.",
    "אסור לגמור עד סוף המשחק – אלא אם המלכה מתירה."
  ],
  coupons: [
    "שובר פינוק – המלכה תבחר הפתעה בשבילך.",
    "שובר דילוג – מותר לך לדלג על קלף אחד.",
    "שובר נשיקה – הברבי מקבל חיבוק ונשיקה באיזו דרך שהמלכה בוחרת.",
    "שובר ברבי – אתה בוחר משימה שגורמת לך להרגיש נשי ומדהים."
  ]
};

let currentCategory = "";
let points = 0;

function startGame() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
}

function setCategory(category) {
  currentCategory = category;
  document.getElementById('category-title').innerText = "קטגוריה נבחרת: " + categoryName(category);
  document.getElementById('card').innerText = "הקלף יופיע כאן...";
}

function drawCard() {
  if (!currentCategory) return alert("בחר קטגוריה קודם");
  const cardArray = cards[currentCategory];
  const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
  const cardEl = document.getElementById('card');
  cardEl.classList.remove("fade");
  void cardEl.offsetWidth;
  cardEl.innerText = randomCard;
  cardEl.classList.add("fade");
}

function skipCard() {
  drawCard();
}

function resetGame() {
  points = 0;
  document.getElementById('points').innerText = points;
  document.getElementById('icon').innerText = "💗";
  document.getElementById('card').innerText = "הקלף יופיע כאן...";
  document.getElementById('category-title').innerText = "בחר קטגוריה";
  currentCategory = "";
}

function addPoint() {
  points++;
  document.getElementById('points').innerText = points;
  if (points >= 10) document.getElementById('icon').innerText = "👑";
  else if (points >= 5) document.getElementById('icon').innerText = "👠";
  else document.getElementById('icon').innerText = "💗";
}

function categoryName(key) {
  switch (key) {
    case 'questions': return 'שאלות';
    case 'tasks': return 'משימות';
    case 'fantasies': return 'פנטזיות';
    case 'punishments': return 'עונשים';
    case 'coupons': return 'שוברים';
    default: return '';
  }
}
