"use strict";
var week;
(function (week) {
    week[week["lun"] = 0] = "lun";
    week[week["mar"] = 1] = "mar";
    week[week["mie"] = 2] = "mie";
    week[week["jue"] = 3] = "jue";
    week[week["vie"] = 4] = "vie";
    week[week["sab"] = 5] = "sab";
    week[week["dom"] = 6] = "dom";
})(week || (week = {}));
const day = week.lun;
console.log(day); // 0
console.log(typeof day); // number
var weekStr;
(function (weekStr) {
    weekStr["lun"] = "Lunes";
    weekStr["mar"] = "Martes";
    weekStr["mie"] = "Mi\u00E9rcoles";
    weekStr["jue"] = "Jueves";
    weekStr["vie"] = "Viernes";
    weekStr["sab"] = "S\u00E1bado";
    weekStr["dom"] = "Domingo";
})(weekStr || (weekStr = {}));
const dayStr = weekStr.lun;
console.log(dayStr); // Lunes
console.log(typeof dayStr); //string
//enums function
function printDay(dayToPtint) {
    console.log(dayToPtint); // Lunes
}
//printDay("caso malo de prueba"); //Se imprime, pero no es lo esperado
