<template>
  <div class="center">
    <mycenter></mycenter>
    <bottomnav></bottomnav>
  </div>
</template>
<script>
import mycenter from "@/components/mycenter.vue";
import bottomnav from "@/components/bottomnav.vue";
export default {
  name: "center",
  components: {
    mycenter,
    bottomnav
  }
};
</script>
