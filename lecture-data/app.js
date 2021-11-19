const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org',
            courseGoals: [
                '<h2>Learn Vue</h2>',
                'Learn React'
            ]
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoals[0];
            } else {
                return this.courseGoals[1];
            }
        }
    }
});
app.mount('#user-goal');