function countOdd(arr)
{
  let count1 = 0;
  let count2 = 0;
  let count0 = 0;
 
  arr.forEach(function(item, i, arr) {
    let typeItem = typeof(item);
 
    if (typeItem == "number") {
      if (!isNaN(item)) {
        if (item === 0) {
          count0++;
        } else {
          let odd = item % 2;
          if (odd === 0) {
            count2++;
          } else {
            count1++;
          }
        }
      }
    }
  });
  console.log(`Количество 0: ${count0}`);
  console.log(`Количество четных: ${count2}`);
  console.log(`Количество не четных: ${count1}`);
}

function isPrime1000(num)
{
  if ((num <=1) || (num >1000))
  {
    return false;
  } else if (num === 2) {
    return true;
  }
 
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i +=1;
  }
 
  return true;  
 
}

function task3(num1)
{
  return function taskIn(num2)
  {
    return num1 + num2;
  }
}

function printNumber(num)
{
  setTimeout(function() { console.log(num); }, 1000);
}

function task4(num1, num2)
{
  for(let i = num1; i <= num2; i++) {
    printNumber(i)
  }
}

const power = (x, n) => {
  return Math.pow(x, n)
}

console.log("-------task1-------");
countOdd([1,3,5,'ff',0,6,8, 0]);

console.log("-------task2-------");
console.log(isPrime1000(100));
console.log(isPrime1000(7));
console.log(isPrime1000(0));
console.log(isPrime1000(23));
console.log(isPrime1000(77));
console.log(isPrime1000(7117));

console.log("-------task3-------");
console.log(task3(5)(4))

console.log("-------task4-------");
task4(5,8)

console.log("-------task5-------");
console.log(power(3,4));