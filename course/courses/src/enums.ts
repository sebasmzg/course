enum week {
    lun,
    mar,
    mie,
    jue,
    vie,
    sab,
    dom
}
const day = week.lun;
console.log(day); // 0
console.log(typeof day); // number

enum weekStr {
    lun = 'Lunes',
    mar = 'Martes',
    mie = 'Miércoles',
    jue = 'Jueves',
    vie = 'Viernes',
    sab = 'Sábado',
    dom = 'Domingo'
}
const dayStr = weekStr.lun;
console.log(dayStr); // Lunes
console.log(typeof dayStr); //string


//enums function
function printDay(dayToPtint: weekStr): void{
    console.log(dayToPtint); // Lunes
}

//printDay("caso malo de prueba"); //Se imprime, pero no es lo esperado