var app = new Vue({
    el: '#app',
    data: {
        title: "Task list",
        items: [
            { text: "First" },
            { text: "Secon" },
            { text: "Third" },
            { text: "Fourth" },
            { text: "Five" }
        ]
    },
    methods:{
        addItem: function () {
            var input = document.getElementById('itemForm');
            if (input.value !== ''){
                this.items.push({
                    text: input.value
                })
                input.value="";

            }
        },

        deleteItem: function (index) {
            this.items.splice(index, 1)
        },
    }
})