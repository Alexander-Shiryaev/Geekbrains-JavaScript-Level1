1

let num = 1;
while(num < 100) {
    num++;
    let x = 1;
    for(let y = 2; y <= num / 2; y++) {
        if (num % y == 0) {
            x = 0;
        }
    }
    if (x == 1) {
        console.log(num); 
    }
}


// 2,3

// let basket = [
//     {
//         title: "T-short",
//         price: 100
//     },
//     {
//         title: "Jeans",
//         price: 200
//     },
//     {
//         title: "Suit",
//         price: 300
//     }
// ];

// function countBasketPrice(basket) {
//     let sum = 0;
//     for (item of basket) {
//         sum += item.price;
//     }
//     return sum;
// }

// console.log(countBasketPrice(basket));


//4*

// for(let i = -1; i < 9; i++, console.log(i) ) {}

// 4*

// let arr = [];
// let i = 0;
// while (i < 20) {
//     arr.push('x');
//     i++;
//     console.log(...arr);
// }