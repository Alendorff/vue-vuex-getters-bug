<template>
  <div>
    <pre>Static module getter value = {{ textGetter }}</pre>
    <input v-model="textLocal"/>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'About',
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
