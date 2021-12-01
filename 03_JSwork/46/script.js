'use strict';
//es5
// const num = new Number(3);
// console.log(num);

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function (){
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function () {
    console.log(`User ${this.name} leave!`)
}
const ivan = new User('Leonid', 50);
const alex = new User('Alex', 28);

ivan.hello();
alex.hello();
ivan.exit();

console.log(ivan);
console.log(alex);
