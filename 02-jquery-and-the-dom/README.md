## **Module 1: The View**
# Class 2: jQuery and the DOM + some RWD

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Announcements
1. Agile & MVC
1. jQuery
1. Lab Prep / Code Review

### Announcements
* Notes on learning:
  * Lab = time to practice building. Review = time to clarify understanding.
    * Completing the labs and being unsure about concepts > not completing the labs.
    * Class time is review time; but you can also do review on your own! The important thing is that lab time is spent working on completing the lab.
    * Metaphor:
      * You're learning to make clothes - it's better to finish making a shirt, even if the stitches are crooked and the fabric doesn't line up and edges don't line up and one side is inside out and the sleeves don't fit your model and you had to make the neck hole a little bigger so they could put it on - than it is to only have half of your pieces cut out and lined up together with the thread placed on top.
  * Learning = connecting ideas. So if something doesn't make sense to you, try asking: what two ideas aren't connecting?? Then figure out if they're supposed to, or if there's an intermediary idea, or if they aren't related at all! or if they aren't related in this context! 
  * My theory on why students of the humanities are good at programming: always questioning *why* and *what is that*?
    * The garden is a metaphor for their relationship; the variable is a metaphor for a string.
* Your Code Wars challenge for this week (due Monday): 
  * https://www.codewars.com/kata/object-oriented-piracy 
* Let's practice the submission git flow: 
  * https://github.com/acl-301d-fall-2017/submit-process
* Code review at end of class (if we have time)
<hr></hr>

## Learning Objectives
- Describe the different parts of the MVC design pattern.
- Include the jQuery library using a CDN or including it locally.
- Describe the pros and cons of using jQuery.
- Perform DOM manipulations using `append`, `remove`, `clone`, `data`, `html`, `text`.
- Traverse the DOM tree, with `parents`, `children`, `find`.
- Differentiate between certain methods & the process of chaining.
- Include JavaScript files accounting for dependencies by loading `<script>` tags in order.


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li>Wrote our scripts with vanilla JavaScript</li><li>Retrieved elements from the DOM using the document object's methods</li><li>Manipulated the DOM using the document object's methods</li></ul> | <ul><li>Write JavaScript with the help of the jQuery library</li><li>Retrieve elements from the DOM using jQuery methods</li><li>Manipulate the DOM using jQuery methods</li></ul> |

<hr></hr>

## Notes

#### Agile and MVC
* Agile Web Development
  * [Infographic](https://toggl.com/developer-methods-infographic)
  * Compared with the ‘Waterfall’ process
  * Some ways to implement agile:
    * Daily Sprints
    * ‘MVP’ & ‘Stretch’ Goals
    * User (or project stakeholder) stories & Developer stories
    * Iterative Development
    * Agile buzzwords (backlog, sprint demos, retrospective, etc)
* MVC
  * Model, View, Controller design pattern
  * Why do developers care about separating these concerns?
  * What are some other architectural design patterns?
    * MVP: Model View Presenter
    * MVVM: Model View View Model
    * Component Based Architecture
  * What does each MVC layer do?
  * How does each MVC layer tie together in a modern web application?
    * Model = our data as objects
    * View = the DOM 
    * Controller = logic around user's interaction and the model
  * Additional resources:
    * [MVC Architecture ](https://developer.chrome.com/apps/app_frameworks)
    * [Learning JavaScript Design Patterns: MVC](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvcmvp)

#### DOM & jQuery
* Overview
  * Including jQuery from CDN/locally sourced
  * Vanilla DOM selection & manipulation review
  * Basic jQuery syntax
  * Waiting for DOM load using `$(document).ready()`;
  * Basic CSS selector review - how this works with jQuery selection
    * Each jQuery selection attempts to return a set of matched elements, and if it cannot, will return an empty array-like object.
  * Chaining methods
    * Why are we able to chain in jQuery?
      * Each method returns a jQuery object
  * Understanding the "getter" and “setter” differences between single and double parameter jQuery method calls
    * Ex:`$(‘.el’).attr(‘some-data-attribute’)`- gets the attribute
    * Ex:`$(‘.el’).attr(‘some-data-attribute’, ‘some val’)`- sets the attribute


#### Exercise
Evaluate the marked line below to determine what is the value of `ship` and `ship.name`
```js
function Ship (data) {
  this.name = data.name;
  this.owner = data.owner;
}

Ship.prototype.sink = function () {
  this.name = 'SUNKEN ' + this.name.toUpperCase();
}

const shipData = [
  {name: 'sweet Creature', owner: 'Owen'},
  {name: 'Hot Stuff', owner: 'Gina'}
];

const ship = new Ship (shipData[0]); // evaluate this line
ship.name;
```

```js
const ship = new Ship (shipData[0]); // evaluate this line
const ship = new Ship ({ name: 'sweet Creature', owner: 'Owen' }); 
   function Ship ({name: 'sweet Creature', owner: 'Owen'}) {
     this.name = data.name;
     this.name = {name: 'sweet Creature', owner: 'Owen'}.name;
     this.owner = data.owner;
     this.owner = {name: 'sweet Creature', owner: 'Owen'}.owner;
   } 
   // { name: 'sweet Creature', owner: 'Owen' }  + sink: function () {...}
const ship = { name: 'sweet Creature', owner: 'Owen', sink: function () {...} } // is a ship object
```

####  Lab Prep
* Walk through today's TODOS
  * Passing an object into a constructor function
  * Two new array methods:
    * sort
    * forEach

## Readings
* Javascript & jQuery: pages 293-325
  * (Context: 293-301; Essential: 310-325; Reference: 302-309)

## Lab
[Lab: jQuery & DOM](https://github.com/acl-301d-fall-2017/02-jquery-and-dom)