<template>
  <div>
    <h1>Hello</h1>
    <p>Hello word</p>
    <router-link to="/home">
      /demo/home
    </router-link>
    <hello-world msg="Hello World components" />
  </div>
</template>
<script>
import { HelloWorld } from '@agro-expo/components';

export default {
  name: 'Hello',
  components: {
    HelloWorld,
  },
};
</script>
