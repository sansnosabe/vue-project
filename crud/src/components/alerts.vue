<template>
  <div class="mt-5">
    <v-alert :type="type">
      {{ message }}
    </v-alert>
    <v-btn :color="type" @click="exit()">Cerrar</v-btn>
  </div>
</template>

<script>
export default {
  props: ["type", "message"],
  methods: {
    exit() {
      this.$emit("salir", false);
    },
  },
};
</script>
