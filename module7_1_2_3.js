 const education = {
   level: "hight"
 }

 const user = Object.create(education);
 user.name = "Anna";
 user.age = 33;

console.log(user);

function task1(obj) {
  for (let key in obj) {

    if (obj.hasOwnProperty(key)) {
        console.log(`ключ = ${key}, значение = ${obj[key]}`);
    }   
  }
}


function task2(obj, str) {
  res = str in obj;
  if (res) {
    res = obj.hasOwnProperty(str);
  }
  return res;
}


function task3() {
  const obj = Object.create(null);
  console.log(obj)
}

//-----task1-----
console.log("------task1------");
task1(user);
//-----task2-----
console.log("------task2------");
console.log(task2(user, "age"));
console.log(task2(user, "subname"));
console.log(task2(user, "level"));
//-----task3-----
console.log("------task3------");
task3();
