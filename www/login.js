const { WebUntis } = require("webuntis")
var storage = window.localStorage
var username = storage.getItem("uname")

function logger() {
  console.log("teste")
  function loginData() {
    uname = document.getElementById("uname").value
    psw = document.getElementById("psw").value
  }
  loginData()
  function MegaWriter() {
    window.localStorage.setItem(
      "password",
      document.getElementById("psw").value
    )
    window.localStorage.setItem(
      "username",
      document.getElementById("uname").value
    )
  }
  if (window.localStorage.getItem("username") == undefined) {
    loginData()
    MegaWriter()
    window.location.href = "timetablesUntis.html"
  } else {
    window.localStorage.getItem("username")
  }
}
//var usernameWriter = storage.setItem(password, psw)
//var passwordWriter = storage.setItem(username, uname)
