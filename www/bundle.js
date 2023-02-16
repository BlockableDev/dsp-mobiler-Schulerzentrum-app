(function (require$$0) {
  'use strict';

  var tablePuller = {};

  var WebUntis = require$$0;
  let username = window.localStorage.getItem("username");
  let password = window.localStorage.getItem("password");
  const untis = new WebUntis("dsporto", username, password, "borys.webuntis.com"); //Criar novo Client
  var SegundaFeira = "2023-02-13";
  var TercaFeira = "2023-02-14";
  var QuartaFeira = "2023-02-15";
  var QuintaFeira = "2023-02-16";
  var SextaFeira = "2023-02-17";
  var SegundaObject = new Date(SegundaFeira);
  var TercaObject = new Date(TercaFeira);
  var QuartaObject = new Date(QuartaFeira);
  var QuintaObject = new Date(QuintaFeira);
  var SextaObject = new Date(SextaFeira);

  untis
    .login()
    .then(() => {
      return untis.getOwnClassTimetableForRange(
        (rangeStart = SegundaObject),
        (rangeEnd = SegundaObject),
        (validateSession = true)
      )
    })
    .then((timetable) => {
      var sortedInput = timetable
        .slice()
        .sort((a, b) => a.startTime - b.startTime);
      function MegaLoop() {
        for (let i = 0; i < 1; i++) {
          // (sortedInput[i].date)
          // (sortedInput[i].startTime)
          // (sortedInput[i].endTime)
          document.getElementById("teachername").innerHTML = "MegaTest";
          //  sortedInput[i].te[0].name
          document.getElementById("subjectname").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname").innerHTML =
            sortedInput[i].ro[0].name;
          //(sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop();

      function MegaLoop2() {
        for (let i = 1; i < 2; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("teachername2").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("subjectname2").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop2();

      function MegaLoop3() {
        for (let i = 1; i < 3; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("teachername3").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("subjectname").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname3").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop3();

      function MegaLoop4() {
        for (let i = 1; i < 4; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("teachername4").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("subjectname4").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname4").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop4();

      function MegaLoop5() {
        for (let i = 1; i < 5; i++) {
          // (sortedInput[i].date)

          //    (sortedInput[i].endTime)
          document.getElementById("teachername5").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("subjectname").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop5()(5);

      function MegaLoop7() {
        for (let i = 1; i < 7; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("teachername7").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("subjectname7").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname7").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop7();

      function MegaLoop9() {
        for (let i = 1; i < 9; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("teachername9").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("subjectname9").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname9").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop9();

      function MegaLoop10() {
        for (let i = 1; i < 10; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("teachername10").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("subjectname10").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("roomname10").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumberv
          //(sortedInput[i].activityType)
        }
      }
      MegaLoop10()("ACABOU O DIA\n FInitto");
    })
    .then(() => {
      return untis.getOwnClassTimetableForRange(
        (rangeStart = TercaObject),
        (rangeEnd = TercaObject),
        (validateSession = true)
      )
    })
    .then((timetable) => {
      var sortedInput = timetable
        .slice()
        .sort((a, b) => a.startTime - b.startTime);
      function TercaMegaLoop2() {
        for (let i = 0; i < 2; i++) {
          // (sortedInput[i].date)
          // (sortedInput[i].startTime)
          // (sortedInput[i].endTime)
          document.getElementById("tercateachername2").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("tercasubjectname2").innerHTML =
            sortedInput[i].su[0];
          document.getElementById("tercaroomname2").innerHTML =
            sortedInput[i].ro[0];
          //(sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop2();

      function TercaMegaLoop3() {
        for (let i = 1; i < 3; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("tercateachername3").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("tercasubjectname3").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("tercaroomname3").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop3();

      function TercaMegaLoop5() {
        for (let i = 1; i < 5; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("tercateachername5").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("tercasubjectname5").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("tercaroomname5").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop5();

      function TercaMegaLoop7() {
        for (let i = 1; i < 7; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("tercateachername7").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("tercasubjectname7").innerHTML =
            sortedInput[i].su[0].name =
            document.getElementById("tercaroomname7").innerHTML =
              sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop7();

      function TercaMegaLoop8() {
        for (let i = 1; i < 8; i++) {
          // (sortedInput[i].date)

          //    (sortedInput[i].endTime)
          document.getElementById("tercateachername8").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("tercasubjectname8").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("tercaroomname8").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop8();

      function TercaMegaLoop9() {
        for (let i = 1; i < 9; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("tercateachername9").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("tercasubjectname9").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("tercaroomname9").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop9();

      function TercaMegaLoop10() {
        for (let i = 1; i < 10; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("tercateachername10").innerHTML = "Fe";
          document.getElementById("tercasubjectname10").innerHTML =
            sortedInput[i].su[0];
          document.getElementById("tercaroomname10").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop10();

      function TercaMegaLoop11() {
        for (let i = 1; i < 11; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("tercateachername11").innerHTML =
            sortedInput[i].te[0].name =
            document.getElementById("tercasubjectname11").innerHTML =
            sortedInput[i].su[0] =
            document.getElementById("tercaroomname11").innerHTML =
              sortedInput[i].ro[0];
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      TercaMegaLoop11();
    })
    //})
    .then(() => {
      return untis.getOwnClassTimetableForRange(
        (rangeStart = QuartaObject),
        (rangeEnd = QuartaObject),
        (validateSession = true)
      )
    })
    .then((timetable) => {
      var sortedInput = timetable
        .slice()
        .sort((a, b) => a.startTime - b.startTime);
      function QuartaMegaLoop() {
        for (let i = 0; i < 1; i++) {
          // (sortedInput[i].date)
          // (sortedInput[i].startTime)
          // (sortedInput[i].endTime)
          document.getElementById("quartateachername").innerHTML =
            sortedInput[i].te[0].name =
            document.getElementById("quartasubjectname").innerHTML =
              sortedInput[i].su[0];
          document.getElementById("quartaroomname").innerHTML =
            sortedInput[i].ro[0];
          //(sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop();

      function QuartaMegaLoop2() {
        for (let i = 1; i < 2; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("quartateachername2").innerHTML =
            sortedInput[i].te[0].name =
            document.getElementById("quartasubjectname2").innerHTML =
            sortedInput[i].su[0].name =
            document.getElementById("quartaroomname2").innerHTML =
              sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop2();

      function QuartaMegaLoop3() {
        for (let i = 1; i < 3; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("quartateachername3").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quartasubjectname3").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quartaroomname3").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop3();

      function QuartaMegaLoop5() {
        for (let i = 1; i < 5; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("quartateachername5").innerHTML =
            sortedInput[i].te[0].name =
            document.getElementById("quartasubjectname5").innerHTML =
            sortedInput[i].su[0].name =
            document.getElementById("quartaroomname5").innerHTML =
              sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop5();

      function QuartaMegaLoop6() {
        for (let i = 1; i < 6; i++) {
          // (sortedInput[i].date)

          //    (sortedInput[i].endTime)
          document.getElementById("quartateachername6").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quartasubjectname6").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quartaroomname6").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop6();

      function QuartaMegaLoop7() {
        for (let i = 1; i < 7; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("quartateachername7").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quartasubjectname7").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quartaroomname7").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop7();

      function QuartaMegaLoop8() {
        for (let i = 1; i < 8; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("quartateachername8").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quartasubjectname8").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quartaroomname8").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop8();

      function QuartaMegaLoop9() {
        for (let i = 1; i < 9; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("quartateachername9").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quartasubjectname9").innerHTML =
            sortedInput[i].su[0];
          document.getElementById("quartaroomname9").innerHTML =
            sortedInput[i].ro[0];
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuartaMegaLoop9();
      //.catch((err) => {
      //console.error(err)
    })
    .then(() => {
      return untis.getOwnClassTimetableForRange(
        (rangeStart = QuintaObject),
        (rangeEnd = QuintaObject),
        (validateSession = true)
      )
    })
    .then((timetable) => {
      var sortedInput = timetable
        .slice()
        .sort((a, b) => a.startTime - b.startTime);
      function QuintaMegaLoop() {
        for (let i = 0; i < 1; i++) {
          // (sortedInput[i].date)
          // (sortedInput[i].startTime)
          // (sortedInput[i].endTime)
          document.getElementById("quintateachername").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quintasubjectname").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quintaroomname").innerHTML =
            sortedInput[i].ro[0].name;
          //(sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuintaMegaLoop();

      function QuintaMegaLoop2() {
        for (let i = 1; i < 2; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("quintateachername2").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quintasubjectname2").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quintaroomname2").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuintaMegaLoop2();

      function QuintaMegaLoop3() {
        for (let i = 1; i < 3; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("quintateachername3").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quintasubjectname3").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quintaroomname3").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuintaMegaLoop3();

      function QuintaMegaLoop4() {
        for (let i = 1; i < 4; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("quintateachername4").innerHTML =
            sortedInput[i].te[0].name =
            document.getElementById("quintasubjectname4").innerHTML =
              sortedInput[i].su[0].name;
          document.getElementById("quintaroomname4").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuintaMegaLoop4();

      function QuintaMegaLoop5() {
        for (let i = 1; i < 5; i++) {
          // (sortedInput[i].date)
          //    (sortedInput[i].endTime)
          document.getElementById("quintateachername5").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quintasubjectname5").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quintaroomname5").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuintaMegaLoop5();

      function QuintaMegaLoop6() {
        for (let i = 1; i < 6; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("quintateachername6").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quintasubjectname6").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quintaroomname6").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuintaMegaLoop6();

      function QuintaMegaLoop7() {
        for (let i = 1; i < 7; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("quintateachername7").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("quintasubjectname7").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("quintaroomname7").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      QuintaMegaLoop7()("ACABOU O DIA\n FInitto");
    })
    .then(() => {
      return untis.getOwnClassTimetableForRange(
        (rangeStart = SextaObject),
        (rangeEnd = SextaObject),
        (validateSession = true)
      )
    })
    .then((timetable) => {
      var sortedInput = timetable
        .slice()
        .sort((a, b) => a.startTime - b.startTime);
      function SextaMegaLoop() {
        for (let i = 0; i < 1; i++) {
          // (sortedInput[i].date)
          // (sortedInput[i].startTime)
          // (sortedInput[i].endTime)
          document.getElementById("sextateachername").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("sextasubjectname").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("sextaroomname").innerHTML =
            sortedInput[i].ro[0].name;
          //(sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      SextaMegaLoop()();

      function SextaMegaLoop2() {
        for (let i = 1; i < 2; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("sextateachername2").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("sextasubjectname2").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("sextaroomname2").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      SextaMegaLoop2();

      function SextaMegaLoop3() {
        for (let i = 1; i < 3; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("sextateachername3").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("sextasubjectname3").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("sextaroomname3").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      SextaMegaLoop3();

      function SextaMegaLoop4() {
        for (let i = 1; i < 4; i++) {
          // (sortedInput[i].date)
          //  (sortedInput[i].startTime)
          //    (sortedInput[i].endTime)
          document.getElementById("sextateachername4").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("sextasubjectname4").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("sextaroomname4").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      SextaMegaLoop4();

      function SextaMegaLoop5() {
        for (let i = 1; i < 5; i++) {
          // (sortedInput[i].date)
          //    (sortedInput[i].endTime)
          document.getElementById("sextateachername5").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("sextasubjectname5").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("sextaroomname5").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      SextaMegaLoop5();

      function SextaMegaLoop6() {
        for (let i = 1; i < 6; i++) {
          // (sortedInput[i].date)
          //HoraInicio6 = sortedInput[i].startTime
          //    (sortedInput[i].endTime)
          document.getElementById("sextateachername6").innerHTML =
            sortedInput[i].te[0].name;
          document.getElementById("sextasubjectname6").innerHTML =
            sortedInput[i].su[0].name;
          document.getElementById("sextaroomname6").innerHTML =
            sortedInput[i].ro[0].name;
          //  (sortedInput[i].lsnumber)
          //(sortedInput[i].activityType)
        }
      }
      SextaMegaLoop6();
    });

  return tablePuller;

})(require$$0);
