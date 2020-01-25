# National Digital Repository 

This repo contains the source code and documentation powering [national-digital-repository](https://national-digital-repository.netlify.com/).

## Getting started

### Prerequisites

1. Git
1. Node: any 8.x version starting with 8.4.0 or greater
1. Npm: See [Npm website for installation instructions](https://www.npmjs.com/get-npm)
1. A fork of the repo (for any contributions)
1. A clone of the [national-digital-repository repo](https://github.com/sumankharel/national-digital-repository) on your local machine

### Installation

1. `cd national-digital-repository` to go into the project root
1. `npm install` to install the website's npm dependencies

### Running locally

1. `npm run dev` to start the hot-reloading development server
1. `open http://localhost:3000` to open the site in your favorite browser

## Contributing

### Guidelines

Please follow the below guidelines to contribute to the project.

### Create a branch

1. `git checkout master` from any folder in your local `national-digital-repository` repo
1. `git pull origin master` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch

### Make the change

1. Follow the "Running locally" instructions
1. Save the files and check in the browser
  1. Changes to React components in `src` will hot-reload


### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fixed header logo`) to stage and commit your changes
1. `git push my-fork-name the-name-of-my-branch`
1. Go to the [national-digital-repository repo](https://github.com/sumankharel/national-digital-repository) and you should see recently pushed branches.
1. Follow GitHub's instructions.
1. If possible, include screenshots of visual changes. A Netlify build will also be created once you make your PR so other people can see your change.
