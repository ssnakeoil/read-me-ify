// Create a function to format the README file
function readmeGenerator(data) {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  First, clone this repository to your machine. Then, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}

  ## License
  
  ${renderLicense(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  Run the following command to test:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  Feel free to shoot me a message if encounter any issues with this repository!: ${
    data.email
  }. Like what you see? Take a look at some of my other work!: [${data.github}](https://github.com/${
    data.github
  }/).
  
  `;
}
