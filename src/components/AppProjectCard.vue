<template>
    <div class="card">
        <img v-if="this.projectProp.image" :src="`${this.store.baseUrl}/storage/${this.projectProp.image}`"
            class="card-img-top" alt="...">
        <img v-else src="https://thumbs.dreamstime.com/b/nessuna-foto-disponibile-o-immagine-mancante-39680127.jpg" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ this.projectProp.title }}</h5>
            <p class="card-text">{{ this.projectProp.description }}</p>
            <router-link :to="{ name: 'single-project', params: { slug: projectProp.slug } }" class="btn btn-primary">Apri
                Progetto</router-link>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: "AppProjectCard",
    props: { projectProp: Object },
    data() {
        return {
            store
        }
    }
}
</script>

<style></style>