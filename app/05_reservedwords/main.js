(function() {
	'use strict';

	// Label and break
	coucou: {
		console.log('coucou');
		{
			console.log('hello');
			break coucou;
		}
		// eslint-disable-next-line no-unreachable
		console.log('never reached.');
	}



})();
