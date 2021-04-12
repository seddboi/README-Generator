// TODO: Include packages needed for this application
const util = require('util');
const inquirer = require('inquirer');
const fs = require('fs');
const newMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'introduction',
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
            'Open',
            'n/a'
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        };
        console.log('The file has been saved.')
    });
}

const writeFile = util.promisify(writetoFile);

// TODO: Create a function to initialize app
async function init() {
    console.log('Please respond accordingly...');
    const entries = await inquirer.prompt(questions);

    console.log('Applying entries... Here are your changes:');
    console.log(entries);

    const passIntoGM = newMarkdown(entries);

    await createFile('newREADME.md', passIntoGM);

//    inquirer.prompt(questions)
//    .then((answers) => {
//        const {title, description, accomplished, install, uses, license, username, contributors, repo, livelink} =  answers;
//        const string = `# ${answers.title}\n\n## Introduction\n${answers.description}\n\n## How the project was accomplished\n ${answers.accomplished}\n\n## Installation Guide\n ${answers.install}\n\n## Usability\n ${answers.uses}\n\n## Links to Gihub Repository and Live Site\nGithub Repo: ${answers.repo}\nLive Site: ${answers.livelink}\n\n## Questions?\nCreator: ${answers.username}\nEmail me at: ${answers.email}\nContributors: ${answers.contributors}`;
//        fs.writeFile('newREADME.md', string, (err) => {
//            if (err) throw err;
//            console.log('The file has been saved.');
//         }); 
//    }) 
}

// Function call to initialize app
init();
