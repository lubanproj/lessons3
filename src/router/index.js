import News from "../components/news.vue";
import Course from "../components/course.vue";
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        component: News,
    },
    {
        path: "/news",
        component: News,
    },
    {
        path: "/courses",
        component: Course,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
