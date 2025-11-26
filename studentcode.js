const student = JSON.parse(localStorage.getItem("activeUser"));
let btn = document.querySelector('.start-bttn')

btn.addEventListener('click', () => {
  window.location.href = "https://corvin91.github.io/kazino/krish.html"
})

if (student) {
  document.getElementById("fullName").textContent =
    student.firstName + " " + student.lastName;
}

function goTest() {
  window.location.href = "about.html";
}

