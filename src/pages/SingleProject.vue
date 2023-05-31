<template>
    <div class="card w-25">
        <img v-if="this.project.image" :src="`${this.store.baseUrl}/storage/${this.project.image}`" class="card-img-top"
            alt="...">
        <img v-else src="https://thumbs.dreamstime.com/b/nessuna-foto-disponibile-o-immagine-mancante-39680127.jpg" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ this.project.title }}</h5>
            <p class="card-text">{{ this.project.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: "SingleProject",
    data() {
        return {
            store,
            project: []
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.baseUrl}/api/project/${slug}`).then(response => {
            this.project = response.data.results;
            console.log(response);

        });
    }
}
</script>
    
<style></style>