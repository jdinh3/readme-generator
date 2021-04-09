// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "BSD 3") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return "## License";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.install}
  
  ## Usage
  ${data.repo}

  ## Credits
 ${data.name}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
  
  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at (${data.name})

`;
}

module.exports = generateMarkdown;
