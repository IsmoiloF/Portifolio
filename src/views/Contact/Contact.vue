<template>
  <div class="container mx-auto">
    <div class="min-h">
      <div class="items-center mx-auto">
        <p class="mx-auto justify-center flex mt-[50px]">Get In Touch</p>
        <h1 class="mx-auto justify-center flex text-5xl mt-[16px]">
          Contact me
        </h1>
        <p class="mx-auto justify-center flex mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div class="mx-auto">
        <div class="flex mx-auto justify-center mt-[30px] gap-5">
          <Input
            labelId="text"
            inputType="text"
            placeholder="First name"
            class="w-[450px] h-[60px]"
          />
          <Input
            labelId="text"
            inputType="text"
            placeholder="Last name"
            :value="email"
            @input="emailHandler"
            class="w-[450px] h-[60px]"
          />
        </div>

        <div class="flex mx-auto justify-center my-[30px] gap-5">
          <Input
            labelId="email"
            inputType="text"
            placeholder="Email"
            class="w-[450px] h-[60px]"
          />
          <Input
            labelId="text"
            inputType="text"
            placeholder="Phone number"
            :value="email"
            @input="emailHandler"
            class="w-[450px] h-[60px]"
          />
        </div>
      </div>
      <div class="mx-auto mt-[] justify-center flex">
        <Select class="mt-[25px]" />
      </div>

      <div class="w-[920px] justify-center mt-[20px] flex mx-auto h-[200px] ">
        <label for="">
            <p class="">Message</p>
            <input type="text" class=" mt-2 w-[920px] h-[150px]">
        </label>
      </div>

      <div class="mx-auto block w-[920px]">
        <div class="flex"><input type="checkbox">
        <p>I accept the terms</p></div>

        <div class="justify-center flex mb-[150px]">
            <div class="w-[170px] h-[65px] bg-[#5E3BEE] justify-center items-center flex border rounded-md hover:bg-indigo-700">
            <button type="submit" class="text-white">Submit
            </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Input from "../../ui/Input.vue";
import Select from "../../ui/select.vue";

export default {
  name: "ContactView",

  components: {
    Input,
    Select,
  },
};
</script>
<style></style>
