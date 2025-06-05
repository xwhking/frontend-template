import { createWebHistory, createRouter } from 'vue-router'
import Index from "../pages/Index.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import BasicInfo from "../pages/BasicInfo.vue";
import InSchoolInfo from "../pages/InSchoolInfo.vue";
import ExpandInfo from "../pages/ExpandInfo.vue";



const routes = [
    { path: '/', component: Index },
    { path: '/basic', component: BasicInfo },
    { path: '/school', component: InSchoolInfo },
    { path: '/expand', component: ExpandInfo },
    { path: '/user/login', component: Login },
    { path: '/user/register', component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;