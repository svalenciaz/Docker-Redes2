<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Citas</h2>
                <div class="col-md-12">
                    <b-table striped hover :items="quotes" :fields="fields">
                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            fields: [
                { key: 'author', label: 'Autor'},
                { key: 'phrase', label: 'Frase'},
            ],
            quotes: []
        }
    },
    methods: {
        getQuotes () {

            const path = 'http://127.0.0.1:8000/api/v1.0/quotes/'
            axios.get(path).then((response) =>{
                this.quotes = response.data
            })
            .catch((error) => {
                console.log(error)
            })

        }
    },
    created(){
        this.getQuotes();
    }
}
</script>

<style lang='css' scoped>
</style>
