const { AwsCdkTypeScriptApp, web } = require('projen');

const projectName = 'my-portfolio';
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.95.2',
  cdkVersionPinning: true,
  defaultReleaseBranch: 'main',
  name: `${projectName}-backend`,

  cdkDependencies: [
    '@aws-cdk/aws-s3-deployment',
    '@aws-cdk/aws-s3',
  ],

});
project.synth();

const frontend = new web.ReactTypeScriptProject({
  defaultReleaseBranch: 'main',
  outdir: 'frontend',
  parent: project,
  name: `${projectName}-frontend`,

      /* spellchecker: disable */
      deps: [
        "tailwindcss@^2",
        "@tailwindcss/typography",
        "@tailwindcss/forms",
        "@tailwindcss/aspect-ratio",
        "@tailwindcss/line-clamp",
        "postcss@^8",
        "autoprefixer@^9",
        "@heroicons/react",
        "@headlessui/react",
        "react",
        "react-dom",
        "react-scroll",
      ],
  
      devDeps: [
        "@types/react-scroll",
      ],
      /* spellchecker: enable */

});

// frontend.addTask('dev', {
//   description: 'Runs the application locally',
//   exec: 'react-scripts start',
// });

frontend.synth();