<template>
  <label :for="labelId" class="w-1/2  my-3">
    <p class="text-black my-2" v-if="placeholder">{{ placeholder }}</p>
    <input
      :type="inputType"
      :id="labelId"
      class="p-3 w-full ring-2 focus:ring-cyan-700 focus:outline-none placeholder:text-slate-300"
      :placeholder="placeholder"
      :value="value"
    />
  </label>
</template>
<script>
export default {
  name: "Input",
  props: {
    labelId: String,
    placeholder: String,
    inputType: String,
    value: String,
  },
};
</script>
<style lang="scss"></style>
