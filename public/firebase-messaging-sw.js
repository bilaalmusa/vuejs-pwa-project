importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyC0ogfXyABt0E8VCX3m0JVTSiq_fBlFdco",
  authDomain: "dine-halal-pwa.firebaseapp.com",
  projectId: "dine-halal-pwa",
  storageBucket: "dine-halal-pwa.appspot.com",
  messagingSenderId: "353628426723",
  appId: "1:353628426723:web:549d2e3cd8be3e1118d0d6",
  measurementId: "G-13Z7FGNBSD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});