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

	var x = Object.create({ foo: 'bar' });
	console.log('json x', JSON.stringify(x));
	console.log('x.foo', x.foo);
	x.foo = 'kiki';
	console.log('json x', JSON.stringify(x));
	console.log('x.foo', x.foo);
	delete x.foo;
	console.log('json x', JSON.stringify(x));
	console.log('x.foo', x.foo);

	function getDefiningObject(obj, propKey) {
		obj = Object(obj); // make sure it’s an object
		while (obj && !{}.hasOwnProperty.call(obj, propKey)) {
			obj = Object.getPrototypeOf(obj);
			// obj is null if we have reached the end
		}
		return obj;
	}
	delete getDefiningObject(x, 'foo').foo;
	console.log('x after deleting foo in prototype', x);

	// define a constant:
	Object.defineProperty(x, 'PI', {
		value: 3.14,
		writable: false,
		configurable: false,
		enumerable: true
	});

	console.log('x.PI', x.PI);
	try {
		x.PI = 3;

	} catch (e) {
		console.log('x.PI is a constant');
	}









})();
