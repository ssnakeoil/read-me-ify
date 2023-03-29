// where imported packages live
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const readmeGenerator = require('./utils/readmeGenerator.js');

const dialog = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Please provide a table of contents.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }
];

// calling fs to write file utilizing user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initializes program
function init() {
    inquirer.prompt(dialog).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', readmeGenerator({...inquirerResponses}));
    })
}

// initializes program on startup
init();