<template>
    <div class="container">

        <div class="row">
            <div class="col-3 g-3" v-for="project in projects">
                <AppProjectCard :projectProp="project" :baseUrlProp="this.baseUrl"></AppProjectCard>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)"
                        :class="{ 'disabled': currentPage == 1 }">Previous</button></li>
                <li class="page-item"><button class="page-link" @click="getProjects(currentPage + 1)"
                        :class="{ 'disabled': currentPage == lastPage }">Next</button></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';

export default {
    name: "ProjectsList",
    components: {
        AppProjectCard
    },
    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000',
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        getProjects(changePage) {
            axios.get(`${this.baseUrl}/api/projects`, { params: { page: changePage } }).then(response => {
                console.log(response);
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        }
    },
    mounted() {
        this.getProjects();
    }
}


</script>
  
<style></style>