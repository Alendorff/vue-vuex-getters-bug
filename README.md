# vue-vuex-bug

Project describes the following bug:

* You should have vuex store with static module
* You want to register a new vuex module on vue-router beforeEnter hook
* Your `router-view` is under `keep-alive`
* Your components related to different routes have getters mapped to static module
* Bug: when you enter route which should register new vuex module, getters from static module become broken.
Reactivity doesn't work - components with mapped getters do not receive updates.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```