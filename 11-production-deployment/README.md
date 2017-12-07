<!-- 

three clear steps: deploy be, connect w/ local fe, deploy fe
    PLUS ways to verify each step is working

ALL CAPS AND BOLD: COMPLETE EACH STEP BEFORE MOVING ON



1. code review
2. build out a full stack app!
    - have example of completed book app
    - have example of starting today book app

    - create GH org
        - create front end repo
        - create back end repo
        - make simple front end
            - makes API calls to different server port
        - only has index.html
            - with templates to show 1) all cards and 2) single card
        - make simple back end
            - ONLY DEALING W 1st RESPONSIBILITY (serving data)
            - with route: get all cards, get single card
            - uses dot-env to set DATABASE_URL [and CLIENT_URL (redirect * to client_url MAYBE)]
                - first is the local database, then after deploy, heroku's provided server
                - how to "seed" data (push our local database)
        - deploy server first
        - update LOCAL client to use its url, also have THEM use POSTMAN? or an app to query it (or their browser!!!!
        - then deploy to ghpages
        


-->

## **Module 2: The Model**
# Class 11: Production & Deployment

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Announcements
1. Code Review
1. Deployment to Heroku

### Announcements
* 

## Learning Objectives
- Be able to push a dev site to production, so the world can see it.
- Understand the difference between a static page and a dynamically generated app page.

## Notes
- Environments
    * Dev vs Production environment
    * ENV variables
        * `dot-env` node module
    * What to do with the GitHub token?
    * How to deploy to Heroku (step by step)
    * Demo - How
        * Create a heroku app using the CLI
        * Add the heroku app url to your git repo as a remote repo
        * [Adding a database](https://devcenter.heroku.com/articles/heroku-postgresql)
            * create a database using the postgresql addon
            * check your configs to see the database url
            * restart your heroku instance
            * ```
                $ heroku addons:create heroku-postgresql:hobby-dev
                $ heroku config
                $ heroku ps:restart
            ```

***Note: There are multiple ways to achieve similar tasks with Heroku. whether through the CLI (Command Line Interface, i.e., your terminal) or through the GUI (Graphic User Interface) provided by your account Dashboard on the Heroku site. ***

#### Terminal:
   3. **git remote -v**** **
   4. **heroku create** // will generate a random app name
   5. **heroku create appName** // will generate an app with your name provided, if available.
   6. **git remote -v** // origin remains, but now we see a heroku remote as well!
**heroku apps** // display all user’s apps
**heroku apps:info** // display info on apps
**heroku apps:rename** updated-app-name
**heroku config** // Will list any current config vars
**heroku config:set** CONFIG_VAR=someValue
**heroku config:unset** CONFIG_VAR
**heroku sharing:add brian@codefellows.com **
**heroku open**
**heroku local**
**git status**
**git push heroku master**
**git push heroku branch:master** (if pushing from a branch other than your current one)
**heroku releases**
**heroku releases:info vNumber** // ex: heroku releases:info v2
**heroku rollback**  // rollback one release
**heroku rollback vNumber** // rollback to a specific release
**heroku apps:destroy app-name** // delete a heroku app (repo remains)
        * Development vs Production
        * Deployment steps

#### Heroku Dashboard

- This is where you can manage your deployments and your user account on the Heroku website, and even wire up your deployment to a branch in a GitHub repo to automate deployment updates if you choose. This is a nice way to view information about all of your apps at once and can be a simple tool for management, but keep in mind that the CLI is very useful and versatile. Ideally, students are comfortable using both for a variety of tasks.

- The initial view of the dashboard shows a list of all of your current Heroku apps and some basic information about them. You can click on one to go to a control panel for that app. That control panel has a series of tabs:
    - **Overview**: Basic details and activity logs for the app
    - **Resources**: This is where you can configure add-ons such as extra dynos or configure databases such as Heroku or MongoDB
    - **Deploy**: This tab provides options for deployment tasks, such as via a GitHub branch or other processes.
    - **Metrics**: This is an option available on paid accounts; the tab simply shows a preview of the tools on free accounts.
    - **Activity**: More detailed logging of development and production activity on the app.
    - **Access**: Configure collaborators to share the work on the app.
    - **Settings**: There is a variety of options here: application name, configuration of environment variables, domains/certificates, transfer of ownership, maintenance mode to disable the app temporarily, and an option to delete the app.

## Readings

- [Heroku: Getting Started with Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)