## **Module 2: The Model**
# Class 7: NodeJS & NPM

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives
1. Code Review
1. Node and friends
1. Lab Prep

### Announcements
* Questions?

<hr></hr>

## Learning Objectives
* Understand client-server architecture
* Review the differences between the Browser Runtime env and Node's Runtime env
* Usage and best practices when implementing a NodeJS project using NPM packages and package.json configs
* Understand the basics of working with ExpressJS for server-side routing and functionality


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Used live-server to serve our website. | Write our own server using Node and Express. |
| Saw our code execute in one run time environment (RTE). | Will see code in two seperate RTEs. |

<hr></hr>

## Notes
- What is NodeJS?
- What are NPM, dependencies, and `package.json`?
- **Two main ways of working with Node/NPM projects**
	- 1. The project is already made; you're just using it
		- Clone the repo (or a fork of it)
		- `cd` into the repo, verify that there is a `package.json` with dependencies listed in it, and run `npm install` in the terminal
		- A bunch of stuff should install into a `node_modules` directory that is created automatically, and you're ready to go!
	- 2. You are creating a new Node/NPM project
		- Once the project directory is scaffolded, run `npm init` in the terminal from the root level of the project directory
		- This will ask you a series of questions that will create and set up a `package.json` file
		- As you identify NPM packages you want to add as dependencies to your project and are ready to use them, enter `npm install --save <dependency_name>` in the terminal, which will save the dependencies into a newly created `node_modules` directory and also keep track of them in the `package.json`
		- Be sure to `.gitignore` your `node_modules` directory!
		- You're ready to share your project with the world!
- `npm i -g nodemon` FTW
    - `nodemon` is an npm package that will auto-restart your server when you update your code
- ExpressJS overview

- Code demo: Let's make a Node-powered server!
	- `npm init` to initialize it as a Node project
	- Install: ExpressJS
	- Write server.js, some helpful docs:
		- [Node: 'require'](https://nodejs.org/api/modules.html#modules_module_require_id)
		- [app.use()](https://expressjs.com/en/api.html#app.use)
		- [app.get()](https://expressjs.com/en/api.html#app.get.method)
		- [app.listen()](https://expressjs.com/en/api.html#app.listen)

## Readings
- [Node.js introduction on tutorialspoint.com](https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm)
- ["An Introduction to Node.js" on sitepoint.com](https://www.sitepoint.com/an-introduction-to-node-js)
- [The Node Beginner Book](http://www.nodebeginner.org/)

## Lab
[Lab 7: NodeJS & NPM](https://github.com/acl-301d-fall-2017/07-nodejs-npm-express)