const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            showParagraph: true,
            color: ''
        }
    },
    computed: {
        userClass() {
            if (this.userInput === 'user1') {
                return 'user1';
            }
            if (this.userInput === 'user2') {
                return 'user2';
            }
            return '';
        },
        paragraphClass() {
            return this.showParagraph ? 'visible' : 'hidden';
        }
    }
});
app.mount('#assignment');