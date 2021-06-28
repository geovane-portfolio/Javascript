//Evento Clique
function clicou() {
    document.getElementById("titulo").innerHTML = 'Obrigado!';
}

//-----------------------------------------------------


// Campo 2 
function digitou() {
    document.getElementById("campo2");

    console.log("Você digitou!");
}

//-----------------------------------------------------
//Campo 3
function digitou2(e) {
    if(e.keyCode == 13 && e.ctrlKey == true){ //tecla ctrl + enter
        let texto = document.getElementById("campo3").value;

        console.log(texto);
    }
}

//------------------------------------------------------

// Mudança de estilos
function verde() {
    limpar();
    document.getElementById('titulo2').classList.add('verde');
}
function vermelho() {
    limpar();
    document.getElementById('titulo2').classList.add('vermelho');
}
function azul() {
    limpar();
    document.getElementById('titulo2').classList.add('azul');
}
function limpar() {
    document.getElementById('titulo2').classList.remove('vermelho');
    document.getElementById('titulo2').classList.remove('azul');
    document.getElementById('titulo2').classList.remove('verde');
}


function Mtel (elemento) {
    document.getElementById('Btel').style.display = 'none';
    document.getElementById('telefone').style.display = 'block';
}

//-----------------------------------------------------

//Array

let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];

console.log(carros);//adicionar ( carros [1]) mostra apenas o posição 1


let ingradientes = [
    ['uva','pera','maça'],
    ['arroz', 'macarrão' ]
];

console.log(ingradientes);//(ingredientes [1][0]) seleciona macarrão 

// Objeto é nomeado e não numerado
let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function() {
        this.ligado = true;
        console.log("VRUM VRUM");
    },
    acelerar:function() {
        if(this.ligado == true){
            console.log("RUM RUM");
        } else {
            console.log(this.nome+" "+this.modelo+ " não está ligado!")
        }
    }
};

console.log( carro.modelo );// ou (carro[nome])

carro.ligar();
carro.acelerar();

//-------------------------------------------------------------------

//SWITCH

let dia = 1;
let diaNome = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sabádo';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome+"!";

//-------------------------------------------------------------------

//Loop For

let texto = '';

//criar variável + condição + incrementação
for(let i = 0; i < 50; i++) {
    texto = texto + i + ', ';
}

document.getElementById("demo").innerHTML = texto;


//Loop For Array

let carros2 = [ 'Ferrari', 'Fusca', 'Palio', 'Corolla' ];

let html = '<ul>';

for(let e in carros2) {
    html += '<li>'+ carros2[e] +'</li>';
}

html += '</ul>';

document.getElementById("demo2").innerHTML = html;

//----------------------------------------------------------------

//Loop While "Enquanto"

let html2 = '';
let c = 1;

while(c <= 10) {
    html2 += "Número: "+c+", ";
    c++;
}


document.getElementById("demo3").innerHTML = html2;

//----------------------------------------------------------------

//querySelector e querySelectorAll, usa as seleções do css. 
//querySelector seleciona apeanas o primeiro. o All seleciona todos da tela.

document.querySelector('ol.lista');

document.querySelector('#titulo3');

document.querySelectorAll('li');

//----------------------------------------------------------------

