/*****function isValidPassword(password) {
    const SAVED_PASSWORD = 'jquerysmyjam';
    const isMatch = password === 'jquerysmyjam';
    return isMatch;
}
console.log(isValidPassword('mangodab3st'));
console.log(isValidPassword('kiwirul3z'));
console.log(isValidPassword('jqueryismyjam'));

/*****let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100*****/


/*let cost = 0;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); */// 0


/*function checkStorage(available, ordered) {
  let message;
  // Change code below this line
 if (available >= ordered) { 
    message = 'Order is processed, our manager will contact you.';
  } else {
    message = 'Not enough goods in stock!';
  }

  // Change code above this line
  return message;
}

console.log(checkStorage(300,180));*/

/*function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  
const totalPrice = (pricePerDroid * orderedQuantity);
  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
     message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
  }
   
  
  return message;
}
console.log(makeTransaction(3000, 3, 15000));*/

/*function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
console.log(checkPassword('jqueryismyjam'));*/
/*function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0) {
  message = 'There are no products in the order!'
} else if (ordered > available) {
  message = 'Your order is too large, there are not enough items in stock!'
} else {
  message = 'The order is accepted, our manager will contact you'
}
  // Change code above this line
  return message;
}
console.log(checkStorage(150, 0));*/
/*function isNumberInRange(start, end, number) {
  const isInRange = (number >= start && number <= end); // Change this line

  return isInRange;
}
console.log(isNumberInRange(20, 50, 76));*/
/*function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line

  return canAccessContent;
}
console.log(checkIfCanAccessContent("free"));*/
/*function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange ; // Change this line

  return isNotInRange;
}
console.log(isNumberNotInRange(20, 50, 24));*/
/*function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = 0.1;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = 0.05;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = 0.02;
  } else if (totalSpent < 5000) {
    discount = 0;
  }
  // Change code above this line
  return discount;
}
console.log(getDiscount(50000));*/
/*let cost;
const subscription = "premium";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); // 500*/
/*const global = "global";

if (true) {
  const blockA = "block A";

  // Бачимо глобальну + локальну A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Змінні blockB і blockC не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockB); // ReferenceError: blockB is not defined
  console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // Бачимо глобальну + зовнішню A + локальну B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Змінна blockC не знайдена в доступних областях видимості.
    // Буде помилка звернення до змінної.
    console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // Бачимо глобальну + локальну C
  console.log(global); // global
  console.log(blockC); // block C

  // Змінні blockA і blockB не знайдені в доступних областях видимості.
  // Буде помилка звернення до змінної.
  console.log(blockA); // ReferenceError: blockA is not defined
  console.log(blockB); // ReferenceError: blockB is not defined
}

// Бачимо лише глобальну
console.log(global); // global

// Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// Буде помилка звернення до змінної.
console.log(blockA); // ReferenceError: blockA is not defined
console.log(blockB); // ReferenceError: blockB is not defined
console.log(blockC); // ReferenceError: blockC is not defined
*/
/*function checkStorage(available, ordered) {
 return (ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact yo') ;
}
console.log(checkStorage(150, 180));*/
/*function getSubscriptionPrice(type) {
  let price = 0;
  // Change code below this line

 switch (type) { // Change this line
    case  'starter':// Change this line
      price = '0' ; // Change this line
      break;

    case  'professional':// Change this line
      price = '20'; // Change this line
      break;

    case  'organization':// Change this line
      price = '50'; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
console.log(getSubscriptionPrice("organization"));*/
/*function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD :
       message =  'Welcome!';
      break;
    default :
      message =  'Access denied, wrong password!';
  }
  return message;
}
console.log( checkPassword(null) );*/
/*function getShippingCost(country) {
  let message;

  switch (country) {
      case 'China':
          message = "Shipping to China will cost 100 credits";
          break;
      case 'Chile' :
          message = "Shipping to Chile will cost 250 credits";
          break;
      case 'Australia' :
          message = "Shipping to Australia will cost 170 credits";
          break;
      case 'Jamaica' :
          message = "Shipping to Jamaica will cost 120 credits";
          break;
      default :
          message = "Sorry, there is no delivery to your country";
    }
 return message;
}
console.log(getShippingCost("Australia"));*/
/*function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; 

  return message;
}
console.log(getNameLength("Poly"));*/
/*const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic;

const firstElement = courseTopic;
const lastElement = courseTopic;

console.log(courseTopicLength);*/
/*const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic;
const firstElement = courseTopic;
const lastElement = courseTopic;

console.log(courseTopic.length);
console.log(courseTopic[0]);
console.log(courseTopic[20]);
// Change code above this line*/
/*function getSubstring(string, length) {
  const substring = getSubstring.slice 3 ; // Change this line

  return substring;
}
console.log(getSubstring("Hello world", 3))*/
/*function formatMessage(message, maxLength) {
  let result;
  
if (message.length > maxLength ) {
  result = `${message.slice(0,maxLength)}...`;

} else {
  result = message;
}
  
  return result;
}
console.log( formatMessage('Curabitur ligula sapien', 16) );*/
/*function checkForName(fullName, name) {
 const result = fullName.includes(name) ; 
  return result;
}
console.log(checkForName("Egor Kolbasov",  "egor"));*/
/*function checkForSpam(message) {
  let result;
  const messageToLowerCase = message.toLowerCase();
  result = messageToLowerCase.includes('sale') || 
           messageToLowerCase.includes('spam');
  
  return result;
}*/



