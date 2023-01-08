<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <AsModal :showModal="showModal" @close="toggleModal" theme="danger">
      <template v-slot:links><a href="#">hello</a></template>
      <h1>Title</h1>
      <h2>Text description</h2>
    </AsModal>
    <button @click="toggleModal">show modal</button>
  </div>
</template>

<script>
import AsModal from "./components/as-modal.vue";

export default {
  name: "App",

  components: { AsModal },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      console.log("value changed but is updated or not");
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
