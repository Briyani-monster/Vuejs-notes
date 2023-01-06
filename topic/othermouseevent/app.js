const app = Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
      entered: false,
      left: false,
      over: false,
      dblclick: false,
    };
  },
  methods: {
    handleEnter() {
      this.entered = true;
    },
    handleLeft() {
      this.left = true;
    },
    handleOver() {
      this.over = true;
    },
    handleDblClick() {
      this.dblclick = !this.dblclick;
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});
app.mount("#root");
