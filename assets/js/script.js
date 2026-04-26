document.getElementById("agregar").addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;
    let nota = document.getElementById("nota").value;

    //validación de datos
    if (nombre === "" || nota === "") { 
        alert("No puede dejar campos vacios");
        return;
    }

    //validación de datos númericos
    if (isNaN(nota)) {
        alert("Debe ingresar un número en el campo nota");
        return;
    }

    //validación rango de notas
    if (nota < 1.0 || nota > 7.0) {
        alert("El rango de notas debe ser de 1 a 7");
        return;
    }

    let fila = document.createElement("tr");

    let c1 = document.createElement("td");
    c1.textContent = nombre;
    let c2 = document.createElement("td");
    c2.textContent = nota;
    let c3 = document.createElement("td");

    //lógica del estado de nota
    if (nota >= 4.0) {
        c3.textContent = "Aprobado";
        c3.style.color = "green";
    } else {
        c3.textContent = "Reprobado";
        c3.style.color = "red";
    }

    fila.appendChild(c1);
    fila.appendChild(c2);
    fila.appendChild(c3);
    
    document.getElementById("tabla").appendChild(fila);

    //limpiar los inputs
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";
});