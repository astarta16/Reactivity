const app = Vue.createApp({
    data(){
        return {
            number: 0,
        }
    },
    watch: {
        count(value) {
            if(value > 0 ) {
                setTimeout(() => {
                    this.count = 0
                }, 5000)
            }
        }
    },
    computed: {
        showResult(){
            if (this.number <37 ) {
                return 'not there yet!';
            } else if (this.number > 37) {
                return 'too much!'
            } else {
                return 37
        }

        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num;
        }
    }
});
app.mount('#assignment');