<template>
  <div id="container">
    <Navigation />

  <div id="main">
    <Content page="1" />
  </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Content
  },
};
</script>

<style>
body {
  background-color: #444;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

#container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#main {
  width: 65%;
  background: #000;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
