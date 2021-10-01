const { web, ProjectType, DependenciesUpgradeMechanism, } = require('projen');

const AUTOMATION_TOKEN = "PROJEN_UPGRADE_KEY";

const project = new web.NextJsTypeScriptProject({
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'my-portfolio',
  projectType: ProjectType.APP,

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
project.synth();