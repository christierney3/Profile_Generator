const renderTeam = require('./utils/generateHtml');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const inquirer = require('inquirer');
const fs = require('fs');
// create object for responses per employee
let teamObj = {
    manager: '',
    interns: [],
    engineers: [],
}
// create functions that asks and saves responses to object
function managerQuestions() {
    console.log('Build your team.');
    return inquirer.prompt ([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
            default: 'Franklin'
        },
        {
            type: 'input',
            message: "What is the team manager's id #?",
            name: 'id',
            default: '1'
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'email',
            default: 'franklin@franklin.com'
        },
        {
            type: 'input',
            message: "What is the team manager's office #?",
            name: 'office',
            default: '3'
        }
    ])
    .then(managerAnswers => {
        const { name, id, email, office } = managerAnswers;
        teamObj.manager = new Manager(name, id, email, office);
        employeeChoice();
    })

};

function engineerQuestions() {
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
            default: 'Chris'
        },
        {
            type: 'input',
            message: "What is the engineer's id #?",
            name: 'id',
            default: '16'
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'email',
            default: 'chris.tierney3@gmail.com'
        },
        {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'github',
            default: 'christierney3',
        },        
    ])
    .then(engineerAnswers => {
        const { name, id, email, github} = engineerAnswers;
        teamObj.engineers.push(new Engineer(name, id, email, github));
        employeeChoice();
    })
};

function internQuestions() {
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
            default: 'John'
        },
        {
            type: 'input',
            message: "What is the intern's id #?",
            name: 'id',
            default: '4'
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'email',
            default: 'john@john.com'
        },
        {
            type: 'input',
            message: "Where does your intern go to school?",
            name: 'school',
            default: 'CU Boulder',
        },
    ])
    .then(internAnswers => {
        const { name, id, email, school} = internAnswers;
        teamObj.interns.push(new Intern(name, id, email, school));
        employeeChoice();
    })
};
// create function to determine which questions are asked based on input
function employeeChoice() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like to add another member to your team?',
            choices: ['Intern', 'Engineer', 'No']
        }
    ])
    .then((choices) => {
        const {choice} = choices;
        if (choice === 'Intern') {
            internQuestions();
        } else if (choice === 'Engineer') {
            engineerQuestions();
        } else {
            writeToFile();
        }
    })
}

// Function to write the html page using our renderTeam function and our teamObj together
function writeToFile() {
    fs.writeFile('./dist/index.html', renderTeam(teamObj), function(err) {
        if(err) {
            throw err;
        } console.log('Profile generated!');
    })
}

function init() {
    managerQuestions()      
};
//Run the app
init();