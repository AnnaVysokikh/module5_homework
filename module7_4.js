function Electrical(name) {
  this.powerType = 'sockets';
  this.name = name;
}

Electrical.prototype.turnOn = function(powerConsumption) {
  console.log(`Мое электропотребление: ${powerConsumption}`);
}

function Fridge(name, size) {
  this.size = size;
  this.name = name;
}
Fridge.prototype = new Electrical(); 

Fridge.prototype.turnOn = function(powerConsumption) {
  console.log(`Охлаждаю. Мое электропотребление: ${powerConsumption}`);
}  
function Kettle(name, color) {
  this.color = color;
  this.name = name;
}

Kettle.prototype = new Electrical(); 

Kettle.prototype.turnOn = function(powerConsumption) {
  console.log(`Китячу. Мое электропотребление: ${powerConsumption}`);
}


console.log("------task4------");
const electrical = new Electrical("Робот");
electrical.turnOn(8);
console.log(electrical);
const fridge = new Fridge("Холодильник", 2);
fridge.turnOn(2);
console.log(fridge);
const kettle = new Kettle("Чайник", "red");
kettle.turnOn(5);
console.log(kettle);