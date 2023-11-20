let progreso = document.querySelector(".progreso");
let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
let avance = 0;

let tiempo = setInterval(() => {
    avance += 1;/*Cuando se active la función, va empezar a sumar de 1 en 1*/
    progreso.style.width = `${avance}%` /*Aplicar un estilo al ancho de esa barra de progreso, de acuerdo al avance*/

    if ( avance === 100){
        clearInterval(tiempo)/*Debe parar el intervalo de tiempo en 100*/
        celebracion.classList.add("celebracion")/*Agregar la animación creada en css*/
    }
    porcentaje.textContent = `${avance}%`/*En porcentaje debe ir mostrando el avance y se concatena el porcentaje*/
},75);/*Intervalo de tiempo se refresque cada 75 ms, para que el avance se vea bastante rapido*/


