<template>
    <div class="card">
        <img v-if="this.projectProp.image" :src="`${this.baseUrlProp}/storage/${this.projectProp.image}`"
            class="card-img-top" alt="...">
        <img v-else src="https://thumbs.dreamstime.com/b/nessuna-foto-disponibile-o-immagine-mancante-39680127.jpg" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ this.projectProp.title }}</h5>
            <p class="card-text">{{ this.projectProp.description }}</p>
            <a href="#" class="btn btn-primary">Da implementare</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppProjectCard",
    props: { projectProp: Object, baseUrlProp: String }
}
</script>

<style></style>