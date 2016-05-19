// Reducing Array prototype functions with .forEach:

Array.prototype.filter = function(array, test) {
	var passed = [];
	this.forEach(array, function(item) {
		if(test(item)) {
			passed.push(item);
		}
	});

	return passed;
};


Array.prototype.map = function(array, transform) {
	var mapped = [];
	this.forEach(array, function(item) {
		mapped.push(transform(item));
	});

	return mapped;

};

Array.prototype.reduce = function(array, combine, start) {
	var current = start;
	this.forEach(array, function(item) {
		current = combine(current, item);
	});

	return current;

};

// Just forEach:
Array.prototype.forEach = function(array, action) {
	if(Array.isArray(collection)) {
		for(var i = 0; i < collection.length; i++) {
			action(collection[i]);
		}
	} else {
			for(key in collection) {
				action(collection[key]);
		}
	}
};

// Reducing Underscore functions (map, filter, reduce) reducing with _.each

_.map = function(collection, transform) {
	var mapped = [];
	_.each(collection, function(item) {
		mapped.push(transform(item));
	});

	return mapped;

};

_.filter = function(collection, test) {
	var passed = [];
	_.each(collection, function(item) {
		if(test(item)) {
			passed.push(item);
		}
	});
	return passed;
};

_.reduce = function(collection, iterator, accumulator) {
	_.each(collection, function(item) {
		if(accumulator === undefined) {
			accumulator = item;
		} else {	
			accumulator = iterator(accumulator, item);
		}
	});
	return accumulator;
};

// Underscore.each function:
_.each = function(collection, action) {
	if(Array.isArray(collection)) {
		for(var i = 0; i < collection.length; i++) {
			action(collection[i]);
		}
	} else if(typeof collection === 'object') {
		for(var key in collection) {
			action(collection[key]);
		}
	} else {
		action('not a valid collection')
	}
};	



