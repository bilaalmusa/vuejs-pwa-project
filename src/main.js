/* eslint-disable */
import { createApp } from 'vue';
import firebase from 'firebase/app';
 import 'firebase/messaging';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
// import responsive from 'vue-responsive'

//Firebase Code Start
const firebaseConfig = {
    apiKey: "AIzaSyC0ogfXyABt0E8VCX3m0JVTSiq_fBlFdco",
    authDomain: "dine-halal-pwa.firebaseapp.com",
    projectId: "dine-halal-pwa",
    storageBucket: "dine-halal-pwa.appspot.com",
    messagingSenderId: "353628426723",
    appId: "1:353628426723:web:549d2e3cd8be3e1118d0d6",
    measurementId: "G-13Z7FGNBSD"
  };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

function IntitalizeFireBaseMessaging() {
    messaging.requestPermission()
        .then(function () {
            console.log("Notification Permission");
            return messaging.getToken({vapidKey: "BHiY6Iv4c4pY7SZ3RgVXK64kIudDfkgQvL0MGKMPg8Jmo8-Jc-zX5MHvBFDtEXUDuv7KXk0kalmUbsSOV7ej8ZY"});
        })
        .then(function (token) {
            console.log("Token : "+token);
        })
        .catch(function (reason) {
            console.log(reason);
        });
}

messaging.onMessage(function (payload) {
    console.log(payload);
    const notificationOption={
        body:payload.notification.body,
        icon:payload.notification.icon
    };

    if(Notification.permission==="granted"){
        var notification=new Notification(payload.notification.title,notificationOption);

        notification.onclick=function (ev) {
            ev.preventDefault();
            window.open(payload.notification.click_action,'_blank');
            notification.close();
        }
    }

});
messaging.onTokenRefresh(function () {
    messaging.getToken({vapidKey: "BHiY6Iv4c4pY7SZ3RgVXK64kIudDfkgQvL0MGKMPg8Jmo8-Jc-zX5MHvBFDtEXUDuv7KXk0kalmUbsSOV7ej8ZY"})
        .then(function (newtoken) {
            console.log("New Token : "+ newtoken);
        })
        .catch(function (reason) {
            console.log(reason);
        })
})
IntitalizeFireBaseMessaging();
//Firebase Code End

createApp(App).use(router).mount('#app');
