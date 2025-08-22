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
        if(!amigos.includes(lblAmigo))
        {
            amigos.push(lblAmigo);
            limpiarLabels();
        }
        else
        {
            alert("Nombre repetido");
            limpiarLabels();
        }        
        //console.log(amigos);                
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

function sortearAmigo()
{    
    let indice = Math.floor(Math.random()*(amigos.length));
    if(amigos.length==0)
    {
        alert("Aún no ha ingresado a ningún amigo");
    }
    else
    {
        let lblResultado = document.getElementById('resultado');        
        lblResultado.innerHTML = amigos[indice];
        document.querySelector('#aniadir').setAttribute('disabled',true);
        document.querySelector('#amigo').setAttribute('disabled',true);
    }
}
