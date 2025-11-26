const teachers = [
  {
    firstName: "Ozodxoja",
    lastName: "Shoysayev",
    login: "shoysayev_ozodxoja",
    password: "Ozod#777"
  }
];

const form = document.getElementById("loginForm");
const errorText = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const login = document.getElementById("login").value.trim();
  const password = document.getElementById("password").value.trim();

  const teacher = teachers.find(t =>
    t.login === login && t.password === password
  );

  if (teacher) {
    localStorage.setItem("activeTeacher", JSON.stringify(teacher));
    window.location.href = "teachercode.html";
  } else {
    errorText.textContent = "❌ Login yoki parol noto‘g‘ri!";
  }
});
