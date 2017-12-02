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
* **FEEDBACK!**
    * one
    * two
* **Tardies affect your attendance!** Leaving early affects your brownie points.
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
* SQL and CRUD
    * Relational Databases
        * Discuss differences between document based storage
        * Discuss common DBMS - MySQL, PostgreSQL, SQLite, etc
            * [Article comparing the three](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
    * SQL
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
    * CRUD - Databases as a resource
        * C - CREATE
        * R - READ
        * U - UPDATE
        * D - DESTROY (or DELETE)
    * PostgreSQL and psql
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
[Lab 8: SQL & Postgres](https://github.com/acl-301d-fall-2017/08-sql-intro-and-postgres)