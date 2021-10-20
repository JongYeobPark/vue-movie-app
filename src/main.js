import { createApp } from 'vue'
import App from './App'
import router from './routes/index.js'
import store from './store/index.js'
import loadimage from './plugins/loadImage.js'

createApp(App)
    .use(router)
    .use(store)
    .use(loadimage)
    .mount('#app')