<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Crear nueva cita</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-3">
                <div class="card">
                    <div class="card-body">
                        <img src="" alt="Escudo Universidad Nacional de Colombia">
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-9">
                <div class="card">
                    <div class="card-body">
                        <form @submit='onSubmit'>
                            <div class="form-group row">
                                <label for="author" class="col-sm-2 col-form-label">Autor</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Autor" name="author" class="form-control" v-model.trim="form.author">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="phrase" class="col-sm-2 col-form-label">Frase</label>
                                <div class="col-sm-6">
                                    <textarea type="text" placeholder="Frase" name="phrase" class="form-control" rows="3" v-model.trim="form.phrase"></textarea>
                                </div>
                            </div>
                            <div class="rows">
                                <div class="col text-left">
                                    <b-button type='submit' variant="primary">Agregar nueva cita</b-button>
                                    <b-button type='reset' class="btn-large-space">Cancelar</b-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
            quotes: [],
            form:{
                author: '',
                phrase: '',
            }
        }
    },
    methods: {
        getQuotes () {

            const path = 'http://127.0.0.1:3000/quotes/'
            axios.get(path).then((response) =>{
                this.quotes = response.data
            })
            .catch((error) => {
                console.log(error)
            })

        },
        onSubmit (event) {
            event.preventDefault()

            const path = 'http://127.0.0.1:3000/quotes/'
            axios.post(path, this.form).then((response) =>{
                this.form.author = response.data.author
                this.form.phrase = response.data.phrase
                this.getQuotes();
            })
            .catch((error) => {
                console.log(error)
            })
            
        },
    },
    created(){
        this.getQuotes();
    }
}
</script>

<style lang='css' scoped>
</style>
