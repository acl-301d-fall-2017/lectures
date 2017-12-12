## **Module 3: The Controller**
# Class 14: RESTful endpoints and External APIs

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives
1. Code Review
1. RESTful APIs
1. Lab Prep

### Announcements
* Questions?

<hr></hr>

## Learning Objectives
* Understand HTTP and the central role that REST plays.
* Use RESTful routes for a web service, to retrieve their own github repos
* Design RESTful endpoints for their own blogging app


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Used data from our database or file system. | Use data from a third-party API! |

<hr></hr>

## Notes

Topic 1 - REST & APIs

* REST
    * Constraints - what makes something RESTful?
        * client - server relationship
        * stateless server
        * uses HTTP methods
        * URLs are based on resources
        * Data is sent as JSON or XML
    * [Quick Tips](http://www.restapitutorial.com/lessons/restquicktips.html)
        
* API's
    * What is an API?
    * What is a RESTful API?
        * an API that follows the following guidelines:
            * has a base url
            * uses HTTP methods: GET, PUT, POST, DELETE 
            * sends an internet media type (like JSON or XML)
    * [programmableweb.com directory](https://www.programmableweb.com/category/all/apis)
    * Examples:
        * [sunrise and sunset times](https://sunrise-sunset.org/api)
        * [the cat api (note: returns XML!)](http://thecatapi.com/)
        * [marvel api (needs a key)](http://developer.marvel.com/docs)
        * [scratch api](https://wiki.scratch.mit.edu/wiki/Scratch_API_(2.0)#GET_.2Fusers.2F.3Cusername.3E)

## Readings
- ["How I Explained REST to My Brother*"](https://gist.github.com/brookr/5977550)

## Resources
- [Authorize your Google API requests](https://developers.google.com/books/docs/v1/using#auth)
- [Performing Search using Google Books API](https://developers.google.com/books/docs/v1/using#PerformingSearch)
