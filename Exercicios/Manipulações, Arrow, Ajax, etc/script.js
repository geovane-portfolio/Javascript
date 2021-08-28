let nome = 'Geovane de Sá Ferreira';

//1 .Conta os caracteres 
let resultado = nome.length; 


//mostra em que posição o elemento se encontra, ou -1 quando não encontra.

//let resultado2 = nome.indexOf('Sá');


// 2. ------------
let resultado2 = '';// Se a pesquisa não estiver em nome, vai retornar não achou. 

if(nome.indexOf('Silva') > -1) {
    resultado2 = 'Achou !';
} else {
    resultado2 = 'Não Achou !';
}


document.querySelector('.demo1').innerHTML = "Número de caracteres: "+resultado;

document.querySelector('.demo2').innerHTML = "Achou a string em nome? "+resultado2;

//extrair informações das strings ------------------------------------

// 3. -------------
let resultado3 = nome.slice(0, 8);//negativo a seleção é de trás para frente.

document.querySelector('.demo3').innerHTML = "Captura de parte da string com Slice: "+resultado3;


// 4 ----------------------
// nome.substr(inicio, quantidades de caracteres)
let resultado4 = nome.substr(14, 8);//funciona com negativo.
//substring não aceira valor negativo.

document.querySelector('.demo4').innerHTML = "Captura ' Substr ': "+resultado4;

// 5 -------------------------------------------------------------
//Substituir um texto dentro da string

let resultado5 = nome.replace('Ferreira', 'Uzumaki');

document.querySelector('.demo5').innerHTML = "Substituição do nome "+nome+ " com ' Replace ' : "+resultado5;

// 6. -----------------------------------------------------------
//Usando trim ----------------

let nome2 = '      Geovane       ';
let resultado6 = nome2.trim();

console.log(resultado6.length);

document.querySelector('.demo6').innerHTML = "Em nome "+nome2+ " remover espaços com ' Trim ' : "+resultado6;

// 7. ------------------------------------------------------------
//CharAt --------------------
let resultado7 = nome.charAt(2);


document.querySelector('.demo7').innerHTML = "Em nome "+nome+ ", quem está na posição 2, usando ' CharAt '? : "+resultado7;

// 8. -----------------------------------------------------------
//Split
let resultado8 = nome.split(' ');

console.log(resultado8)

document.querySelector('.demo8').innerHTML = "Transformar "+nome+ ", em array e dividindo pela condição , usando ' Split ' : "+resultado8;

// Método de Numbers ---------------------------------------------

//1. -----------------
//toString
let n = 10;

let res = n.toString();

console.log(res);

document.querySelector('.numb1').innerHTML = "Transformar "+n+ ", em string! ver no console, usando ' toString ' ";

// 2. ---------------
// toFixed
let n2 = 10.6546572645;

let res2 = n2.toFixed(2);

console.log(res2);

document.querySelector('.numb2').innerHTML = " Usando ' toFixed ' o número "+n2+ ", imprime somente a quantidade de casas decimais da condição =  "+res2;

// 3. ----------------
// parseInt, tranforma em número inteiro.

let n3 = '25';// No caso de 25.9 o partInt exclui os decimais.

let res3 = parseInt(n3) + 5; 

console.log(res3);

document.querySelector('.numb3').innerHTML = " Usando ' parseInt ' transforma a string "+n3+ ", em número inteiro + 5 = "+res3;

//4. --------------------
//parseFloat mantem o decinal.

let n4 = '25.9';

let res4 = parseFloat(n4) + 5; 

console.log(res4);

document.querySelector('.numb4').innerHTML = " Usando ' parseInt ' transforma a string "+n4+ ", em número decimal + 5 = "+res4;

// Métodos de Arrays -----------------------------------------------------

// 1. --------------------
// toString transforma o Array em string
let lista = ['Ovo', 'Farinha', 'Leite', 'Fermento'];

let res5 = lista.toString();

console.log(res5);

