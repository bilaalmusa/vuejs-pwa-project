(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b50c824"],{c9bd:function(t,e,n){"use strict";n.r(e);var a=n("7a23");const s=Object(a["f"])("div",null,[Object(a["f"])("h1",null,"Favourites")],-1);function c(t,e,n,c,u,l){return Object(a["o"])(),Object(a["d"])("div",null,[s,(Object(a["o"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(u.myRestaurants,(t,e)=>(Object(a["o"])(),Object(a["d"])("div",{id:"box",key:e},[Object(a["f"])("article",null,[Object(a["f"])("h2",null,Object(a["x"])(t.title),1),Object(a["f"])("h3",null,Object(a["x"])(t.body),1),Object(a["f"])("h4",null,Object(a["x"])(t.city),1),Object(a["f"])("h5",null,Object(a["x"])(t.postcode),1),Object(a["f"])("button",{onClick:e=>l.UnsaveRestaurant(t.id),class:"btn"},"Remove",8,["onClick"])])]))),128))])}var u={data(){return{myRestaurants:[]}},methods:{UnsaveRestaurant(t){var e=this.myRestaurants.findIndex(e=>e.id===t);this.myRestaurants.splice(e,1),localStorage.setItem("myRestaurants",JSON.stringify(this.myRestaurants))}},mounted(){this.myRestaurants=JSON.parse(localStorage.getItem("myRestaurants"))}};n("daa5");u.render=c;e["default"]=u},daa5:function(t,e,n){"use strict";n("df62")},df62:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0b50c824.5a60e8b3.js.map