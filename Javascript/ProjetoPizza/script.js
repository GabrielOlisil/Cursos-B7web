
const c = el => document.querySelector(el);
const cs = el => document.querySelectorAll(el);

const modal = c('.pizzaWindowArea');


pizzaJson.map((pizza, indice, arr) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', indice);

    pizzaItem.querySelector("a").addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.opacity = 0;
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = 1;

        }, 200);

        let key = e.currentTarget.closest('.pizza-item').getAttribute('data-key');
        modal.querySelector('.pizzaBig img').src = arr[key].img;
        modal.querySelector('.pizzaInfo h1').textContent = arr[key].name;
        modal.querySelector('.pizzaInfo--desc').textContent = arr[key].description;
        modal.querySelector('.pizzaInfo--actualPrice').textContent = 'R$ ' + arr[key].price.toFixed(2);

    })

    pizzaItem.querySelector('.pizza-item--name').textContent = pizza['name'];

    pizzaItem.querySelector('.pizza-item--desc').textContent = pizza['description'];

    pizzaItem.querySelector('.pizza-item--price').textContent = `R$ ${pizza['price'].toFixed(2)}`;

    pizzaItem.querySelector('.pizza-item--img img').src = pizza['img']


    c('.pizza-area').append(pizzaItem);
})

c('.pizzaInfo--cancelButton').addEventListener('click', closeModal);

function closeModal() {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);

}


