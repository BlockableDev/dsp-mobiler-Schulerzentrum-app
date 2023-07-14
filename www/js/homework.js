import moment, { weekdays } from "moment"
import { Webuntis } from "webuntis"
const untis = new WebUntis(
  "dsporto",
  window.localstorage.getItem("username"),
  window.localstorage.getItem("password"),
  password,
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
untis.getHomeWorksFor((rangeStart = weekDays[0]), (rangeEnd = weekDays[4]))
