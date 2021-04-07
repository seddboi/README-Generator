// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief introduction/description of the project:'
    },
    {
        type: 'input',
        name: 'accomplished',
        message: 'Give a description of how you accomplished the project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Describe how to install(if applicable):'
    },
    {
        type: 'input',
        name: 'uses',
        message: 'Describe how the project can be used/is meant to be used: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license to guard this project',
        choices: [
            'MIT',
            'Apache', 
            'GPL',
            'ISC',
            'Mozilla', 
            'Open'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email to be reached at?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who else contributed to this project(add commas in between each username)?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter the Github Repo link:'
    },
    {
        type: 'input',
        name: 'livelink',
        message: 'Please enter the live webiste link:'
    },
]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}
const init = () => {
   inquirer.prompt(questions)
   .then((answers) => {
       const {title, description, accomplished, install, uses, license, username, contributors, repo, livelink} =  answers;
       const string = `# ${answers.title}\n## Table of Contents\n\n## Introduction\n${answers.description}\n\n## How the project was accomplished\n ${answers.accomplished}\n\n## Installation Guide\n ${answers.install}\n\n## Usability\n ${answers.uses}\n\n## Links to Gihub Repository and Live Site\n Github Repo: ${answers.repo}\n Live Site: ${answers.livelink}\n\n## Questions?\n Creator: ${answers.username}\n Email me at: ${answers.email}\n Contributors: ${answers.contributors}`;
       fs.writeFile('newREADME.md', string, (err) => {
           if (err) throw err;
           console.log('The file has been saved.');
        }); 
   }) 
}

// Function call to initialize app
init();
