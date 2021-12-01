'use strict';

function showThis(){
    console.log(this);
}
showThis();
// 1) обычная функция this = window , но если стоит use strict -undefined;

function showThis2(a,b){
    console.log(this);
    function sum() {
        console.log(this);
        return a+b;
    }
    console.log(sum());
}
showThis2(4,5);

const obj = {
    a: 20,
    b: 15,
    sum2: function () {
        console.log(this);
        function shout(){
            console.log(this);
        }
        shout();
    }
}
obj.sum2();
// 2) Контекст у методов обьекта будет сам обьект.

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function (){
        console.log(`Hello ${this.name}`)
    }
}
let ivan  = new User('Leonid', 15);

// 3) this в конструкторах и классах это новый экземпляр обьекта.

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {name: 'John'};

sayName.call(user, 'Smith');
sayName.apply(user,['Smith']);

function count(num) {
    return this*num;
}
const double = count.bind(2);

console.log(double(3));
console.log(double(13));
//4) Ручная привязка this: call, apply, bind;

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'red';
});
//arrow variant
btn.addEventListener('click', (e)=> {
    e.target.style.backgroundColor = 'red';
});

const obj2 = {
    num:5,
    sayNumber: function(){
        const say = () =>{
            console.log(this);
        }
        say();
    }
};

obj2.sayNumber();

const dobleNum = a => a*2;
console.log(dobleNum(4));

//