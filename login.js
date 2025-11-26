let users = [
  { firstName: "Soliha",  lastName: "Abdugafarova",   login: "abdugafarovasoliha",   password: "Sol!ha782@" },
  { firstName: "Abdulloh", lastName: "Abdumalikov",    login: "abdumalikovabdulloh",  password: "Abd#554AN" },
  { firstName: "Xadicha",  lastName: "Abduvaliyeva",   login: "abduvaliyevaxadicha",   password: "Xadi@99Ca" },
  { firstName: "Ibrohim",  lastName: "Aliyev",         login: "aliyevibrohim",         password: "IbR!230x" },
  { firstName: "Saboxat",  lastName: "Botirjonova",    login: "botirjonovasaboxat",    password: "Sabo#776p" },
  { firstName: "Nargiza",  lastName: "G'ayratova",     login: "gayratovanargiza",      password: "NarG@405" },
  { firstName: "Yahyo",    lastName: "Karimov",        login: "karimovyahyo",          password: "Yah&0092" },
  { firstName: "Rayxona",  lastName: "Karimova",       login: "karimovarayxona",        password: "Ray@318G" },
  { firstName: "Abduboriy",lastName: "Mansurov",       login: "mansurovabduboriy",      password: "Bor!44Ay" },
  { firstName: "Kamronbek",lastName: "Maqsudjonov",    login: "maqsudjonovkamronbek",   password: "Kbn#008Z" },
  { firstName: "Bekzod",   lastName: "Murodjonov",     login: "murodjonovbekzod",        password: "Bek$991L" },
  { firstName: "Dilafruz", lastName: "Nosirova",       login: "nosirovadilafruz",        password: "Dil@682T" },
  { firstName: "Muslima",  lastName: "Nosirova",       login: "nosirovamuslima",          password: "Mus!027Q" },
  { firstName: "Sobir",    lastName: "Ortikov",        login: "ortikovsobir",             password: "Sob&394M" },
  { firstName: "Shodiya",  lastName: "Rahimova",       login: "rahimovashodiya",         password: "Sho@683X" },
  { firstName: "Zilola",   lastName: "Raxmonberdiyeva",login: "raxmonberdiyevazilola",    password: "Zil!907A" },
  { firstName: "Avazbek",  lastName: "Rixsiboyev",     login: "rixsiboyevavazbek",        password: "Ava#120O" },
  { firstName: "Saidali",  lastName: "Sayidasrorov",   login: "sayidasrorovsaidali",      password: "Sai@853V" },
  { firstName: "Ibroxim",  lastName: "Soipov",         login: "soipovibroxim",            password: "Ibr^665C" },
  { firstName: "Xasan",    lastName: "Toxirov",        login: "toxirovxasan",             password: "Has!341S" },
  { firstName: "Xusan",    lastName: "Toxirov",        login: "toxirovxusan",             password: "Xus@990D" },
  { firstName: "Dilrabaxon",lastName: "Toxirova",      login: "toxirovadilrabaxon",       password: "Dil%221F" },
  { firstName: "Asliddin", lastName: "Turgunboyev",    login: "turgunboyevasliddin",       password: "Asl*113H" },
  { firstName: "Odinabonu",lastName: "Tursunova",      login: "tursunovaodinabonu",       password: "Odi@864N" },
  { firstName: "Farangiz", lastName: "Umrzakova",      login: "umrzakovafarangiz",        password: "Far!529E" },
  { firstName: "Farangiz", lastName: "Xayrullaeva",    login: "xayrullaevafarangiz",       password: "Fay#006B" },
  { firstName: "Aziz",     lastName: "Xudoyberganov",  login: "xudoyberganovaziz",         password: "Azi@707U" },
  { firstName: "Abdulloh", lastName: "Yunusov",        login: "yunusovabdulloh",           password: "Yun!198R" },
  { firstName: "Ubaydulloh",lastName: "Shavkatillayev",login: "shavkatillayevubaydulloh",   password: "Uba^555J" },
  { firstName: "Feruza",   lastName: "Shuxratova",     login: "shuxratovaferuza",          password: "Fer!210W" },
  { firstName: "Komron",   lastName: "Bahromov",       login: "bahromovkomron",             password: "Kom@849K" },
  { firstName: "Abdulhafiz",lastName: "Bahromov",      login: "bahromovabdulhafiz",         password: "Abd#933Y" }
];

localStorage.setItem("users", JSON.stringify(users));

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const loginValue = document.querySelector(".login").value.trim().toLowerCase();
  const passwordValue = document.querySelector(".password").value.trim();
  const textError = document.querySelector(".text");

  if (!loginValue || !passwordValue) {
    textError.style.display = "block";
    return;
  }

  const found = users.find(user => 
    user.login.toLowerCase() === loginValue &&
    user.password === passwordValue
  );

  if (!found) {
    textError.style.display = "block";
  } 
  else {
    textError.style.display = "none";

    // faqat kerakli ma'lumotlarni saqlaymiz
    localStorage.setItem("activeUser", JSON.stringify({
      firstName: found.firstName,
      lastName: found.lastName,
      login: found.login
    }));

    window.location.href = "studentcode.html";
  }
});
