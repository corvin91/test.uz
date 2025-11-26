// Active teacher ni olish
const activeTeacher = JSON.parse(localStorage.getItem("activeTeacher"));

// Agar login bo‘lmagan bo‘lsa
if (!activeTeacher) {
  alert("Avval o‘qituvchi login qilsin!");
  window.location.href = "index.html";
}

// Teacher ismini chiqarish
const username = document.querySelector(".username");
if (username) {
  username.textContent =
    "👨‍🏫 O‘qituvchi: " +
    activeTeacher.firstName +
    " " +
    activeTeacher.lastName;
}

// Natijalar joyi
const resultsBox = document.getElementById("resultsBox");

// Natijalarni olish
let results = JSON.parse(localStorage.getItem("studentsResults")) || [];

// Natijalarni chiqarish function
function showResults() {
  if (results.length === 0) {
    resultsBox.innerHTML = `<h3 style="text-align:center;color:#94a3b8;">Hali hech kim test yechmadi</h3>`;
    return;
  }

  resultsBox.innerHTML = "";

  results.forEach((r, index) => {
    const div = document.createElement("div");
    div.className = "result-card";

    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3>${index + 1}. ${r.name}</h3>
        <button class="delete-btn" data-index="${index}">🗑️</button>
      </div>
      <div class="stats">
        <span class="ok">✅ To‘g‘ri: ${r.correct}</span>
        <span class="no">❌ Noto‘g‘ri: ${r.wrong}</span>
      </div>
      <small>${r.date}</small>
    `;

    resultsBox.appendChild(div);
  });

  // Delete tugmalariga hodisa biriktirish
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");

      // O‘sha index dagini o‘chiramiz
      results.splice(index, 1);

      // LocalStorage yangilanadi
      localStorage.setItem("studentsResults", JSON.stringify(results));

      // Qayta chiziladi
      showResults();
    });
  });
}

// Birinchi yuklash
showResults();
