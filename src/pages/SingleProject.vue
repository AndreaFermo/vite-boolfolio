<template>
    <div v-if="project" class="card w-25">
        <img v-if="project.image" :src="`${store.baseUrl}/storage/${project.image}`" class="card-img-top" alt="...">
        <img v-else src="https://thumbs.dreamstime.com/b/nessuna-foto-disponibile-o-immagine-mancante-39680127.jpg" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
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
            project: null
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.baseUrl}/api/project/${slug}`).then(response => {
            if (response.data.success == true) {
                this.project = response.data.results;
                console.log(response);
            } else {
                this.$routert.push({ name: 'not-found' });
            }


        });
    }
}
</script>
    
<style></style>