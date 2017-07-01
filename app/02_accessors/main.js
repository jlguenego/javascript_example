(function() {
	'use strict';

	var obj = {
		get foo() { return 'abc'; },

		set foo(value) {
			console.log('setter: ' + value);
		}
	};

	console.log('obj', obj);
	console.log('obj.foo', obj.foo);
	obj.foo = 56;
	console.log('obj.foo', obj.foo);

	delete obj.foo;

	console.log('obj.foo after deletion', obj.foo);
	obj.foo = 52;
	console.log('obj.foo', obj.foo);

	var myArray = [];
	Object.defineProperty(myArray, 'last', {
		get: function() {
			if (this.length > 0) {
				return this[this.length - 1];
			}

			return undefined;
		},

		set: function(value) {
			if (this.length > 0) {
				this[this.length - 1] = value;
			} else {
				throw 'Cannot assign last element of an empty array.';
			}
		}
	});

	try {
		myArray.last = 56;
	} catch(e) {
		console.log('error', e);
	}

	console.log('myArray', myArray);	
	console.log('myArray.last', myArray.last);
	myArray.push(1);
	console.log('myArray', myArray);
	console.log('myArray.last', myArray.last);
	myArray.push('coucou');
	console.log('myArray', myArray);
	console.log('myArray.last', myArray.last);
	myArray.last = 23;
	console.log('myArray', myArray);
	console.log('myArray.last', myArray.last);




})();
