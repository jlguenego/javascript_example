(function() {
	// uncomment the use strict and check what happens.
	// 'use strict';

	// variable must be declared with var, let or const.
	toto = true;
	console.log('toto', toto);
})();
(function() {
	// 'use strict';
	{
		// function are not hoisted in strict mode 
		// and should be declared at the top level block
		function test() {
			console.log('test', arguments);
		}
		test();
	}
	test();

})();
(function() {
	// 'use strict';
	// arguments.callee and arguments.caller don't exist in strict mode.
	function checkArgs() {
		console.log('checkArgs', arguments);
		console.log('arguments.callee', arguments.callee);
		console.log('arguments.caller', arguments.caller);
	}
	checkArgs('hello');
})();
(function() {
	// 'use strict';
	// arguments cannot be reassigned in strict mode.
	function checkArgs() {
		console.log('checkArgs', arguments);
		arguments = ['coucou'];
		console.log('arguments', arguments);
	}
	checkArgs('hello');


})();
(function() {
	// 'use strict';
	// this = undefined in strict mode, or global object in sloppy mode.
	function checkThis() {
		console.log('checkThis', this);
	}
	checkThis();
})();
(function() {
	// 'use strict';	
	var str = 'abc';

	str.length = 7; // no effect, silent failure except if use strict.
	console.log(str.length); // 3
})();
(function() {
	// 'use strict';	
	window.hello = 'coucou';
	console.log('hello', hello);

	delete hello; // forbidden to delete a global variable like this in strict mode.
	console.log('hello', window.hello);
})();
(function() {
	// 'use strict';	
	eval('var coucou="toto"');
	console.log('window.coucou', window.coucou);
	console.log('coucou', coucou);
})();
(function() {
	// 'use strict';	
	var a, x, y;
	var r = 10;

	with(Math) {
		a = PI * r * r;
		x = r * cos(PI);
		y = r * sin(PI / 2);
	}
	console.log('area', a);
	console.log('x', x);
	console.log('y', y);
})();
