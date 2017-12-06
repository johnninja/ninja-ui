<template>
  <div id="app">
    <main-header></main-header>
    <side-nav></side-nav>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav.vue'
export default {
  name: 'app',
  components: { MainHeader, SideNav }
}
</script>

<style lang='less'>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
}
.main{
  padding: 20px 20px 50px 240px;
}
section hr{
  border: none;
  border-bottom: 1px solid #c5d9e8;
}
table.table{
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
  border: 1px solid #e2ecf4;
  border-radius: 5px;
  th{
    font-size: 12px;
    font-weight: 600;
    background-color: #f8f8f8;
    text-align: center;
  }
  th,td{
    padding: 10px 8px;
    border: 1px solid #e2ecf4;
  }
}
</style>