// Напишіть код, який перевіряє, чи користувач має право на знижку
// на товар.Користувач має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).





//const pens = true;
//const stud = false;
//const age = 55;
//let dascount = false;
//if (pens || stud || (age >= 12 && age <= 18)) {
//  discount = true;
//}
//console.log(discount);

// Напишіть код, який перевіряє, чи можна отримати водійські права.
// Користувач може отримати водійські права, якщо йому виповнилося
// 18 років і він має право на працевлаштування.

//const age = 20//;
//const right = true;
//let isRights;
//if (age >= 18 && right) {
//  isRights = true;
//}
// console.log(isRights);

// Напишіть код, який перевіряє, чи можна відкрити двері.
// Двері можна відкрити, якщо ключ у власника або у його
// друга, або двері не закриті на замок.

//const hasKey = false;
//const isFriend = false;
//const isDoorLooked = false;
//let canOpenDoor = false;

//if (hasKey && isFriend && !isDoorLooked) {
//  canOpenDoor = true;
//}
//console.log(canOpenDoor);

// Напишіть код, який перевіряє, чи є введене користувачем значення
// числом, і виводить його квадрат, якщо це число.Якщо значення
// не є числом, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

//const answer = prompt("Ввведіть число");
//console.log(answer);
//const numberValue = Number(answer);
//console.log(numberValue);
//if (isNan(numberValue)) {//
//  alert("Невалідне значення");
//} else {
//  const sqNumber = Math.pow(numberValue, 2);
//  alert(`Результат обчислень ${sqNumber}`);
//}
// const answer = prompt("Введіть число");
// console.log(answer);
// const numbValue = Number(answer);
// console.log(numbValue);
// if (isNaN(numbValue)) { alert("Невалідне значення") }
// else { const sqNumb = Math.pow(numbValue, 2)
//     alert(`Результат обчислень ${sqNumb} `)
// }

// Напишіть код, який перевіряє, чи введене користувачем значення є рядком
// і не містить символ $. Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

//const answer = prompt('Введіть рядок без символа "$"');
//if (typeof answer === 'string' && !answer.includes('$')) {
//  console.log(`Довжина рядка ${answer.length}`);
//} else{
//  console.log("Невірний ввід");
//}

// Напишіть код, який перевіряє (за допомогою тернарного оператору),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення на екран за допомогою alert.
// Вводити значення користувач буде за допомогою prompt()

//const answer = prompt("Введіть число");
//const message = answer % 2 === 0 ? `Число парне` : `Число непарне`;
//alert(message);

// За допомогою циклу for потрібно виконати
// підрахунок кількості символів в рядку


//const str = "Hello, world world world!";
//let count = 0;
//for (let i = 0; i <= str.length; i + - 1) {
//  count += 1;

//}
//console.log(count);

//3. Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
//const max = 51;
//const min = 23;

//for (let i = max; i >= min; i--) {
//  if (i % 2 === 0) {
//    console.log(`Парне число ${i}`);
//  } else {
//    console.log(`Непарне число ${i}`);
//  }
//}

//4. За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
//const max = 50;
//const min = 0;

//for (let i = min; i <= max; i += 1) {
//  if (i % 2 !== 0) {
//    continue;
//  } else {
//    total += i;
//  }
//
//}
//console.log(total);



// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести пароль доти, доки він не введе вірний пароль

//const ADMIN_PASSWORD = 'dfghjjkllop';
//let userPassword;
//do {
//   userPassword = prompt("Ввведіть пароль");
//} while (userPassword !== ADMIN_PASSWORD)
//console.log("Ви ввели вірний пароль");

// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести число доти, доки він не введе число, яке більше 10.

//let number;
//do {
//  number = prompt("Введіть число");
//} while (number <= 10);
//console.log("Ви ввели вірне число");

