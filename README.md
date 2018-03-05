
# Mapping a DOM tree like a file system

Details in [exercise.md](exercise.md).

You can see details on how this was built with the [conventional commits](https://conventionalcommits.org/) in the [`git log`](https://github.com/dijonkitchen/dom-tree-as-file-system/commits/master)!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of its guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```sh
brew install node
brew install yarn
```

### Installing

```sh
yarn install
yarn start
```

Then make changes and they'll automatically hot reload your changes!

### Deploying

To build the static HTML and Javascript files so you can deploy it on a static web server, run these commands:

```sh
yarn install
yarn build
```

Then, follow the instructions, which should look something like:

```
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  36.03 KB  build/static/js/main.843229e3.js
  299 B     build/static/css/main.c17080f1.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr
```
