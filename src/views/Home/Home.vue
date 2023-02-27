<template>
  <div class="">
<div class="bg-[#F5FCFF]">
  <div class="container mx-auto  flex">
      <div>
        <div class="mt-[180px]"><p>Hey, I am John</p></div>
        <div class="w-[550px] mt-[30px]">
          <h1 class="text-5xl">I create product design and brand experience</h1>
        </div>
        <div class="w-[430px] mt-[20px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div
          class="w-[130px] mt-[70px] h-[50px] justify-center items-center flex rounded-md bg-indigo-400 hover:bg-indigo-700 border border-indigo-800"
        >
          <button class="text-white">Get In Touch</button>
        </div>
      </div>
      
      <div class="w-[900px] ml-[50px] mt-[10px]">
        <img class="w-[900px] h-[650px]" src="../../image/mainsvg.svg" alt="">
      </div>

    
    </div>
</div>
    <About/>
    <Portifolio/>
    <Testimonials/>
    <Contact/>


  </div>


</template>
<script>
import About from "../About/About.vue"
import Testimonials from "../Testimonials/Testimonials.vue"
import Contact from "../Contact/Contact.vue"
import Portifolio from "../Portifolio/Portifolio.vue"
export default {
  name: "HomeView",

  components:{
    About,
    Testimonials,
    Contact,
    Portifolio
  }
};
</script>
<style></style>