// Напишіть скрипт, котрий отримає від користувача число (кількість хвилин) і виведе в консоль
// рядок у форматі годин і хвилин, тобто, якщо користувач вказав число 70, в консолі отримаємо "01:10"

//const minute = 73;
//const hour = Math.floor(minute / 60);
//const str = String(hour).padStart(2, 0);
//console.log(str);

//const minute = 70;
//const minuteCorrect = minute % 60;
//const minuteStr = String(minuteCorrect).padStart(2, 0);
//const hour = Math.floor(minute / 60);
//const str = String(hour).padStart(2, 0);
//const results = `${str}:${minuteStr}`
//console.log(results);

//const minute = 70;
//const minuteCorrect = String(minute % 60).padStart(2, 0);
//const hour = String(Math.floor(minute / 60)).padStart(2, 0);
//const results = `${hour}:${minuteCorrect}`
//console.log(results);

//function checkStorage(available, ordered) {
  


 //if (ordered === 0) {
  //  return "Your order is empty!";
  //} if (ordered > available) {
  //  return "Your order is too large, not enough goods in stock!";
  //}
  //  return "The order is accepted, our manager will contact you";
  //}

  
//console.log(checkStorage(100, 50));
//console.log(checkStorage(100, 130));
//console.log(checkStorage(70, 0));
//console.log(checkStorage(200, 20));
//console.log(checkStorage(200, 250));
//console.log(checkStorage(150, 0));
//
 // const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
//const firstElement =  fruits[0];
//const secondElement = fruits[1];
 //const lastElement =  fruits[3];
//console.log(lastElement);

//const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
//fruits[1] = "peach";
//fruits[3] = "banana";
//console.log(fruits);

//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
//const fruitsArrayLength = fruits.length;
//console.log(fruitsArrayLength);

//const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

//const lastElementIndex = fruits.length - 1;
//const lastElement = fruits[lastElementIndex];
//console.log(lastElement);
//console.log(lastElementIndex);

//function getExtremeElements(array) {
  // Change code below this line
  
 //return [array[0], array[array.length-1]];
  // Change code above this line
//}
//.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
//function splitMessage(message, delimiter) {
  //let words;
  // Change code below this line
 // words = message.split(delimiter);
  
 
  // Change code above this line
  //return words;
//}

//console.log(splitMessage('Mango', ''));
//console.log(splitMessage("Mango hurries to the train", " "));
//console.log(splitMessage("best_for_week", "_"));

//function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line


//return message.split(" ").length * pricePerWord;
   // Change code above this line
//}
//console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

//const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
//const firstTwoEls = fruits.slice(0, 2);
//const nonExtremeEls = fruits.slice(1, 4);
//const lastThreeEls = fruits.slice(2);

//console.log(firstTwoEls);
//console.log(nonExtremeEls);
//console.log(lastThreeEls);
//function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
//const newArray = firstArray.concat(secondArray);
  //if(newArray){
    //newArray.lenght > maxLength;
   //return newArray.slice(0, maxLength);
  //} else
 // return newArray;


    // Change code above this line
  //}
  //console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
  //function calculateTotal(number) {
 // Change code below this line
   // for (let i = 1; i = sum.number;  i + 1;)

//console.log(i);
  // Change code above this line
//}
//console.log(calculateTotal(3));

//function calculateTotalPrice(order) {
  //let total = 0;
  // Change code below this line
//for (let i = 0; i < order.length; i ++) {
//  total += order[i];
//}
  // Change code above this line
//  return total;
//}
//console.log( calculateTotalPrice([12, 85, 37, 4]));

//const fruits = ["Яблуко", "Груша", "Апельсин"];
//const shoppingCart = fruits;
//shoppingCart.push("Банан");
//console.log(fruits.length);

//function findLongestWord (string) {
    //const stringSplit = string.split(' ');
    //let longestWord = "";

    //for (const word of stringSplit) {
        //if (word.length > longestWord.length) {
            //longestWord = word;
        //}
    //}
    //return longestWord; 
//}

//function filterArray(numbers, value) {
   // Change code below this line
//let newArray = [];
  //for ( let i = 0; i < numbers.length; i ++){
    //if( numbers[i] > value){
     //newArray.push(numbers[i]);
    //}
  //}

//return newArray;
  // Change code above this line
//}

//filterArray([1, 2, 3, 4, 5], 3);
//console.log(filterArray([1, 2, 3, 4, 5], 3));

//function getCommonElements(array1, array2) {
  // Change code below this line
  //let array3 = [];
  //for (let i = 0; i < array1.length; i ++) {
    //if (array2.includes(array1[i])) {
      //array3.push(array1[i]);
    //}
  //}


