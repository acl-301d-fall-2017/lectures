Submitting your Labs 
===

- [Getting the Lab](#Get)
- [Working on the Lab](#Work)
    - [Configuration for Lab](#Config)
- [Submitting the Lab](#Submit)
    - [PR Description Template](#PR)

---

## Basic steps for all assignments

1. Fork the lab's repository _to your own github account_
    * When pairing, add your pair(s) as collaborators to your repo so they can directly push to it.
1. Clone your forked repo locally (`git clone ...`)
1. Start a branch (`git checkout -b dev`)
1. Repeat until done:
    * Do work
      * Complete 1-3 related tasks
      * Commit
    * Repeat
    * Push to your github fork
    * Repeat
1. Submit a PR from `<your fork>/<your branch>` to `<class repo>/<branch-with-your-github-username>`
    * Your PR description in GH should read like: 	**sajoy**  wants to merge 3 commits into `01-mobile-first:sajoy` from `sajoy:dev`
1. **In Canvas** submit the PR url AND answers to the following:
    1. How long did you spend on this assignment?
    2. Describe your process of completing this assignment.
    2. What was the hardest part and the easiest part of this assignment?


    
## Documentation  
_Your README.md must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```
