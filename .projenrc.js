const { web, DependenciesUpgradeMechanism, JsonFile } = require('projen');

const AUTOMATION_TOKEN = "PROJEN_UPGRADE_KEY";

const project = new web.NextJsTypeScriptProject({
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'my-portfolio',

  projenUpgradeSecret: AUTOMATION_TOKEN,
  projenUpgradeSchedule: ["0 0 * * *"],
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ["auto-approve"],
      secret: AUTOMATION_TOKEN,
    },
  }),
  autoApproveOptions: {
    secret: "GITHUB_TOKEN",
    allowedUsernames: ["PlengNakdee"],
  },

  typescriptVersion: "4.3",
  minNodeVersion: "14.15.0",
  eslint: true,
  gitignore: ["out"],

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
      "source-map-support",
      "@sanity/cli",
      "@testing-library/dom",
      "@testing-library/react",
      "@testing-library/user-event",
      "@testing-library/jest-dom",
      "@testing-library/react-hooks",
      "i18next-parser",
      "i18next-fs-backend",
      "@types/react-scroll",
    ],
    /* spellchecker: enable */

    tailwind: false,

    tsconfig: {
      compilerOptions: {
        rootDir: ".",
      },
      exclude: ["*/**/*.test.tsx", "setupTests.ts", "node_modules", "lib"],
    },

    eslintOptions: {
      fileExtensions: [".ts", ".tsx"],
      ignorePatterns: [
        ".js",
        ".d.ts",
        "node_modules/",
        "*.generated.ts",
        "coverage",
        "*.config.js",
        "studio/node_modules",
        "sanity_api/",
        "server.js",
        ".env.local",
        "studio/backup.ndjson",
        "_app.js",
      ],
      prettier: true,
      lintProjenRc: false,
    },
    jestOptions: {
      typescriptConfig: {
        compilerOptions: {
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
          lib: ["ES2020"],
          skipLibCheck: true,
          target: "ES2020",
        },
      },
    },
});

project.removeTask('dev')
const nextDev = project.addTask('dev', {
  description: 'Set script for next dev',
  // category: tasks.TaskCategory.BUILD,
});
nextDev.exec('node server.js');

project.removeTask('build')
const nextBuild = project.addTask('build', {
  description: 'Set script for next build',
  // category: tasks.TaskCategory.BUILD,
});
nextBuild.exec('next build');

project.removeTask('start')
const nextStart = project.addTask('start', {
  description: 'Set script for next start',
  // category: tasks.TaskCategory.BUILD,
});
nextStart.exec('node server.js');

new JsonFile(project, ".vscode/settings.json", {
  obj: {
    "typescript.implementationsCodeLens.enabled": true,
    "typescript.locale": "en",
    "typescript.referencesCodeLens.enabled": true,
    "typescript.referencesCodeLens.showOnAllFunctions": true,
    "typescript.suggest.completeFunctionCalls": false,
    "typescript.surveys.enabled": false,
    "npm.packageManager": "yarn",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.tabSize": 2,
    "diffEditor.codeLens": true,
    "files.trimTrailingWhitespace": true,
    "emmet.triggerExpansionOnTab": false,
    "eslint.alwaysShowStatus": true,
    "eslint.lintTask.enable": true,
    "eslint.format.enable": true,
    "eslint.packageManager": "yarn",
    "typescript.tsdk": "./node_modules/typescript/lib",
    "css.validate": false,
    "editor.quickSuggestions": { strings: true },
    "tailwindCSS.colorDecorators": true,
    "tailwindCSS.validate": true,
    "tailwindCSS.emmetCompletions": true,
    "git.ignoreLimitWarning": true,
    "jest.runAllTestsFirst": false,
    "jest.restartJestOnSnapshotUpdate": true,
  },
  readonly: false,
});

project.synth();