document.querySelector('.array1').innerHTML = " Usando ' toString ' transforma o Array "+lista+ ", em uma string = "+res5;

// 2. join, transforma em string separando pelo parâmetro.

let res6 = lista.join('--');

console.log(res6);

document.querySelector('.array2').innerHTML = " Usando ' join ' transforma o Array "+lista+ ", em uma string separada pelo parâmetro = "+res6;

//3. indexOf 

let res7 = lista.indexOf('Ovo');

console.log(res7);

document.querySelector('.array3').innerHTML = " Usando ' indexOf ' localize o parãmetro 'Ovo' em "+lista+ " , indique a posição. Posição = "+res7;

// 4. pop remove o último Array. 

lista.pop();

let res8 = lista;

console.log(res8);

document.querySelector('.array4').innerHTML = " Usando ' pop ' Ele remove o ùltimo item da lista: 'Ovo', 'Farinha', 'Leite', 'Fermento' , Lista = "+res8;

//5. shift remove o primeiro item da lista. 

lista.shift();

let res9 = lista;

console.log(res9);

document.querySelector('.array5').innerHTML = " Usando ' shift ' Ele remove o Primeiro item da lista: 'Ovo', 'Farinha', 'Leite', 'Fermento' , Lista = "+res9;

//6. push adiciona itens ao array

lista.push('Ovo', 'Fermento');

let res10 = lista;

console.log(res10);

document.querySelector('.array6').innerHTML = " Usando ' push ' Ele adiciona itens na lista: 'Farinha', 'Leite'. = Lista : "+res10;

// 7. adicionando com []

lista[4]= 'Chocolate';

let res11 = lista;

console.log(res11);

document.querySelector('.array7').innerHTML = " Usando ' lista[4] = 'Chocolate' . ' Ele adiciona itens na lista:Farinha,Leite,Ovo,Fermento, = Lista : "+res10;

// 8. splice exclui elementos do array

lista.splice(2, 1);// (posição do item, quantidade de itens)


let res12 = lista;

console.log(res12);

document.querySelector('.array8').innerHTML = " Usando ' splice ' Ele remove itens da lista:Farinha,Leite,Ovo,Fermento,Chocolate.  Lista = "+res12;

// 9. concat, junta dois arrays em um.

let lista2 = ['Prato','Batedeira','Forno'];

let res13 = lista.concat(lista2);

console.log(res13);

document.querySelector('.array9').innerHTML = " ' concat ' Soma lista :Farinha, Leite, Ovo, Fermento, Chocolate. a Lista: "+lista2+ " = "+res13;

lista.push('Ovo');

// 10. sort, ordena em ordem alfabética 

lista.sort();

// lista.reverse(); inverte a ordem do final do começo. 

let res14 = lista;

console.log(res14);

document.querySelector('.array10').innerHTML = " ' sort ' Organiza a Lista: Farinha, Leite, Ovo, Fermento, Chocolate. em ordem alfabética = "+res14;

// 11. map, mapeia a os elementos, posibilitando rodar uma função

let listaNu = [45, 4, 9, 16, 25];
let listaNu2 = [];

listaNu2 = listaNu.map(function(item) {
    return item * 2;
});

let resNu = listaNu2;

console.log(resNu);

document.querySelector('.array11').innerHTML = " Multiplicando itens do Array usando ' map ', listaNu: [45, 4, 9, 16, 25] = [ "+resNu+"]";

//12. filter, filtra a condição que for adicionada na função

listaNu2 = listaNu.filter(function(item){
    if(item < 20) {
        return true;
    } else {
        return false;
    }
});

let resNu2 = listaNu2;

console.log(resNu2);

document.querySelector('.array12').innerHTML = "Filtrando itens do Array usando ' filter ', wm listaNu: [45, 4, 9, 16, 25] menor que 20 = ["+resNu2+"]";

//13. every, todos tem que atender a condição. 

listaNu2 = listaNu.every(function(item){
    return (item > 20)? true: false;
});

