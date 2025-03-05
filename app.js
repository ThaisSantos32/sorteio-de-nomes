//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos =[];

    function adicionarAmigo(){
       let campoDeTexto= document.querySelector('input').value;
       if (campoDeTexto==''){
        alert ('Digite um nome válido!')
      }
       else {
         listaDeAmigos.push(campoDeTexto);
         let mostrarLista= document.getElementById('listaAmigos');
         const listItem = document.createElement('li')
         listItem.innerHTML = campoDeTexto
          mostrarLista.appendChild(listItem)
    }
    limpaTela();
    }

      function sortearAmigo(){
        let sorteioNomes= Math.floor(Math.random()*listaDeAmigos.length);
        let result = document.getElementById('resultado');
         result.innerHTML=  `O amigo secreto sorteado é: ${listaDeAmigos[sorteioNomes]}`;
      }

      function limpaTela (){
         campoDeTexto= document.querySelector('input');
         campoDeTexto.value='';
      }