//return array3;
 // Change code above this line
//}
//console.log(getCommonElements([1, 2, 3], [2, 4]))
//console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
//console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))
//console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))
//console.log(getCommonElements([1, 2, 3], [10, 20, 30]))

//function filterArray(numbers, value) {
  // Change code below this line
  //const filteredNumbers = [];

  //for (const number of numbers) {
    

    //if (number > value) {
    //  filteredNumbers.push(number);
    //}
  //}

  //return filteredNumbers;
  // Change code above this line
//}
//console.log(filterArray([1, 2, 3, 4, 5], 3));

//const apartment = {
//  descr: "Spacious apartment in the city center",
//  rating: 4,
//  price: 2153,
//};
//const values = [];
// Change code below this line
//onst keys = Object.keys(apartment);
//for(const key of keys) {
  
  //values.push(apartment[key]);
  

//}
//console.log(values);
//function countTotalSalary(salaries) {
  //let totalSalary = 0;
  // Change code below this line
//const values = Object.values(salaries);
  //for(const value of values){
    //totalSalary += value;
  //}
  // Change code above this line
  //return totalSalary;
//}
//console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//const colors = [
//  { hex: "#f44336", rgb: "244,67,54" },
//  { hex: "#2196f3", rgb: "33,150,243" },
//  { hex: "#4caf50", rgb: "76,175,80" },
//  { hex: "#ffeb3b", rgb: "255,235,59" },
//];

//const hexColors = [];
//const rgbColors = [];
// Change code below this line
//for(const color of colors) {
//  hexColors.push(color.hex);
//  rgbColors.push(color.rgb);
//}
//console.log(hexColors);
//console.log(rgbColors);

//const products = [
  //{ name: "Radar", price: 1300, quantity: 4 },
  //{ name: "Scanner", price: 2700, quantity: 3 },
  //{ name: "Droid", price: 400, quantity: 7 },
  //{ name: "Grip", price: 1200, quantity: 9 },
//];

//function getProductPrice(productName) {
  // Change code below this line
//for(const product of products){
  //if(productName === product.name) {
  //return product.price;
//}

//}  
//return null;
  // Change code above this line
//}
//console.log(getProductPrice("Radar"));




 
  


//const products = [
  //{ name: "Radar", price: 1300, quantity: 4 },
  //{ name: "Scanner", price: 2700, quantity: 3 },
  //{ name: "Droid", price: 400, quantity: 7 },
//{ name: "Grip", price: 1200, quantity: 9 },
//];

//function calculateTotalPrice(productName) {
  // Change code below this line
//let totalPrice = 0;
//  for(const product of products ){
//    if(product.name === productName){
//    totalPrice = product.price * product.quantity;
//      break;
//}
//  }
//return totalPrice;

  // Change code above this line
//}
//console.log(calculateTotalPrice("Radar"));
//console.log(calculateTotalPrice("Blaster"));

//const forecast = {
  //today: {
    //low: 28,
    //high: 32,
    //icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  //},
  //tomorrow: {
    //low: 27,
    //high: 31,
//},
//};
// Change code below this line
//const {
  //today: {
    //low: highToday,
    //high: lowToday,
    //icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  //},
  //tomorrow: {
    //low: highTomorrow,
    //high: lowTomorrow,
    //tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  //},
//} = forecast;
//console.log(lowToday);



  // Change code above this line

// Change code below this line
// Change code below this line
//function findMatches(...args) {
  //const matches = []; // Don't change this line
//for(const arg of args){
  //if( arg === args[0]){
  //  matches.push(arg);
  //}
  
//}
  // Change code above this line
  //return matches;
//}
//ange code above this line

//console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


//================================================

// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].

//function fillArray(number, str) {
 // let array = [];
//  for (let i = 0; i < number; i += 1){
//    array.push(str);
//  }
//    return array;

//}

//console.log(fillArray(10, 'f'));


//===============================================

// Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові


//const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
//const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

//const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
//const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

//const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
//const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

//const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
//const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

//function qwerty(arr1, arr2) {
//  if (arr1.length !== arr2.length) {
//    return false;
//  }
//  for (const element of arr1) {
//    if (!arr2.includes(element)) {
//      return false;
//    }
//    return true;
//  }
//}
//console.log(qwerty(arr1, arr2));
//console.log(qwerty(arr3, arr4));
//console.log(qwerty(arr5, arr6));

//console.log(qwerty(arr7, arr8));







// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

//function caclculateAverage(...args) {
  //let sum = 0;
  //let count = 0;
  //for (const element of args) {
  //  if (typeof element !== 'number') continue;
  //  count += 1;
  //  sum += element;
  //}
  //return sum / count;
