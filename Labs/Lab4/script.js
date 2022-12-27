class Item {
    constructor(itemName, price) {
        this.name = itemName;
        this.price = price;
    }
}

class OrderItem extends Item {
    constructor(item, count=1) {
        super(item.name, item.price);
        this.count = count;
        this.totalPrice = item.price * count;
    }
    addOne() {
        this.count++;
        this.totalPrice += this.price;
    }
}

let addedItems = [];
let itemsCount = 0;

let order = [];
let totalPrice = 0;
let totalCount = 0;


function alreadyAdded(itemNameToCheck) {
    for (let item of addedItems) {
        if (item.name === itemNameToCheck) {
            return true;
        }
    }
    return false;
}

function addItem(e) {
    e.preventDefault();
    let itemName = document.getElementById("item-name").value;
    let itemPrice = parseInt(document.getElementById("item-price").value);
    let item = new Item(itemName, itemPrice);

    if (alreadyAdded(itemName)) {
        alert("Товар с таким наименованием уже добавлен");
        return;
    }
    else {
        addedItems.push(item);
        console.log(`Added item '${itemName}' with a price of ${itemPrice}`);
    }
    itemsCount++;
    displayAddedItem(item);
}

function createItemsTable() {
    document.getElementById('added-items').style.padding = '0';
    let table = document.createElement('table');
    table.className = "table m-0 table-hover";
    table.id = "table1";

    let thead = document.createElement('thead');
    thead.className = "thead";
    thead.innerHTML = '<tr><th>Наименование</th><th class="text-center">Цена</th><th></th></tr>';
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    tbody.id = "tbody1";
    table.appendChild(tbody);

    document.getElementById('added-items').appendChild(table);
}


function createOrderTable() {
    document.getElementById('order-items').style.padding = '0';
    let table = document.createElement('table');
    table.className = "table m-0 table-hover";
    table.id = "table2";

    let thead = document.createElement('thead');
    thead.className = "thead";
    thead.innerHTML = '<tr><th>Наименование</th><th>Цена</th><th>Количество</th></tr>';
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    tbody.id = "tbody2";
    table.appendChild(tbody);
    document.getElementById('order-items').appendChild(table);
    // appending last line of the table (total price and total count of items)
    let orderInfo = document.createElement('tr');
    orderInfo.id = "order-info";
    orderInfo.innerHTML = '<td><b>Итого</b></td><td id="total-price"></td><td id="total-count" class="text-center"></td></tr></table>';
    table.appendChild(orderInfo)
}

function displayAddedItem(item) {
    if (addedItems.length === 1) {
        //hiding placeholder
        document.getElementsByClassName("placeholder")[0].style.display = 'none';
        createItemsTable();
    }
    // New line in the table:
    let tr = document.createElement('tr');
    tr.id =  `item${itemsCount}"`;
    tr.innerHTML = "<td class='align-middle'>" + item.name +
    "</td><td class='align-middle text-center price'>" + item.price + 
    "</td><td class=\"col-1\"><button type=button class='btn btn-success'" + 
    "onclick='addToOrder(" +`${itemsCount}` + 
    ")'>Заказать</button></td>";
    document.getElementById('tbody1').appendChild(tr);
}

function findOrdered(itemNameToCheck) {
    for (let i = 0; i < order.length; i++) {
        if (order[i].name === itemNameToCheck) {
            return i;
        }
    }
    return -1;
}

function addToOrder(itemNum) {
    if (order.length === 0) {
        //hiding placeholder
        document.getElementsByClassName("placeholder")[1].style.display = 'none';
        createOrderTable();
    }
    let item = addedItems[itemNum - 1];
    totalCount++;
    totalPrice += item.price;
    //checking if already ordered same item
    let index = findOrdered(item.name);
    if (index === -1) {
        // first item with such name in the order: adding new item to order
        let orderItem = new OrderItem(item);
        order.push(orderItem);
        displayOrderItem(orderItem);
    }
    else { 
        // already in order, adding the same item to the order:
        order[index].addOne();
        // updating count in table
        prevCount = Number(document.getElementById("order-item" + (index + 1)).lastElementChild.innerHTML);
        document.getElementById("order-item" + (index + 1)).lastElementChild.innerHTML = prevCount + 1;
        // updating order-info
        document.getElementById("total-price").innerHTML = totalPrice;
        document.getElementById("total-count").innerHTML = totalCount;
    }
    console.log(`Added item '${item.name}' to order`);
}

function displayOrderItem(orderItem) {
    let tr = document.createElement('tr');
    tr.id = "order-item" + order.length;
    tr.innerHTML = "<td class='align-middle'>" + orderItem.name +
    "</td><td class='align-middle'>" + orderItem.price + 
    "</td><td class=\"text-center col-1\">" + orderItem.count + "</td>";
    document.getElementById('tbody2').appendChild(tr);
    // updating order-info
    document.getElementById("total-price").innerHTML = totalPrice;
    document.getElementById("total-count").innerHTML = totalCount;
}