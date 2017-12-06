'use strict';

const meals = [
    { drink: 'water', entree: 'spaghetti', dessert: 'sugar cookie' },
    { drink: 'coke', entree: 'spinach salad', dessert: 'watermelon' },
    { drink: 'house red', entree: 'cheese', dessert: 'watermelon' },
    { drink: 'coke', entree: 'grilled cheese', dessert: 'ice cream' },
    { drink: 'milk', entree: 'waffles', dessert: 'pancakes' },
    { drink: 'milk', entree: 'pancakes', dessert: 'pancakes' },
    { drink: 'mimosa', entree: 'pancakes', dessert: 'ice cream' },
    { drink: 'water', entree: 'grilled cheese', dessert: 'watermelon' }
];







/*                      .forEach */
// `.forEach()` => does something once per item in the array
// const drinks = [];
// meals.forEach( meal => {
//     drinks.push( meal.drink );
// });

// console.log( '---------------- drinks collected from forEach ------------------------');
// console.log( drinks );








/*                      .map */
// `.map()` => alters each item in the array and returns a new array with those values
// const desserts = meals.map( mel => mel.dessert);

// console.log( '---------------- desserts collected from map ------------------------');
// console.log( desserts );








// /*                      .filter */
// `.filter()` => checks each item in an array against a condition, items that satisfy it are returned
// const sodaMeals = meals.filter();

// console.log( '---------------- meals with coke ------------------------');
// console.log( sodaMeals );








/*                      .reduce */
// // `.reduce()` => reduces the items in an array to a single item 


// const arr = [34, 55, 3, 23, 12, 7, 99];

// let sumArray = arr.reduce();
// let sumArrayPlusOne = arr.reduce();

// console.log('---------------- sumArray and sumArryPlusOne ------------------------');
// console.log( sumArray ); // => returns the total sum of the array, 233 (default accumulator is `0`)
// console.log( sumArrayPlusOne ); // => returns the total sum of the array from the starting value, 234 (accumulator is `1`)



// const uniqDesserts = desserts.reduce();

// console.log( '---------------- unique desserts from reduce ------------------------');
// console.log( uniqDesserts );