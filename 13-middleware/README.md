## **Module 3: The Controller**
# Class Class 13: Middleware

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives
1. Code Review
1. Middleware
1. Lab Prep

### Announcements
* Questions?

<hr></hr>

## Learning Objectives
* Add middleware to our routes

<hr></hr>

## Notes

**Middleware?!?! What's that?**
  - You've been using middleware all along: in your Express server
  - Middleware functions:
    - receive data (request, response, context)
    - can call the next middleware function
    - analogy: passing the baton in a relay race, especially if they alter the baton in some way; the baton is the data and the runners are the middleware functions
  - When do you need middleware?
    - If you want to run the same code regardless of the route being visited
      - For example: using the public directory to serve static files
    - If you want to alter data as it moves through callback functions
      - For example: exposing data on `request.body`
  
## Readings
* [Page.js selections](https://github.com/visionxmedia/page.js#context) *(Especially the "Context" and “Routing” sections)*