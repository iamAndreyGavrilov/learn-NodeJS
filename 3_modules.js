const os = require("os");

const { userName: user, sayHi } = require("./1_test");

const name = "Barmaley";

console.log(user, sayHi(name));

console.log(os.platform(), os.release());

module.exports = name;
