var app = new Vue (
    {
        el: '#root',
        data: {

        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                console.log(risposta);
            })
        }

    }
)
