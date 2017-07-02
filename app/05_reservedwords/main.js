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

	// switch and case.
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



})();
