# LABS 11-14

## Overview
This week, you and your partner(s) will implement a basic full stack application for a book list which will render books from a PostgreSQL database.

## Submission Instructions

- You and your pair should create a GH Organization with two repos: 
    - your frontend code
    - your backend code
- Make sure you're both contributors to both repos.
- Do your work on a feature branch, ie `displayCards`. (The name does **not** need to be the same across repos.)
- When you're done: create a Pull Request (PR) back to the `master` branch of your frontend repo.
- **In Canvas**
    - submit a link to your deployed frontend repo's latest PR
    - submit a link to your deployed backend repo latest PR

## Resources
- [Book List Wireframes](./wireframes)
- [Book List Data](./data)
- [Heroku Node Deployment Tutorial](https://devcenter.heroku.com/categories/nodejs)
- [GH-Pages Deployment](https://pages.github.com/)
- [Express API Docs](http://expressjs.com/en/4x/api.html)

## Configuration

```sh
book_app_week_3
├── book-list-client
│   ├── data
│   │   └── books.json
|   ├── .eslintrc.json
|   ├── .gitignore
│   ├── index.html
|   ├── README.md
│   ├── scripts
│   │   ├── models
│   │   │   └── book.js
│   │   └── views
│   │       └── book-view.js
│   └── styles
│       ├── base.css
│       ├── fonts
│       │   ├── icomoon.eot
│       │   ├── icomoon.svg
│       │   ├── icomoon.ttf
│       │   └── icomoon.woff
│       ├── icons.css
│       ├── layout.css
│       ├── modules.css
│       └── reset.css
└── book-list-server
    ├── .eslintrc.json
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── server.js
```