//}
//console.log(caclculateAverage(1, 2, 3, 4, 5));


// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const element of args) {
//     if (typeof element !== 'number') {
//       continue;

//     }
//     count += 1;
//     sum += element;
//   }
//   return sum / count;
  
// }
// console.log(caclculateAverage(1, 2, 3, 4, 5, "fghhk"))

// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key. 
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

//const user = {
    //name: 'Igor',
    //car:  'Mercedes',
    //: 'black'
//}

//function checkKeyInObject(obj, key) {
  //for (const objectKey in obj) {
    //if (key === objectKey) {
      //return true;
    //}
     
  //}
  //return false;
//}

//console.log(checkKeyInObject(user, 'blue'));

//function checkKeyInObject(obj, key) {

  //return Object.keys(obj).includes(key);

//}

//console.log(checkKeyInObject(user, 'blue'));


//function checkKeyInObject(obj, key) {
  //return obj.hasOwnProperty(key);
//}
//console.log(checkKeyInObject(user, 'blue'));
//console.log(checkKeyInObject(user, 'car'));





// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

 //const calculator = {
   //read(a, b) {
     //this.value1 = a;
     //this.value2 = b;
    //},
   //sum() {
    //return this.value1 + this.value2;
   //},
   //mult() {
     //return this.value1 * this.value2;
   //},
 //};
 //calculator.read(10, 20)
//console.log(calculator);
//console.log(calculator.sum());
//console.log(calculator.mult());



//7. Напишіть функцію updateObject, яка приймає об'єкт і ключі (ключів може бути довільна кількість)
//які необхідно видалити з об'єкту.
//Функція повертає новий об'єкт без зазначених параметрів.
//Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}

//function updateObject(obj, ...keys) {
  //const newObject = { ...obj }
  //for (const key of keys) {
   // delete newObject[key] //видалили алвстивості з новими ключами
  //}
  //return newObject;
//}
//console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'c'));


// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

//const myArr = [
  //{name: "John", age: 30},
  //{name: "Jane", age: 25},
  //{name: "Bob", age: 40},
//];

//function getPropertyValues(arr, key) {
  //let value = [];
  //for (const element of arr) {
    //value.push(element[key]);
    
  //}
  //return value;
//}

//console.log(getPropertyValues(myArr, 'age'));


//  Напишіть функцію, яка приймає як параметр об'єкт
//і повертає масив значень у форматі [[key, value], [key, value], ...]
// де key і value - відповідно ключ і значення переданного об'екту.


//const user = {
  //name: "John",
  //surName: "Stones",
  //age: 20,
  //hobby: "tenis",
  //haveCar: true,
  //merried: false,
//};

//function foo(obj) {
  //return Object.entries(obj);
//}
//console.log(foo(user));


//Анастасия Игнатченко 11:17
//const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function foo(arr) {
//   let arrNew = [];
//   for (const element of arr) {
//     if (!element) continue;
//     arrNew.push(element);

//   } return arrNew;
// }
// console.log(foo(array));




//function deliverPizza(pizzaName) {
  //return `Delivering ${pizzaName} pizza.`;
//}

//function makePizza(pizzaName) {
  //return `Pizza ${pizzaName} is being prepared, please wait...`;
//}

// Chande code below this line
//function makeMessage(pizzaName, callback) {
  //return callback(pizzaName);
//}
//console.log(makeMessage("Royal Grand", makePizza));
//console.log(makeMessage("Ultracheese", deliverPizza));




//==========================================================================================

//Практика

//Task - 1
//Виконайте сортування масиву цін за спідінням та зростанням
//const prices = [1000, 240, 670, 360, 89, 20]
//prices.sort();
//console.log(prices);
//const sortPrices = [...prices].sort((a, b) => a - b);
//const newPrices = [...prices].sort((a, b) => b- a);
//console.log(sortPrices);
//console.log(newPrices);


//task -2
// напишіть функцію sayHi(), яка приймає в якості параметра масив імен , перебирає масив і додає до кожного ім₴я вітання
// Функція повертає новий масив [Ivan привіт!б Maria привіт!, Alla привіт!]

//const names = ['Ivan', 'Maria', 'Anna'];
//function sayHi(names) {
//  return names.map((name) => `${name} привіт!`)
//}
//console.log(sayHi(names));



// Task - 3

// НАПишіть стрілчну функцію,
// яка буде перевіряти чи містить даний масив
// хоча б одне число більше 20

//const numbers = [20, 16, 11, 13, 15];

