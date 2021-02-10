# vue-watch

![npm](https://img.shields.io/npm/v/vue-watch.svg)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

`vue-watch` is a [Vue](www.vuejs.org) component that fires events when specific properties of a child component change.

# Installation

```
npm install --save vue-watch
```

# Example

Include the component:

```javascript
  import Vue from 'vue'
  import VueWatch from 'vue-watch'

  const TextComponent = Vue.component('text-component', {
    data() {
      return {
        text: '',
      }
    },
    template: '<textarea v-model="text" class="input2"></textarea>',
  } )

  export default {

    components: {
      VueWatch, TextComponent,
    },

    data() {
      return {
        theEvent: '',
      }
    },

    mounted() {
      const that = this
      this.$el.addEventListener( 'textChanged', function ( e ) {
        that.theEvent = e.detail
      } )
    },
```


## Usage

```html
<template>
  <div>
    <vue-watch :dispatch="{text: 'textChanged'}">
      <text-component />
    </vue-watch>
    <div class="info" v-html="theEvent"></div>
  </div>
</template>
```



---

## License

[MIT](http://opensource.org/licenses/MIT)
