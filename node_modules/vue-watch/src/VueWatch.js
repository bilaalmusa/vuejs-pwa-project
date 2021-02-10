// Copyright 2017, Venkat Peri.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

const dispatch = ( el, type ) => ( current, old ) => {
  el.dispatchEvent( new CustomEvent( type, {
    bubbles: true,
    detail: { current, old },
  } ) )
}

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'vue-watch',

  props: {
    dispatch: {
      type: Object,
      required: false,
      default: {},
    },
  },

  data() {
    return {
      watchers: [],
    }
  },

  mounted() {
    console.log( `vue-watch:mounted()` )
    const vm = this.$children.length > 0 ?
      this.$children[0] :
      this.$el.__vue__

    if ( !vm )
      throw new Error( 'No suitable child found' )

    const el = vm.$el || this.$el
    if ( !el )
      throw new Error( 'No element!!?' )

    for ( const [prop, type] of Object.entries( this.dispatch ) ) {
      this.watchers.push( vm.$watch( prop, dispatch( el, type ) ) )
    }
  },

  beforeDestroy() {
    this.watchers.forEach( w => w() )
  },

  render() {
    return this.$slots.default[0]
  },
}
