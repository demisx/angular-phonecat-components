AngularJS Phone Catalog Tutorial Application (Component-based)
=================================================================

This is a rewrite of the [original phonecatApp](https://github.com/angular/angular-phonecat) tutorial app 
leveraging [components-based organization structure](http://demisx.github.io/angularjs/component-feature-based-organization/2014/12/02/angular-1-component-organization-1.html). The main 2 foundation blocks of the new organization are:

* components (stateless)
* states (via Angular UI Router)


# Application state diagram
There are only 3 states with the first one being [abstract](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views#abstract-states):

```js
1. `'phones'`       // abstract state, can't be transitioned to
1. `'phones.list'`  // UI shows a list of all phones
1. 'phones.detal'   // UI shows detail info on a selected phone
```

```js
         |phones| // <-- abstract state that loads default layout
           /  \
          /    \
         /      \
      |list|  |detail| // <-- concete states that plug in their own content into the default layout
```


```bash
# Start application
$ npm start

# Run unit tests
$ npm test

# Run e2e (end-to-end) tests
$ npm run protractor
```