//const someNumbers = numbers.some(number => number > 20)
//console.log(someNumbers);

// Task 4
//Напишіть стрілочну функцію,
//яка буде переввіряти чи всі студенти
// в нашому масиві старше 18 років

// const students = [
//   { name: 'Alex', age: 17 },
//   { name: 'Stas', age: 18 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },

// ]
// const olderStudents = students.every(student => student.age > 16);
// console.log(olderStudents);

//Task 5
//  напишіть функцію fruitsCount(), яка буде
//  визначати загальну кількість бананів, яблук  та
//  інших фруктів у масиві.
//  Функція приймає в якості параметра масив фруктів
//  і повертає об'єкт: ключ- назва фруктаб значення - кількість
//  цих фруктів у масивію
//  Результат роботи функції Object{apples: 3, bananas: 1, oranges : 1, riwi: 1}

// const fruits = ["apples", "bananas", "oranges", "apples", "kiwi", "apples"];
// const fruitsCount = fruits.reduce((acc, fruit) => {
//   if (!acc[fruit]) {
//     acc[fruit] = 1;   // на наш об'єкт асс додаємо ключ зі значенням fruit
//     return acc;
//   }
//   acc[fruit] += 1;
//   return acc;
// }, {});
// console.log(fruitsCount);
// acc це наш порожній об'єкт


// Task - 6

// зібрати в AllTopics масив усіх предметів всіх курсів
// Виконатифільтрацію залишившив AllTopics тільки унікальні

// const allTopics = courses
//   .flatMap(elem => elem.topics)
//   .filter((elem, index, array) => array.indexOf(elem) === index)

//  Task - 7
// у нас є масив користувачівб 
// кожен з яких має поля id та name
// давайте знайдемо той де id = 1

//  let users = [
  
//    { id: 1, name: "Jon" },
//    { id: 2, name: "Pete" },
//    { id: 3, name: "Mary" }
// ];
//  const idNumber = users.find(elem => elem.id === 1);
// console.log(idNumber.name);
 

//Task

//Напишіть функцію getTotalBoysYears яка порахує загальний вік хлопців

// const totalAge = friends
//   .filter(elem => elem.sex === 'm')
// .reduce((acc, elem) => acc + elem.age, 0)

//Напишіть функцію getGirlsPassports(),
//яка поверне маив номерів паспортів дівчат

// const girlPassport = friends
//   .filter(elem => elem.sex === 'f')
//   .map(elem => elem.passport);

//Task

//Напиши клас Rectangle , який створює об'єкт
//з властивостями heigth, width
//і методом calculateArea(), для
// підрахункуплощі прямокутника

// class Rectangle {
//   constructor({ heigth, width }) {
//     this.heigth = heigth;
//     this.width = width;

//   }
//   calculateArea() {
//     return this.heigth * this.width;
//   }
// }
// const areaRectangle = new Rectangle({ heigth:8, width:12});
// console.log(areaRectangle.calculateArea());



// class Rectangle {   //без деструктуризації
//   constructor( heigth, width ) {
//     this.heigth = heigth;
//     this.width = width;

//   }
//   calculateArea() {
//     return this.heigth * this.width;
//   }
// }
// const areaRectangle = new Rectangle(8,12);
// console.log(areaRectangle.calculateArea());



//Task

//Напиши клас Client, який створює об'єкт
//з властивостями login, email,
  //оголоси приватні властивості #login, #email
  //доступ до яких зроби через геттер та сеттер
  
  
// class Client {
//   #login;
//   #email;
//   constructor({ login, email }){
//     this.#login = login;
//     this.email = email;
//   }
//   get email(){
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
//    get login(){
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   }
// const Oksana = new Client({ login: 'oksana', email: 'oksana@gmail.com' });
// console.log(Oksana.login);
// console.log(Oksana.email);
// Oksana.login = 'olesya';
// console.log(Oksana.login);
// Oksana.email = 'olesya@gmail.com';
// console.log(Oksana.email);


//Task


// class Phone {
//   static MAX_PRICE = 40000;
//   #price;
//   constructor(price) {
//     this.#price = price;
  
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
    
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//       return;
//     }
//   }
// }
// const proMax = new Phone(10000);
// console.log(proMax.price);
// proMax.price = 500000;
// console.log(proMax.price);


//Task
//є об'єкт і функція для підрахунку суми чисел.Введіть у консоль резултат виконання функції, якщо а=3, в=5

// var obj = { num: 2 };
// function add(a, b) {
//   return this.num + a + b;
// }
// console.log(add.call(obj, 3, 5));
// console.log(add.apply(obj, [3, 5]));
// const asd = add.bind(obj,3, 5)
// console.log(asd());


