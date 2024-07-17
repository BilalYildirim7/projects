/*function Car(Name, Model, Year, Color) {
  this.Name = Name;
  this.Model = Model;
  this.Year = Year;
  this.Color = Color;
  this.drive = function() {
    console.log(`You drive a ${this.Name}`);
  };
}
const car1= new Car("Toyota","Camryn","2013","Black");
const car2= new Car("Nissan","Camryn","2013","Black");
const car3= new Car("Honda","Camryn","2013","Black");
const car4= new Car("Fort","Camryn","2013","Black");
car2.drive();
car3.drive();
car4.drive();*/

/*class product {
  constructor(name, price){
    this.name=name;
    this.price=parseFloat(price.replace('$',''));
  }
  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Product: ${this.price.toFixed(2)}`);
  }
  calculateTotal(salestax) {
   return this.price +(this.price*salestax)
  }
}
const salestax =0.05;
const product1 =  new product("T-shirt","$10.99");
const product2 =  new product("Pant","$11.929");

product2.calculateTotal();

const total= product2.calculateTotal(salestax);
console.log(`The total price with tax is ${total.toFixed(2)} `);
*/
class MathUtil{
  static PI = 3.14159;
  static getDiameter(radius){
      return radius * 2;
  }
  static getCircumference(radius){
      return 2 * this.PI * radius;
  }
  static getArea(radius){
      return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log("Daimeter "+ MathUtil.getDiameter(10));
console.log("Circumference " +MathUtil.getCircumference(10));
console.log("Area "+MathUtil.getArea(10));

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Bilal");
const user2 = new User("Bilal");
const user3 = new User("Bilal");
const user4 = new User("Bilal");

user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();

User.getUserCount();
