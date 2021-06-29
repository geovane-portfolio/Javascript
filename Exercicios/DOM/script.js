// Selecionando elementos com getElementById

// localiza o id exemplo e modifica o html para Pedro
document.getElementById('exemplo').innerHTML = "Pedro <button>botão</button>";

// Selecionando elementos com getElementsByClassName

// Selciona varios elementos dentro da classe lista
document.getElementsByClassName('lista');

// Selecionando e alterando a lista 0.
document.getElementsByClassName('lista')[0].innerHTML = 'Item alterado';

// Selecionando pela tag
document.getElementsByTagName('div')[2].innerHTML = 'Refrigerante';

// Selecionando pelo name
document.getElementsByName('telefone');




// QUERYSELETOR

//queryselector pode usar as seleções do css. ele retorna somente o primeiro da lista
document.querySelector('#exemplo');

document.querySelector('.lista');

// seleciona tods com a condição
document.querySelectorAll('.lista');


// Manipulando Class do elemento 

// função selecionar elemento, entra na .classList e .add condição.
function verde() {
    document.querySelector('#exemplo2').classList.remove('vermelho');
    document.querySelector('#exemplo2').classList.remove('azul');
    document.querySelector('#exemplo2').classList.add('verde');
}
function vermelho() {
    document.querySelector('#exemplo2').classList.remove('verde');
    document.querySelector('#exemplo2').classList.remove('azul');
    document.querySelector('#exemplo2').classList.add('vermelho');
}
function azul() {
    document.querySelector('#exemplo2').classList.remove('vermelho');
    document.querySelector('#exemplo2').classList.remove('verde');
    document.querySelector('#exemplo2').classList.add('azul');
}


function trocar() {
    if (document.querySelector('#exemplo3 button').classList.contains('azul')) {
        document.querySelector('#exemplo3 button').classList.remove('azul');
        document.querySelector('#exemplo3 button').classList.add('verde');
    } else {
        document.querySelector('#exemplo3 button').classList.remove('verde');
        document.querySelector('#exemplo3 button').classList.add('azul');
    }
}



// Função alterar 

function alterar() {
    document.getElementById("titulo").innerHTML = "trocou o titulo!";
    document.getElementById("campo").value = "trocou o campo!";
}

alterar();

// Somar os valores e imprimir em campo

function somar(x, y) {
    let total = x + y;

    document.getElementById("campo").value = total;
  
}

somar(100, 200);

// somar os valores e retornar o resultado no console


function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 15);

console.log(resultado);


// ------------------------------------------------------------------------
// Função trocar imagem e dizer qual é o animal.

function trocarimagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal',animalname);
}
function pegaranimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    // ativar alert para ver o resultado.
    // alert("O animal é: "+animal); 
}

// Dimensões

// .offset pega o conteúdo, padding e borda
document.querySelector('.texto').offsetWidth;

document.querySelector('.texto').offsetHeight;

// .client pega o valor do conteúdo e padding
document.querySelector('.texto').clientWidth;

document.querySelector('.texto').clientHeight;

// .scroll pega o tamanho real do conteúdo
document.querySelector('.texto').scrollWidth;

document.querySelector('.texto').scrollWidth;


// Scroll

/*
// pega o tamanho do scroll em um elemento
document.querySelector('.texto2').scrolltop;

// para ver na tela inteira, horizontal(X) ou vertical(Y)
window.scrollX;

// colocar o scroll no inicio, dentro do elemento
document.querySelector('.texto2').scrollTo(0, 0);

// Botão subir tela inteira
function subirTela() {
    window.scrollTo(0, 0);
}
*/


// Botão sibir tela do elemento texto2
function subirTela() {
    document.querySelector('.texto2').scrollTo({
        top: 0,
        left:0,
        behavior: "smooth" // subir suave
    });
}

// ocultar botão no scroll top.
function ocultarBotao () {
    if(document.querySelector('.texto2').scrollTop === 0) {
        //ocultar botão
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        //mostrar botão
        document.querySelector('.scrollbutton').style.display = 'flex';
    }
}

document.querySelector('.texto2').addEventListener('scroll', ocultarBotao);