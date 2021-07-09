const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// Preenchendo os elementos
pizzaJson.map( (item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);


    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();//cancelando a ação padrão
        //closest, está saindo de 'a' e selecionado o mais proximo que tenha .pizza-item.
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        //preechendo o modal
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        cs('.pizzaInfo--size').forEach( (size, sizeIndex)=> {// add peso 
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';// exibir o modal
        setTimeout( ()=> {
            c('.pizzaWindowArea').style.opacity = 1;
        },200);
    });
    
    c('.pizza-area').append( pizzaItem );
});

//