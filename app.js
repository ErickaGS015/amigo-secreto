let amigos = [];

function asignarTxtElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo()
{    
    let lblAmigo = document.getElementById('amigo').value;
    if(lblAmigo != "")
    {
        amigos.push(lblAmigo);
        console.log(amigos);
        limpiarLabels();
    }
    else
    {
        alert("Por favor, inserte un nombre.");
    }    
}

function limpiarLabels()
{
    document.querySelector('#amigo').value="";
}
/*
Descripción
Editar
Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: 
    Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/

function actualizarLista()
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML="";

    for(let i=0; i<amigos.length; i++)
    {
        //console.log(amigos[i]);
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

