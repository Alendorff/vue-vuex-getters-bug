<template>
  <div>
    <pre>Static module getter value = {{ textLocal }}</pre>
    <input v-model="textLocal"/>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'home',
  data: function() {
    return {
      registered: false
    };
  },
  computed: {
    ...Vuex.mapGetters("staticModule", ["textGetter"]),
    textLocal: {
      get() {
        return this.textGetter;
      },
      set(value) {
        this.changeText(value);
      }
    }
  },
  methods: {
    ...Vuex.mapMutations('staticModule', ['changeText'])
  }
}
</script>
