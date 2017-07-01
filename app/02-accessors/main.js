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

})();
