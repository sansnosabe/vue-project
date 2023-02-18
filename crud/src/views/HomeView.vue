<template>
  <div>
    <h1>Hola desde home</h1>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>
