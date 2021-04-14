<template>
    <div>
        <div>
            <h1>Favourites</h1>
        </div>
        <div id="box" v-for="(myRes,index) in myRestaurants" v-bind:key="index">
            <article>
                <h2>{{myRes.title}}</h2>
                <h3>{{myRes.body}}</h3>
                <h4>{{myRes.city}}</h4>
                <h5>{{myRes.postcode}}</h5>
                <button @click="UnsaveRestaurant(myRes.id)" class="btn">Remove</button>
            </article>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      myRestaurants: [],
    };
  },
  methods:{
    UnsaveRestaurant(id) {
      var index = this.myRestaurants.findIndex(x => x.id === id);
      this.myRestaurants.splice(index,1);
      localStorage.setItem('myRestaurants', JSON.stringify(this.myRestaurants));
    },
  },
  mounted(){
    this.myRestaurants = JSON.parse(localStorage.getItem('myRestaurants'));
  }
};
</script>

<style>
#box {
  width: 80%;
  padding: 30px 30px;
  -webkit-box-shadow: 0 0 10px #017840;
  box-shadow: 0 0 10px  #017840;
  /* box-shadow:  6px 6px 6px 6px #017840; */
  border: 4px solid #017840;
  border-radius: 15px;
  margin: 20px 0;
  display: inline-block;
}
h1{
    margin: 5% 0;
}
</style>