let a = 1;
let b = 0;

// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }

// синтаксис: выражение ? если true : если false;

b = a > 0 ? b = a : b += 1;

// тернальный оператор можно расширять
// выражение ? если true : выражение ? если true : если false;
b = a > 0 ? a : b + 1;

b = a > 0 ? 2 : a < 0 ? 3 : 0; // это прочитать тяжело

console.log(`b: ${b}`);