function calculateAverage() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
 
    if (!isNaN(num1) && !isNaN(num2)) {
        let average = (num1 + num2) / 2;

        document.getElementById('result').innerText = "среднее число " + average.toFixed(1);
    } else {
        document.getElementById('result').innerText = "Пожалуйста, введите числа.";
    }
}


function calculateRemainder() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        let remainder = num1 % num2;
        document.getElementById('sum').innerText = "Остаток от деления: " + remainder;
        let toMakeDivisible = (num2 - remainder) % num2;
        document.getElementById('sum').innerText += "\nЧтобы делиться без остатка, добавьте к первому числу: " + (toMakeDivisible === 0 ? "ок" : toMakeDivisible);
    } else {
        document.getElementById('sum').innerText = "Пожалуйста, введите корректные числа (второе число не должно быть равно 0).";
    }
}
function convertTime() {
    let inputTime = document.getElementById('inputTime').value;
    let timeRegex = /^(1[0-2]|0?[1-9]):([0-5][0-9]) ([APMapm]{2})$/;
    if (timeRegex.test(inputTime)) {
        let [hours, minutes, period] = inputTime.split(/:| /)
        if (period.toUpperCase() === 'PM' && hours !== '12') {
            hours = String(Number(hours) + 12);
        } else if (period.toUpperCase() === 'AM' && hours === '12') {
            hours = '00';
        }

        document.getElementById('результат').innerText = "Преобразованное время: " + hours + ":" + minutes;
    } else {
        document.getElementById('результат').innerText = "Пожалуйста, введите время в формате ЧЧ:ММ AM/PM.";
    }
}


function checkLeapYear() {
    var year = document.getElementById('yearInput').value;
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    var resultElement = document.getElementById('res');
    if (isLeapYear) {
        resultElement.innerHTML = year + ' is a leap year (Yes)';
    } else {
        resultElement.innerHTML = year + ' is not a leap year (No)';
    }
}

function solveEquation() {
    var a = parseFloat(document.getElementById('aInput').value);
    var b = parseFloat(document.getElementById('bInput').value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numeric values for 'a' and 'b'.");
        return;
    }

    var x = -b / a;
    var resultElement = document.getElementById('re');
    if (x >= 0 && x <= 1) {
        resultElement.innerHTML = "x is between 0 and 1, so the result is -1";
    } else if (x > 1) {
        resultElement.innerHTML = "x is greater than 1, so the result is 1";
    } else {
        resultElement.innerHTML = "x is less than 0, so the result is undefined";
    }
}

function calculateChange() {
    var priceRubles = parseInt(document.getElementById('priceRubles').value);
    var priceKopecks = parseInt(document.getElementById('priceKopecks').value);
    var paidRubles = parseInt(document.getElementById('paidRubles').value);
    var paidKopecks = parseInt(document.getElementById('paidKopecks').value);

    if (isNaN(priceRubles) || isNaN(priceKopecks) || isNaN(paidRubles) || isNaN(paidKopecks)) {
        alert("Please enter valid numeric values for all fields.");
        return;
    }

    var totalPrice = priceRubles * 100 + priceKopecks;
    var totalPaid = paidRubles * 100 + paidKopecks;
    var change = totalPaid - totalPrice;
    var changeRubles = Math.floor(change / 100);
    var changeKopecks = change % 100;

    var resultElement = document.getElementById('сдача');
    resultElement.innerHTML = "Change: " + changeRubles + " rubles and " + changeKopecks + " kopecks";
}

function checkIceCreamPurchase() {
    var iceCreamCount = parseInt(document.getElementById('iceCreamCount').value);

    if (isNaN(iceCreamCount) || iceCreamCount <= 0 || !Number.isInteger(iceCreamCount)) {
        alert("Please enter a positive integer for the number of ice cream balls.");
        return;
    }

    var canBuy = iceCreamCount % 3 === 0 || iceCreamCount % 5 === 0;

    var resultElement = document.getElementById('решение');
    resultElement.innerHTML = canBuy ? "Yes" : "No";
}
