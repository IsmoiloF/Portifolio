<template>
  <header class="shadow-xl shadowz-black z-50 relative border border-sky-50">
    <div class="container mx-auto">
      <div class="flex w-full justify-between items-center h-[80px]">
        <div class="w-[200px]">
          <img src="../../image/Logo.svg" alt="" />
        </div>

        <div class="w-min-[300px]">
          <ul class="flex">
            <li class="mx-4 text-black hover:color-sky-200">
              <RouterLink class="hover:text-sky-200" to="/">Home</RouterLink>
            </li>
            <li class="mx-4 text-black hover:color-sky-200">
              <RouterLink class="hover:text-sky-200" to="/about"
                >About me</RouterLink
              >
            </li>
            <li class="mx-4 text-black hover:color-sky-200">
              <RouterLink class="hover:text-sky-200" to="/portifoilio"
                >Portfolio</RouterLink
              >
            </li>
            <li class="mx-4 text-black hover:color-sky-200">
              <RouterLink class="hover:text-sky-200" to="/testimonials"
                >Testimonials</RouterLink
              >
            </li>
          </ul>
        </div>

        <RouterLink to="/contact"
          ><div
            class="w-[150px] h-[60px] justify-center border hover:text-white rounded-md border-indigo-600 hover:bg-indigo-600 items-center flex"
          >
            <button
              type="submit"
              class="text-indigo-600 w-[150px] h-[60px] hover:text-white"
            >
              Contact me
            </button>
          </div></RouterLink
        >
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Header",
};
</script>
<style scoped>
.router-link-active {
  color: rgb(246, 255, 0) !important;
  text-decoration: underline;
  font-weight: 900;
}
</style>
