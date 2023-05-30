<template>
    <div class="container">
        <div class="row">
            <div class="col-3 g-3" v-for="project in projects">
                <div class="card">
                    <img v-if="project.image" :src="`${this.baseUrl}/storage/app/${project.image}`" class="card-img-top"
                        alt="...">
                    <img v-else
                        src="https://thumbs.dreamstime.com/b/nessuna-foto-disponibile-o-immagine-mancante-39680127.jpg"
                        alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Da implementare</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000'

        }
    },
    methods: {
        getProjects() {
            axios.get(`${this.baseUrl}/api/projects`).then(response => {
                console.log(response);
                this.projects = response.data.results;
                console.log(this.projects);
            })
        }
    },
    mounted() {
        this.getProjects();
    }
}


</script>
  
<style></style>