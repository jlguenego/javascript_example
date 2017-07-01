(function() {
	'use strict';

	// this object does not have a prototype.
	var obj = Object.create(null);
	console.log('obj', obj);

	// this object is like {}.
	obj = Object.create(Object.prototype);
	console.log('obj', obj);

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




})();
