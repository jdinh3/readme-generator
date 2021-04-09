// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your GitHub URL?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        name: "features",
        message: "What kind of features did you include in your project?",
      },
      {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
        default: "npm i",
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "contributing",
        message:
          "What does the user need to know about contributing to the repo?",
      },
    ])
    .then((answers) => {
      const readMeContent = generateMarkdown(answers);

      writeToFile("dist/readMe.md", readMeContent);
    });
}

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("successfully created readme.md")
  );
}

// Function call to initialize app
init();
