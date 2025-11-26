// Kim login qilganini aniqlash: o'quvchi yoki ustoz
const activeUser =
  JSON.parse(localStorage.getItem("activeUser")) ||
  JSON.parse(localStorage.getItem("activeTeacher"));

if (!activeUser) {
  alert("Avval login qiling!");
  window.location.href = "index.html";
}

// Username chiqarish
document.querySelector(".username").textContent = activeUser.firstName;

// ================= TESTLAR =================

const tests = [
  { question: "Kompyuterning asosiy qismlari qaysi?", answers: ["Monitor, klaviatura, sichqon, protsessor","Printer, skaner, USB","Router, kabel, Wi-Fi","Fleshka, CD"], correct: 0 },
  { question: "Klaviaturadagi eng asosiy tugma qaysi?", answers: ["Enter","Esc","Shift","Ctrl"], correct: 0 },
  { question: "Kompyuterning tez ishlashiga nima ta’sir qiladi?", answers: ["Protsessor tezligi","Printer turi","Monitor o‘lchami","Kabel uzunligi"], correct: 0 },
  { question: "Windows operatsion tizimida faylni o‘chirish tugmasi?", answers: ["Delete","Enter","Shift","Alt"], correct: 0 },
  { question: "Sichqoncha qaysi qurilmaga kiradi?", answers: ["Kiritish qurilmasi","Chop etish qurilmasi","Xotira","Tarmoq qurilmasi"], correct: 0 },
  { question: "Word dasturida matnni qalin qilish uchun?", answers: ["Ctrl + B","Ctrl + U","Ctrl + I","Ctrl + P"], correct: 0 },
  { question: "Excelda ustunlar qanday belgilanadi?", answers: ["Harflar bilan","Raqamlar bilan","Ranglar bilan","Simvollar bilan"], correct: 0 },
  { question: "Kompyuter viruslariga qarshi dastur?", answers: ["Antivirus","Word","Excel","Paint"], correct: 0 },
  { question: "Internet orqali ma’lumot izlash vositasi?", answers: ["Brauzer","Word","Excel","Paint"], correct: 0 },
  { question: "Kompyuterda eng tez ishlaydigan xotira qaysi?", answers: ["RAM","HDD","CD","USB"], correct: 0 },
  { question: "Faylni boshqa nom bilan saqlash uchun?", answers: ["Save As","Save","Open","Close"], correct: 0 },
  { question: "Kompyuter tarmog‘i nima?", answers: ["Bir nechta kompyuterlar ulanishi","Printer turi","USB turini","Monitor o‘lchami"], correct: 0 },
  { question: "Excelda qatorlar qanday belgilanadi?", answers: ["Raqamlar bilan","Harflar bilan","Simvollar bilan","Ranglar bilan"], correct: 0 },
  { question: "Faylni qayta nomlash uchun?", answers: ["Rename","Delete","Open","Save"], correct: 0 },
  { question: "Brauzer nima qiladi?", answers: ["Internet sahifalarni ochadi","Matn yozadi","Rasm chizadi","Fayl yuklaydi"], correct: 0 },
];

// =============== LOGIKA ==================

let current = 0;
let selectedAnswers = JSON.parse(localStorage.getItem("selectedAnswers")) || [];

// Savol yuklash
function loadQuestion() {
  const q = tests[current];

  document.getElementById("page").textContent = `${current + 1} / ${tests.length}`;
  document.getElementById("question").textContent = q.question;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const div = document.createElement("div");
    div.className = "answer";
    div.textContent = ans;

    if (selectedAnswers[current] === index) {
      div.classList.add("selected");
    }

    div.onclick = () => {
      selectedAnswers[current] = index;
      localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));

      document.querySelectorAll(".answer").forEach(a =>
        a.classList.remove("selected")
      );
      div.classList.add("selected");
    };

    answers.appendChild(div);
  });
}

// Oldingi savol
function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
  }
}

// Keyingi savol
function nextQuestion() {
  if (current === tests.length - 1) {

    const empty = selectedAnswers.findIndex(a => a === undefined);

    if (empty !== -1) {
      openModal();
      current = empty;
      loadQuestion();
      return;
    }

    showResult();
    return;
  }

  current++;
  loadQuestion();
}

// Natijani chiqarish
function showResult() {
  let correct = 0;
  let wrong = 0;

  let output = `<h2>Test tugadi ✅</h2>`;

  tests.forEach((q, i) => {
    let select = selectedAnswers[i];

    if (select === q.correct) correct++;
    else wrong++;

    output += `<h4>${i + 1}. ${q.question}</h4>`;

    q.answers.forEach((ans, index) => {
      let cl = "result-answer";

      if (index === q.correct) cl += " correct";
      if (index === select && select !== q.correct) cl += " wrong";

      output += `<div class="${cl}">${ans}</div>`;
    });
  });

  output += `
    <h3>✅ To‘g‘ri: ${correct}</h3>
    <h3>❌ Noto‘g‘ri: ${wrong}</h3>
    <button onclick="restart()">Qayta boshlash</button>
  `;

  document.querySelector(".test-box").innerHTML = output;

  let studentsResults = JSON.parse(localStorage.getItem("studentsResults")) || [];

  studentsResults.push({
    name: activeUser.firstName + " " + (activeUser.lastName || ""),
    correct,
    wrong,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("studentsResults", JSON.stringify(studentsResults));
}

// Qayta boshlash
function restart() {
  localStorage.removeItem("selectedAnswers");
  location.reload();
}

// MODAL
function openModal() {
  document.getElementById("warningModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("warningModal").style.display = "none";
}

// Birinchi savolni yuklash
loadQuestion();
