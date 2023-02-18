<template>
  <div>
    <h1 class="text-center mt-5">Alerts</h1>
    <div class="ml-5 mr-5">
      <v-btn color="primary" class="mb-5" @click="visible()">Mostrar alertas</v-btn>
      <appAlert v-if="success" type="success" message="Esto es una alerta" @salir="success = $event"></appAlert>

      <appAlert v-if="error" type="error" message="Esto es un error" @salir="error = $event"></appAlert>

      <appAlert v-if="warning" type="warning" message="Esto es una advertencia" @salir="warning = $event"></appAlert>

      <appAlert v-if="info" type="info" message="Esto es una información" @salir="info = $event"></appAlert>
    </div>
  </div>
</template>

<script>
import appAlert from "../components/alerts.vue";
export default {
  name: "alerts",
  components: {
    appAlert,
  },
  data() {
    return {
      success: false,
      error: false,
      warning: false,
      info: false,
    };
  },
  methods: {
    visible() {
      this.success = true;
      this.error = true;
      this.warning = true;
      this.info = true;
    },
  },
};
</script>