let resNu3 = listaNu2;

console.log(resNu3);

document.querySelector('.array13').innerHTML = "Filtrando itens do Array usando ' every ', em listaNu: [45, 4, 9, 16, 25] se todos são menores que 20, se sim 'true' se não 'false' = "+resNu3+".";

//14. find, procura um item no array, e retorna o primeiro encontrado. 
// o findIndex retorna a posição do primeiro item que satisfaça a condição.

listaNu2 = listaNu.find(function(item){// usando findIndex vai retornar '3'
    return (item == 16)? true: false;
});

let resNu4 = listaNu2;

console.log(resNu4);

document.querySelector('.array14').innerHTML = "Filtrando itens do Array usando ' find ', em listaNu: [45, 4, 9, 16, 25] se tem item == 16, se sim retornará o item = "+resNu4+".";

// 1. Datas

let d = new Date();

let newdate = d.getFullYear();// getMonth = mês, getDate = dia  ,getDay = dia da Semana, getHours = Horas, getSeconds = segundos, getMilliseconds = milisegundos, getTime = milisegundos de 1970 até hoje.

console.log(newdate);

document.querySelector('.data1').innerHTML = " Ano = "+newdate+".";

// 2. setFullYear, trocando o ano
// set usa as mesmas terminações do get.

let d2 = new Date();

d2.setFullYear(2022);

let newdate2 = d2;

console.log(newdate2);

document.querySelector('.data2').innerHTML = " Trocando o Ano = "+newdate2+".";

// 3. setDate pode adicionar condição no método. 

let d3 = new Date();

d3.setDate( d3.getDate() + 5 );

let newdate3 = d3;

console.log(newdate3);

document.querySelector('.data3').innerHTML = " Adicionando 5 dias a data [ "+d+" ] = "+newdate3+".";

// Matemática ------------------------------------------------
// 1. 
// round, arredonda para cima depois o.50 e 0.49 para baixo. 
// floor sempre arredonda para cima.
// ceil sempre apara cima.

let nValor = Math.round(3.50);

console.log(nValor);

document.querySelector('.mate1').innerHTML = " Arredondando números com 'round' = "+nValor+".";

// 2. mim e max
let nLista = (45, 63, 100, 254, 17);

let min = Math.min(45, 63, 100, 254, 17);
let max = Math.max(45, 63, 100, 254, 17);

console.log(min, max);

document.querySelector('.mate2').innerHTML = " Na lista (45, 63, 100, 254, 17), menor valor = "+min+", e o maior valor = "+max;

// 3. random, retorna um número aleatório entre 0 e 1. combinando com o floor retorna maior que 1.

let nValor3 = Math.floor( Math.random() * 100 );

console.log(nValor3);

document.querySelector('.mate3').innerHTML = " random, retorna um número aleatório entre 0 e 1. combinando com o floor retorna maior que 1 = "+nValor3;

// Intervalos ---------------------------------------------------

// 1. Hora / Timer

let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.inter1').innerHTML = " Hora; "+txt;
}

// 2. SetTimeout, setar depois de um tempo determinado

let timer2

function rodar() {
    timer2 = setTimeout( function() {
        document.querySelector('.inter2').innerHTML = " Rodou ";
    },2000 );
};
function parar2() {
    clearTimeout(timer2);
};

// Template Strings

// 1 

let nome3 = 'Geovane';

let idade = 32;

let frase = `Meu nome é ${nome3}, eu tenho ${idade}, e ano que vem farei ${idade + 1}.`;

console.log(frase);

document.querySelector('.temp').innerHTML = frase;

// Desconstruindo Objetos

// 1. 

let pessoa = {
    nome4:'Geovane',
    sobrenome:'Sá',
    idade2:32,
    social:{
        facebook:'facebook',
        instagram:'instagram'
    }, 
    nomeCompleto: function() {
        return `${this.nome4} ${this.sobrenome}`;
    }
    
};

