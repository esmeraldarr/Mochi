import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'mdb-vue-ui-kit/css/mdb.min.css';
// import './assets/css/index.css'
import './assets/css/style.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBi3XnbuHxvIiffDaTu_ZNvU0cmEUU4Dp0",
  authDomain: "mochi-404600.firebaseapp.com",
  projectId: "mochi-404600",
  storageBucket: "mochi-404600.appspot.com",
  messagingSenderId: "674151585557",
  appId: "1:674151585557:web:5f17435dcf487a4c44bb1c",
  measurementId: "G-5QPTD5CEY6"
};


initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
