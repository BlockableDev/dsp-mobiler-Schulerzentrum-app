export function TercaLoop(sortedInput2) {
  for (let i = 0; i < 2; i++) {
    document.getElementById("tercateachername2").innerHTML =
      sortedInput2[i].te[0].name
    document.getElementById("tercasubjectname2").innerHTML =
      sortedInput2[i].su[0]
    document.getElementById("tercaroomname2").innerHTML = sortedInput2[i].ro[0]
  }

  for (let i = 1; i < 3; i++) {
    document.getElementById("tercateachername3").innerHTML =
      sortedInput2[i].te[0].name
    document.getElementById("tercasubjectname3").innerHTML =
      sortedInput2[i].su[0].name
    document.getElementById("tercaroomname3").innerHTML =
      sortedInput2[i].ro[0].name
  }

  for (let i = 1; i < 5; i++) {
    document.getElementById("tercateachername5").innerHTML =
      sortedInput2[i].te[0].name
    document.getElementById("tercasubjectname5").innerHTML =
      sortedInput2[i].su[0].name
    document.getElementById("tercaroomname5").innerHTML =
      sortedInput2[i].ro[0].name
  }

  for (let i = 1; i < 7; i++) {
    document.getElementById("tercateachername7").innerHTML =
      sortedInput2[i].te[0].name
    document.getElementById("tercasubjectname7").innerHTML =
      sortedInput2[i].su[0].name =
      document.getElementById("tercaroomname7").innerHTML =
        sortedInput2[i].ro[0].name
  }

  for (let i = 1; i < 8; i++) {
    document.getElementById("tercateachername8").innerHTML =
      sortedInput2[i].te[0].name
    document.getElementById("tercasubjectname8").innerHTML =
      sortedInput2[i].su[0].name
    document.getElementById("tercaroomname8").innerHTML =
      sortedInput2[i].ro[0].name
  }

  for (let i = 1; i < 9; i++) {
    document.getElementById("tercateachername9").innerHTML =
      sortedInput2[i].te[0].name
    document.getElementById("tercasubjectname9").innerHTML =
      sortedInput2[i].su[0].name
    document.getElementById("tercaroomname9").innerHTML =
      sortedInput2[i].ro[0].name
  }

  for (let i = 1; i < 10; i++) {
    document.getElementById("tercateachername10").innerHTML = "Fe"
    document.getElementById("tercasubjectname10").innerHTML =
      sortedInput2[i].su[0]
    document.getElementById("tercaroomname10").innerHTML =
      sortedInput2[i].ro[0].name
  }

  for (let i = 1; i < 11; i++) {
    document.getElementById("tercateachername11").innerHTML =
      sortedInput2[i].te[0].name =
      document.getElementById("tercasubjectname11").innerHTML =
      sortedInput2[i].su[0] =
      document.getElementById("tercaroomname11").innerHTML =
        sortedInput2[i].ro[0]
  }
}
