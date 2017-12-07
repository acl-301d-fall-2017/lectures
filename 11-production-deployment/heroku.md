
*Note: There are multiple ways to achieve similar tasks with Heroku. whether through the CLI (Command Line Interface, i.e., your terminal) or through the GUI (Graphic User Interface) provided by your account Dashboard on the Heroku site.*

#### Terminal
   3. **git remote -v**
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
