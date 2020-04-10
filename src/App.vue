<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
        // ios9 以下，display:flex 元素的第一级子元素必须是block，否则 flex 布局是不会生效的
        // document.title = '权益中心'
        // this.setRemUnit();
        // let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        // window.addEventListener(resizeEvt,this.setRemUnit);
        // document.addEventListener('DOMContentLoaded', this.setRemUnit, false);
        // window.addEventListener('pageshow',function(e){
        //     if(e.persisted){
        //         this.setRemUnit();
        //     }
        // })
      
      
        this.setRemUnit();
        window.addEventListener('resize',this.setRemUnit);
        window.addEventListener('pageshow',function(e){
            if(e.persisted){
                this.setRemUnit();
            }
        })
  },
  methods:{
      // fontSize
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
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
body,*{
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
}
a {
    text-decoration: none;
    color:#333333;
}
</style>
