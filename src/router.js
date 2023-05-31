import { createRouter, createWebHashHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/contactus',
            name: 'contact',
            component: AppContact
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },

    ]
});

export { router };