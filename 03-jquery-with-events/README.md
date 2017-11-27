## **Module 1: The View**
# Class 3: jQuery and Events 

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Announcements
1. Code Review
    1. Code Wars challenge solutions
    1. Lab 2
1. jQuery events
1. Lab Prep

### Announcements
* Feedback from last couple of weeks
    * Submitting labs: 
        * Written work is redundant. Will revise this! Working on putting all submission info into our submit-process repo.
    * Pair programming:
        * Can be difficult.
        * Will all labs be paired? No, but most will. Tuesday and Friday will be solo.
    * From 201 project week:
        * Mid-week code review, to highlight areas that could be DRY'ed/focused on.
        * More white-boarding practice.

<hr></hr>

## Learning Objectives
* Create event listeners using jQuery's `$.on()`
* Distinguish when to use event delegation.
* Select and target HTML elements using the `data` attribute.


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> used jQuery's attr method to add data to elements.</li><li> used the DOM's addEventListener method to listen bind event handlers.</li></ul> | <ul><li> use jQuery's attr method to update an element's data attributes. </li><li> use jQuery's on method to bind event handlers. </li></ul> |



<hr></hr>

## Notes
* ES6 template literals
    * ```js
        const excited = '!!!!!!!';
        const oldWay = 'We used the + sign to concat strings and variables' + excited;
            // We used the + sign to concat strings and variables!!!!!!!
        const newWay = `We use backticks instead of quotes${excited}, plus the dollar sign and curly braces${excited}`;
            // We use backticks instead of quotes!!!!!!!, plus the dollar sign and curly braces!!!!!!!
* jQuery Events
    * Review
        * Attach event listeners to HTML elements
            * ```js
                const cloudDiv = document.getElementById('cloud');
                cloudDiv.addEventListener('click', cloudClickHandler);
        * Events are handled by callback functions (our event handlers) (`cloudClickHandler` in the above example)
        * Event handling can be used to override default behavior (like link click, or form submit)
            * Using `event.preventDefault()`
        * `this` is the element that triggered the event
            * Inside of `cloudClickHandler`, `this` refers to `cloudDiv`
        * Vanilla JS events recap (pg. 244)
    * jQuery events
        * Same thing! Different syntax.
        * With jQuery, event listeners are registered with `$element.click()` (with the event name) or `$element.on()`
            * ```js
                const $cloudDiv = $('#cloud');
                $cloudDiv.click(cloudClickHandler);
                $cloudDiv.on('click', cloudClickHandler);
        * With jQuery, you can trigger an event on an element in your script: `$cloudDiv.click()`
        * Event delegation
            * Which element should listen for the click?
            * How to add event listeners to dynamically created and inserted elements?
        * Examples: click, change/input, scroll, ready
* Lab Prep
    * eslint rules and `eslintignore`
    * Walk through new file: `articleView.js`


## Readings

* JavaScript & jQuery: pages 326-366
  *(Context: 354-361; Essential: 322-353; Reference: 362-366)*

## Lab
[Lab 3: jQuery and events](https://github.com/acl-301d-fall-2017/03-jquery-with-events)