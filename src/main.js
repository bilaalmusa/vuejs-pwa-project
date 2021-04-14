/* eslint-disable */
import { createApp } from 'vue';
// import firebase from 'firebase/app';
// import 'firebase/messaging';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
// import responsive from 'vue-responsive'

//Firebase Code Start
// var firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
//   };

// firebase.initializeApp(firebaseConfig);
// const messaging=firebase.messaging();

// function IntitalizeFireBaseMessaging() {
//     messaging.requestPermission()
//         .then(function () {
//             console.log("Notification Permission");
//             return messaging.getToken({vapidKey: "YOUR KEY PAIR"});
//         })
//         .then(function (token) {
//             console.log("Token : "+token);
//         })
//         .catch(function (reason) {
//             console.log(reason);
//         });
// }

// messaging.onMessage(function (payload) {
//     console.log(payload);
//     const notificationOption={
//         body:payload.notification.body,
//         icon:payload.notification.icon
//     };

//     if(Notification.permission==="granted"){
//         var notification=new Notification(payload.notification.title,notificationOption);

//         notification.onclick=function (ev) {
//             ev.preventDefault();
//             window.open(payload.notification.click_action,'_blank');
//             notification.close();
//         }
//     }

// });
// messaging.onTokenRefresh(function () {
//     messaging.getToken({vapidKey: "YOUR KEY PAIR"})
//         .then(function (newtoken) {
//             console.log("New Token : "+ newtoken);
//         })
//         .catch(function (reason) {
//             console.log(reason);
//         })
// })
// IntitalizeFireBaseMessaging();
//Firebase Code End

createApp(App).use(router).mount('#app');
