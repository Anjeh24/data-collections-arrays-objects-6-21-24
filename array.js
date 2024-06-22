
//======CREDITS; FREECODECAMP CODE ALONG TUTORIALS=======================

//===========Creating Arrays=================
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

//Alternatively, you can use the Array() constructor, passing the elements to put inside the array as arguments

let nobleGases = Array('He', 'Ne', 'Ar', 'Kr', 'Xn');

console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

//==============Array Indexing=================
// Each element inside an array is identified by its numeric index or position – starting from zero (not 1) in JavaScript, as in many programming languages.
//  We can access elements through bracket notation, specifying the index inside square brackets.

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases[0]; // 'He'
nobleGases[1]; // 'Ne'
nobleGases[2]; // 'Ar'
nobleGases[3]; // 'Kr'
nobleGases[4]; // 'Xn'
nobleGases[5]; // undefined

// When you try to access a value out of the index range, you get undefined as the return value. 

// 

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases[5] = 'Rn';
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

//nobleGases holds one more value, as you can see in the output.

//================the length Property=====================

//One can check the number of elements contained inside an array using the length property, through dot notation:

nobleGases.length; // 6

//array length will be the value of the index of the last element inside the array + 1, since the indexing starts at zero.

//============================Multidimensional Arrays==================

//JavaScript arrays can hold any allowed values, arrays included. An array inside another array is called a nested array.
//example of a three-dimensional array:

let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];

//access the different elements by repeating the bracket syntax with the indexes corresponding to the elements you are interested in, to go deeper and deeper.
//example;

console.log(elements[0]); // [['H', 'Li', 'Na'], ['Be', 'Mg']]

console.log(elements[0][0]); // ['H', 'Li', 'Na']

console.log(elements[0][0][0]); // 'H'

//============Sparse Array==============================
//arrays containing empty slots are called sparse arrays
//mistype two consecutive commas when creating an array, you will end up with a sparse array:

let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
console.log(firstGroup);
// ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs']

//Sparse arrays can also be created by directly changing the length property or by assignment to an index greater than the length:

// Increasing the length property
firstGroup.length = 11;
console.log(firstGroup);
// ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 4]

// Assigning an element to an index greater than the length
firstGroup[15] = 'Fr';
console.log(firstGroup);
// ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 8, 'Fr']

//===============Comparing Arrays in JavaScript==================================

//JavaScript arrays are objects, and if you try to compare two objects, the comparison takes place considering their references –
// and not their actual values.
//This means that you could try to compare two arrays containing the same elements – and so, that are apparently equal – like this:

let dough1 = ['flour', 'water', 'yeast', 'salt'];
let dough2 = ['flour', 'water', 'yeast', 'salt'];

dough1 === dough2; // false

//according to JavaScript, they are not equal. 
//Even the comparison of two empty arrays, no matter how they're created, would return the same result:

[] === []; // false
Array() === Array(); // false

//this happens because object references are compared, and not their actual content. And each time you create a new array object, it will have a different reference in memory.

//The only way to make this comparison evaluate to true is to make the two arrays point to the same reference. For example:

let dough1 = ['flour', 'water', 'yeast', 'salt'];
let dough2 = dough1;

dough1 === dough2; // true

//if you want to compare two arrays, you will need to adopt a different strategy.
// A good approach would be iterating through the array and comparing each element one by one. 
//You can do this with a for loop and some conditional statements:

const compareArr = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    } 
    for (let i = 0; i < arr1.length; i++) {
    	if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
};

//If no difference is caught, the arrays are equal and the function returns true.
//results
let metal1 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
let metal2 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];

//If you need to compare two arrays of objects:

let albums1 = [
    {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
    {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
    {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
];
let albums2 = [
    {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
    {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
    {artist: 'Frank Zappa', title: 'One Size Fits All', year: undefined},
];

//You can do something like this:

const compareArrObj = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        if (Object.keys(arr1[i]).length !== Object.keys(arr2[i]).length) {
            return false
        }
        for (let prop in arr1[i]) {
            if (arr1[i][prop] !== arr2[i][prop]) {
                return false
            }
        }
    }
    return true
};

//the first step is verifying if the arrays have the same length. If the length is different, they cannot be equal.

//A for loop iterates through the array 
//and an if statement checks if each object of the first array has a different length from the object at the corresponding index in the second array:

//===================Spread Operator vs the Rest Parameter=================================================

//spread operator and the rest parameter have similar syntax (...) but they perform fundamentally different operations.

//spread operator enables you to expand an array – more generally an iterable object – into its elements. The rest parameter allows you to collect an undefined number of arguments into a single array.

// How to Use the Spread Operator
// Later on in this article, we will see some methods to copy an array or to merge different arrays. 
// But using the spread operator is a valid alternative to do the same things.

// In the example below, the alkali and alkEarth arrays are merged into a single array using the spread syntax.
//  To do this, you need to list the arrays you want to merge between square brackets, prepending three dots to each one.

let alkali = ['Li', 'Na', 'K'];
let alkEarth = ['Be', 'Mg', 'Ca'];

// Merging two arrays with the spread operator
let metals = [...alkali, ...alkEarth];
console.log(metals); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

//you can use the same syntax with only one array, to create a copy of an array:

// Copying an array with the spread operator
let metalsCopy = [...metals];
console.log(metalsCopy); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

// How to Use the Rest Parameter
// The rest parameter allows you to collect an undefined number of elements into a single array. 
// The rest parameter needs to be the last in a sequence of function parameters. 
// Also, a function can have only one rest parameter.


function f1(first, second, third, ...others) {
	console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);
};

f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'); 
// He
// Ne
// Ar
// ['Kr', 'Xn', 'Rn']

// Destructuring Assignment
// The destructing syntax provides a simple way to assign values by unpacking them from an array object. 
// Let's see a practical example:

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
let [firstRow, secondRow,,FourthRow] = nobleGases;
console.log(firstRow); // 'He'
console.log(secondRow); // 'Ne'
console.log(FourthRow); // 'Kr'
// 'Ar' is skipped because of the additional com

//=====================How to Add and Remove Elements from an Array=============================
