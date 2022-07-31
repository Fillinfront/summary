const button = document.getElementById('shop-button');
const inputNames = document.getElementById('names-input');
const inputMarks = document.getElementById('marks-input');
const inputQuantity = document.getElementById('shop-quantity');
const inputDeliverys = document.getElementById('deliverys-input');
const orderList = document.getElementById('shop-orderlist');
const orderDeleteBtn = document.getElementById('order-delete');
const ordersCheck = document.querySelector('.order-noorders');
const orderPrice = document.getElementById('order-price');


let orders = [];


function setPrice() {
    let price = parseInt((+inputMarks.value + +inputDeliverys.value) * +inputQuantity.value);
    orderPrice.innerHTML = price + "р";
}


window.onload = function() {
    if (orders.length === 0) {
        ordersCheck.classList.remove('hide');
    } else {
        ordersCheck.classList.add('hide');
    }
 };

function refresh(){
    window.location.reload();
}

button.addEventListener('click', function() {
    if (inputNames.selectedIndex == 0 || inputQuantity.value == 0 || inputDeliverys.selectedIndex == 0) {
        alert('Заполните все поля');
        return;
    }
    const order = {
        name: inputNames.options[inputNames.selectedIndex].text,
        mark: inputMarks.options[inputMarks.selectedIndex].text,
        quantity: inputQuantity.value,
        delivery: inputDeliverys.options[inputDeliverys.selectedIndex].text,
        price: parseInt((+inputMarks.value + +inputDeliverys.value) * +inputQuantity.value),
        id: new Date().getTime(),
    };
    orders.push(order);
    console.log(orders);
    createOrder(order);
});

function createOrder(order) {
    localStorage.setItem('order', JSON.stringify(orders));
    const item = document.querySelector(`[data-key='${order.id}']`);
    if (order.deleted) {
        item.remove();
        if (orders.length === 0) {
            ordersCheck.classList.remove('hide');
        } else {
        ordersCheck.classList.add('hide');
        }
        return
    }
    const div = document.createElement('div');
    orderList.appendChild(div);
    div.setAttribute('class', `shop-orderlist-order`);
    div.setAttribute('data-key', order.id);
    div.innerHTML = `
            <h1>Заказ</h1>
            <div class="order-details">
                <h3>Товар</h3>
                <p>${order.name}, ${order.mark}</p>
                <h3>Объем (м3) / Количество</h3>
                <p>${order.quantity}</p>
                <div class="order-details-count">
                    <div>
                        <h3>Доставка</h3>
                        <p>${order.delivery}</p>
                    </div>
                    <div>
                        <h3>Сумма заказа</h3>
                        <p>${order.price}р</p>
                    </div>
                </div>
                <div class="order-details-status">
                    <h3>Статус заказа</h3>
                    <button id="order-details-button">Оплатить</button>
                </div>
                <button id="order-delete"><i class="fa fa-trash fa-1x"></i></button>
            </div>
            `;
    ordersCheck.classList.add('hide');
};

function deleteOrder(key) {
    const index = orders.findIndex(item => item.id === Number(key));
    const order = {
        deleted: true,
        ...orders[index]
    }
    order.deleted = true
    orders = orders.filter(item => item.id !== Number(key));
    createOrder(order);
};

document.addEventListener('click', event => {
    if (event.target.classList.contains('fa-trash')) {
        const itemKey = event.target.closest('[data-key]').dataset.key;
        deleteOrder(itemKey);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const todoLocal = localStorage.getItem('order');
    if (todoLocal) {
      orders = JSON.parse(todoLocal);
      orders.forEach(i => {
        createOrder(i);
      });
    }
});

/*
if (orders.length === 0) {
        ordersCheck.classList.remove('hide');
    }
    else {
        ordersCheck.classList.add('hide');
    }
<div class="shop-orderlist-order">
                        <h1>Заказ</h1>
                        <div class="order-details">
                            <h3>Товар</h3>
                            <p>............................................................</p>
                            <h3>Объем | Количество</h3>
                            <p>..................</p>
                            <div class="order-details-count">
                                <div>
                                    <h3>Доставка</h3>
                                    <p>..................</p>
                                </div>
                                <div>
                                    <h3>Сумма заказа</h3>
                                    <p>..................</p>
                                </div>
                            </div>
                            <div class="order-details-status">
                                <h3>Статус заказа</h3>
                                <button id="order-details-button">Оплатить</button>
                            </div>
                            <button><i class="fa fa-trash fa-1x"></i></button>
                        </div>
                    </div>
*/