//Task

// const car = {
//   carBrand: "Audi Q3",
//   price: 23000,
//     getData(){
//   return `${this.carBrand} за ${this.price} $`;
// }
// }

// function makeMesage(calback){
//   console.log(`Ви замовили ${calback()}`);
// }
// makeMesage(car.getData.bind(car))


//Task===========================================================


// const apples = {
//   type: 'fruit',
//   cookingMethod: ['jam', 'juice', 'baked', 'dried', 'fresh'],
//   vitamins: ['A', 'B1', 'B2', 'E']
// }

// const fuji = Object.create(apples)
// console.log(apples.isPrototypeof(fuji))



// =====================================================================

// При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// вивести значення, яке будемо вводити в інпут.

// const input = document.querySelector('#alertInput');
// const button = document.querySelector('#alertButton');

// button.addEventListener('click', foo)

// function foo() {
//   const text = input.ariaValueMax;
//   alert(text);
// }


//task====================================================================

// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const button = document.querySelector('#passwordButton')
// const input = document.querySelector('#passwordInput')
// button.addEventListener('click', foo)
// function foo () {
//   if(input.type === 'text'){
//     button.textContent = "Показати";
//     input.type = 'password';
//   }else {
//     button.textContent = "Приховати";
//     input.type = 'text';
//   }
// }


//task==================================================================

// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const buttonDecrease = document.querySelector('#decrease');
// const buttonIncrease = document.querySelector('#increase');
// const box = document.querySelector('#box');
// buttonDecrease.addEventListener('click', onClick);
// buttonIncrease.addEventListener('click', onClick);

// function onClick(evt) {
//   const id = evt.currentTarget.id;
//   const width = box.offsetWidth;
//   const height = box.offsetHeight;

//   if (id === 'increase') {
//     box.style.width = `${width + 10}px`;
//     box.style.height = `${height + 10}px`;

//   } else {
//     box.style.width = `${width - 10}px`;
//     box.style.height = `${height - 10}px`;

//   }
// }


//task==============================================================

// При натисканні на кнопку "SWAP ME" зробити так, щоб значення двох інпутів 
// мінялися місцями. Тобто значення правого інпуту стало на місце лівого і навпаки.


// const inputLeft = document.querySelector('#leftSwapInput');
// const inputRigth = document.querySelector('#rightSwapInput');
// const button = document.querySelector('#swapButton')

// button.addEventListener('click', onClick)

// function onClick(evt) {
//   const firsValue = inputLeft.value;
//   inputLeft.value = inputRigth.value;
//   inputRigth.value = firsValue;
// }


//task============================================================

 //При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// 

//task====================================================

// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const form = document.querySelector('.checkboxForm')
// const checkboxWrapper = document.querySelector('.checkboxWrapper')

// form.addEventListener('submit', onChange)

// function onChange(evt) {
//   evt.preventDefault()
//   const ArrFilter = [...checkboxWrapper].filter(elem => elem.lastElementChild.checked) //створ масив дівів
//   ArrFilter.forEach(elem=>elem.remove())


// }

//task================================================

// Наведено список людей. Зроби можливість сортування списку за ім'ям та за прізвищем.

// const sortByNameButton = document.querySelector("#sortByNameButton");

// const sortByLastNameButton = document.querySelector("#sortByLastNameButton");

// const people = document.querySelectorAll(".person");
// const list = document.querySelector(".people");

// sortByNameButton.addEventListener("click", onByNameClick);

// function onByNameClick(evt) {
//   const arr = [...people].sort((a, b) =>
//     a.textContent.localeCompare(b.textContent),
//   );
//   list.innerHTML = "";
//   list.append(...arr);
// }

// sortByLastNameButton.addEventListener("click", onByLastnameClick);

// function onByLastnameClick() {
//   const arr = [...people].sort((a, b) => {
//     const firstValue = a.textContent.split(" ")[1].toLowerCase();
//     const secondValue = b.textContent.split(" ")[1].toLowerCase();
//     return firstValue.localeCompare(secondValue);
//   });
//   list.innerHTML = "";
//   list.append(...arr);
// }



//task====================================

// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.


// const contactsFilter = document.querySelector('.contactsFilter')

// const contacts = document.querySelector('.contacts')

// const contactAll = document.querySelectorAll('.contact')

// contactsFilter.addEventListener('input', onInput)

// function onInput(evt) {
//     const inputValue = evt.currentTarget.value;
//     // console.log(inputValue);
//     const filterRes = [...contactAll].filter(elem => elem.textContent.toLowerCase().includes(inputValue));
//     contacts.innerHTML = '';
//     contacts.append(...filterRes)
// }

