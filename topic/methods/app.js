const app = Vue.createApp({
  data() {
    return {
      title: "Jungle Book",
      author: "Ravi kishan singh",
      count: 0,
    };
  },
  methods: {
    changeTitle() {
      this.title = "story of the tiles";
    },
    changeAuthor(author) {
      this.author = `${author}`;
    },
  },
});
app.mount("#root");
