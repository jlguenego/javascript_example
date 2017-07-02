(function() {
	'use strict';

	// Label and break
	coucou: {
		console.log('coucou'); {
			console.log('hello');
			break coucou;
		}
		// eslint-disable-next-line no-unreachable
		console.log('never reached.');
	}

	// switch and case, and default.
	var myValue = 'coucou';
	switch (myValue) {
		case 1:
			console.log('This is 1.');
			break;
		case 2:
			console.log('This is 2.');
			break;
		case 'coucou':
			console.log('This is coucou.');
			break;
		default:
			console.log('This is default.');
	}


	// try catch finally
	try {
		try {
			throw new Error('oops');
		} catch (ex) {
			console.error('inner', ex.message);
			throw ex;
		} finally {
			console.log('finally');
		}
	} catch (ex) {
		console.error('outer', ex.message);
	}

	// class
	// do not declare twice a class in the same block with the same name.
	{
		// eslint-disable-next-line no-unused-vars
		class Foo {}
	} {
		// eslint-disable-next-line no-unused-vars
		class Foo {}
		class Bar extends Foo {
			constructor() {
				super();
			}
		}
	}

	// const, let, var
	const c = 4;
	let d = 5;
	// debugger;
	console.log('c', c);
	console.log('d', d);

})();
(function() {
	// delete
	var obj = {};
	Object.defineProperty(obj, 'hello', {
		value: 'coucou',
		configurable: false,
	});
	console.log('obj.hello', obj.hello);
	var result = delete obj.hello;
	console.log('result', result);
})();
(function() {
	'use strict';
	// do
	// eslint-disable-next-line no-constant-condition
	do {
		console.log('this will be printed at least once.');
	} while (false);

	// for
	for (let i of [1, 3, 4]) {
		console.log('i', i);
	}

	// in
	console.log('should be true: ', 'toString' in {});
})();
(function() {
	//'use strict';

	function* fibonacci() {
		var i = 1;
		var j = 2;
		var k;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			k = i + j;
			yield k;
			i = j;
			j = k;
		}
	}

	let iterator  = fibonacci();
	for (let i = 0; i < 10; i++) {
		console.log('fibonacci', i, iterator.next().value);
	}
})();
