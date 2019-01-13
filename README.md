# [Starter Project CLI](https://starter.silvestarbistrovic.from.hr/cli/)

[![Starter Project CLI on NPM](https://github.com/maliMirkec/starter-project-cli/blob/master/gfx/starter-project-cli-npm.svg)](https://www.npmjs.com/package/starter-project-cli)
[![Starter Project on NPM](https://github.com/maliMirkec/starter-project-cli/blob/master/gfx/starter-project-npm.svg)](https://www.npmjs.com/package/starter-project)

> Starter Project CLI creates a perfect Gulp development environment for everyone within a few minutes.

![Starter Project CLI Logo - Folder with start button and CLI word](https://raw.githubusercontent.com/maliMirkec/starter-project-cli/master/gfx/starter-project-cli.png)

Starter Project CLI, or `spro`, is a command line interface that could save you a vast amount of time that you usually spend on configuring your project.

It has Gulp tasks for processing the following file types:
* HTML (pug)
* CSS (Sass)
* JavaScript (es6)
* Graphic (PNG, JPEG, SVG, GIF)
* Fonts
* Favicons

The tasks include compiling, lintering, formatting, compressing, and transforming your source file to produce the most optimized production files.

__If you would like to add a Gulp task, feel free to open [a pull request], or request a feature by creating [a new issue].__

## Installation

You could use Starter Project CLI as a global or local package.

To install the package locally, run:
```
npm install starter-project-cli --save
```

To install the package globally, run:
```
npm install --global starter-project-cli --save
```

## Getting started

After successful installation, you could run the `spro` command. If you have installed the package locally, you could initialize the package by running the following command:
```
node_modules/.bin/spro start
```

If you have installed the package globally, you could initialize the package by running the following command:
```
spro start
```

Starter Project CLI would prompt you to ask a few questions about the project structure.

![Starter Project CLI in action](https://raw.githubusercontent.com/maliMirkec/starter-project-cli/master/gfx/ss.png)

Once you answer all questions, Starter Project CLI would do two things:
- copy all required files (Gulp task files and configuration files), and
- install all dependencies for the project.

_Note that the install process should last a few minutes. Do not terminate the process._

## Gulp tasks

In the `gulpfile.js` folder you could find all Gulp task files and configuration files.

There are three available major Gulp tasks:
| Task      | Description                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------- |
| `default` | the task for running and watching all the tasks (useful for more thorough development process)  |
| `build`   | the task for running all tasks with the exit process (useful for Netlify builds)                |
| `dev`     | the task for running and watching only essential tasks (useful for primary development process) |

There are four other Gulp tasks:

| Task        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `bumpPatch` | the task for bumping patch versions of the `package.json` file |
| `bumpMinor` | the task for bumping minor versions of the `package.json` file |
| `bumpMajor` | the task for bumping major versions of the `package.json` file |
| `clean`     | the task for deleting compiled code.                           |

Run `gulp --tasks` to see all available Gulp tasks.

## Configuration file

If you want more control over your Gulp tasks, you could find the configuration files for every single Gulp task in the `gulpfile.js` folder.

`.starter-project.json` is the main configuration file in which you could find all your answers from the command line. Avoid editing this file manually, unless you know what you are doing. Run `spro start` command again instead.

For example, if you have more dependencies for your Sass files, you could update the `sassConfig.includePaths` section in the `.css.json` file:
```
{
  "sassConfig": {
    "includePaths": [
      "helpers.proot/node_modules/modularscale-sass/stylesheets/",
      "helpers.proot/node_modules/sass-mq/",
      "helpers.proot/node_modules/normalize.css/",
      "helpers.source/config.css.src/",
      "helpers.source/config.css.src/components/"
    ]
  },
  "styleLintConfig": {
    "reporters": [{
      "formatter": "string",
      "console": true
    }]
  },
  "autoprefixerConfig": {
    "browsers": ["last 5 versions"],
    "cascade": false
  },
  "renameConfig": {
    "suffix": ".min"
  }
}
```

### Path Placeholders

You could notice _path placeholders_ such as `helpers.proot` and `config.css.src`.

The package would replace all path placeholders with settings from the main config file, `.starter-project.json` file.

**Use path placeholders to avoid hardcoding paths in the project.**

Here is the list of all available path placeholders:
| Placeholder        | Replacement                         |
| ------------------ | ----------------------------------- |
| `helpers.proot`    | project root path                   |
| `helpers.source`   | project source path                 |
| `helpers.dist`     | project destination path            |
| `config.html.src`  | project HTML source path            |
| `config.html.dist` | project HTML source path            |
| `config.css.src`   | project CSS source path             |
| `config.css.dist ` | project CSS destination path        |
| `config.js.src`    | project JavaScript source path      |
| `config.js.dist`   | project JavaScript destination path |

## Command

Starter Project CLI package has only one command:
- `spro start`, `spro s`.

Also, you could run `spro --version` to check the version of the package.

## Questions

Starter Project CLI would ask you the following questions:
- [GENERAL] Do you want to override the project? Be sure to commit all changes before you proceed.
- [GENERAL] What is the root folder of the project?
- [GENERAL] Where is the folder with the source code of the project (relative to default path)?
- [GENERAL] Where do you want to store compiled code of the project (relative to default path)?
- [GENERAL] Are you sure that you want to override the project?
- [HTML] Do you want to run HTML tasks?
- [HTML] Are you using Pug as a template engine?
- [HTML] Where is the folder with HTML source code (relative to default source path)?
- [HTML] Where do you want to store compiled HTML code (relative to default destination path)?
- [HTML] Do you want to lint HTML code?
- [CSS] Do you want to run CSS (Sass) tasks?
- [CSS] Where is the folder with CSS source code (relative to default source path)?
- [CSS] Where do you want to store compiled CSS code (relative to default destination path)?
- [CSS] Do you want to lint CSS code?
- [JS] Do you want to run JavaScript (es6) tasks?
- [JS] Where is the folder with JavaScript source code (relative to default source path)?
- [JS] Where do you want to store compiled JavaScript code (relative to default destination path)?
- [JS] Do you want to lint JavaScript code?
- [IMAGES] Do you want to run image optimization tasks?
- [IMAGES] Where is the folder with images (relative to default source path)?
- [IMAGES] Where do you want to store optimized images (relative to default destination path)?
- [FONTS] Do you use local fonts? Do you want to run font tasks?
- [FONTS] Where is the folder with local fonts (relative to default source path)?
- [FONTS] Where do you want to store local fonts (relative to default destination path)?
- [FAVICON] Do you want to run favicon tasks?
- [CRITICAL] Do you want to extract Critical CSS?
- [COMPRESS] Do you want to compress (gzip) all assets?
- [KSS] Do you want to add KSS style guide?
- [KSS] Where do you want to store KSS style guide (relative to default destination path)?
- [SASSDOC] Do you want to add documentation for the SASS code (SassDoc)?
- [SASSDOC] Where do you want to store SassDoc files (relative to default destination path)?
- [JSDOC] Do you want to add documentation for the JS code (JSDoc)?
- [JSDOC] Where do you want to store JSdoc files (relative to default destination path)?

## Packages

Starter Package CLI uses the following packages:
- `@babel/core`,
- `@babel/preset-env`,
- `browser-sync`,
- `del`,
- `eslint`,
- `eslint-config-airbnb-base`,
- `eslint-config-standard`,
- `eslint-plugin-import`,
- `eslint-plugin-node`,
- `eslint-plugin-standard`,
- `gulp`,
- `gulp-autoprefixer`,
- `gulp-babel`,
- `gulp-bump`,
- `gulp-clean-css`,
- `gulp-cssimport`,
- `gulp-eslint`,
- `gulp-exit`,
- `gulp-htmllint`,
- `gulp-htmlmin`,
- `gulp-if`,
- `gulp-imagemin`,
- `gulp-include`,
- `gulp-inline-source`,
- `gulp-penthouse`,
- `gulp-pug`,
- `gulp-real-favicon`,
- `gulp-rename`,
- `gulp-sass`,
- `gulp-sourcemaps`,
- `gulp-standard`,
- `gulp-stylelint`,
- `gulp-uglify`,
- `gulp-wait`,
- `imagemin-mozjpeg`,
- `imagemin-pngquant`,
- `kss`,
- `path`,
- `stylelint`,
- `stylelint-config-sass-guidelines`,
- `stylelint-order`, and
- `stylelint-scss`.

## Support

Show your support by starring the project on [Github](https://github.com/maliMirkec/starter-project-cli), or by [sharing on Twitter](https://twitter.com/intent/tweet?url=https://github.com/maliMirkec/starter-project-cli/&text=Starter%20Project%20CLI%20creates%20a%20perfect%20Gulp%20development%20environment%20for%20everyone%20within%20a%20few%20minutes.%20🔥%20Try%20it%20today!%20💯&via=malimirkeccita), please. 🙏

Contribute: create [a new issue](https://github.com/maliMirkec/starter-project-cli/issues/new) or create [a pull request](https://github.com/maliMirkec/starter-project-cli/compare).


[a pull request]: https://github.com/maliMirkec/starter-project/compare
[a new issue]: https://github.com/maliMirkec/starter-project/issues/new
