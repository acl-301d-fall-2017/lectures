## **Module 1: The View**
# Class 1: Mobile-First Design & SMACSS

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)
[Lab](#Lab)


<hr></hr>

## Schedule
1. 301 Intro & Orientation
1. Normalizing and organizing CSS
1. Responsive Web Design (RWD)
1. Lab Prep: Git Flow and TODO's

### Announcements
* 201 Students - SUBMIT YOUR PROJECT STUFF SO I CAN GIVE YOU A GRADE.
* Everyone - please put your GitHub username in Ryver Post "GitHub".

<hr></hr>

## Learning Objectives
- Discuss the differences between mobile first design, responsive web design, and adaptive web design.
- Create a flexible layout using the following: percentage based media, media queries, and fluid layout.
- Scale a website to its viewport using the meta tag.
- Streamline development using **live-server**.
- Organize CSS using SMACSS.
- Display icons on a website using an icon font, specifically IcoMoon.
- Display icons on a website using the psuedo elements `:before` and `:after`.

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> Created websites from scratch, based off of a problem domain </li> <li> Opened our page from the terminal using `start` or `open`</li> <li> Organized our CSS all willy-nilly</li></ul> | <ul><li> Work on an existing code base!</li><li> "Serve" our page using live-server</li><li> Implement MFD and RWD techniques</li><li>Organize our CSS using SMACCS</li></ul>

<hr></hr>

## Notes

#### 301 Intro
* Welcome to Code 301 (:
* Campus and student introductions
  * Campus info
  * [Code of Conduct](https://github.com/alchemycodelab/code-of-conduct)
* Class structure
  * Lecture in the AM, labs in the PM
  * Assignments
    * Readings
    * Daily pair programming labs (1-6pm) Due next morning
      * new Git flow!
    * Daily learning journals
    * Weekly Code Wars
      * Specific challenge - we'll review the following Monday
      * End goal: reach 6 kyu by the end of class
    * Weekly quizzes on Wednesday (due Friday AM)
    * Weekly feedback surveys
  * Passing Requirements (meet two of the following)
    * 90% overall grade
    * 70% grade on 401 entrance exam
    * instructor's approval

#### Maintaining CSS SMACCSS
* Normalize.css
  * "normalizes" our css across browsers 

* SMACSS
  * Modular CSS - why use it?
  * Modules: base, layout, module, state, and theme
  * [SMACCS vs BEM](https://www.sitepoint.com/bem-smacss-advice-from-developers/)

#### Responsive Web Design
* RWD vs. AWD
  * Why responsive development?
    * Larger coverage area
    * Multiple device support
    * Think: spandex
    * Example: [The Outline](https://theoutline.com/)
  * Why adaptive development?
    * AKA dynamic serving
    * Server determines what HTML, CSS, etc assets a device will receive
    * Accessibility, not everyone has the latest tech that can render large responsive websites
    * Think: wardrobe of interchangable clothes of all shapes and sizes
    * Example: [Amazon](https://www.amazon.com/)
      * Preview of the dev tools Network tab!
* How to implement RWD
  * Viewports
    * Using the meta viewport tag and it’s width and scale options
  * Media Queries
    * Using min-width media query for mobile first design and development
    * Mobile first design
      * Design our CSS so the default styles are for mobile, and the queries are for desktop
* Flexible Media
  * Using `max-width` for scalable images
* Use an icon font
  * [icomoon.io](https://icomoon.io/)

## Lab Prep & Git Flow
* Live-server
  * Install it with npm: `npm install -g live-server`
  * What's it do?
  * How to use it?
* Review:
  * Tasks for lab
  * `gitignore`
  * `eslintignore`
  * `README`
* [Git flow for Pair Programming Lab](https://github.com/acl-301d-fall-2017/lectures/blob/master/SUBMIT_WITH_GIT.md)


## Readings

* [Shay Howe’s intro to RWD](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/) (Essential)
* [Dale Sande's Intro to SMACSS](http://www.anotheruiguy.com/ux-design-dev/_book/smacss/README.html) (Essential)
* [SMACSS Official Documentation](https://smacss.com/) (Reference)
* In-Depth (optional) [Dale Sande’s intro](http://www.anotheruiguy.com/ux-design-dev/_book/rwd/README.html) to RWD (Reference)


## Lab

[Lab: Mobile First Design](https://github.com/acl-301d-fall-2017/lab-01-mobile-first)