let puntos = 0;

document.getElementById("boton1").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta1").value.toLowerCase();
    if (respuesta === "h1") {
        puntos = puntos + 1;
        document.getElementById("mensaje1").textContent =
            "¡Correcto! La puerta se ha abierto. +1 punto.";
    } else {
        document.getElementById("mensaje1").textContent =
            "Respuesta incorrecta. Intenta nuevamente.";
    }
});

document.getElementById("boton2").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta2").value.toLowerCase();
    if (respuesta === "p") {
        puntos = puntos + 1;
        document.getElementById("mensaje2").textContent =
            "¡Correcto! Has encontrado la segunda pista. +1 punto.";
    } else {
        document.getElementById("mensaje2").textContent =
            "Esa no es la etiqueta correcta. Intenta nuevamente";
    }
});

document.getElementById("boton3").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta2").value.toLowerCase();
    if (respuesta === "ol") {
        puntos = puntos + 1;
        document.getElementById("mensaje3").textContent =
            "¡Correcto! Has creado una lista ordenada. +1 punto.";
    } else {
        document.getElementById("mensaje3").textContent =
            "No es correcto. Recuerda: necesitamos una lista numerada.";
    }
});

document.getElementById("boton4").addEventListener("click", function() {
    let respuesta = document.getElementById("respuesta4").value.toLowerCase();
    if (respuesta === "ul") {
        puntos = puntos + 1;
        document.getElementById("mensaje4").textContent =
            "¡Correcto! Has encontrado la lista con viñetas . +1 punto. ";
    } else {
        document.getElementById("mensaje4").textContent =
            "Incorrecto. Piensa en la lista que utiliza viñetas..";
    }
});

document.getElementById("boton5").addEventListener("click", function() {
    let respuestaA = document.getElementById("respuesta5a").value.toLowerCase();
    let respuestaB = document.getElementById("respuesta5b").value.toLowerCase();
    let respuestaC = document.getElementById("respuesta5c").value.toLowerCase();
    if (
        respuestaA === "html" &&
        respuestaB === "h1" &&
        respuestaC === "p"
    ) {
        puntos = puntos + 1;
        document.getElementById("mensaje5").textContent =
            "¡HAS ESCAPADO! Código correcto. Puntos: " + puntos + "/5";
    } else {
        document.getElementById("mensaje5").textContent =
            "La puerta sigue cerrada. Revisa las tres respuestas.";
    }
});



