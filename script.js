// Variáveis globais
let qtdCartas = 0;

let container = document.querySelector(".container");

let cartaFrente = document.querySelectorAll(".frente");

let carta2 = null;

let cartasClicadas = 0; 

let jogadas = 0; 

let carta = document.querySelector(".carta")


console.log(cartaFrente);

// Array com os nomes das cartas da frente
const frenteCartas = [
   `<div class="carta" onclick ="virarCarta(this)"> 
            
    <div class="atras"><img src="imagens/back.png" alt=""></div>
                
    <div class="frente"><img src='imagens/cartaAtras1.gif' alt=''></div>
            
</div>`,

`<div class="carta" onclick ="virarCarta(this)"> 
            
    <div class="atras"><img src="imagens/back.png" alt=""></div>
    
    <div class="frente"><img src='imagens/cartaAtras2.gif' alt=''></div>

</div>`,

` <div class="carta" onclick ="virarCarta(this)"> 
            
    <div class="atras"><img src="imagens/back.png" alt=""></div>
                
    <div class="frente"><img src='imagens/cartaAtras3.gif' alt=''></div>
            
</div>`,


`<div class="carta" onclick ="virarCarta(this)"> 
            
    <div class="atras"><img src="imagens/back.png" alt=""></div>
                
    <div class="frente"><img src='imagens/cartaAtras4.gif' alt=''></div>
            
</div>`,


`<div class="carta" onclick ="virarCarta(this)"> 
            
    <div class="atras"><img src="imagens/back.png" alt=""></div>
                
    <div class="frente"><img src='imagens/cartaAtras5.gif' alt=''></div>
            
</div>`,

`<div class="carta" onclick ="virarCarta(this)"> 
            
    <div class="atras"><img src="imagens/back.png" alt=""></div>
                
    <div class="frente"><img src='imagens/cartaAtras6.gif' alt=''></div>
            
</div>`,

`<div class="carta" onclick ="virarCarta(this)"> 
            
    <div class="atras"><img src="imagens/back.png" alt=""></div>
                
    <div class="frente"><img src='imagens/cartaAtras7.gif' alt=''></div>
            
</div>`

];

// Array de cartas
const arrayCartas = [];

// Pergunta ao jogador a quantidade de cartas que deseja
function qtdeCartas() {
    qtdCartas = Number(prompt("Digite a quantidade de cartas que deseja jogar: "));
    comecarJogo();
}

qtdeCartas();

//Verifica se a quantidade de cartas bate. 
function comecarJogo() {
    while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0) {
        alert("A quantidade de cartas precisa ser PAR e entre 4 e 14!!");
        qtdeCartas();
    }

    distribuirCartas();
}

// distribui e embaralha as cartas do jogo 
function distribuirCartas() {
    container.innerHTML = '';
    arrayCartas.length = 0;

    for (let i = 0; i < qtdCartas / 2; i++) {
        arrayCartas.push(frenteCartas[i]);
        arrayCartas.push(frenteCartas[i]);
    }

    arrayCartas.sort(comparador);

    for (let i = 0; i < arrayCartas.length; i++) {
        container.innerHTML += arrayCartas[i];
    }
}

function comparador() {
    return Math.random() - 0.5;
}


let primeiraCarta = null;
let segundaCarta = null;

function virarCarta(elemento) {
    if (cartasClicadas === 2) return; 
    elemento.classList.add("virarCarta");
    cartasClicadas++;
    jogadas++;

    if (cartasClicadas === 1) {
        primeiraCarta = elemento;
    } else {
        segundaCarta = elemento;

        
        if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
            cartasClicadas = 0;
            primeiraCarta = null;
            segundaCarta = null;
        } else {
            
            setTimeout(() => {
                primeiraCarta.classList.remove("virarCarta");
                segundaCarta.classList.remove("virarCarta");
                cartasClicadas = 0;
                primeiraCarta = null;
                segundaCarta = null;
            }, 1000); 
        }
    }

    qtdjogadas()
}

 function qtdjogadas(){
    const fimdeJogo = document.querySelectorAll('.virarCarta').length === qtdCartas; 

    if(fimdeJogo) {
        alert(`Parabéns! Você terminou o jogo em ${jogadas} jogadas!`)
    }

 }
 