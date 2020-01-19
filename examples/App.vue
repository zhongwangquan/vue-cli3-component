<template>
  <div id="app">
    <colorSelect class='color' v-model="color" v-on:change="headleChangeColor"></colorSelect>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  data () {
    return {
      color: '#ff0000'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
		headleChangeColor () {
			console.log('颜色改变')
		}
	}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .color {
    height: 200px;
    width: 200px;
  }
}
</style>
