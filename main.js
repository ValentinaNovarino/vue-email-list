var app = new Vue (
    {
        el: '#root',
        data: {
            emailCasual: false,
            emailArray: [],
        },
        mounted() {
            const self = this;
            for (var i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(risposta) {
                    self.emailCasual = risposta.data.response;
                    self.emailArray.push(self.emailCasual);
                })
            }
        }
    }
)
