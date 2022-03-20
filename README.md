# Employee-Tracker

An SQL based employee tracking system in Node.JS.

## TECH
- MySQL
- Node.JS
- MySQL2 and Inquirer npm packages

## Installation

<b>Note:</b> This software requires MySQL and Node.JS. Please ensure you have them installed before continuing!

### Setup
1. Download and extract the .zip file.
2. Create a .env file in the root directory and fill out the neccessary information as depicted in .env.example
### Database Setup
1. Open a terminal window in the project's root directory.
2. Start MySQL by typing ```mysql -u [username];```, replacing [username] with your MySQL username

    <b>Note: </b> If you have a password on your MySQL user account, append the command with ```-p```. MySQL will then prompt for your password before establishing the connection.

3. Run the command ```source ./db/schema.sql;``` to create the employees_db database and associated tables.
4. <b>(Optional)</b> Run the command ```source ./db/seeds.sql``` to create example user data.
5. Run the command ```quit;``` to exit MySQL. Your database is now set up!
### Node.JS Project Setup and Launch
In a terminal opened to the project's root directory:
1. Run ```npm i``` to install dependencies
2. Either run ```node index``` or ```npm start``` to begin!

## Usage Preview

View a video walkthrough of the project here: [vid link]

