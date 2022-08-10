import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'


// import router
import router from './router'

// import bootstrap popper jquery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)


// use vue router
app.use(router)
app.use(VueSweetalert2)

app.mount('#app')
