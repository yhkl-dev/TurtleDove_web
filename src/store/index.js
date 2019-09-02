import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import tagsView from './modules/tagsView'
// import setting from './modules/setting'
// import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
