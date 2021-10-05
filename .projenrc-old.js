const { AwsCdkTypeScriptApp, web } = require("projen");

const projectName = "my-portfolio";

const project = new AwsCdkTypeScriptApp({
  cdkVersion: "1.95.2",
  cdkVersionPinning: true,
  defaultReleaseBranch: "main",
  name: `${projectName}-backend`,

  gitignore: ["aws"],

  cdkDependencies: [
    "@aws-cdk/core",
    "@aws-cdk/aws-s3-deployment",
    "@aws-cdk/aws-s3",
    '@aws-cdk/aws-iam',
  ],

  deps: [
  ],

  devDeps: [
    'aws-sdk',
    '@types/aws-lambda',
    '@types/node',
    'jest-extended',
    'eslint-plugin-jest',
    'eslint-plugin-jest-formatting',
    'cdk-assume-role-credential-plugin',
  ],
});

project.removeTask('dev')
const nextDev = project.addTask('dev', {
  description: 'Set script for next build',
});
nextDev.exec('yarn --cwd frontend next dev');

project.removeTask('build')
const nextBuild = project.addTask('build', {
  description: 'Set script for next build',
});
nextBuild.exec('yarn --cwd frontend next build');

project.removeTask('export')
const nextExport = project.addTask('export', {
  description: 'Set script for next export',
});
nextExport.exec('yarn --cwd frontend next export');

project.synth();

const frontend = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: "main",
  outdir: "frontend",
  parent: project,
  name: `${projectName}-frontend`,

  typescriptVersion: "4.3",
  minNodeVersion: "14.15.0",
  eslint: true,
  gitignore: ["out"],

  tsconfig: {
    compilerOptions: {
      rootDir: ".",
    },
    exclude: ["*/**/*.test.tsx", "setupTests.ts", "node_modules", "lib"],
  },

  /* spellchecker: disable */
  deps: [
    "tailwindcss",
    "@tailwindcss/typography",
    "@tailwindcss/forms",
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/line-clamp",
    "postcss",
    "autoprefixer",
    "@heroicons/react",
    "@headlessui/react",
    "react",
    "react-dom",
    "react-scroll",
    "next",
  ],

  devDeps: ["@types/react-scroll"],
  /* spellchecker: enable */
});

frontend.synth();
