var app = new Vue (
    {
        el: '#root',
        data: {
            emailCasual1: false,
            emailCasual2: false,
            emailCasual3: false,
            emailCasual4: false,
            emailCasual5: false,
            emailCasual6: false,
            emailCasual7: false,
            emailCasual8: false,
            emailCasual9: false,
            emailCasual10: false,
        },
        mounted() {
            const self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual1 = risposta.data.response;
                console.log(self.emailCasual1);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual2 = risposta.data.response;
                console.log(self.emailCasual2);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual3 = risposta.data.response;
                console.log(self.emailCasual3);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual4 = risposta.data.response;
                console.log(self.emailCasual4);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual5 = risposta.data.response;
                console.log(self.emailCasual5);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual6 = risposta.data.response;
                console.log(self.emailCasual6);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual7 = risposta.data.response;
                console.log(self.emailCasual7);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual8 = risposta.data.response;
                console.log(self.emailCasual8);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual9 = risposta.data.response;
                console.log(self.emailCasual9);
            }),
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                self.emailCasual10 = risposta.data.response;
                console.log(self.emailCasual10);
            })
        }
    }
)
