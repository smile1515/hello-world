<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
        this.setRemUnit();
        window.addEventListener('resize',this.setRemUnit);
        window.addEventListener('pageshow',function(e){
            if(e.persisted){
                this.setRemUnit();
            }
        })
  },
  methods:{
      setRemUnit(){
        const rem = document.documentElement.clientWidth / 10;
        document.documentElement.style.fontSize = rem + 'px';
        console.log(rem);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
    
}
</style>
