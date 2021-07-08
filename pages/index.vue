<template>
  <div class="container">
    <div>
      <logo />

      <h2 class="subtitle">
        A custom Discord client.
      </h2>
      <div class="links">
        <a
          href="https://github.com/smartfrigde/armcord/releases"
          target="_blank"
          rel="noopener"
          class="button--green"
        >
          Download
        </a>
        <a
          href="https://github.com/smartfrigde/armcord"
          target="_blank"
          rel="noopener"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style>
:root {
  background-color: #2c2f33;
  --header-secondary: #b9bbbe;
  --header-primary: #fff;
  --background-tertiary: #202225;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #99aab5;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #99aab5;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
