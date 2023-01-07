const app = Vue.createApp({
  data() {
    return {
      books: [
        { id: 1, title: "The India Story", author: "Bimal Jalal", isFav: true },
        {
          id: 2,
          title: "Listen to Your Heart: The London Adventure",
          author: "Ruskin Bond",
          isFav: false,
        },
        {
          id: 3,
          title: "Business of Sports: The Winning Formula for Success",
          author: "Vinit Karnik",
          isFav: false,
        },
        {
          id: 4,
          title: "Pride, Prejudice and Punditry",
          author: "Shashi Tharoor",
          isFav: false,
        },
        {
          id: 5,
          title: "Queen of Fire",
          author: "Devika Rangachari",
          isFav: true,
        },
        {
          id: 6,
          title: "Udaan Ek Majdoor Bachhe Ki",
          author: "Mithilesh Tiwari",
          isFav: true,
        },
      ],
      isShowFav: true,
    };
  },
  methods: {
    handleIsFav(id) {
      this.books = this.books.map((val) => {
        if (val.id === id) return { ...val, isFav: !val.isFav };
        else return val;
      });
    },
    handleFavFilter() {
      this.isShowFav = !this.isShowFav;
    },
  },
  computed: {
    favFilter() {
      return this.books.filter((val) => val.isFav);
    },
  },
});
app.mount("#root");