//task 111==========================================================

// Реалізувати пошук товарів по частковій або повній назві.
// Зробити так, щоб частота виконання функції обробника події була 500ms.
// При рендері списку знайдених товарів додати кнопку "Додати у кошик",
// при натисканні на яку товари будуть рендеритись в <ul id="cartItemsContainer"></ul>
// Реалізувати можливість видалення цих товарів з кошика.

// const products = [
//   'телевізор_Samsung',
//   'телевізор_LG',
//   'телевізор_Xiaomi',
//   'телефон_Samsung',
//   'телефон_Apple',
//   'телефон_Xiaomi',
//   'планшет_Samsung',
//   'планшет_Apple',
//   'планшет_Xiaomi',
//   'ноутбук_ASUS',
//   'ноутбук_Apple',
//   'ноутбук_Lenovo'
// ];

// const input = document.querySelector('#searchInput')
// const itemsContainer = document.querySelector('#itemsContainer')
// const cartItemsContainer = document.querySelector('#cartItemsContainer')

// input.addEventListener('input', _.throttle(onSearchInputProduct, 500))
// function onSearchInputProduct() {
//   const inputValue = input.value.toLowerCase()
//   // console.log(inputValue);
//   const filterArrProduct = products.filter(elem => elem.toLowerCase().includes(inputValue))
//   if (!filterArrProduct.length) {
//     alert("Ваш товар не знайдено")
//     itemsContainer.innerHTML = ""
//   return
//   }
//   itemsContainer.innerHTML = ""
//   filterArrProduct.map(elem => {
//     const li = document.createElement('li')
//     li.textContent = elem
//     const addButton = document.createElement('button')
//     addButton.textContent = 'Додати у кошик'
//     li.appendChild(addButton)
//     itemsContainer.appendChild(li)
//     addButton.addEventListener('click', () => {
//       addToCart(elem)
//     })
//   })
// }
// function addToCart(elem) {
//   console.log(elem)
//   const li = document.createElement('li')
//   li.textContent = elem
//   const removeButton = document.createElement('button')
//   removeButton.textContent = 'Видалити'
//   li.appendChild(removeButton)
//   cartItemsContainer.appendChild(li)
//   removeButton.addEventListener('click',() => {
//     cartItemsContainer.removeChild(li)
//   })
// }



//task ===================================================

// Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.

// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки. 
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked 
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.

// Для зручності зберігання списку використовуй такий перелік.

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const input = document.querySelector('.theme-switch__toggle');
// const body = document.querySelector('body');

// input.addEventListener('change', changeTheme);

// function changeTheme(evt) {
//   console.dir(evt.currentTarget.checked);
//   if (!evt.currentTarget.checked) {
//     body.classList.add(Theme.LIGHT);
//     body.classList.remove(Theme.DARK);
//     localStorage.setItem('saveTheme', Theme.LIGHT);
//   } else {
//     body.classList.add(Theme.DARK);
//     body.classList.remove(Theme.LIGHT);
//     localStorage.setItem('saveTheme', Theme.DARK);
//   }
// }
// const myTheme = localStorage.getItem('saveTheme');
// if (myTheme) {
//   body.classList.add(myTheme);
// } else {
//   body.classList.add(Theme.LIGHT);
// }
// if (myTheme === Theme.DARK) {
//   input.checked = true;
// }



//task 113============================
// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.


const login = {
    email: 'user@meil.com',
    password: '123456'
};

const form = document.querySelector('#login-form');

form.addEventListener('submit', onFormSubmit)

const getData = JSON.parse(localStorage.getItem('dataKey'));
console.log(getData)
if (getData) {
    form.elements.email.value = getData.email;
    form.elements.password.value = getData.password
     form.elements.email.disabled = true;
    form.elements.password.disabled = true;
    form.elements.button.textContent = 'logout'
}
function onFormSubmit(event) {
    event.preventDefault()
    if (JSON.parse(localStorage.getItem('dataKey'))) {
        console.log(getData)
        form.elements.button.textContent = 'login';
         form.elements.email.disabled = false;
        form.elements.password.disabled = false;
        localStorage.removeItem('dataKey');
        form.reset()

        return
        
    }
    if (form.elements.email.value !== login.email || form.elements.password.value !== login.password) {
        alert ('Error! Дані не коректні')
    }

    const data = {
        email: form.elements.email.value,
        password: form.elements.password.value
        
    }
    localStorage.setItem('dataKey',JSON.stringify(data))

    form.elements.email.disabled = true;
    form.elements.password.disabled = true;
    form.elements.button.textContent = 'logout'

}