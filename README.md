# Overview

This is a project to learn the TypeORM in NodeJS

## Sumary

- [Main used Libraries](#main-used-libraries)
- [Environment Variables](#environment-variables)
- [Tests Environment](#tests-environment)
- [Scripts](#scripts)
- [Code Linters](#code-linters)

## Main Used Libraries

**Production**

- Express
- TypeORM
- Yup
- Json Web Token

**Development**

- Jest
- Supertest
- Faker
- Factory Girl
- Eslint
- Prettier

## Environment Variables

**Environment**

- `NODE_ENV`: Setup your environment

**Application Options**

- `APP_PORT`: Set the port of the application

**Authentication**

- `APP_SECRET`: It's a secret used to generate the tokens of the aplicattion
- `TOKEN_DURATION`: Use it to set the expiration date of the aplicattion token

**Database**

- `DB_HOST`: Can be used to define where your database is running
- `DB_PORT`: Set the port of the database
- `DB_USERNAME`: Set your database user
- `DB_PASSWORD`: The password of your database
- `DB_NAME`: Defines the name of your database

## Tests Environment

You can use the `.env.test` to setup different [environment variables](#environment-variables) to the tests, and I really recommend you to use a `sqlite` database in tests to improve the performance

## Scripts

- `dev`: Run the application in **development** mode
- `test`: Run the **tests** of the application
- `test:watch`: Run the **tests** in watch mode
- `build`: Compile the Typescript using the **tsc**
- `start`: Start the previous compiled aplicattion by the **build** script
- `typeorm`: Used to run the CLI of the **typeorm**

## Code Linters

The code linters used in this project is:

- **Eslint**: Used to improve code syntax and report errors
- **Prettier**: Used to enforce code style

You can find the configurations of the linters in your respective configuration file, and I'm using `editor config` to set some configs between others editors
