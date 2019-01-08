# Webpack Test Demo UI Project

## Summary

A sample project with webpack, karma and cypress

## Dev Setup <a name="devsetup"></a>

See `.nvmrc` for node version or if using
[NVM](https://github.com/creationix/nvm#installation)/[AVM](https://github.com/wbyoung/avn#install),
then ignore this line and get on with your life...

```bash
  # if not running AVN:
  nvm use

  # install NPM dependencies:
  npm install

  # build app and serve on localhost:
  # (open a browser window)
  npm start

  # run tests (unit & functional):
  npm test

  # run unit tests only:
  npm run test:unit

  # run functional tests only:
  npm run test:e2e

  # build the app
  npm run build
```


### Editor Config

This project uses [EditorConfig](http://editorconfig.org/) to define and maintain basic coding styles.
It works out of the box with IDEA when enabled. [Plugins for other editors](http://editorconfig.org/#download) are available.

### ESLint

[ESLint](http://eslint.org/) is configured with code styling rules and is run during the build. Our config extends from eslint-config-angular and uses eslint-plugin-angular.
It works out of the box with IDEA when enabled. [Plugins for other editors](http://eslint.org/docs/user-guide/integrations#editors) are available.

ESLint automatically fixes problems (currently mostly whitespace) on [some rules](http://eslint.org/docs/rules/).

