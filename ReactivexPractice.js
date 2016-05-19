// var names = ['Kim', 'Rob', 'Devon', 'Corbin'];

// var printArray = function(arr) {
// 	for(var i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}
// };

// console.log(printArray(names));

// var printArray2 = function(arr) {
// 	arr.forEach(function(a) {
// 		console.log(a);
// 	});
// };

// console.log(printArray2(names));

// Q#4:Have the function LetterChanges(words) take the words parameter being passed 
// and modify it using the following algorithm. Replace every letter in the string 
// with the letter following it in the alphabet (i.e. c becomes d, z becomes a). 
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally 
// return this modified string. 

// var letterChanges = function(words) {
// 	alphabetKey = 'abcdefghhijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA';
// 	vowels = 'aeiou';
// 	var alphaIndex, newLetters;
// 	var newString;
// 	for(var i = 0; i < words.length; i++) {
// 		alphaIndex = alphabetKey.indexOf(words[i]);
// 		newLetters += alphaIndex;

// 	}

// }

var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

console.log(sum);