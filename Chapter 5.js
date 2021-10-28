//Using the arguments implicit parameter.
//It allows us to access all the arguments of a function without explicitly defining them as parameters
// function sum() {
// 	let sum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	console.log(sum);
// 	return sum;
// }

// sum(1, 2, 3, 4, 5);

// function sum2(...args) {
// 	let sum = 0;
//   args.forEach(arg => sum += arg);
// 	console.log(sum);
// 	return sum;
// }

// sum2(1, 2, 3, 4, 5);

// Function Invocation as a fucntion
// function skulk(name) { }
// function Ninja(name) { }
// skulk('Hattori');

//Function Invocation as a method.
// const ninja = {};
// ninja.skulk = function () { console.log(this)};
// ninja.skulk();

//Function Context from methods
// function whatsMyContext() {
//   console.log(this);
// }

// whatsMyContext();
// const getMyThis = whatsMyContext();
// const ninja = {
//   getMyThis: whatsMyContext
// }
// ninja.getMyThis()

//Execution Contexts from Constructor Functions
// function WhatsMyContext(name) {
// 	this.skulk = function () {
// 		return this;
// 	};
// 	this.name = name;
// 	this.sneak = function () {
// 		console.log(this);
// 	};
// 	this.sneak1 = () => {
// 		console.log(this);
// 	};
// }
// const ninja1 = new WhatsMyContext('Naruto');
// const ninja2 = new WhatsMyContext('Sasuke');

// console.log(ninja1.skulk() === ninja1);
// console.log(ninja2.skulk() === ninja2);

// ninja1.sneak();
// ninja2.sneak1();

// const puppet = {
// 	rules: false,
// };

// function Emperor() {
// 	this.rules = true;
// 	return puppet;
// }

// const emperor = new Emperor();

// console.log(emperor, emperor === puppet ? true : 'The emperor is a puppet!');

//Call and Apply - setting execution contexts
// function juggle() {
// 	let result = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		result += arguments[i];
// 	}
// 	this.result = result;
// }

// let ninja1 = {};
// let ninja2 = {};

// juggle.apply(ninja1, [1, 2, 3, 4, 5]);
// juggle.call(ninja2, 1, 2, 3);

// console.log(ninja1);
// console.log(ninja2);

//Test

//Question 4
// const ninja1 = {
//   name: 'Ninja 1',
// 	whoAmI: function () {
// 		return this;
// 	},
// };

// const ninja2 = {
//   name: 'Ninja 2',
// 	whoAmI: ninja1.whoAmI,
// };

// const identify = ninja2.whoAmI;

//true -- whoAmI called as a method of ninja1
// console.log('ninja1.whoamI === ninja1 ?', ninja1.whoAmI() === ninja1);

// //fail--whoAmI called as a method of ninja2, so this === ninja 2
// console.log('ninja2.whoamI === ninja1 again?', ninja2.whoAmI() === ninja1);

// //fail -- whoAmI called as a function so this === window
// console.log('identify === ninja1 ?', identify() === ninja1);

// //True -- execution context of ninja1.whoAmI changed from ninja1 to ninja2
// console.log(
// 	'ninja1.whoamI called === ninja2 ?',
// 	ninja1.whoAmI.call(ninja2) === ninja2
// );

//Question 5
// function Ninja() {
//   this.whoAmI = () => this;
// }

// const ninja1 = new Ninja();
// const ninja2 = {
//   whoAmI: ninja1.whoAmI
// }

// // True this will refer the new object that is created for ninja1
// assert(ninja1.whoAmI() === ninja1, 'Ninja 1 here!');
// //False, this will refer to its original environment ninja 1
// assert(ninja2.whoAmI() === ninja2, 'Ninja2 here!');

// // Question 6

function assert(value, text) {
	console.log(value === true ? text : 'assertion failed');
}
function Ninja() {
	this.whoAmI = function () {
		return this;
	};
}

const ninja1 = new Ninja();
ninja1.name = 'ninja 1';
const ninja2 = {
	whoAmI: ninja1.whoAmI,
	name: 'Ninja 2',
};

//True -- new execution context is created for ninja1 and whoAmI called as a method of ninja 1.
assert(ninja1.whoAmI() === ninja1, 'ninja1 here!');

//False--  whoAmI called as a method of ninja2, so this === ninja2.
assert(ninja2.whoAmI() === ninja1, 'ninja2 here?');
