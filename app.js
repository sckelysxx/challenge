// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let input = document.getElementById("amigo");  // Obtener el campo de texto
    let textoIngresado = input.value;  // Obtener el valor ingresado
    let lista = document.getElementById("listaAmigos");

    if (textoIngresado === "") {  // Si el campo está vacío 
        alert("Por favor, inserte un nombre."); // mostrar este alert

    } else if (amigos.includes(textoIngresado)) {  // Verificar si el nombre ya está en la lista
        alert(`El nombre "${textoIngresado}" ya está en la lista.`);  // Template string con el nombre duplicado

    } else {
        amigos.push(textoIngresado); // Añadir el nombre a la lista
        input.value = "";  // Limpiar el campo de texto después de agregarlo}
        actualizarLista();
        console.log(amigos);
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpiar la lista antes de agregar los nuevos elementos
     
     for (let amigo of amigos) { // Recorrer el array de amigos y agregar cada uno como un elemento <li>
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;  // Asignar el nombre del amigo al <li>
        lista.appendChild(nuevoAmigo);  // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");  // Elemento donde mostrar el amigo sorteado

    
    if (amigos.length === 0) {  // Verificar si hay amigos en el arreglo
        alert("No hay amigos en la lista para sortear.");
        return;  // Salir de la función si no hay amigos
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio entre 0 y la longitud del array - 1

    
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado usando el índice aleatorio


    
let listaResultado = document.getElementById("resultado"); // Definir la lista donde se mostrará el resultado

    // Mostrar el resultado en el HTML (agregar un <li> a la lista)
    listaResultado.innerHTML = "";  // Limpiar cualquier resultado anterior
    let nuevoElemento = document.createElement("li"); // Crear un nuevo elemento de lista <li> para mostrar el resultado
    nuevoElemento.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`; // Asignar el texto al nuevo elemento <li> con el nombre del amigo sorteado
    listaResultado.appendChild(nuevoElemento); // Añadir el nuevo <li> al final de la lista de resultados en el HTML
}