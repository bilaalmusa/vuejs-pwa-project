<template>
<title>Dine Halal</title>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Navbar
      name="Dine Halal"
      :navLinks="[
        {
          name: 'Favourites',
          link: '/favourite',
          dropdown: false,
        },
        {
          name: 'Home',
          link: '/',
          dropdown: false,
        },
        { name: 'About', link: '/about', dropdown: false },
        {
          name: 'Contacts',
          link: '/contact',
          dropdown: true,
          dropdownLinks: [
            { name: 'A', link: '/pA', dropdown: false },
            { name: 'B', link: '/pB', dropdown: false },
          ],
        },

      ]"
    />

  </div>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
/* #app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
} */

* {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}
/* * {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
} */
body{
  overflow-x: hidden;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

</style>
