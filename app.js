const app = Vue.createApp({
    // Data, functions
    // template: "<h2>I am the template.</h2>"
    data() {
        return {
            showBook: false,
            title: "The Last You're-Mom Joke",
            rating: 5,
            author: "You're mom"
        }
    },
    methods: {
        changeTitle(user_in) {
            this.title = user_in
        },
        toggleBook() {
            this.showBook = !this.showBook
        }
    }
})

app.mount("#app")