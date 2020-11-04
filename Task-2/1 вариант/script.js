let btnLenovo = document.getElementById('lenovo-btn');
let btnXiaomi = document.getElementById('xiaomi-btn');
let btnHp = document.getElementById('hp-btn');


let lenovo = {
    name: 'Ноутбук Lenovo',
    price: 700,
}
let xiaomi = {
    name: 'Ноутбук Xiaomi',
    price: 500,
}
let hp = {
    name: 'Ноутбук HP',
    price: 1000,
}


let cart = [];
let allProducts = [lenovo, xiaomi, hp];
let priceLenovo = lenovo.price;
let priceXiaomi = xiaomi.price;
let priceHp = hp.price;

btnLenovo.addEventListener('click', addToCartLenovo);
btnXiaomi.addEventListener('click', addToCartXiaomi);
btnHp.addEventListener('click', addToCartHp);








function addToCartLenovo() {
    cart.push(lenovo);
    let basketDiv = document.querySelector('div.basket');
    let nameProduct = document.createElement('p');
    let counter = 0;
    counter += 1;
    nameProduct.innerHTML = 'Ноутбук Lenovo ' + [counter] + 'шт.' + [lenovo.price];
    basketDiv.appendChild(nameProduct);




}


function addToCartXiaomi() {
    cart.push(xiaomi);
    let basketDiv = document.querySelector('div.basket');
    let nameProduct = document.createElement("p");
    let counter = 0;
    counter += 1;
    nameProduct.innerHTML = 'Ноутбук Xiaomi ' + [counter] + 'шт.' + [xiaomi.price];
    basketDiv.appendChild(nameProduct);
}

function addToCartHp() {
    cart.push(hp);
    let basketDiv = document.querySelector('div.basket');
    let nameProduct = document.createElement("p");
    let counter = 0;
    counter += 1;
    nameProduct.innerHTML = 'Ноутбук HP ' + [counter] + 'шт.' + [hp.price];
    basketDiv.appendChild(nameProduct);
}





// let allProducts = {
//     lenovo = {
//         'name': 'Ноутбук Lenovo',
//         'price': 700
//     },
//     xiaomi = {
//         'name': 'Ноутбук Xiaomi',
//         'price': 500
//     },
//     hp = {
//         'name': 'Ноутбук HP',
//         'price': 1000
//     }
// }