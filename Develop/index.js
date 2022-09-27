// TODO: Include packages needed for this application
const inquirer = require('inquirer')

console.log("inquire working");

const fs = require ('fs');

const generateMarkdown =require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Heading',
        message: 'README.md Heading',
      },
    {
        type: 'input',
        name: 'titel',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a breif description of your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'istallation giude for the project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should users use your app?',
      },
      {
        type: 'input',
        name: 'about',
        message: 'why did you build this project',
      },
      {
        type: 'input',
        name: 'improment',
        message: 'what did you learn this project',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your Email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license: ',
        choices: [
          'MIT',
          'Mozilla',
          'Apache',
          'None',
        ]
      },
]

   

// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeToFile("./README.md", generateMarkdown(data), err =>{
    if (err){
        console.log(err);
        return
    }
    else{
        console.log("your fille has been created")
    }

});
}





// Function call to initialize app
init();
