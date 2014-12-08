# AngularJS Phone Catalog Tutorial Application (Component-based)

This is a rewrite of the [original phonecatApp](https://github.com/angular/angular-phonecat) tutorial app 
leveraging [components-based organization structure](http://demisx.github.io/angularjs/component-feature-based-organization/2014/12/02/angular-1-component-organization-1.html). The 3 foundation blocks of the new organization are:

1. Feature components (stateless)
1. UI states (via [AngularUI Router](https://github.com/angular-ui/ui-router))
1. UI layout(s)

## Feature components
The app has only one feature component called `phone` and one special component called `utils` where global feature agnostic helper services are placed. 

## UI states
There are only 3 states with the first one being [abstract](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views#abstract-states):

```js
1. 'phones'        // abstract state, can't be transitioned to
2. 'phones.list'   // UI shows a list of all phones
3. 'phones.detail'  // UI shows detail info on a selected phone
```

## Layouts
The app has just one simple layout with no header, footer or any other UI container, besides just main content area. We describe this layout in `layouts/default.html`. 


```js
         |phones| // <-- abstract state that loads default layout
           /  \
          /    \
         /      \
      |list|  |detail| // <-- concete states that plug in their own content into the default layout
```

## Directory structure

```bash

[app-name]/ # application root directory 
  |__app/   # container for all user-generated app code
  |   |__components/   # stateless feature components
  |   |__layouts/      # layout specific partials
  |   |__states/       # application UI states
  |__bower_components/ # 3rd party vendor client libraries global to the entire app
  |__config/           # app related configuration
  |__node_modules/     # 3rd party vendor node.js modules global to the entire app
  |__scripts/          # shell scripts
  |__test-e2e/         # e2e tests

```

## Usage


```bash
# Start application
$ npm start

# Run unit tests
$ npm test

# Run e2e (end-to-end) tests
$ npm run protractor
```
