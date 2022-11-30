class Electrical {
  constructor(name) {
    this.powerType = 'sockets';
    this.name = name;
  }
  turnOn(powerConsumption) {
    console.log(`��� ������������������: ${powerConsumption}`);
  }
}

class Fridge extends Electrical { 
  constructor(name, size) {
    super(name)
    this.size = size;
  }
  
  turnOn(powerConsumption) {
    console.log(`��������. ��� ������������������: ${powerConsumption}`);
  }  
}

class Kettle extends Electrical { 
  constructor(name, color) {
    super(name)
    this.color = color;
  }
  
  turnOn(powerConsumption) {
    console.log(`������. ��� ������������������: ${powerConsumption}`);
  }  
}


console.log("------task5------");
const electrical = new Electrical("�����");
electrical.turnOn(8);
console.log(electrical);
const fridge = new Fridge("�����������", 2);
fridge.turnOn(2);
console.log(fridge);
const kettle = new Kettle("������", "red");
kettle.turnOn(5);
console.log(kettle);