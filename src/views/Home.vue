<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <div class="home">
    <img width="800" alt="DineHalal Logo" src="../assets/logo.png" class="responsive">
    <div id="welcome">
      <h2>Welcome to</h2>
      <h1>Dine Halal</h1>
      <h3>Enter your postcode to find a halal restaurant or takeaway near you! </h3>
    </div>
    <input type="text" v-model="search" placeholder="Type Your Postcode!">
    <i class="fa fa-location-arrow fa-2x" aria-hidden="true" @click="locatorButtonPressed"></i>
    <div id="box" v-for="Restaurants in filteredRestaurants" :key="Restaurants.id">
    <!-- <div v-for="Restaurants in allrestaurants" :key="Restaurants.id"> -->
      <restaurants :Restaurants="Restaurants"> </restaurants>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Restaurants from '@/components/Restaurants.vue';

export default {
  methods: {
    locatorButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        });
      } else {
        console.log('Your broswer does not support the geolocation API');
      }
    },

  },
  name: 'Home',
  components: { Restaurants },
  data() {
    return {
      search: '', // anything typed in search bar is saved in here
      allrestaurants: [
        {
          id: 1,
          title: 'Chesters Chicken',
          body: 'Chesters Grill - Satisfy Your Taste Buds. Our grill menu boasts tasty dishes including periperi Chicken, lamb fillet steaks, grilled chicken tortilla wraps and much much more!',
          city: 'Preston',
          postcode: 'PR1 1JQ',
        },
        {
          id: 2,
          title: 'Jaffa',
          body: 'Kebabs, falafel, chops & other hearty Mediterranean favorites served at a counter in basic quarters.',
          city: 'Preston',
          postcode: 'PR1 2AT',
        },
        {
          id: 3,
          title: 'Smoke Doner Kebab',
          body: '• Home of the authentic kebab!Committed to our mission of using quality meat & local produce to provide delicious food always.',
          city: 'Preston',
          postcode: 'PR2 8BP',
        },
        {
          id: 4,
          title: 'Babylon',
          body: ' Babylon guarantees you perfectly cooked spicy chicken, spicy chicken wings and pizza.',
          city: 'Manchester',
          postcode: 'M1 7DU',
        },
        {
          id: 5,
          title: 'Pizza Co.',
          body: 'add info',
          city: 'Manchester',
          postcode: 'M1 7DU',
        },
      ],
    };
  },
  computed: {
    filteredRestaurants() {
      // prettier-ignore
      // eslint-disable-next-line
      return this.allrestaurants.filter(Restaurants => Restaurants.postcode.toLowerCase().includes(this.search.toLowerCase()),);
    },
  },
};
</script>
<style scoped>
/* * {
  width: 100%;
} */
#welcome {
  padding: 30px;
}
h1{
  color:  #017840;
  font-size: 275%;
}
input {

  width: 80%;
  margin: 8px 0;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid #017840;
  border-radius: 30px;
}

@media only screen and (max-width: 480px) {
    .responsive {
    width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

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

</style>
