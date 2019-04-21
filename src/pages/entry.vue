<template>
<div class="home">
  <router-view v-if="isRouterAlive"></router-view>
</div>
</template>

<script>
import Login from '../components/Login'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      isRouterAlive:true
    }
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick(()=>{
        this.isRouterAlive=true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>