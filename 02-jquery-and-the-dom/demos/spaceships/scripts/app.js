'use strict';
/** for loop vs. array.forEach **/
const iceCream = ['vanilla', 'chocolate', 'strawberry'];

// for loop iterating over array
for (let i = 0; i < iceCream.length; i++) {
    console.log('from the for loop --- ', iceCream[i]);
}

// array.forEach
iceCream.forEach(function (itemInArray) {
  console.log('from the forEAch --- ', itemInArray);
});

const colors = ['maroon','yellow','red','pink','orange','green'];
const upperCaseColors = [];

// for (let i = 0; i < colors.length; i ++ ) {}
colors.forEach(function (color, index, array) {
  // alert( color.toUpperCase() );
  console.log(color, 'index is ' + index);
  console.log(color, 'array! ' + array);
  upperCaseColors.push( color.toUpperCase() );
});



/** syntax! **/
$('#id');
document.getElementById('id');
document.querySelector('#id');

//*****basic jQuery selectors*****//

// //element
$('li');  //returns an array like object of all matching elements
document.querySelectorAll('li');

// //class
$('.icon-rocket');
document.getElementsByClassName('icon-rocket');

// //id
$('#listings');

// //parent descendent
$('#listings div');  //returns all <div>s anywhere inside the #listings element

// // parent > child
$('.ship-listing > section');  //returns any <section> that is a DIRECT child of .ship-listing

// //attribute
$('img[src=""]');

$('article[data-classification="racing"]');

// //another way to do the previous selection
const classification = 'racing';
$('.ship-listing[data-classification="' + classification + '"]');




//*****selector methods*****//

//TODO get the parent element of the <li>s
$('li').parent();

// //TODO get the name only from the first ship-listing
$('.ship-listing').first().find('h1.name');



//*****getting and setting data*****//

// //get text of the matched element(s)
$('h1').text();

// //set text of the matched element(s)
$('h1').text('AHHHHHHH');

// //get the data-category attribute of an li
$('li').attr('data-classification');

// //set the data-category attribute of an li
$('li').attr('data-classification', 'new-value');




//*****creating and deleting elements*****//

// add a new .ship-listing and append it to #listings
const listings = document.getElementById('listings');
const newListing = document.createElement('article');
newListing.classList.add('ship-listing');

const section = document.createElement('section');
const imgSection = document.createElement('section');
const nameDiv = document.createElement('div');
const ratingDiv = document.createElement('div');
const img = document.createElement('img');
img.src = "";
img.setAttribute('alt', 'COOL SHIP GIF!!!');
nameDiv.classList.add('name');
nameDiv.textContent = 'THIS SHIP IS DIFFERENT';

const ratingSpan = document.createElement('span');
ratingSpan.classList.add('icon-rocket');
ratingDiv.appendChild(ratingSpan);

section.appendChild(nameDiv);
section.appendChild(ratingDiv);
imgSection.appendChild(img);

newListing.appendChild(section);
newListing.appendChild(imgSection);
listings.appendChild(newListing);



//copy .ship-listing.template and append it to #listings
const $listings = $('#listings'); // getting #listings element
const $templateClone = $('.ship-listing.template').clone(); // creates a copy of .ship-listing.template
$templateClone.removeClass('template'); // remove template class so it will display
$templateClone.find('.name').text('JQUERY SHIP!'); // setting div with name class to have text "JQUERY SHIP!"
$templateClone.find('img').attr('alt','JQUERY SHIP IMAGE!'); // adding alt attribute of QUERY SHIP IMAGE to img
$listings.append($templateClone); // appends filled template to listings element!



//TODO remove an element from the DOM
// $('*').remove();



/***** run a command as soon as the DOM loads *****/
/*** to ensure all our elements are loaded! ***/
// $('document').ready(function () {
//   alert('the DOM is ready for lift off');
// });

// window.addEventListener('load', function () {
//   alert('window has loaded');
// });
