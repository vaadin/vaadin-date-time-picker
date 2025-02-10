# &lt;vaadin-date-time-picker&gt;

> ⚠️ Starting from Vaadin 20, the source code and issues for this component are migrated to the [`vaadin/web-components`](https://github.com/vaadin/web-components/tree/master/packages/vaadin-date-time-picker) monorepository.
> This repository contains the source code and releases of `<vaadin-date-time-picker>` for the Vaadin versions 10 to 19.

[&lt;vaadin-date-time-picker&gt;](https://vaadin.com/components/vaadin-date-time-picker) is a Web Component providing a date and time selection field which includes a scrollable month calendar view, part of the [Vaadin components](https://vaadin.com/components).

[Live Demo ↗](https://vaadin.com/components/vaadin-date-time-picker/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-date-time-picker/html-api)

[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-date-time-picker)](https://www.npmjs.com/package/@vaadin/vaadin-date-time-picker)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-date-time-picker)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="vaadin-date-time-picker.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<vaadin-date-time-picker>
  ...
</vaadin-date-time-picker>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-date-time-picker/master/screenshot.png" width="200" alt="Screenshot of vaadin-date-time-picker">](https://vaadin.com/components/vaadin-date-time-picker)


## Installation

The Vaadin components are distributed as Bower and npm packages.
Please note that the version range is the same, as the API has not changed.
You should not mix Bower and npm versions in the same application, though.

The converted ES Modules are only published on npm, not pushed to GitHub repositories.

### Bower (HTML Imports compatible version)

Install `vaadin-date-time-picker`:

```sh
bower i vaadin/vaadin-date-time-picker --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/vaadin-date-time-picker/vaadin-date-time-picker.html">
```

### npm (ES Modules compatible version)

Install `vaadin-date-time-picker`:

```sh
npm i @vaadin/vaadin-date-time-picker --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-date-time-picker/vaadin-date-time-picker.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The component with the Lumo theme:

  `theme/lumo/vaadin-date-time-picker.html`

- The component with the Material theme:

  `theme/material/vaadin-date-time-picker.html`

- Alias for `theme/lumo/vaadin-date-time-picker.html`:

  `vaadin-date-time-picker.html`


## Running demos and tests in a browser

1. Fork the `vaadin-date-time-picker` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) and [Bower](https://bower.io) installed.

1. When in the `vaadin-date-time-picker` directory, run `npm install` and then `bower install` to install dependencies.

1. Make sure you have [polymer-cli](https://www.npmjs.com/package/polymer-cli) installed globally: `npm i -g polymer-cli`.

1. Run `npm start`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:3000/components/vaadin-date-time-picker/demo
  - http://127.0.0.1:3000/components/vaadin-date-time-picker/test


## Running tests from the command line

> [!WARNING]
> Running tests locally from the CLI does not work due to outdated dependencies. Run tests via SauceLabs or in the browser instead.

1. When in the `vaadin-date-time-picker` directory, run `npm test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `npm run lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

  To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
