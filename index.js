const generateHtml = require('./utils/generateHtml')
const inquirer = require('inquirer');
const fs = require('fs');
const team = [];
let newEmployee;

function addManager() {
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
            default: '16'
        }
    ])
    .then(managerAnswers => {
        const { name, id, email, office } = managerAnswers;
        const newManager = new Manager(name, id, email, office);
        team.push(newManager);
    })
};

function addEmployee() {
    return inquirer.prompt ([
        {
            type: 'input',
            message: "What is the employee's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the employee's id #?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the employee's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'github',
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            message: "Where does your intern go to school?",
            name: 'school',
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            message: "Would you like to add any more members to your team?",
            name: 'addMember',
            default: false
        }
    ])
    .then(employeeAnswers => {

        let { name, id, email, github, school, addMember } = employeeAnswers;

        if (input.role === 'Engineer') {
        newEmployee = new Employee(name, id, email, github);
        } else if (input.role === 'Intern') {
        newEmployee = new Employee(name, id, email, school);
        }

        team.push(newEmployee);

        if (addMember === true) {
            return addEmployee();
        } return team;
    })
};

function writeToFile() {
    fs.writeFile('./dist/index.html', data, function (err) {
        if (err) throw err;
    })
    .then(() => console.log('Profile succesfully generated.'))
    .catch((err) => console.log(err));
};

addManager()
    .then(addEmployee)
    .then(writeToFile)