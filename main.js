var app = new Vue (
    {
        el: '#root',
        data: {
            emailCasual: false
        },
        mounted() {
            const self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual = risposta.data.response;
                console.log(self.emailCasual);
            })
        }

    }
)
