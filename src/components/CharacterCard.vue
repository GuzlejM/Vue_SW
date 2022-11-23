<template lang="">
  <div class="">
    <li>
      {{ character.name }}
    </li>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CharacterCard",
  props: ["character"],
  setup(props) {
    // ...
  },
});
</script>
<style lang=""></style>
