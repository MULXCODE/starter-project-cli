# [Starter Project CLI](https://starter.silvestarbistrovic.from.hr/cli/)

[![Starter Project CLI on NPM](https://img.shields.io/badge/starter--project--cli-npm-blue.svg)](https://www.npmjs.com/package/starter-project-cli)
[![Starter Project on NPM](https://img.shields.io/badge/starter--project-npm-blue.svg)](https://www.npmjs.com/package/starter-project)

> Starter Project CLI creates a perfect Gulp development environment for everyone within a few minutes.

![Starter Project CLI Logo - Folder with start button and CLI word](https://github.com/maliMirkec/starter-project-cli/raw/master/gfx/starter-project-cli.png)

Starter Project CLI, or `spro`, is a command line interface that could save you a vast amount of time that you usually spend on configuring your project.

SPRO would install Gulp tasks for processing the following file types:
* HTML (pug)
* CSS (Sass)
* JavaScript (es6)
* Graphic (PNG, JPEG, SVG, GIF)
* Fonts
* Favicons

The tasks include compiling, lintering, formatting, compressing, and transforming your source file to produce the most optimized production files.

__Info: If you would like to add a Gulp task, feel free to open [a pull request], or request a feature by creating [a new issue].__

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

![Starter Project CLI in action](https://github.com/maliMirkec/starter-project-cli/raw/7cbcabe46859b6c385a94c6925de99bb0e7e7d56/gfx/ss.png)

Once you answer all questions, Starter Project CLI would do two things:
- copy all required files (Gulp task files and configuration files), and
- prepare a command for installation of dependencies required for the project.

_Warning: Note that the installation process could last a few minutes._

## Gulp tasks

In the `gulpfile.js` folder you could find all Gulp task files and configuration files.

There are four available major Gulp tasks:

| Task      | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `default` | the task for running all the tasks (useful for more thorough development process)             |
| `build`   | the task for running all tasks with the exit process (useful for Netlify builds, for example) |
| `dev`     | the task for running only essential tasks (useful for basic development process)              |
| `clean`   | the task for deleting compiled code.                                                          |

And there are three optional Gulp tasks for versioning (available only you choose SEMVER option):

| Task        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `bumpPatch` | the task for bumping patch versions of the `package.json` file |
| `bumpMinor` | the task for bumping minor versions of the `package.json` file |
| `bumpMajor` | the task for bumping major versions of the `package.json` file |

_Pro tip: Run `gulp --tasks` to see all available Gulp tasks._

## Configuration file

If you want more control over your Gulp tasks, you could find the configuration files for every single Gulp task in the `gulpfile.js` folder.

`.starter-project.json` is the main configuration file in which you could find all your answers from the command line.

_Avoid editing this file manually, unless you know what you are doing. Run `spro start` command again instead._

See more about individual configuring tasks [in the Task Configuration section].

### Path Placeholders

SPRO provides _path placeholders_ for easier configuration. All path placeholders would be replaced with settings from the main config file, `.starter-project.json` file.

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

## Task Configuration

Every task has its own configuration file.

### BrowserSync Configuration

The default BrowserSync configuration is defined as follows:
```
{
  "port": 8080,
  "server": {
    "baseDir": ""
  }
}
```

You could see all available options [on BrowserSync the npm page].

### Favicon Configuration

The default favicon configuration is defined as follows:
```
{
  "run": true,
  "src": "helpers.source/config.html.src/_assets/favicon.pug",
  "dest": "helpers.source/config.html.src/_assets"
}
```

To make the favicon task work, you should visit the [RealFaviconGenerator] and run the wizard. At the end of the process, you should copy the setting and put them in the `.favicon-data.json` file under `gulpfile.js` directory.

If you need more help understanding the configuration, please open [a new issue].

### HTML Configuration

The default HTML configuration is defined as follows:
```
{
  "pugConfig": {
    "basedir": "",
    "pretty": true
  },
  "htmllintConfig": {
    "config": "",
    "failOnError": false
  },
  "htmlminConfig": {
    "collapseWhitespace": true
  },
  "renameConfig": {
    "extname": ".html"
  },
  "inlineConfig": {
    "rootpath": ""
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### CSS Configuration

The default CSS configuration is defined as follows:
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

If you need more help understanding the configuration, please open [a new issue].

### JavaScript Configuration

The default JavaScript configuration is defined as follows:
```
{
  "eslintConfig": {
    "configFile": "helpers.proot/.eslintrc.json",
    "fix": true,
    "quiet": true
  },
  "includeConfig": {
    "hardFail": true,
    "includePaths": [
      "helpers.proot/node_modules"
    ]
  },
  "babelConfig": {
    "presets": ["@babel/env"]
  },
  "standardConfig": {
    "breakOnError": false,
    "showRuleNames": true,
    "standard": {
      "globals": [
        "requestAnimationFrame",
        "sessionStorage"
      ]
    }
  },
  "renameConfig": {
    "suffix": ".min"
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### Images Configuration

The default images configuration is defined as follows:
```
{
  "gifConfig": {
    "interlaced": true
  },
  "jpegConfig": {
    "quality": 90,
    "progressive": true
  },
  "pngConfig": {
    "quality": [0.8, 0.9]
  },
  "svgConfig": {
    "plugins": [
      {
        "cleanupAttrs": true
      },
      {
        "removeDoctype": true
      },
      {
        "removeComments": true
      },
      {
        "removeXMLProcInst": true
      },
      {
        "removeMetadata": true
      },
      {
        "removeTitle": false
      },
      {
        "removeDesc": false
      },
      {
        "removeUselessDefs": true
      },
      {
        "removeXMLNS": false
      },
      {
        "removeEditorsNSData": true
      },
      {
        "removeEmptyAttrs": true
      },
      {
        "removeHiddenElems": true
      },
      {
        "removeEditorsNSData": true
      },
      {
        "removeEmptyText": true
      },
      {
        "removeEmptyContainers": true
      },
      {
        "removeViewBox": false
      },
      {
        "cleanupEnableBackground": true
      },
      {
        "convertStyleToAttrs": true
      },
      {
        "convertColors": true
      },
      {
        "convertPathData": true
      },
      {
        "convertTransform": true
      },
      {
        "removeUnknownsAndDefaults": true
      },
      {
        "removeNonInheritableGroupAttrs": true
      },
      {
        "removeUselessStrokeAndFill": true
      },
      {
        "removeUnusedNS": true
      },
      {
        "cleanupIDs": false
      },
      {
        "cleanupNumericValues": true
      },
      {
        "cleanupListOfValues": true
      },
      {
        "moveElemsAttrsToGroup": true
      },
      {
        "moveGroupAttrsToElems": false
      },
      {
        "collapseGroups": true
      },
      {
        "removeRasterImages": true
      },
      {
        "mergePaths": true
      },
      {
        "convertShapeToPath": false
      },
      {
        "sortAttrs": true
      },
      {
        "removeDimensions": true
      },
      {
        "removeAttrs": false
      },
      {
        "removeElementsByAttr": false
      },
      {
        "addClassesToSVGElement": false
      },
      {
        "addAttributesToSVGElement": false
      },
      {
        "removeStyleElement": false
      },
      {
        "removeScriptElement": false
      },
      {
        "removeDimensions": false
      }
    ]
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### Critical CSS Configuration

The default Critical CSS configuration is defined as follows:
```
[{
  "src": "style.css",
  "settings": {
    "out": "style.critical.css",
    "url": "http://localhost:8080/",
    "width": 1920,
    "height": 1200,
    "keepLargerMediaQueries": true,
    "strict": false,
    "blockJSRequests": false,
    "phantomJsOptions": {
      "ssl-protocol": "any",
      "ignore-ssl-errors": true
    }
  }
}]
```

If you need more help understanding the configuration, please open [a new issue].

### Gzip Configuration

The default Gzip configuration is defined as follows:
```
{}
```

You could see all available options [on gulp-gzip the npm page].

### Semver Configuration

The default Semver configuration is defined as follows:
```
{
  "src": ["helpers.proot/package.json"]
}
```

If you need more help understanding the configuration, please open [a new issue].

### KSS Configuration

The default KSS configuration is defined as follows:
```
{
  "title": "Starter Project",
  "source": "helpers.source",
  "destination": "helpers.dist/docs/styleguide/",
  "css": [
    "helpers.dist/config.css.dist/style.css",
    "helpers.dist/config.css.dist/foft.css"
  ],
  "js": [
    "helpers.dist/js/foftFontLoading.js"
  ]
}
```

If you need more help understanding the configuration, please open [a new issue].

### SassDoc Configuration

The default SassDoc configuration is defined as follows:
```
{
  "dest": "/docs/sass/",
  "package": "package.json",
  "autofill": true,
  "verbose": true,
  "theme": "default",
  "display": {
    "access": ["public", "private"],
    "alias": true,
    "watermark": true
  },
  "groups": {
    "undefined": "Misc"
  },
  "basePath": "https://starter.silvestarbistrovic.from.hr/docs/sass/"
}
```

If you need more help understanding the configuration, please open [a new issue].

### JSDoc Configuration

The default JSDoc configuration is defined as follows:
```
{
  "src": ["helpers.source/config.js.src/homepage.md", "helpers.source/config.js.src/"],
  "settings": {
    "tags": {
      "allowUnknownTags": true
    },
    "opts": {
      "destination": "helpers.dist/docs/js/"
    },
    "plugins": [
      "plugins/markdown"
    ],
    "templates": {
      "cleverLinks": true,
      "monospaceLinks": false,
      "default": {
        "outputSourceFiles": true
      },
      "path": "ink-docstrap",
      "theme": "simplex",
      "navType": "vertical",
      "linenums": true,
      "dateFormat": "MMMM Do YYYY, h:mm:ss a"
    }
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### Helpers Configuration

The default helpers configuration is defined as follows:
```
{
  "wait": 20000
}
```

### Watch Configuration

The default watch configuration is defined as follows:
```
{
  "ignoreInitial": true
}
```

This setting will tell Gulp when to terminate the build (watch) process.

## Questions

Starter Project CLI would ask you the following questions:
- [GENERAL] Do you want to override the project? Be sure to commit all changes before you proceed.',
- [GENERAL] What is the root folder of the project?',
- [GENERAL] Where is the folder with the source code of the project (relative to default path)?',
- [GENERAL] Where do you want to store compiled code of the project (relative to default path)?',
- [GENERAL] Are you sure that you want to override the project?',
- [BROWSERSYNC] Do you want to run BrowserSync to preview changes in the browser?',
- [HTML] Do you want to run HTML tasks?',
- [HTML] Are you using Pug as a template engine?',
- [HTML] Where is the folder with HTML source code (relative to default source path)?',
- [HTML] Where do you want to store compiled HTML code (relative to default destination path)?',
- [HTML] Do you want to minify HTML code?',
- [HTML] Do you want to run inline source tasks (inline CSS or SVG in HTML code)?',
- [HTML] Do you want to lint HTML code?',
- [CSS] Do you want to run CSS tasks?',
- [CSS] Are you using Sass?',
- [CSS] Where is the folder with CSS source code (relative to default source path)?',
- [CSS] Where do you want to store compiled CSS code (relative to default destination path)?',
- [CSS] Do you want to minify CSS code?',
- [CSS] Do you want to autoprefix CSS code?',
- [CSS] Do you want to add sourcemaps for CSS code?',
- [CSS] Do you want to lint CSS code?',
- [JS] Do you want to run JavaScript (es6) tasks?',
- [JS] Where is the folder with JavaScript source code (relative to default source path)?',
- [JS] Where do you want to store compiled JavaScript code (relative to default destination path)?',
- [JS] Do you want to minify JavaScript code?',
- [JS] Do you want to add sourcemaps for JavaScript code?',
- [JS] Do you want to lint JavaScript code?',
- [IMAGES] Do you want to run image optimization tasks?',
- [IMAGES] Where is the folder with images (relative to default source path)?',
- [IMAGES] Where do you want to store optimized images (relative to default destination path)?',
- [FONTS] Do you use local fonts? Do you want to run font tasks?',
- [FONTS] Where is the folder with local fonts (relative to default source path)?',
- [FONTS] Where do you want to store local fonts (relative to default destination path)?',
- [FAVICON] Do you want to run favicon tasks?',
- [CRITICAL] Do you want to extract Critical CSS?',
- [COMPRESS] Do you want to compress (gzip) all assets?',
- [KSS] Do you want to add KSS style guide?',
- [KSS] Where do you want to store KSS style guide (relative to default destination path)?',
- [SASSDOC] Do you want to add documentation for the SASS code (SassDoc)?',
- [SASSDOC] Where do you want to store SassDoc files (relative to default destination path)?',
- [JSDOC] Do you want to add documentation for the JS code (JSDoc)?',
- [JSDOC] Where do you want to store JSdoc files (relative to default destination path)?',
- [SEMVER] Do you want to add semver versioning tasks (for automatic bump of any version in any file which supports semver versioning, like package.json)?',
- [YARN] Do you use Yarn as your default dependency manager?',

## Packages

Every possible package for Gulp tasks:
- @babel/core,
- @babel/preset-env,
- browser-sync,
- del,
- eslint,
- eslint-config-airbnb-base,
- eslint-config-standard,
- eslint-plugin-import,
- eslint-plugin-node,
- eslint-plugin-standard,
- gulp,
- gulp-autoprefixer,
- gulp-babel,
- gulp-bump,
- gulp-clean-css,
- gulp-cssimport,
- gulp-eslint,
- gulp-exit,
- gulp-gzip,
- gulp-htmllint,
- gulp-htmlmin,
- gulp-if,
- gulp-imagemin,
- gulp-include,
- gulp-inline-source,
- gulp-jsdoc3,
- gulp-penthouse,
- gulp-pug,
- gulp-real-favicon,
- gulp-rename,
- gulp-sass,
- gulp-sourcemaps,
- gulp-standard,
- gulp-stylelint,
- gulp-uglify,
- gulp-wait,
- imagemin-mozjpeg,
- imagemin-pngquant,
- kss,
- path,
- sassdoc,
- stylelint,
- stylelint-config-sass-guidelines,
- stylelint-order, and
- stylelint-scss.

## Support

Show your support by starring the project on [GitHub], or by [sharing on Twitter]. 🙏

Contribute: create [a new issue] or create [a pull request].

[in the Task Configuration section]: #task-configuration
[on BrowserSync the npm page]: https://browsersync.io/docs/options
[RealFaviconGenerator]: https://realfavicongenerator.net/
[on gulp-gzip the npm page]: https://www.npmjs.com/package/gulp-gzip#options
[GitHub]: https://github.com/maliMirkec/starter-project-cli
[sharing on Twitter]: https://twitter.com/intent/tweet?url=https://github.com/maliMirkec/starter-project-cli/&text=Starter%20Project%20CLI%20creates%20a%20perfect%20Gulp%20development%20environment%20for%20everyone%20within%20a%20few%20minutes.%20🔥%20Try%20it%20today!%20💯&via=malimirkeccita
[a new issue]: https://github.com/maliMirkec/starter-project-cli/issues/new
[a pull request]: https://github.com/maliMirkec/starter-project-cli/compare
