<template>
  <div>
    <h1 class="text-center mt-5">Images</h1>
    <imagen :items="items" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import imagen from "@/components/imagen.vue";
export default {
  name: "Images",
  components: {
    imagen,
  },
  created() {
    this.chargeImages();
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("images", ["chargeImages"]),
  },
  computed: {
    ...mapGetters("images", ["items"]),
  },
};
</script>

<!--  -->
