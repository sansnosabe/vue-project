<template>
  <div>
    <h1>{{ titulo }}</h1>
    <v-data-table :headers="cabecera" :items="items" items-per-page="10" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
export default {
  props: ["titulo", "cabecera", "items"],
  data: () => ({
    show: false,
  }),
};
</script>
