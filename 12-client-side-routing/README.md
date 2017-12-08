# **Module 3: The Controller**
# Class 12: Single Page Applications & Client-Side Routing

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Objectives
1. Code Review
1. Client side routing
1. Lab Prep

### Announcements
* Quiz review?
* Tool to visualize your code: https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart
* CLEAN YOUR CODE.

<hr></hr>

## Learning Objectives
* Identify useful urls for an app, and be able to implement those routes using PageJS.
* Recognize other server technologies such as node, new dependencies

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Used jQuery event handlers to simulate page changes. | Use Page.js to handle routes to change pages. |

<hr></hr>

* Routing and Controllers
    * Controller: what does it do?
        * the chef at our food stand, they take and make orders
        * handles route requests, gets relevant data
    * Single-Page Apps
        * Review: Why single page?
            * Performance trade-offs
            * User experience   
        * jQuery’s role so far
            * Event handling for our tabs
            * Will still be hiding and showing content
        * Benefits of adding a ‘route’ to our page
            * Lets user (and browser) believe they are navigating
            * Updates History API to allow for ‘forward’ and ‘back’ actions 
    * Demo - How
        * Client-side routing
            * Using page.js to handle our routes in our client
            * `app('/<route>', <callback> );` (look familiar?)
            * `app()`'s callback signature: `(ctx,next) => {}` (a little reminiscent of `(req, res)` in our server!)

## Readings
* JS&jQ: 424-427 (History API) (Essential)
* [A Classic MVC blog post](http://blog.codinghorror.com/understanding-model-view-controller/)
* [Page.js Readme](https://github.com/visionmedia/page.js) (Reference. Read up until "Plugins" section)
