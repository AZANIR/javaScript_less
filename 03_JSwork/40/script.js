'use strict';
const now = new Date();//2021-08-01T14:51:41.132Z
//const now = new Date('2021-05-01');//2021-05-01T00:00:00.000Z
//const now = new Date(2020, 5, 1, 20);//2020-06-01T17:00:00.000Z
//const now = new Date(0);//1970-01-01T00:00:00.000Z

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(40));
// console.log(now);

let start = new Date();

for(let i =0; i<100000; i++){
  let some = i**3;
}
let end =new Date();

console.log(`Loop work at ${end-start} second`);