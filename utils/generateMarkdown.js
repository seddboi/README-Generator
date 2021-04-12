// TODO: Create a function to generate markdown for README
function generateMarkdown(entries) {
  let newReadMe = 
  `# ${entries.title}

  ## Introduction

  ${entries.introduction}

  ## How the project was created

  ${entries.accomplished}

  `;
  // add table of contents somewhere in here

  if (entries.install !== '') {
    newReadMe += 
    `## Installation

    ${entries.install}

    `
  };

  if (entries.uses !== '') {
    newReadMe +=
    `## Usage 
    -- How and Where it can be used --

    ${entries.uses}

    `
  };

  newReadMe += 
  `## Links
  
  Github Repo Link : ${entries.repo}
  
  `;

  if (entries.livelink !== '') {
    newReadMe +=
    `Live Site Link : ${entries.livelink}
    
    `
  };

  if (entries.license !== 'n/a') {
    switch (entries.license) {
      case 'MIT': 
        newReadMe += 
        `## License

        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        
        `;
        break;
      
      
      case 'Apache': 
        newReadMe += 
        `## License

        [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

        `;
        break;

      case 'GPL': 
        newReadMe += 
        `## License

        [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

        `;
        break;  

      case 'ISC': 
        newReadMe += 
        `## License

        [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

        `;
        break;

      case 'Mozilla': 
        newReadMe += 
        `## License

        [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

        `;
        break;
        
      case 'Open': 
        newReadMe += 
        `## License

        [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
        `;
        break;  
        
    }
  }

  newReadMe += 
  `## Questions?
  
  Reach me at : ${entries.email}
  
  Github Profile : https://github.com/${entries.username}
  
  `;

};

module.exports = generateMarkdown;

