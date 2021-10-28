// function assert(value, text) {
// 	value === true ? console.log(text) : console.log('fail');
// }

// //Functions as objects that can have properties

// const ninja = {};
// ninja.name = 'sasuke';

// const wieldSword = function () {};
// wieldSword.swordType = 'katana';

// //Caching collections of functions
// const store = {
// 	nextId: 1,
// 	cache: {},
// 	add: function (fn) {
// 		if (!fn.id) {
// 			fn.id = this.nextId++;
// 			this.cache[fn.id] = fn;
// 			return true;
// 		}
// 	},
// };

// //Memoization
// function memoFunction(ninja) {
// 	if (!memoFunction.cache) {
// 		memoFunction.cache = {};
// 		console.log('Cache for memo function created!');
// 	}

// 	if (memoFunction.cache[ninja] !== undefined) {
// 		return `${ninja} is already in the village!`;
// 	}

// 	if (!memoFunction.cache[ninja]) {
// 		memoFunction.cache[ninja] = ninja;
// 		return `${ninja} is back from thier mission and is ready for dispatch!`;
// 	}
// }

// //Function Declarations
// function samurai() {
// 	return 'samurai here';
// }

// function ninja() {
// 	function hiddenNinja() {
// 		return 'hidden ninja here';
// 	}

// 	return hiddenNinja();
// }

// console.log(ninja());

const samurai = (() => 'Tomoe')();
const ninja = ((name) => {
	return { name };
})('Yoshi');
const test = (() => 'test')();

console.log(samurai);
console.log(ninja);
console.log(test);
