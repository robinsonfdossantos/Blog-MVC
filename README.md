# Blog-MVC

A tech blog created (on going) using MVC methodology, where users can post their ideas, comment and edit them.

Access the live website and join at: 



[![License: MIT](https://img.shields.io/badge/License-MIT-E365FF.svg)](https://opensource.org/licenses/MIT)

## Description
---
```
This is a technology news aggregator that provides users with the latest updates and articles from various tech publications. The application uses an API to fetch news articles, categorizes them based on topics like AI, cybersecurity, and blockchain, and displays them in a clean and user-friendly interface. Users can bookmark articles, share them on social media, and personalize their news feed based on their interests.

```

## Table of Contents
---

- [Description](#description)
- [Installation](#installation)
- [Technologies](#technologies)
- [Credits](#credits)
- [License](#license)

## Installation
---

+ Access repository here:
git@github.com:robinsonfdossantos/Blog-MVC.git

+ Clone to your local machine within the location of your desire:

```md
git clone git@github.com:robinsonfdossantos/Blog-MVC.git
```

+ Create a new '.env' file within the MVC-Blog root directory, populate it with the following details:
```md
  DB_NAME='blogmvc_db'
  DB_USER='<your-MYSQL-username>'
  DB_PASSWORD='<your-MySQL-password>'
 ```
 
+ Utilising terminal install package dependancies:
```md
  npm i 
  ```

+ Open and log in to the mysql shell:
```md
  mysql -u root -p
  ```

+ Create the database:
 ```md
  source schema.sql;
  ```

+ Open the server.js file in a new terminal and create the tables and relationships:
```md
  npm run seed
  ```

+ Fire it up:
```md
  npm start
  ```
The code is still on going development, so you can use the users pre-registered in the seeds.js to navigate.

(User info example)

Email: test1@email.com
Password": password1234

+ Happy days at http://localhost:3001! 😁

## Technologies
---

```
The project was developed employing the *Model-View-Controller (MVC)* methodology depicting Separation of Concerns.
It incorporated several code libraries including but not limited to the following: `sequelize`, `mysql2`, `express.handlebars`, `express.js`, `node.js` e.t.c.

```

## Credits
---
Tutor Benicio Lopez, who helped me solve part of the code.

## License
---
MIT Licensed unless otherwise indicated.


