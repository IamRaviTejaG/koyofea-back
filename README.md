# Koyofea Backend

Koyofea is a recruitment and hiring platform, implemented in NodeJS & SQL.

### Tech Stack
#### Backend
- NodeJS
- MySQL

#### Frontend
- ReactJS

### Node Dependencies
#### User Dependencies
Please use `npm install` to install all the relevant dependencies.

- Babel
- bcrypt
- bluebird
- body-parser
- cors
- dotenv
- express
- express-validator
- jwt-simple
- moment
- mysql
- passport
- passport-jwt
- promise-mysql
- request-promise
- sqlstring
- uuid

#### Dev Dependencies
Use `npm install --only=dev` to install the dev dependencies.

- babel-cli
- chai
- colors
- gulp
- mocha
- morgan
- request
- rimraf
- standard
- supertest

###### **NOTE**: Ensure that both the steps above are completed for the server to run perfectly.

### Getting Started
Follow the steps below to get started with Koyofea:
- Ensure that the `NODE_ENV` variable is set to `development`.
- Make sure that you set the `DB_PORT`, `DB_USER` & `DB_PASS` correctly in the `.env` file in the root.
- Run `npm start` to start the server.
- Run `npm test` to run tests after you make any changes to the code. This step verifies that the code doesn't break as a result of your changes.
