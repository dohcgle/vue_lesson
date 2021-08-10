Vue.component('book', {
    template: '#books',
    props: ['title', 'author', 'content']
});

new Vue ({
    el: '#app',
    data: {
        author: 'David Flanagan',
        title: 'JavaScript The Definetive Guide',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }
});