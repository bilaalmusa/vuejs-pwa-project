<template>
    <article>
        <h2>{{ Restaurants.title }}</h2>
        <h3>{{ Restaurants.body }}</h3>
        <h4>{{Restaurants.city}}</h4>
        <h5>{{Restaurants.postcode}}</h5>
        <div v-if="checkStatus(Restaurants.id)">
          <button @click="SaveRestaurant(Restaurants)" class="btn">Save</button>
        </div>
        <div v-else>
          <button @click="UnsaveRestaurant(Restaurants.id)" class="btn">Remove</button>
        </div>
    </article>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      myRestaurants: [],
    };
  },
  props: ['Restaurants'],
  methods: {
    SaveRestaurant(Restaurants) {
      if (JSON.parse(localStorage.getItem('myRestaurants'))) {
        this.myRestaurants = JSON.parse(localStorage.getItem('myRestaurants'));
      }
      else{
        this.myRestaurants = [];
      }
      this.myRestaurants.push({
        id: Restaurants.id,
        title: Restaurants.title,
        body: Restaurants.body,
        city: Restaurants.city,
        postcode: Restaurants.postcode,
      });
      localStorage.setItem('myRestaurants', JSON.stringify(this.myRestaurants));
      console.log(this.myRestaurants);
    },
    UnsaveRestaurant(id) {
      var index = this.myRestaurants.findIndex(x => x.id === id);
      this.myRestaurants.splice(index,1);
      localStorage.setItem('myRestaurants', JSON.stringify(this.myRestaurants));
      console.log(this.myRestaurants);
    },
    checkStatus(id) {
      this.myRestaurants = JSON.parse(localStorage.getItem('myRestaurants'));
      if(this.myRestaurants){
        var index = this.myRestaurants.findIndex(x => x.id === id);
        if(index >= 0){
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style>
.btn{
    padding: 1%;
    margin-top: 1%;
    background: lightgreen;
    border: none;
    border-radius: 20%;
    cursor:pointer;
}
</style>
