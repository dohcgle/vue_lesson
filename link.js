var app = new Vue ({
    el: '#app',
    data: {
        url: "",
        url2: "",
        cleanUrl: ""
    },
    methods: {
        curl: function() {
            // this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/,''),
            this.cleanUrl = this.url,
            this.url2 = this.url
        },        
    }
})