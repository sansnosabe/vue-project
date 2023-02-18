<template>
  <div>
    <h1 class="text-center mt-5">Images</h1>
    <imagen :items="items" />
  </div>
</template>

<script>
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
    return {
      items: [],
    };
  },
  methods: {
    chargeImages: async function () {
      try {
        const setting = {
          method: "GET",
        };
        const url = "https://picsum.photos/v2/list?page=2&limit=10";
        const data = await fetch(url, setting);
        const json = await data.json();
        this.items = json;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<!--  -->
