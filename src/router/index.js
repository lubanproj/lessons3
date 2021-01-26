import News from "../components/news.vue";
import Course from "../components/course.vue";
import Details from "../components/details.vue";
import Home from "../components/home.vue";

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        component: Home,
        children: [
            {
                path: "",
                component: News,
            },
            {
                path: "/news",
                component: News,
            },
            {
                path: "/courses",
                component: Course,
            },
        ]
    },
    {
        path: "/details/:id",
        component: Details,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
