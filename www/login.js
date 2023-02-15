const {WebUntis} = require("webuntis")
var storage = window.localStorage
var username = storage.getItem(uname)

function logger() {
function loginData() {
    uname = document.getElementById("uname").value;
    psw = document.getElementById("psw").value;
}
loginData()
function MegaWriter() {
    storage.setItem(password, psw)
    storage.setItem(username, uname)
}
if (username == null) {
    loginData()
    MegaWriter()
    document.getElementById("teste").innerHTML(amen)
}else {
    document.getElementById("teste").innerHTML(username)
}
}

var usernameWriter = storage.setItem(password, psw)
var passwordWriter = storage.setItem(username, uname)

const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("is-active");
    sidebar.classList.toggle("is-active");
});
