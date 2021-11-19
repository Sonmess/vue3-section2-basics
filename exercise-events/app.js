Vue.createApp({
    data() {
        return {
            text: '',
            enteredText: ''
        }
    },
    methods: {
        showAlert(text = 'Hi how are you today?') {
            alert(text);
        },
        outputText(event) {
            this.text = event.target.value;
        },
        outputEnteredText(event) {
            this.enteredText = event.target.value;
        }
    }
}).mount('#assignment');