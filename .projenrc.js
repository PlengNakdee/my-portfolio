const {
  AwsCdkTypeScriptApp,
  DependenciesUpgradeMechanism,
  web,
} = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_UPGRADE_KEY';

const projectName = 'my-portfolio';

const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.95.2',
  cdkVersionPinning: true,
  defaultReleaseBranch: 'main',
  name: `${projectName}-backend`,

  cdkDependencies: ['@aws-cdk/aws-s3-deployment', '@aws-cdk/aws-s3'],

  projenUpgradeSecret: AUTOMATION_TOKEN,
  projenUpgradeSchedule: ['0 0 * * *'],
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve'],
      secret: AUTOMATION_TOKEN,
    },
  }),
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['PlengNakdee'],
  },
});

project.synth();

const frontend = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: 'main',
  outdir: 'frontend',
  parent: project,
  name: `${projectName}-frontend`,

  typescriptVersion: '4.3',
  minNodeVersion: '14.15.0',
  eslint: true,
  gitignore: ['out'],

  /* spellchecker: disable */
  deps: [
    'tailwindcss',
    '@tailwindcss/typography',
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/line-clamp',
    'postcss',
    'autoprefixer',
    '@heroicons/react',
    '@headlessui/react',
    'react',
    'react-dom',
    'react-scroll',
  ],

  devDeps: ['@types/react-scroll'],
  /* spellchecker: enable */
});

frontend.synth();
