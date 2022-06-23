<template>
  <div id="app">
    <Nav></Nav>
    <ListCard />
  </div>
</template>

<script>
import ListCard from "./components/ListCard.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    ListCard: ListCard,
    Nav: Nav,
  },
  created() {
    // 数据初始化
    // this.loadData(-1);
    this.$store.dispatch("loadData", { id: -1, index: 1 });
  },

};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  background: #f9f9f9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
  position: relative;
}

@media screen and (max-width: 800px) {
  #app {
    overflow: hidden;
  }
}
</style>
