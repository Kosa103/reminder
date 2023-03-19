# Reminder App

Reminder app is a lightweight fullstack app used to create and manage checklists and order them into boards which you can share with others. These checklists can include tasks of a todo list, items of a shopping list or whatever list you need to manage.

This dockerized NextJS applicaion uses typescript, sass, axios, jwt auth and React hook form. It also handles an SQLite DB with knex.

## Starting Up

### Development

- build and start a development version of your Docker container using the docker-compose-dev.yml file:
docker-compose -f docker-compose-dev.yml up --build

### Production

- build and start a production version of your Docker container using the docker-compose.yml file:
docker-compose up --build

## Credits

Created by Tamás Kósa
Finished MVP in 2023
