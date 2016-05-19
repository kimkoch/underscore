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

var size = 10;
var chessboard = '';

for(var x = 0; x < size; x++) {
	for(var y = 0; y < size; y++) {
		if((x + y) % 2 === 0) {
			chessboard += ' ';
		} else {
			chessboard += '#';
		}
	}
	chessboard += '\n';
}	

console.log(chessboard);




