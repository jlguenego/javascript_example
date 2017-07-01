(function() {
	'use strict';

	// this object does not have a prototype.
	var obj = Object.create(null);
	console.log('obj', obj);
	console.log('prototype of obj', Object.getPrototypeOf(obj));

	// this object is like {}.
	obj = Object.create(Object.prototype);
	console.log('obj', obj);
	console.log('prototype of obj', Object.getPrototypeOf(obj));
	

	// should be very close of an array [].
	var array = Object.create(Array.prototype, {
		length: {
			writable: true,
			configurable: true,
			value: 0
		}
	});
	console.log('array', array);
	array.push('coucou');
	console.log('array', array);
	console.log('prototype of array', Object.getPrototypeOf(array));

	// Warning: __proto__ is not ES5 but ES6.
	console.log('obj.__proto__', obj.__proto__);
	console.log('Object.prototype', Object.prototype);
	console.log('Object.prototype === obj.__proto__', Object.prototype === obj.__proto__);

	var x = Object.create({foo: 'bar'});
	console.log('x.foo', x.foo);
	x.foo = 'kiki';
	console.log('x.foo', x.foo);
	delete x.foo;
	console.log('x', x);
	



	
	




})();
