Due to simplicity of the phonecatApp and everything sort of evolving around the phone feature,
we've created only one feature component called `phone` and one global component
called `utils` where simple helper functions were placed. If this app used 
authentication, for example, we would add `auth` component, but it doesn't, therefore
just two components only.

Componets are:

* stateless
* the building blocks of the entire app
* encapsulate particular app feature
* can be reused in other apps
* removing a component should remove its dependencies
* provide clear view into app features