// CommonJS
// const nodemon = require("nodemon");

const obj = require("./users");
// console.log(obj);

const {admins} = require("./users");
// console.log(admins);

// const {getCurrentMonth} = require("./date");
// const currentMonth = getCurrentMonth();
// console.log(`Now ${currentMonth} month`);

const currentMonth = require("./date").getCurrentMonth();
console.log(`Now ${currentMonth} month`);
























