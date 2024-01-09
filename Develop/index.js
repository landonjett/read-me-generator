// TODO: Include packages needed for this application

// Import necessary Node.js packages
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];
;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
