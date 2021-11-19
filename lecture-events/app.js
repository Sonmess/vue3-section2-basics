const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      age: ''
    };
  },
  computed: {
    fullName() {
      return this.name + ' Boháč';
    }
  },
  watch: {
    counter() {
      if (this.counter > 50) {
        this.counter = 0;
      }
    },
    age() {
      if (this.age < 18) {
        alert('Nezletily');
      } else {
        alert('Pokracujte dalej');
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },

    add(number) {
      this.counter = this.counter + number;
    },

    substract(number) {
      this.counter = this.counter - number;
    },

    submitForm(event) {
      alert('Submitted!');
    },

    confirmInput() {
      this.confirmedName = this.name;
    },

    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
