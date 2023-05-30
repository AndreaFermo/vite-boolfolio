<template>
    <div class="container">

        <div class="row">
            <div class="col-3 g-3" v-for="project in projects">
                <AppProjectCard :projectProp="project" :baseUrlProp="this.baseUrl"></AppProjectCard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue';

export default {
    name: "AppMain",
    components: {
        AppProjectCard
    },
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