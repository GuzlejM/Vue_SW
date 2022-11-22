<template lang="">
  <div class="flex justify-between font-poppins m-5 mx-24">
    <div class="rounded-full w-2/5 relative">
      <div
        class="rounded-full bg-yellow-secondary text-yellow-primary p-3 absolute left-0 z-10"
      >
        Search
      </div>
      <div
        class="border-2 border-black w-full absolute rounded-full h-full z-0 left-1"
      ></div>
    </div>
    <div class="rounded-full bg-yellow-secondary text-yellow-primary p-3">
      Filter
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SearchFilter",
});
</script>
<style lang=""></style>
