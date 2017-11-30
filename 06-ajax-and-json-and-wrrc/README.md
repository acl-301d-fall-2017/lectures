<!-- 

- tf is a Model
  - examples of code/ideas - is it a model?
- class level properties and methods
- tf is a server
- asyncrohnous javascripppptttt
  - you already deal w this: your event listeners
- localStorage

-->


## **Module 2: The Model**
# Class 6: AJAX & JSON & HTTP & WRRC

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Objectives
1. Code Review
1. WRRC
1. AJAX and JSON
1. Lab Prep

### Announcements
* Questions?
<hr></hr>

## Learning Objectives
* Explain how the browser uses the request-response (WRRC) cycle to render an HTML file or AJAX call.
* Implement AJAX to get data to display.
* Identify when apps need persistence, to improve the UX and isolate the model logic in the code base.

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Loaded our data from JS objects. | Load our data from a JSON file. |
| Didn't have persistent data. | Make our data persist using LocalStorage. |

<hr></hr>

## Notes

* WRRC *(Web Request Response Cycle)* & HTTP *(Hypertext Transfer Protocol)*
    * What is a website?
        * A buncha files: html, css, js, json, images, audio, etc
        * How do we open it?
        * How do we open it if it's not on our computer?
    * How do computers talk to each other??!
        * HTTP = Hypertext Transfer Protocol
            * Kinda like a language: nouns, verbs, adjectives
        * Nouns = files, URLS
        * Verbs = what we want to do with those files (aka resources): GET, POST, DELETE
        * Adjectives = did our request happen okay?
        * Two computers having a chat:
            * The request-response cycle
            * Main parts of an HTTP request
            * Main parts of an HTTP response

* Using AJAX & JSON
    * JSON
        * JavaScript Object Notation
        * Format of passing data around the internet (remember those HTTP conversations?)
        * Looks like an object, but everything is stringy!

    * AJAX
        * What?
            * Back to that HTTP conversation - how was it initiated? 
            * Before, only our browsers could start a convo with a server using the address bar
                * or from the links inside our HTML (ie including the jQuery CDN)
            * But user's love power and seamless UX - so let's do it with JS!
        * Why
            * So we don't have to reload the page for new information
                * new data for an article
                * new Tweets
                * form validation - does this user exist?
                * progress bars
        * How
            * jQuery <3
        * Demo - How
            * load data as JSON
            * Understanding the asynchronous nature of callback functions.
            * Familiarity with jQuery deferred methods:** .done(), .fail(), .always().



## Readings
* JS & jQ, Ch 8: pp.367-408 (Context: 384-387; Essential: 367-383, 388-399; Reference:400-408)
* [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (Essential)


## Lab
[Lab 6: AJAX & JSON](https://github.com/acl-301d-fall-2017/06-ajax-json-wrrc)
