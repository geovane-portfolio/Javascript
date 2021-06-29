let nome = 'Geovane de Sá Ferreira';

//Conta os caracteres 
let resultado = nome.length; 


//mostra em que posição o elemento se encontra, ou -1 quando não encontra.

//let resultado2 = nome.indexOf('Sá');

let resultado2 = '';// Se a pesquisa não estiver em nome, vai retornar não achou. 

if(nome.indexOf('Silva') > -1) {
    resultado2 = 'Achou !';
} else {
    resultado2 = 'Não Achou !';
}


document.querySelector('.demo1').innerHTML = "Número de caracteres: "+resultado;

document.querySelector('.demo2').innerHTML = "Achou a string em nome? "+resultado2;

//extrair informações das strings 

let resultado3 = nome.slice(0, 8);//negativo a seleção é de trás para frente.

document.querySelector('.demo3').innerHTML = "Captura de parte da string com Slice: "+resultado3;



//nome.substr(inicio, quantidades de caracteres)
let resultado4 = nome.substr(14, 8);//funciona com negativo.
//substring não aceira valor negativo.

document.querySelector('.demo4').innerHTML = "Captura ' Substr ': "+resultado4;

//Substituir um texto dentro da string

let resultado5 = nome.replace('Ferreira', 'Uzumaki');

document.querySelector('.demo5').innerHTML = "Substituição do nome "+nome+ " com ' Replace ' :"+resultado5;