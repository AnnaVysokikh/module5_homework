function task1()
{
  let res = +prompt("Введите число: ");
  let typeRes = typeof(res);
 
  if (typeRes == "number") {
    if (isNaN(res)) {
      console.log("Значение NaN");
      return;
    }
    if (res % 2) {
      console.log("Не четное")
    } else {
      console.log("Четное");
    }
  } else {
    console.log("Упс, кажется, вы ошиблись")
  }
}

function task2(x)
{
  switch(typeof(x)) {
    case "number":
      console.log("number");
      break;
    case "boolean":
      console.log("boolean");
      break;
    case "string":
      console.log("string")
      break;
    default: console.log("Тип x не определён");  
  }
}

function task3(str)
{
  console.log(str.split("").reverse().join(""));
}

function task4()
{
  let random = Math.round(Math.random()*100);
  console.log(random);
}

function task5(arr)
{
  if (Array.isArray(arr))
    {
      console.log(`Длина массива: ${arr.length}`);
      arr.forEach(function(item, i, arr) {
        console.log(item);
      });
    } else {
      console.log("Это не массив!");
    }
}

function task6(arr)
{
  let set = new Set(arr);
  console.log(arr.length != set.size ? true : false);
}

function task7(arr)
{
  let count1 = 0;
  let count2 = 0;
  let count0 = 0;
 
  arr.forEach(function(item, i, arr) {
    let typeItem = typeof(item);
 
    if (typeItem == "number") {
      if (!isNaN(item)) {
        if (item === 0) count0++;
        let odd = item % 2;
        if (odd === 0) {
          count2++;
        } else {
          count1++;
        }
      }
    }
  });
  console.log(`Количество 0: ${count0}`);
  console.log(`Количество четных: ${count2}`);
  console.log(`Количество не четных: ${count1}`);
}

function task8(arr)
{
  arr.forEach((value, key, map) => {
  console.log(`Ключ — ${key}, значение — ${value}`);
  });
}
console.log("-----Задание 1-----")
task1();
console.log("-----Задание 2-----")
task2(false);
task2("qwqw22");
task2(123);
console.log("-----Задание 3-----")
task3("qwertyu1234");
console.log("-----Задание 4-----")
task4();
console.log("-----Задание 5-----")
task5([2,35,5, 'hh'])
console.log("-----Задание 6-----")
task6([1,2,4,3,4,1])
task6([1,2,3,6])
console.log("-----Задание 7-----")
task7([1,2,4,3,4,1,0,0]);
console.log("-----Задание 8-----")
let fruits = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry", "blue"]

]);

task8(fruits);