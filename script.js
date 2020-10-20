// 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2  префиксный инкремент, к "с" сразу добавляется 1
// d = b++; alert(d);           // 1  постфиксный инекремент, 1 добавляется к "d" после выполнения кода
// c = (2+ ++a); alert(c);      // 5  в этой строке ++a это 2, а к "с" плюсуется 1 из-за инкремента из строки 4: соответственно 2+2+1=5
// d = (2+ b++); alert(d);      // 4  в этой строке b++ это 1, а к "d" плюсуется 1 из-за инкремента из строки 5: соответственно 2+1+1=4
// alert(a);                    // 3  к первоначальному значению 1 дважды прибавился инкремент
// alert(b);                    // 3  к первоначальному значению 1 дважды прибавился инкремент

// 2

// var a = 2;
// var x = 1 + (a *= 2);   //выражение a *= 2 то же самое что и a = a * 2, что равно 4; 1+4=5
// alert(x);

//3

// var a = 7, b = 10;
// var x;
// if (a >= 0 && b >= 0) {
//     if (a > b) {
//         x = a - b;
//     }
//     else {
//         x = b - a;
//     }
//     alert(x);
// }
// else if (a < 0 && b < 0) {
//     x = a * b;
//     alert(x);
// }
// else {
//     x = a + b;
//     alert(x);
// }

//4

var a = 10
switch (a) {
    case 0:
        alert("0");
    case 1:
        alert("1");
    case 2:
        alert("2");
    case 3:
        alert("3");
    case 4:
        alert("4");
    case 5:
        alert("5");
    case 6:
        alert("6");
    case 7:
        alert("7");
    case 8:
        alert("8");
    case 9:
        alert("9");
    case 10:
        alert("10");
    case 11:
        alert("11");    
    case 12:
        alert("12");
    case 13:
        alert("13");
    case 14:
        alert("14");
    case 15:
        alert("15");
}

//5

var a, b;
function getSum (a, b) {
    return a + b;
}

// alert(getSum(5,7));

function getDifference (a, b) {
    return a - b;
}

// alert(getDifference(50,25));

function getProduct (a, b) {
    return a * b;
}

// alert(getProduct(3,3));

function getQuotient (a, b) {
    return a / b;
}

// alert(getQuotient(23,17));

//6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "addition":
            return arg1 + arg2;
            break;
        case "subtraction":
            return arg1 - arg2;
            break;
        case "multiplication":
            return arg1 * arg2;
            break;   
        case "division":
            return arg1 / arg2;
            break;
    }
}