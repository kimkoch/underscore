// EX1:
// var hashtag = '#'; 
// 	for(var counter = 0; counter < 7; counter++) {
// 		console.log(hashtag);
// 		hashtag = hashtag + '#';
// 	}

// FIZZBUZZEX:

// for(var counter = 1; counter < 100; counter++) {
// 	if(counter % 3 === 0 && counter % 5 === 0) {
// 		console.log('fizzbuzz');
// 	} else if(counter % 5 === 0) {
// 		console.log('buzz')
// 	} else if(counter % 3 === 0) {
// 		console.log('fizz')
// 	} else {
// 		console.log(counter);
// 	}
// }

// CHESSBOARD EX:

// var size = 8;
// for(var x = 0; x < size;  x++) {
// 	if(x % 2 === 0) {
// 		console.log(' # # # #');
// 	} else {
// 		console.log('# # # # ');
// 	}
// }

// var size = 10;
// var chessboard = '';

// for(var x = 0; x < size; x++) {
// 	for(var y = 0; y < size; y++) {
// 		if((x + y) % 2 === 0) {
// 			chessboard += ' ';
// 		} else {
// 			chessboard += '#';
// 		}
// 	}
// 	chessboard += '\n';
// }	

// console.log(chessboard);

// CH 3 MINIMUM EX:

// var min = function(x, y) {
// 	if(x < y) {
// 		return x;
// 	} else {
// 		return y;
// 	}
// };
// console.log(min(0, 10));
// console.log(min(0, -10));

// RECURSION EX:

// function isEven(num) {
// 	function find(even, odd) {
// 		if(even === num){
// 			return true;
// 	} else if (odd === num) {
// 			return false;
// 	} else {

// 		}
// 	}
//  return find(0, 1)
// };

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

// BEAN COUNTING EX.
// function countBs(string) {
// 	var counter = 0;
// 	for(var i = 0; i < string.length; i++) {
// 		if(string[i] === 'B') {
// 		counter++;	
// 	}
// }
// 	return counter;
// };

// function countChar(string, char) {
// 	var counter = 0;
// 	for(var i = 0; i < string.length; i++) {
// 		if(string[i] === char) {
// 		counter++;	
// 	}
// }
// 	return counter;
// };

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4

// CH4 THE SUM OF RANGE EX.

// function range(start, end) {
// 	var myArray = [];
// 	if(start < end) {
// 		for(var i = 1; i <= end; i++) {
// 			myArray.push(i);
// 		}
// 	} else {
// 		for(var j = start; j >= end; j--) {
// 				myArray.push(j);
// 		}		
// 	}
// 	return myArray;
// };

// function sum(arr) {
// 	var total = 0
// 	for(var i = 0; i < arr.length; i++) {
// 		total = total + arr[i]; 
// 	}
// return total;
// }

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

// REVERSE ARRAY EX:

// function reverseArray(arr) {
// 	var newArray = [];
// 	for(var i = arr.length -1; i >= 0; i--) {
// 		newArray.push(arr[i]);
// 	}
// 	return newArray;
// };

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

// // var arrayValue = [1, 2, 3, 4, 5];

// // function reverseArrayInPlace(array) {
// // 	var mapArray = [];
// // 	for(var i = array.length -1; i >= 0; i--) {
// // 		mapArray.push(array[i]);
// // 	}
// // 	return mapArray;
// // };

// // console.log(reverseArrayInPlace(arrayValue));
// // // → [5, 4, 3, 2, 1]

// // CH5. FLATTEN ARRAY EX:

// var arrays = [[1, 2, 3], [4, 5], [6]].reduce(function(a, b) {
// 		return a.concat(b);
// }, []);

// console.log(arrays);
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]


// Array.prototype.map(collection, tranform) {
// 	var mapped = [];
// 	for (var i = 0; i < collection.length; i++) {
// 		mapped.push(transform(collection[i]));
// 	}
// return mapped;
// };

// Array.prototype.filter(collection, test) {
// 		var passed = [];
// 		for (var i = 0; i < collection.length; i++) {
// 			if(test(collection[i])) {
// 				passed.push(collection[i]);
// 			}
// 		}
// 	return passed;
// };

// Array.prototype.reduce(collection, combine ,start) {
// 	current = start;
// 	for(var i = 0; i < collection.length; i++) {
// 		current = combine(current(collection[i])) {
// 		}
// 	}
// 	return current;
// };





