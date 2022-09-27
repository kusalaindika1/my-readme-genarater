// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
 function renderLicenseBadge(license) {
  if(license != 'None') {
`![GitHub license](https://img.shields.io/badge/License-${license}-green)`;
  } else {
    return "";
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
 function renderLicenseLink(license) {
  if(license != "None") {
   `[License](#license)`;
  } else {
    return "";
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
 function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Heading}

   ## ${data.titel}
   ${renderLicenseBadge(data.license)}

   ## Table Of Contents
   ${renderLicenseLink(data.license)}
   ## Description

   ${data.description}

   ## Install 
   ${data.install}

   ## about
   ${data.about}

   #improvment
   ${data.improvment}

   
 `;
 }

 module.exports = generateMarkdown;
