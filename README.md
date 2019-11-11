[![GitHub issues](https://img.shields.io/github/issues/workout-tracktor/labspt4-workout-tracker-BE)](https://github.com/workout-tracktor/labspt4-workout-tracker-BE/issues)
[![GitHub forks](https://img.shields.io/github/forks/workout-tracktor/labspt4-workout-tracker-BE)](https://github.com/workout-tracktor/labspt4-workout-tracker-BE/network)
[![GitHub stars](https://img.shields.io/github/stars/workout-tracktor/labspt4-workout-tracker-BE)](https://github.com/workout-tracktor/labspt4-workout-tracker-BE/stargazers)
[![GitHub license](https://img.shields.io/github/license/workout-tracktor/labspt4-workout-tracker-BE)](https://github.com/workout-tracktor/labspt4-workout-tracker-BE)

# labspt4-workout-tracker-BE

## Table of Contents

- [Welcome](#welcome)
- [Tables & Routes](#tables)
- [Support](#support)
- [Contributing](#contributing)

## Welcome

Find the production server at: https://workouttrackerprod.herokuapp.com/

This is the home of the webpt4 Labs team backend codebase for the 'Workout-Tracker' product at Lambda School. I'm glad you are here because there's some things you should know:

Firstly, this database is hosted on heroku. So if you need the credentials to get into the hosted server (incoming labs team) please get in touch with one of us on slack. (Our information can be found in the Support section of this readme.)

Secondly, I hope you have had a great day so far.

That's it! Enjoy your stay.

## Tables

### Users
| Column        |     Type      |    Required   |   Unique      |     Key       | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|     id        |  int          |    yes        | unique        | primary key   |
|  user_id      |  str          |   yes         | unique        |               |
| first_name    | str           |               |               |               |
|  last_name    | str           |               |               |               |
|  username     | str           |    yes        | unique        |               |
|  password     | str           |    yes        |               |               |
|   email       | str           |    yes        | unique        |               |
| weight_units  | int           |               |               |foreign key    |
|distance_units | int           |               |               |foreign key    |
| avatar        | str           |               |               |               |
| body_goal     | str           |               |               |               |

Foreign Keys

weight_units REFERENCES id IN TABLE units </br>
distance_units REFERENCES id IN TABLE units

Routes

post:/api/user </br>
Registers a new user </br>
Requirements in the table

get:/api/user </br>
Returns complete user

put:/api/user </br>
Updates a user </br>
Returns complete user object

delete:/api/user </br>
returns "the user has been terminated" </br>
receive either a query EXAMPLE: /user?user_id=fdskjh&username=billybobthornton or a JSON body with user ID EXAMPLE: {user_id: 'fdskjh'}

get:/api/users </br>
returns an array of users


all GET requests take a query ex. /user?username=fsdfsf&weight_units=farts

### Workouts
| Column        |     Type      |    Required   |   Unique      |     Key       | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|     id        |  int          |    yes        | unique        | primary key   |
|workout_id     |  str          |   yes         |               |               |
|exercise_id    | int[]         |  yes          |               |foreign key    |
|exercise_desc  | str[]         |  yes          |               |               |
| desc          | str           |    yes        |               |               |


Foreign Keys

exercise_id REFERENCES id IN TABLE exercises

Routes

post:/api/workout </br>
Registers a new workout </br>
Requirements in the table

get:/api/workout </br>
Returns complete workout

put:/api/workout </br>
Updates a workout </br>
Returns complete workout object

delete:/api/workout </br>
returns "the workout has been terminated" </br>
receive either a query EXAMPLE: /workout?workout_id=fdskjhh&name=workout or a JSON body with workout ID EXAMPLE: {workout_id: 'fdskjhh'}

get:/api/workouts </br>
returns an array of workouts


### Exercises
| Column        |     Type      |    Required   |   Unique      |     Key       | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|     id        |  int          |    yes        | unique        | primary key   |
|exercise_id    |  str          |   yes         | unique        |               |
|equipment_id   | int[]         | yes           |               |foreign key    |
|      name     | str           | yes           | unique        |               |
|  desc         | str           |    yes        |               |               |

Foreign Keys

equipment_id REFERENCES id IN TABLE equipment

Routes

post:/api/exercise </br>
Registers a new exercise </br>
Requirements in the table

get:/api/exercise </br>
Returns complete exercise

put:/api/exersice </br>
Updates a exercise </br>
Returns complete exercise object

delete:/api/exercise </br>
returns "the exercise has been terminated" </br>
receive either a query EXAMPLE: /exercise?exercise_id=fdskjhi&name=exercisename or a JSON body with exercise ID EXAMPLE: {exercise_id: 'fdskjhi'}

get:/api/exercises </br>
returns an array of exercises


### Logs 
| Column        |     Type      |    Required   |   Unique      |     Key       | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|     id        |  int          |    yes        | unique        | primary key   |
|  log_id       |  str          |   yes         | unique        |               |
| user_id       | int           |  yes          |               |foreign key    |
| workout_id    | int           |  yes          |               |foreign key    |
| exercise_id   | int           |    yes        |               |foreign key    |
|distance_units | int           |               |               |foreign key    |
|weight_units   | int           |               |               |foreign key    |
| reps          | int           |               |               |               |
|distance       | num(float)    |               |               |               |
|duration       | num(float)    |               |               |               |
|weight         | num(float)    |               |               |               |
| timestamp     | time          |  yes          |               |               |
|  complete     | bool          |    yes        |               |               |

Foreign Keys

user_id REFERENCES id IN TABLE users </br>
workout_id REFERENCES id IN TABLE workouts </br>
exercise_id REFERENCES id IN TABLE exercises </br>
distance_units REFERENCES id IN TABLE units </br>
weight_units REFERENCES id IN TABLE units

### Equipments
| Column        |     Type      |    Required   |   Unique      |     Key       | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|     id        |  int          |    yes        | unique        | primary key   |
|equipment_id   |  str          |   yes         | unique        |               |
|name           | str           |  yes          | unique        |               |
|desc           | str           |  yes          |               |               |

Routes

post:/api/equipment </br>
Registers a new equipment </br>
Requirements in the table

get:/api/equipment </br>
Returns complete equipment

put:/api/equipment </br>
Updates a equipment </br>
Returns complete equipment object

delete:/api/equipment </br>
returns "the equipment has been terminated" </br>
receive either a query EXAMPLE: /equipment?equipment_id=fdskjhj&name=equipemtname or a JSON body with equipment ID EXAMPLE: {equipment_id: 'fdskjhj'}

get:/api/equipments </br>
returns an array of equipments


### Units
| Column        |     Type      |    Required   |   Unique      |     Key       | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|     id        |  int          |    yes        | unique        | primary key   |
| unit_id       |  str          |   yes         | unique        |               |
| name          | str           |  yes          | unique        |               |
  
  
Routes

post:/api/unit </br>
Registers a new unit </br>
Requirements in the table

get:/api/unit </br>
Returns complete unit

put:/api/unit </br>
Updates a unit </br>
Returns complete unit object

delete:/api/unit </br>
returns "the unit has been terminated" </br>
receive either a query EXAMPLE: /unit?unit_id=fdskjhk&name=unitname or a JSON body with unit ID EXAMPLE: {unit_id: 'fdskjhk'}

get:/api/units </br>
returns an array of units


## Support

Please [open an issue](https://github.com/workout-tracktor/labspt4-workout-tracker-BE/issues/new) for support. 

Also you can find us on slack:

Dustin Snoap - 9th level BackEnd Architect </br>
Mychal Hall - 9th level BackEnd Engineer </br>
Sean Wu - 9th level BackEnd Engineer


## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/workout-tracktor/labspt4-workout-tracker-BE/compare).

## How to set up postgres database

1. Login into PgAdmin 4 and create a new database under PostgreSQL (default username is postgres). You can also
make a new user instead of postgres through Postgres's command line tools

2. After running yarn, create a .env in the root of the project with these variables 

    * DB_NAME => this is the name of the database you created
    * DB_USER => Your postgres username. The default is postgres
    * DB_PASSWORD => The password for your postgres username
    * DB_ENV => This is your environment (development, staging and production). By default, your envionment will be development

3. Run knex migrate:latest, knex seed:run. Your database should be run and running
