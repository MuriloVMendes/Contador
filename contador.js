//alert('Olá mundo, deu tudo certo, ihuuuuuuuuuuuuuu')

//1 - pegar o id do contador
let contador = document.getElementById("contador");

//2 - Criar a função de Incrementar 

function incrementar(){ 
contador.innerText = parseInt(contador.innerText) + 1;
 }
//3 - Criar a função de decrementar
function decrementar(){ 
contador.innerText = parseInt (contador.innerText) - 1;
}

//4 - Criar a função de zerar o contador
function zerar(){
    contador.innerText = '0';

}

//5 - Chamar as funções com o onclick em cada botão no html