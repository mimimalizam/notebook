# vue-notebook

> Another Vue example project

Bootstrap Vue Ecosystem

```
npm install -g vue-cli
vue init webpack <project-name>
cd <project-name>
yarn install
yarn run dev
```

Bellow you can find notes on Vue.js.

## Lifecycle hooks

We can use these hooks to add attach logic to a specific stage of a Vue instance.

- `beforeCreate` - it is called when Vue instance is created, before Vue does anything
- `created` - instance is ready, but not in the DOM yet
- `beforeMount` - before instance is mounted on page
- `mounted` - instance is on page and available in DOM
- `beforeUpdate` - called when data or computed property changes
- `updated` - data change has been applied, but might not be in the DOM yet
- `beforeDestroy`
- `destroyed` - when the Vue instance is removed
