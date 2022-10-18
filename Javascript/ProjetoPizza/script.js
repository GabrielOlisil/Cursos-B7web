import pizzaJson from './pizzas2.js';

let cart = [];
const c = el => document.querySelector(el);
const cs = el => document.querySelectorAll(el);
let modalQT = 1;
let modalKey = 0;
let modalPriceKey = 0;


function setData(){

    localStorage.setItem('cart', JSON.stringify(cart));
}

function getSavedData(){
    let savedData = JSON.parse(localStorage.getItem('cart'));

    return savedData && savedData.length ? savedData : [];
}

cart = getSavedData();

setData();
updateCart();


function removeClassFomArrayItems(array, classe) {
    [...array].forEach(el => {
        el.classList.contains(classe) && el.classList.remove(classe);
    })
}

function closeModal() {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);

}
const modal = c('.pizzaWindowArea');


pizzaJson.map((pizza, indice, arr) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', indice);

    pizzaItem.querySelector("a").addEventListener('click', (e) => {
        e.preventDefault();
        modalQT = 1;

        modal.style.opacity = 0;
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = 1;

        }, 200);

        let key = e.currentTarget.closest('.pizza-item').getAttribute('data-key');
        modalKey = key
        modal.querySelector('.pizzaBig img').src = arr[key].img;
        modal.querySelector('.pizzaInfo h1').textContent = arr[key].name;
        modal.querySelector('.pizzaInfo--desc').textContent = arr[key].description;
        modal.querySelector('.pizzaInfo--actualPrice').textContent = 'R$ ' + arr[key].sizes[2].price.toFixed(2);
        c('.pizzaInfo--qt').textContent = modalQT;

        removeClassFomArrayItems(modal.querySelectorAll('.pizzaInfo--size'), 'selected');
        modal.querySelector('.pizzaInfo--size:last-child').classList.add('selected')

        let actualPrice = arr[key].sizes[2].price;
        modal.querySelector('.pizzaInfo--actualPrice').textContent = 'R$ ' + actualPrice.toFixed(2);
        modalPriceKey = 2;




        modal.querySelector('.pizzaInfo--sizes').addEventListener('click', e => {

            removeClassFomArrayItems(modal.querySelectorAll('.pizzaInfo--size'), 'selected');

            let price = e.target.closest('.pizzaInfo--size');
            let priceKey = price.getAttribute('data-key');
            modalPriceKey = priceKey;

            price.getAttribute('data-key') && price.classList.add('selected');

            modal.querySelector('.pizzaInfo--actualPrice').textContent = 'R$ ' + arr[key].sizes[priceKey].price.toFixed(2);
        });

        [...modal.querySelectorAll('.pizzaInfo--size')].forEach(element => {
            let priceKey = element.getAttribute('data-key');
            element.querySelector('span').textContent = arr[key].sizes[priceKey].weight ;
        });
    })

    

    pizzaItem.querySelector('.pizza-item--name').textContent = pizza['name'];

    pizzaItem.querySelector('.pizza-item--desc').textContent = pizza['description'];

    pizzaItem.querySelector('.pizza-item--price').textContent = `R$ ${pizza['sizes'][2].price.toFixed(2)}`;

    pizzaItem.querySelector('.pizza-item--img img').src = pizza['img']


    c('.pizza-area').append(pizzaItem);
})

c('.pizzaInfo--cancelMobileButton').addEventListener('click', closeModal);

c('.pizzaInfo--cancelButton').addEventListener('click', closeModal);

c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(modalQT <= 1) return
    modalQT--
    c('.pizzaInfo--qt').textContent = modalQT;
});

c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQT++
    c('.pizzaInfo--qt').textContent = modalQT;
});

c('.pizzaInfo--addButton').addEventListener('click', () =>{
   
    let indentifier = pizzaJson[modalKey].id + '@' + +modalPriceKey;

    let key = cart.findIndex(item => item.indentifier == indentifier)


    if(key == -1){
        cart.push({
            id: pizzaJson[modalKey].id,
            tamanho: +modalPriceKey,
            quantidade: modalQT,
            preco: pizzaJson[modalKey].sizes[modalPriceKey].price,
            indentifier
        });
        setData();
        updateCart();
        closeModal();
        return
        
    }
    cart[key].quantidade += +modalQT;
    updateCart();
    closeModal();
});

c('.menu-openner').addEventListener('click', () =>{
    if(cart.length > 0) c('aside').style.left = 0;
});

c('.menu-closer').addEventListener('click', () =>{
    c('aside').style.left = '100vw';
})

function updateCart(){
    c('.menu-openner span').textContent = cart.length;

    if(cart.length > 0){

        c('aside .cart').addEventListener('click', changeQtInCart)


        c('aside').classList.add('show');
        c('aside .cart').textContent = '';
        let _price = 0;


        cart.length > 0 && cart.forEach((element) =>{
            let size = element.tamanho == 0 ? '(P)' : element.tamanho == 1 ? '(M)' : '(G)';

            let pizzaItem = c('.models .cart--item').cloneNode(true);

            let pizza = pizzaJson.find((item) => item.id == element.id);
            
            pizzaItem.querySelector('img').src = pizza.img;
            pizzaItem.querySelector('.cart--item-nome').innerHTML = `${pizza.name} ${size}`;
            pizzaItem.querySelector('.cart--item--qt').textContent = element.quantidade;

            _price += element.preco * element.quantidade;

            c('aside .cart').append(pizzaItem);
            
        })


        c('aside .subtotal span:last-child').innerHTML = `R$ ${_price.toFixed(2)}`;
        c('aside .desconto span:last-child').innerHTML = `R$ ${(_price * 0.1).toFixed(2)}`;
        c('aside .total span:last-child').innerHTML = `R$ ${(_price * 0.9).toFixed(2)}`;
    } else{
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw';

        c('aside .cart').removeEventListener('click', changeQtInCart)
    }
}


function changeQtInCart(e){
    if(!e.target.getAttribute('data-action')) return


    let acao = e.target.getAttribute('data-action');
    let cartIndex = [...cs('aside .cart--item')].indexOf(e.target.closest('.cart--item'))

    const acoes = {
        less(){


            cart.length > 0 && cart[cartIndex].quantidade--

            cart[cartIndex].quantidade < 1 && cart.splice(cartIndex, 1);
            setData();  
            
        },
        
        more(){
            cart.length > 0 &&  cart[cartIndex].quantidade++
            setData();
            
        } 
    }

    acoes[acao] && acoes[acao]();
    updateCart();


}