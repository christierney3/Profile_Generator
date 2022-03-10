const renderTeam = require('./utils/generateHtml');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const inquirer = require('inquirer');
const fs = require('fs');

let teamObj = {
    manager: '',
    interns: [],
    engineers: [],
}

function managerQuestions() {
    let employee = new Employee
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
        teamObj.manager = new Manager(name, id, email, office);
        employeeChoice();
    })
        // const { name, id, email, office } = managerAnswers;
        // 


};

function engineerQuestions() {
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
            default: 'John'
        },
        {
            type: 'input',
            message: "What is the engineer's id #?",
            name: 'id',
            default: '4'
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'email',
            default: 'john@john.com'
        },
        {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'github',
            default: 'john@github.com',
        },
        {
            type: 'confirm',
            message: "Would you like to add any more members to your team?",
            name: 'addMember',
            default: false
        }
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
            default: 'CU',
        },
    ])
    .then(internAnswers => {
        const { name, id, email, github} = internAnswers;
        teamObj.interns.push(Intern(name, id, email, github));
        employeeChoice();
    })
};

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

// function addIntern() {
//     let intern = new Intern
//         .then((answers) => {
//             intern.name = answers.name;
//             intern.id = answers.id;
//             intern.email = answers.email;
//             intern.school = answers.school;
//             generateHtml.teamCards(intern);
//         })
// };

// function addEngineer() {

// };

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

init();
//     .then(employeeAnswers => {

//         let { name, id, email, github, school, addMember, role } = employeeAnswers;

//         if (role === 'Engineer') {
//         newEmployee = new Employee(name, id, email, github);
//         } else if (role === 'Intern') {
//         newEmployee = new Employee(name, id, email, school);
//         }

//         team.push(newEmployee);

//         if (addMember === true) {
//             return addEmployee();
//         } return team;
//     })
// };

// function writeToFile(data) {
//     fs.writeFile('./dist/index.html', generateHtml(data), function (err) {
//         err ? console.log(err) : console.log('Profile successfully generated!')
//     });
// };

// addManager()
//     .then(addEmployee)
//     .then(writeToFile)
// let {name, id, email, role, github, school} = employeeAnswers;
//     if (role === 'Engineer') {
//         let engineer = new Engineer(name, id, email, github)
//             .then((employeeAnswers) => {
//                 engineer.name = employeeAnswers.name;
//                 engineer.id = employeeAnswers.id;
//                 engineer.email = employeeAnswers.email;
//                 engineer.github = employeeAnswers.github;
//                 generateHtml.teamCards(engineer);
//         })
//     } else if (role === 'Intern') {
//         let intern = new Intern(name, id, email, school)
//             name = employeeAnswers.name;
//             id = employeeAnswers.id;
//             email = employeeAnswers.email;
//             school = employeeAnswers.school;
//         generateHtml.teamCards(intern);
//     } else {
//         generateHtml.generateHtml();
//     }
        // .then(employeeQuestions)
        //     .then((answers) => {
        //         intern.name = answers.name;
        //         intern.id = answers.id;
        //         intern.email = answers.email;
        //         intern.school = answers.school;
        //         generateHtml.teamCards(intern);
        //     })

        //         .then((answers) => {
        //     manager.name = answers.name;
        //     manager.id = answers.id;
        //     manager.email = answers.email;
        //     manager.office = answers.office;
        //     generateHtml.teamCards(manager);
        // })