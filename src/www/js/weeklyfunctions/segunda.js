export function SegundaLoop(sortedInput1) {
  // exportiert die Funktion, damit wir es in andere Dateien benutzen können
  for (let i = 0; i < 1; i++) {
    document.getElementById("MontagLehrer1").innerHTML =
      sortedInput1[i].te[0].name //schreibt die name von der Lehrer in der HTML Datei
    document.getElementById("MontagStunde1").innerHTML =
      sortedInput1[i].su[0].name //schreibt die name von der Stunde in der HTML Datei
    document.getElementById("MontagRaum1").innerHTML =
      sortedInput1[i].ro[0].name //schreibt die name von der Stunde in der HTML Datei
  }

  for (let i = 1; i < 2; i++) {
    document.getElementById("teachername2").innerHTML =
      sortedInput1[i].te[0].name
    document.getElementById("subjectname2").innerHTML =
      sortedInput1[i].su[0].name
    document.getElementById("roomname").innerHTML = sortedInput1[i].ro[0].name
  }

  for (let i = 1; i < 3; i++) {
    document.getElementById("teachername3").innerHTML =
      sortedInput1[i].te[0].name
    document.getElementById("subjectname").innerHTML =
      sortedInput1[i].su[0].name
    document.getElementById("roomname3").innerHTML = sortedInput1[i].ro[0].name
  }

  for (let i = 1; i < 4; i++) {
    document.getElementById("teachername4").innerHTML =
      sortedInput1[i].te[0].name
    document.getElementById("subjectname4").innerHTML =
      sortedInput1[i].su[0].name
    document.getElementById("roomname4").innerHTML = sortedInput1[i].ro[0].name
  }

  for (let i = 1; i < 5; i++) {
    document.getElementById("teachername5").innerHTML =
      sortedInput1[i].te[0].name
    document.getElementById("subjectname").innerHTML =
      sortedInput1[i].su[0].name
    document.getElementById("roomname").innerHTML = sortedInput1[i].ro[0].name
  }

  for (let i = 1; i < 7; i++) {
    document.getElementById("teachername7").innerHTML =
      sortedInput1[i].te[0].name
    document.getElementById("subjectname7").innerHTML =
      sortedInput1[i].su[0].name
    document.getElementById("roomname7").innerHTML = sortedInput1[i].ro[0].name
  }

  for (let i = 1; i < 9; i++) {
    document.getElementById("teachername9").innerHTML =
      sortedInput1[i].te[0].name
    document.getElementById("subjectname9").innerHTML =
      sortedInput1[i].su[0].name
    document.getElementById("roomname9").innerHTML = sortedInput1[i].ro[0].name
  }

  for (let i = 1; i < 10; i++) {
    document.getElementById("teachername10").innerHTML =
      sortedInput1[i].te[0].name
    document.getElementById("megabega").innerHTML = sortedInput1[i].su[0].name
    console.log(sortedInput1[i].ro[0].name)
  }
}
