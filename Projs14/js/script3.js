//declara una variable tipo cadena 
let dia = Lunes;
// se usa una estructura switch para determinar el menssaje 
switch(dia){
    case "Lunes":
        console.log("Inicio de semana");
        break;

    case "Viernes":
        console.log("Fin de semana laboral");
        break;
    
    case "Sabado":
    case "Domingo":
        console.log("Fin de semana");
        break;
    default:
    console.log("Dia no reconocido");
}