<template>
  <div>
    <h1>Main App common</h1>

    <router-link to="/hello">
      /main/hello
    </router-link>
    <p></p>
    <router-link to="/">
      /main/home
    </router-link>

    <div>
      <p></p>
      <a @click="open('/demo/home')">
        跳转独立应用：/demo/home
      </a>
      <p></p>
      <a @click="open('/demo/hello')">
        跳转独立应用：/demo/hello
      </a>
    </div>

    <p></p>

    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  setup() {
    return {
    };
  },
  methods: {
    open(path = '/') {
      window.location.href = path;
    },
  },
};

</script>
