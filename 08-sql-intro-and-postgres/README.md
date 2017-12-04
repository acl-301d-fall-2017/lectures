<!-- 

- what a model?

- set up PSQL
    - be able to either 1) open psql or 2) run psql in terminal
      - and 3) see list of databases \l (specifically kilovolt)


- callbacks
- chaining methods: .then()
- FIND THE FUNCTIONS - how many in this block of code are we defining? how many are we calling?


- CRUD
- full stack diagram
- HOW to connect from server to database
    - how did we connect from client to server?


- feedback from Emily!!!
    - Y'ALL ACTUALLY READ YOUR ERROR MESSAGES BEFORE DECIDING IF THEYRE RELEVANT
    - something about not knowing? 

- feedback from class

-->

## **Module 2: The Model**
# Class 8: SQL & Postgres

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives
1. Code Review
1. CRUD and SQL
1. Lab Prep

### Announcements
* One on ones! Today and tmrw: how's life?
* **Tardies affect your attendance!** Leaving early affects your brownie points.
* **FEEDBACK!**
    * 💖
        * Quick draw code review
        * Deep dive code review
    * To improve:
        * Stretch goals in code instead of README
        * Little to no monitors/spacing available during awkward after lunch period (when 401's aren't in lecture yet).
* **FEEDBACK FROM EMILY**
    * PRACTICE, PRACTICE, PRACTICE explaining what code is doing.
        * On our part: create an environment where you feel comfortable 1) readily admiting you don't know but also 2) attempting to express what you do know - not matter the holes
        * On your part: sounding like a fool now so you don't later. I promise we don't think negatively of you when you're trying. 
    * Students need to work on problem solving process.
        * Use the scientific method: ask a question, observe/research, hypothesize, experiment (test your hypothesis), analyze outcome. (Repeat as neccessary!)
        * Emily's article: [4 steps to soliving any software problem](https://www.oreilly.com/ideas/4-steps-to-solving-any-software-problem)
* Questions?

<hr></hr>

## Learning Objectives
* Understand the basic concepts of databases
* Effectively use basic SQL commands to create, read, update, and delete rows from a table
* Understand the fundamental architecture of full-stack applications and how we can locally emulate them

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Had locally persistent data in LocalStorage. | Have persistent data using a PostgreSQL database. |

<hr></hr>

## Notes
* Code Review
    * Callbacks
    * Brief intro: Promises
        * `.done()`, `.error()`, `.then()`
* SQL and CRUD
    * Relational Databases
        * Common DBMS - MySQL, PostgreSQL, SQLite, etc
            * [Article comparing the three](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
    * SQL - the language we use to query and update our database
        * Syntax
        * Statements
        * Clauses
        * Constraints
        * Expressions
        * Predicates
        * [SQL cheat sheet](http://www.cheat-sheets.org/sites/sql.su/)
        * Data types
            * **INTEGER**
            * **NOT NULL**
            * **PRIMARY KEY**
            * **CHAR**
            * **VARCHAR**
    * CRUD - the different functions we perform on our database
        * C - CREATE
        * R - READ
        * U - UPDATE
        * D - DESTROY (or DELETE)
    * PostgreSQL (our database) and psql (a cli to our database)
        * starting your database server
            * PC: `pg_ctl -D 'C:/Program Files/PostgreSQL/9.6/data' start`
            * MAC: `pg_ctl -D /usr/local/var/postgres/ -l /usr/local/var/postgres/server.log start`
            * or if you created an alias in your `.bashrc`: `pgstart` 
* Node and SQL
    * Using the `pg` module to connect to our PostgreSQL server
    * Using `body-parser` to get info from our request body

## Readings

* [SQLBolt (Intro, Lessons 1-4, 13-18)](http://sqlbolt.com/)
* [A Primer on SQL](https://leanpub.com/aprimeronsql/read) (Reference)

## Lab
[Lab 8: SQL & Postgres](https://github.com/acl-301d-fall-2017/08-sql-postgres)