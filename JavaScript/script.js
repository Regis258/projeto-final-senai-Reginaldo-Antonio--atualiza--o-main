$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop:true,
        onSliderLoaded: function(){
            $('#autoWidth').removeClass('cS-hidden');
        }
    })
});

//função do clico do menu
let styleBlock = itens.style.display == 'block'
let styleNone = itens.style.display == 'none'
/*window.matchMedia("(min-width: 435px)").matches*/
/*function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block' ;
    }
}
*/
function clickMenu() {
    var mediaQuery = window.matchMedia("(max-width: 425px)"); //Mudar depois adicionar 430px
    if (mediaQuery.matches) { // Verifica se a condição de mídia é atendida se for atendida deixa de ser block para ser flex
        if (itens.style.display == 'flex') {
            itens.style.display = 'none';
        } else {
            itens.style.display = 'flex';
        }
    } else { // Se a condição de midia não for atendida então ele é block
        if (itens.style.display == 'block') {
            itens.style.display = 'none';
        } else {
            itens.style.display = 'block';
        }
    }
}


/*
function clickMenu(){
    if(itens.style.display == 'block' && itens.style.display == matchMedia("(max-width:425px)")){
        itens.style.display = 'flex'
    }else if(itens.style.display == 'flex'){
        itens.style.display = 'none' ;
    }else if (itens.style.display == 'block'){
        itens.style.display = 'none' ;
    }else{
        itens.style.display = 'flex' ;
    }
}
*/
const test = () => {
    let q = matchMedia("(max-width:425px)");
    if (q.matches){
        document.querySelector(".itens").style.display ="flex";
    }else {document.querySelector(".itens").style.display = "none";}
}

function toggleLogin() {
    var login = document.getElementById("login");
    login.classList.toggle("active");
  }
//pegando os botões 
// Obtendo uma lista de todos os botões com a classe .botao
let botoes = document.querySelectorAll(".produtosAll");

// Iterando sobre cada botão para adicionar o ouvinte de evento de clique
botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        // Obtendo o span contador dentro do contêiner deste botão
        let spanContador = this.parentNode.querySelector(".contadorSpan");

        // Pegando o valor atual do contador e adicionando +1
        let valorAtual = parseInt(spanContador.innerText);
        valorAtual += 1;

        // Atualizando o conteúdo do span com o novo valor
        spanContador.innerText = valorAtual;
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0px 0"; /* Adiciona um espaçamento superior quando o usuário rolar a página */
  } else {
    document.getElementById("header").style.padding = "0px 0"; /* Altere conforme necessário */
  }
}

