<div align="center">

# Banana Scoreboard API backend

This repo was created to be used with the <a href="https://github.com/sakisandrac/react-native-scoreboard">React Native Banana Scoreboard App</a>

  Technologies used <a href="https://github.com/sakisandrac/react-native-scoreboard-api">BACKEND:</a><br>
  <img src="https://img.shields.io/badge/Node.JS-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.JS-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</div>

## Installation Instructions
- Fork [this](https://github.com/sakisandrac/react-native-scoreboard-api/) repository.
- Clone it to your local machine using the command: `git clone git@github.com:sakisandrac/react-native-scoreboard-api.git`.
- Run the command: `cd react-native-scoreboard-api`
- Run the command: `npm install`
- Run the command: `npm start`
- NOTE: the database will not connect until the MongoDB connection string password is added, please contact me for this password.

## Endpoints

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
| --- | --- | --- | --- | --- |
| Get all users | http://localhost:3003/api/v1/user | GET | none | An array containing all users |
| Add a new uesr | http://localhost:3003/api/v1/user | POST | { bananas: `<number>`, lastDayPlayed:`<string>`, longestStreak:`<number>`, name:`<string>`, stars:`<number>`, subscribed:`<boolean>` }| An array containing all ingredients |
</div>
