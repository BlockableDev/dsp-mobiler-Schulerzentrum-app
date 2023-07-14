const webuntis = require("webuntis") //Importiert die Webuntis Library
function logger() {
  console.log("Logging") // Zeigt dass die funktion passiert
  function loginData() {
<<<<<<<< Updated upstream:src/www/js/login.js
    uname = document.getElementById("uname").value //nimmt die username von den Login-Form raus
    psw = document.getElementById("psw").value // nimmt das kennwort von den Login-Form raus
========
    ;(uname = "LoboRod"), //nimmt die username von den Login-Form raus
      (psw = "Portela@2008") // nimmt das kennwort von den Login-Form raus
>>>>>>>> Stashed changes:www/js/login.js
  }
  loginData()
  function MegaWriter() {
    window.localStorage.setItem(
      "password",
      document.getElementById("psw").value
    ) //speichert die passwort im Handy
    window.localStorage.setItem(
      "username",
      document.getElementById("uname").value
    ) //speichert den username im Handy
    const untis = new WebUntis(
      "dsporto",
      window.localstorage.getItem("username"),
      window.localstorage.getItem("password"),
      password,
      "borys.webuntis.com" //einloggt
    )
  }
  if (window.localStorage.getItem("username") == undefined) {
    loginData()
    MegaWriter()
  } else {
    const untis = new WebUntis(
      "dsporto",
      window.localstorage.getItem("username"),
      window.localstorage.getItem("password"),
      password,
      "borys.webuntis.com" //einloggt
    )
  }
}
