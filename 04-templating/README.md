## **Module 1: The View**
# Class 4: Templating

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives
1. Code Review
1. Typography
1. Templating
1. Lab Prep

### Announcements
* [Dan's debugging tips!](https://github.com/codefellowspdx/201d-spring-2017/blob/7b349d6bb2b5f96b66198395ff6231c5abf70ad1/class-10-js_debugging-wireframe_part_2/dan-debugging.md#debugging-workflow)
* For submitting:  
    - Canvas: instructor/TA facing
        - 2 reflection questions and how long the lab took
    - PR: reviewer facing
        - what does the "reviewer" or "maintainer" need to know about what you did?
        - is there a specific part you'd of your code you'd like reviewed?
        - check things off the list
    - RM: peer dev facing 
        - how to run your project locally
        - what technology is used or needed
        - (We'll start including this next week, and for project week!)

<hr></hr>

## Learning Objectives
* Discuss different ways to reuse HTML, specifically using templates.
* Display data using a Handlebars template.
* Distinguish between the different Handlebars expression types ( `{{}}` vs `{{{}}}` ).
* Add personality to a website by styling the typography.

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> Created an HTML element to use as a template. </li><li> Used jQuery to clone our template and create new elements.</li><li> Used string concatenation to concatenate a variable to a string. </li></ul> | <ul><li> Use Handlebars.js to compile our template. </li><li> Use ES2015 template literals to interpolate a variable to a string.  </li></ul> |



<hr></hr>

## Notes
<s>
#### Typography
* Typography
    * Why typography matters
        * Typography : Websites :: Audio : Movies
    * Key terms 
        * Serif vs Sans Serif
        * Baseline, x-height, cap height, ascender, descender
    * [Web font formats](https://creativemarket.com/blog/the-missing-guide-to-font-formats)
    * Font sizes and using a font-scale
</s>


#### ES6 Arrow Functions
* A new way to declare a function
    * ```js
        const greet = function () {
            alert('hello!');
        }

        const greetAgain = () => {
            alert('hello again!');
        }

        $btn.on('click', e => console.log(e.target) );
        $btn.on('click', e => {
            console.log('e.target: ', e.target);
            console.log('this: ', this);
        });

    * Main differences include that arrow functions:
        * don't use the function keyword, instead they use the labmda `=>` **after** the parameter list
        * don't change the value of the keyword `this`
        * can omit their parameter parentheses if there is only 1 parameter
        * can omit the curly braces if its body fits on a single line
    * 

#### HTML Templates
* Template systems simplify the tedious task of creating elements one by one
    * They provide placeholders for dynamically set data
* Handlebars.js is a compiler 
    * It takes an HTML template, compiles it into a JS function which takes an object and returns a filled out HTML template
    * Four steps
        * include the library
        * create an HTML template
        * compile the template
        * fill the template with data

## Readings
* [Handlebars.js Official Documentation](http://handlebarsjs.com/) (Reference)
* [Learn Handlebars.js in 10 Minutes tutorial](http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/) (Essential)

## Lab
[4: Templating](https://github.com/acl-301d-fall-2017/04-templating)
