const { WebUntis } = require("webuntis")
var storage = window.localStorage
var username = storage.getItem("uname")

function logger() {
     console.log("teste")
     function loginData() {
            uname = document.getElementById("uname").value
            psw = document.getElementById("psw").value
            console.log(psw)
            console.log(uname)
        }
        loginData()
        function MegaWriter() {
             storage.setItem("password", psw)
             storage.setItem("username", uname)
             ultra = storage.getItem("username")
             console.log(ultra)
            }
            if (uname == null) {
                loginData()
                MegaWriter()
                document.getElementById("teste").innerHTML = "amen"
            } else {
                document.getElementById("teste").innerHTML = uname
                const untis = new WebUntis("dsporto", uname, psw, "borys.webuntis.com")}
            }
            //var usernameWriter = storage.setItem(password, psw)
            //var passwordWriter = storage.setItem(username, uname)
            