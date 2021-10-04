const { AwsCdkTypeScriptApp, web } = require("projen");

const projectName = "my-portfolio";

const project = new AwsCdkTypeScriptApp({
  cdkVersion: "1.95.2",
  cdkVersionPinning: true,
  defaultReleaseBranch: "main",
  name: `${projectName}-backend`,

  cdkDependencies: [
    "@aws-cdk/core",
    "@aws-cdk/aws-s3-deployment",
    "@aws-cdk/aws-s3",
  ],
});

project.removeTask('build')
const nextBuild = project.addTask('build', {
  description: 'Set script for next build',
});
nextBuild.exec('yarn --cwd frontend next build');

project.synth();

const frontend = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: "main",
  outdir: "frontend",
  parent: project,
  name: `${projectName}-frontend`,

  typescriptVersion: "4.3",
  minNodeVersion: "14.15.0",
  eslint: true,
  // gitignore: ["out"],

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
