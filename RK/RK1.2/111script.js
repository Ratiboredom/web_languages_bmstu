let arr_v = [];
let count = 0;
let tbody = document.getElementById("tbody");
let inputField = document.getElementById("input-field");
let defaultTableContent = '<tr><td>0</td><td>1</td></tr><tr><td>1</td><td>2</td></tr><tr><td>2</td><td>3</td></tr><tr><td>3</td><td>-2</td></tr><tr><td>4</td><td>-11</td></tr><tr><td>5</td><td>0</td></tr><tr><td>6</td><td>14</td></tr><tr><td>7</td><td>-1</td></tr>'


function isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

function addValue() {
    let value = inputField.value

    //Validation
    if (value === "" || !isNumber(value)) {
        alert("Введите число!");
        return
    }

    arr_v.push(Number(value));
    count += 1;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = count - 1;
    let td2 = document.createElement("td");
    td2.innerText = Number(value);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);

    console.log(arr_v);
}

function findPosition(arr) {
    //returns index of the first even element or index of  the max element, if all elements are odd
    let maxElemIndex = 0;
    for (let i = 0; i < arr_v.length; i++) {
        if (arr[i] % 2 === 0) {
            return i;
        }
        if (arr[maxElemIndex] < arr[i]) {
            maxElemIndex = i;
        }
    }
    return maxElemIndex;
}

function calcNegativeSum(arr) {
    // returns the sum of negative elements
    result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result += arr[i]
        }
    }
    return result;
}

function execute() {
    let pasteIndex = findPosition(arr_v);
    let negSum = calcNegativeSum(arr_v);

    if (arr_v[pasteIndex] == negSum) {
        alert("Сумма отрицательных элементов массива (" + `${negSum}`  + ") совпадает со значением элемента массива, на место которого мы хотим ее поместить")
    }
    arr_v[pasteIndex] = negSum;
    console.log(arr_v);

    // pasting new value into the table:
    tbody.children[pasteIndex].children[1].innerText = negSum;
}

function fillArray(){
    arr_v = [1, 2, 3, -2, -11, 0, 14, -1];
    count = 8;
    tbody.innerHTML = defaultTableContent;
    console.log(arr_v)
}