let { nome4, sobrenome, idade2 } = pessoa;
// pode mudar o nome da variavel "nome4:Geovane" ou colocar um valor caso a mesma não esteja definida "idade=0" .

console.log( nome4, sobrenome, idade2 );

document.querySelector('.desc1').innerHTML = nome4+' , '+sobrenome+' , '+idade2;

// 2. descontruindo elementos dentro do social

let pessoa2 = {
    nome5:'Geovane',
    sobrenome2:'Sá',
    idade3:32,
    social2:{
        facebook:'facebook',
        instagram:'instagram'
    }, 
    nomeCompleto: function() {
        return `${this.nome4} ${this.sobrenome}`;
    }
    
};

let { facebook } = pessoa.social;// selecionar dentro do social
console.log( facebook );


let { nome5, idade3, social2:{ instagram } } = pessoa2;
console.log( nome5, idade3, instagram );

document.querySelector('.desc2').innerHTML = nome5+', '+idade3+', '+instagram+', '+facebook;

//3 . 

let pessoa3 = {
    nome6:'Geovane',
    sobrenome3:'Sá Ferreira',
    idade3:32,
    social2:{
        facebook:'facebook',
        instagram:'instagram'
    }, 
};

function pegarNomeCompleto({nome6, sobrenome3}) {
    return `${nome6} ${sobrenome3}`;
}

console.log( pegarNomeCompleto(pessoa3) );

document.querySelector('.desc3').innerHTML = pegarNomeCompleto(pessoa3);

// --------------------------------------------------------------------


//Desconstruindo Arrays

// 1. desconstruindo o array e nomeando as variáveis

let info = [ 'Geovanede Ferreira', 'Geovane', 'Ferreira', 'geovane-portfolio' ];

let [ , nome7, sobrenome4 ] = info;

console.log( nome7, sobrenome4);

document.querySelector('.desArray1').innerHTML = `${nome7} ${sobrenome4}`;


// 2. criando variáveis,  criando e descontruindo o array junto.

let [ nome8, sobrenome5 ] = [ 'Geovane', 'Ferreira' ];

console.log( nome8, sobrenome5);

document.querySelector('.desArray2').innerHTML = `${nome8} ${sobrenome5}`;

// 3. criando e descontruindo através de uma função

function criar() {
    return [1,2,3];
}

let [a,b,c] = criar();

console.log(a,b,c);

document.querySelector('.desArray3').innerHTML = `${a}, ${b}, ${c}.`;

//----------------------------------------------------------------------

// Arrow functions, a mesma não suportya o "This".

// 1. utilizando o arrow 

/*
function somar(x,y) {
    return x + y;
}

let somar = function(x, y) {
    return x+y;
}
*/

let somar = (x, y) => x + y;

console.log( somar(10, 5));


document.querySelector('.arrow1').innerHTML = `Soma =${somar(10, 5)}.`;

// 2. 

let letrasNoNome = nome => nome.length;

console.log( letrasNoNome( 'Geovane' ));

document.querySelector('.arrow2').innerHTML = `Quantidade de letras em nome =  ${letrasNoNome( 'Geovane' )}.`;

// -------------------------------------------------------------------

// Operador Spread
// 1. 

let info2 = {
    nome9: 'Geovane',
    sobrenome6:'Ferreira',
    idade4:32
};

let novaInfo = {
    ...info2,
    cidade: 'Palhoça',
    estado:'Santa Catarina',
    pais:'Brasil'
};

console.log( novaInfo );


document.querySelector('.sped1').innerHTML = `${JSON.stringify(novaInfo)}.`;

//2. 

function addInfo(info2) {
    let novasInfo = {
        ...info2,
        status:0
    }
    return novasInfo;
 
}

console.log( addInfo( {nome, sobrenome} ) );

let resut = addInfo(info2);

// `${JSON.stringify( )}.` tranforma em estring o objeto
document.querySelector('.sped2').innerHTML = `${JSON.stringify(resut)}.`;

