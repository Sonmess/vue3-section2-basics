Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    methods: {
        addNumber(number) {
            this.number = this.number + number;
        }
    },
    watch: {
        number() {
            setTimeout(() => {
                this.number = 0;
            }, 5000);
        }
    },
    computed: {
        outputNumber() {
            if (this.number < 37) {
                return 'Not there yet';
            }
            else if (this.number > 37) {
                return 'Too much !';
            } else {
                return this.number;
            }
        }
    }
}).mount('#assignment');