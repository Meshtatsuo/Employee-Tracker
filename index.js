const home = require('./lib/inquirer');

// Little welcome message for the user
function displayWelcome() {
    console.log("______________________________________________________");
    console.log("");
    console.log("           WELCOME TO THE EMPLOYEE TRACKER")
    console.log("______________________________________________________");
    console.log("");
}



// Displays welcome message and calls the main() function
// from inquirer.js to begin application loop
displayWelcome();
home.main();