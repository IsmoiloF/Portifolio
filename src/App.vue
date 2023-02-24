<template>
  <Header/>

  <RouterView/>

  <Footer/>


</template>



<script >
import Header from './components/Header/Header.vue'
import {RouterView} from "vue-router"
import Footer from './components/Footer/Footer.vue'

export default{
  name:"App",



  components:{
  Header,
  Footer,
  RouterView
}
}




</script>


<style >

</style>
