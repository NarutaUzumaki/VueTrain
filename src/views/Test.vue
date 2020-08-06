<template>
    <div style="height: 800px; width: 100%">
        <div v-for="(result, index) in results" v-bind:key="index">
            <p>{{index}}</p>
            <p>${{result.USD}}</p>
            <p>&#8364; {{result.EUR}}</p>
            <P>{{result.RUB}}</P>
        </div>
    </div>
</template>

<script>
    //const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR,RUB';
    const pathAPI = 'C:/Program Files/OpenServ/OpenServer/domains/lar/laravel/app/Http/Controllers';
    export default {
        data() {
            return{
              results:[]
        }
        },
        mounted() {
            const axios = require('axios');
                axios.get(pathAPI).then(response => {
                this.results = response.data
            });
            console.log(axios.get(pathAPI));
        }
    }
</script>