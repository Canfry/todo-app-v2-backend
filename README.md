## Introduction

Create a new version of a Todo App. The goal is to show the CRUD and the fullstack skills.
How to make a classic and sometimes borring Todo App, into a modern and attractive one ?

### Table of content

- [What I use](#what-i-use)
  - Backend
    - PlanetScale as a database
    - Prisma as an ORM
    - NestJS as a server side application
    - Render as host
  - Frontend
    - React with Vite
    - Framer-motion to give some animation
    - Tailwindcss for styling
    - Vercel as host
    - React-Query
- [Set up the project](#set-up-the-project)
  - Structure
  - Scripts and dependencies

### What I use

- Backend
  - [Planetscale](https://www.planetscale.com) a serverless MySQL platform, that let you set up a database very easely using MySQL. It's also very friendly used to combine with Prisma.
  - [Prisma](https://www.prisma.io) an open-source ORM (Object Relational Mapping)
  - [Nestjs](https://www.nestjs.com) a progressive Node.js framework for building efficient, reliable and scalable server-side applications. The documentation is amazing so you can setup everything that you want easily (auth with passport, jwt, protected routes...).
  - [Render.com](https://www.render.com) is a very nice solution to host web server
- Frontend

  - [Vite](https://www.vitejs.dev) Next generation frontend tooling. Incredibly fast to bundle your favorite frameworks or a vanilla javascript project.
  - [Framer-motion](htpps://www.framer.com/motion) A fantastic library to easily animate your react jsx elements or components.
  - [Tailwindcss](https://www.tailwindcss.com) The very famous CSS framework that makes you style your project quickly.
  - [Vercel](https://www.vercel.com) A wonderful plateform to deploy quickly your frontend apps.
  - [React-query](https://react-query-v3.tanstack.com/) To manage your data fectching in react projects.

- ### Set up the project
- Structure
  - Create 2 folders in root project (frontend & backend)
- Scripts and dependencies

  - Backend

    - First install globally nestjs CLI `yarn global add @nestjs/cli`
    - Then create a new project in your backend folder: `nest new [project name]`
    - Install Prisma as dev dependency: `yarn add prisma -D`
    - Invoke Prisma CLI: `npx prisma`
    - Initialize Prisma project: `npx prisma init`
    - Define your schema and push your schema to DB: `npx prisma db push`
    - Install Prisma Client: `yarn add @prisma/client`
    - After every changes you can use `npx prisma generate` to accommodate the changes in your Prisma Client API.
    - Running the app:

    ```bash

    # development
    $ yarn run start

    # watch mode
    $ yarn run start:dev

    # production mode
    $ yarn run start:prod

    ```

    - Test:

    ```bash

    # unit tests
    $ yarn run test

    # e2e tests
    $ yarn run test:e2e

    # test coverage
    $ yarn run test:cov
    ```