//---------------------------------------------------------------------

// Operador Rest "..."
// 1.

function add(...numeros) {
    console.log(numeros);  

    return numeros; // para imprimir no innerhtml, necessario return.
}

let resut2 = add( 1,2,3,4,5,6 );

document.querySelector('.rest1').innerHTML = `${ JSON.stringify(resut2) }.`;

// 2. 

function add2(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes, // spread
        ...novosNomes // Rest
    ];

    return novoConjunto;
}

let nomes = ["Geovane", "Paulo"];

let outros = add2(nomes, "Antonio", "Maria", "José");

console.log(outros);

document.querySelector('.rest2').innerHTML = `${ JSON.stringify(outros) }.`;

// ---------------------------------------------------------------------

//Includes e repeat
//1. 

let mercado = [ 'ovo', 'café', 'arroz', 'feijão', 'macarrão' ];

console.log( mercado.includes('carne') );

document.querySelector('.ir1').innerHTML = `Em lista mercado:( ${mercado} ), tem o item carne? R: ${ mercado.includes('carne') }.`;

// 2.

let so = ' Linux ';

console.log( so.repeat(30) );

document.querySelector('.ir2').innerHTML = `Utilizando ' repat ' em :( ${so} ), 30 vezes? R: ${ so.repeat(30) }.`;

// ------------------------------------------------------------------

// Objeto: Keys, Values e Entries

// 1. keys 

let lista3 = [ 'ovo', 'café', 'arroz', 'feijão', 'macarrão' ]

console.log( Object.keys(lista3) );

document.querySelector('.kve1').innerHTML = `Utilizando ' keys ' em :( ${lista3} ), ele retorna o indice. R: ${ Object.keys(lista3) }.`;

// 2. Values 

document.querySelector('.kve2').innerHTML = `Utilizando ' Values ' em :( ${lista3} ), ele retorna os valores. R: ${ Object.values(lista3) }.`;

// 3. Entries

document.querySelector('.kve3').innerHTML = `Utilizando ' Entries ' em :( ${lista3} ), ele retorna um arrey com o index e o valor. R: ${ Object.entries(lista3) }.`;

// 4. Keys na função

let pessoa4 = {
    nome10: 'Geovane',
    sobrenome7:'Ferreira',
    idade5:32
};

document.querySelector('.kve4').innerHTML = `Utilizando ' keys na função ' em :( ${ JSON.stringify(pessoa4) } ), ele retorna todas as chaves. R: ${ Object.keys(pessoa4) }.`;


// -----------------------------------------------------------------
// String, padStart, padEnd

let telefone = '48 988';

console.log( telefone.padEnd( 11, '*' ) );

document.querySelector('.spp1').innerHTML = ` ' padEnd ' em :( ${ JSON.stringify(telefone) } ), ele completa com ' * ' até completar a quantidade de caracteres estipulado. R: ${ telefone.padEnd( 11, '*' ) }.`;

// padStart

document.querySelector('.spp2').innerHTML = ` ' padStart ' em :( ${ JSON.stringify(telefone) } ), ele completa antes do conteúdo com ' * ' até completar a quantidade de caracteres estipulado. R: ${ telefone.padStart( 11, '*' ) }.`;

// Ocultando dígitos do cartão

let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart( 16, '*' );

console.log( 'Este é o seu cartão? '+cartaoMascarado );

document.querySelector('.spp3').innerHTML = ` ' padStart ' em :( ${ JSON.stringify(cartao) } ), ele ocultará com ' * ' e só mostrará 4 últimos dígitos. R: ${ cartaoMascarado }.`;

//------------------------------------------------------

Vetor = [5,3,2,4,7,1,0,20,6,10,];

Vetor.sort(function(a,b) {
    return a - b;
});

var ordenaNu = "";
for (var nu = 0; nu < Vetor.length; nu++) {
    ordenaNu += Vetor[nu] + ",";
}

//alert(ordenaNu);
