const vue = Vue.createApp({
    data() {
        return {
            name: 'Matej Boháč',
            age: 30,
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Lama3.jpg'
        }
    },
    methods: {
        ageInFuture(year) {
            return this.age + year;
        }
    }
});
vue.mount('#assignment');