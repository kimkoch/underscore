// 1. Use _.reduce to multiply all the values in an array.
var myArray = [2,4,6,8,10];
var multiArr = _.reduce(myArray, function(memo, num) {return memo * num;});

// 2. Use _.reduce to concatenate all strings in an array.
var myString = ['x','y','z'];
var concatArr = _.reduce(myString, function(memo, num) {return memo + num;});

// 3. Write a function that takes an array of names and congratulates them. 
// Make sure to use _.reduce as part of the function.
var friends = ['Steve', 'Sally', 'George', 'Gina'];
var goFriends = function() {
	var catNames = _.reduce(friends, function(memo, num) {return memo + ', ' + num});
	console.log('Congratulations ' + catNames);
};
//     output: 'Congratulations Steve, Sally, George, Gina!'

// 4. _.pluck takes an object and a property name and returns the property name's value. 
// Write your own version called myPluck.

var myObj = {
	name: 'Lulu',
	animal: 'dog',
	color: 'cream',
	mood: 'mellow and content'
}
myPluck = function(obj, propName) {
  for(var k in obj) {
    if(k === propName) {
    	return obj[k];
  	}
	}
};  
myPluck(myObj, 'mood');
 
// 6. Use _.filter to return all strings in an array that start with the letter 'Z'.

var letterZ = ['Wally', 'Zanka', 'Jojo', 'Zaha'];
var returnZs = _.filter(letterZ, function(item) { return item[0] === 'Z' });

// 7. Use _.where on your farm animals from the lecture slides to return all animals who contain 
// the value 3 at the property name space.

var animalArr = [ 
	{speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
  {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
  {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
  {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} 
];

var val3animals = _.where(animalArr, {space: 3}); 

