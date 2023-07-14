import moment from "moment"
import { WebUntis } from "webuntis"
import { SegundaLoop } from "././weeklyfunctions\\segunda.js"
import { TercaLoop } from "./weeklyfunctions/terca.js"
import { QuartaLoop } from "./weeklyfunctions/quarta.js"
import { QuintaLoop } from "./weeklyfunctions/quinta.js"
import { SextaLoop } from "./weeklyfunctions/sexta.js"
//Importiert alle Bibliotheken und Funktionen
const untis = new WebUntis(
  "dsporto",
<<<<<<<< Updated upstream:src/www/js/index.js
  window.localstorage.getItem("username"),
  window.localstorage.getItem("password"),
  password,
========
  //window.localstorage.getItem("username"),
  //window.localstorage.getItem("password"),
  //password,
  "LoboRod",
  "Portela@2008",
>>>>>>>> Stashed changes:www/js/index.js
  "borys.webuntis.com"
)
const today = moment() // ein neues Moment-Objekt mit dem aktuellen Datum und der aktuellen Uhrzeit erstellen
const startOfWeek = today.startOf("week") // den Anfang der Woche erhalten
const weekDays = [] // ein leeres Array zum Speichern der formatierten Daten erstellen

for (let i = 1; i < 6; i++) {
  const day = startOfWeek.clone().add(i, "day")
  weekDays.push(day.format("YYYY-MM-DD")) // Die Daten von jeden Tag von der Woche erstellen
}

console.log(weekDays) //um zu sehen ob es funktioniert

untis
  .login()
  .then(() => {
    return untis.getOwnClassTimetableForRange(
      (rangeStart = weekDays[0]),
      (rangeEnd = weekDays[0]),
      (validateSession = true)
    )
  }) //nimmt die Informationen von Montag aus Untis raus
  .then((timetable) => {
    var sortedInput1 = timetable
      .slice()
      .sort((a, b) => a.startTime - b.startTime) //sortiert die Stunden nach Uhrzeit
    SegundaLoop(sortedInput1) //führt die Funktion für Montag aus
  })
  .then(() => {
    return untis.getOwnClassTimetableForRange(
      (rangeStart = weekDays[1]), //Nimmt die Informationen von Dienstag raus
      (rangeEnd = weekDays[1]),
      (validateSession = true)
    )
  })
  .then((timetable) => {
    var sortedInput2 = timetable
      .slice()
      .sort((a, b) => a.startTime - b.startTime) //sortiert sie
    TercaLoop(sortedInput2)
  })
  .then(() => {
    return untis.getOwnClassTimetableForRange(
      (rangeStart = weekDays[2]),
      (rangeEnd = weekDays[2]),
      (validateSession = true)
    )
  })
  .then((timetable) => {
    var sortedInput3 = timetable
      .slice()
      .sort((a, b) => a.startTime - b.startTime)
    QuartaLoop(sortedInput3)
  })
  .then(() => {
    return untis.getOwnClassTimetableForRange(
      (rangeStart = weekDays[3]),
      (rangeEnd = weekDays[3]),
      (validateSession = true)
    )
  })
  .then((timetable) => {
    var sortedInput4 = timetable
      .slice()
      .sort((a, b) => a.startTime - b.startTime)
    QuintaLoop(sortedInput4)
  })
  .then(() => {
    return untis.getOwnClassTimetableForRange(
      (rangeStart = weekDays[4]),
      (rangeEnd = weekDays[4]),
      (validateSession = true)
    )
  })
  .then((timetable) => {
    var sortedInput5 = timetable
    SextaLoop(sortedInput5)
      .slice()
      .sort((a, b) => a.startTime - b.startTime)
  })
