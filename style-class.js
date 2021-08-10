var app = new Vue ({
    el: '#app',
    data: {
       title: "Style",
       isRounded: false,
       sizeToggle: false,
       disabled: false,
       fontColor: '#ccc',
       backgroundColor: 'green',
    },
    computed: {
        styles: function () {
            return {
                color: this.fontColor,
                background: this.backgroundColor
            }
        }
    }
})