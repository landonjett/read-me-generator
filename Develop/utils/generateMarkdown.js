// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/license-${encodeURI(license.replace(' ', '%20'))}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
      return '';
  }
  switch(license) {
      case 'MIT':
          return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'GPLv3':
          return '[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
      case 'Apache 2.0':
          return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
      case 'BSD 3-Clause':
          return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
      default:
          return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `## License
This project is licensed under the ${license} license. For more information, see the ${renderLicenseLink(license)}.
`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

// ... (Other sections like Installation, Usage, etc.)

${renderLicenseSection(data.license)}

// ... (Additional sections like Questions, Contact, etc.)
`;
}

module.exports = generateMarkdown;
