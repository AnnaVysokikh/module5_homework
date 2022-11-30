const xmlString =
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

function task1(str) {
  const parser = new DOMParser();
  const xmlDom = parser.parseFromString(str, 'text/xml');
  const students = xmlDom.querySelectorAll("student")
 
  let list = [];
  students.forEach(item => {
    list.push ({
      name: `${item.querySelector("first").textContent} ${item.querySelector("second").textContent}`,
      age: `${item.querySelector("age").textContent}`,
      prog:`${item.querySelector("prof").textContent}`,
      lang:`${item.querySelector("name").getAttribute('lang')}`
    })
   
  })
  console.log(list);
}

const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

function task2(str) {
  console.log(JSON.parse(str));
}

console.log('-----task1-----');
task1(xmlString);

console.log('-----task2-----');
task2(jsonString);
