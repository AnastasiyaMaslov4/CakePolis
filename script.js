
const app = new Vue({
    el: '#calculator',
    data: {
        type: 'vanilla',
        size: 6,
        pack: 'Обычная',
        price: 0,
        picture: ''
    },
    methods: {
        getPrice() {
            if(this.type == "vanilla") {
                this.price = 1000;
                this.picture = "img/vanila.jpg";
                }
            else if(this.type == "red") {
                this.price = 1200;
                this.picture = "img/redb.jpg";
                }
            else if(this.type == "choko") {
                this.price = 1200;
                this.picture = "img/choko.jpg";
                }
            else {
                this.price = 1300;
                this.picture = "img/berries.jpg";
                }
        
            if(this.size == 10) this.price *= 1.5;
            else if(this.size == 15) this.price *= 2;
            else if(this.size == 20) this.price *= 2.5;
        
            if(this.pack == "Подарочная") this.price += 200;
            return this.price;
        }
    },
    mounted() {
        this.getPrice()
    }
});

Vue.component('form-pic', {
    props: [`price`, `picture`],
    template: `
        <div>
            <img :src="picture" />
            <p>Стоимость набора: {{price}} руб.</p>
        </div>
        `
});


