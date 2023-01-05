const app = Vue.createApp({
  data() {
    return {
      isShowing: false,
      age: 0,
      isNotVisible: false,
      showValue: false,
    };
  },
  methods: {
    handleChange() {
      this.isShowing = !this.isShowing;
    },
    toggleChange() {
      this.isNotVisible = !this.isNotVisible;
    },
  },
});
app.mount("#root");
