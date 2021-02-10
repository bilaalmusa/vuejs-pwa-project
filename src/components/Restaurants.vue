<template>
    <article>
        <h2>{{ Restaurants.title }}</h2>
        <h3>{{ Restaurants.body }}</h3>
        <h4>{{Restaurants.city}}</h4>
        <h5>{{Restaurants.postcode}}</h5>
    </article>
</template>

<script>
export default {
  props: ['Restaurants'],
};
</script>
