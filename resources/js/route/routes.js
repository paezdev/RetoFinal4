import Vue from 'vue'
import VueRouter from 'vue-router'

// mengaktifkan vue router
Vue.use(VueRouter);

import dashboard from '../pages/dashboard.vue'
// semestre
import index_semestre from '../pages/semestre/index.vue'
import create_semestre from '../pages/semestre/create.vue'
import edit_semestre from '../pages/semestre/edit.vue'
// asignatura
import index_asignatura from '../pages/asignatura/index.vue'
import create_asignatura from '../pages/asignatura/create.vue'
import edit_asignatura from '../pages/asignatura/edit.vue'

const routes = [

    {
        name: 'asignatura',
        path: '/asignatura',
        meta: 'Asignaturas',
        component: index_asignatura,
        beforeEnter: (to, from, next) => {
            document.title = "IUD - " + to.meta //sebelum masuk ubah title + meta di route
            next() // lanjutkan
        },
    },
    {
        name: 'create_asignatura',
        path: '/asignatura/create',
        meta: 'Crear Asignatura',
        component: create_asignatura,
        beforeEnter: (to, from, next) => {
            document.title = "IUD - " + to.meta
            next()
        },
    },
    {
        name: 'edit_asignatura',
        path: '/asignatura/:id',
        meta: 'Editar Asignatura',
        component: edit_asignatura,
        props: true,
        beforeEnter: (to, from, next) => {
            document.title = "IUD - " + to.meta
            next()
        },
    },
    {
        name: 'semestre',
        path: '/semestre',
        meta: 'Semestres',
        component: index_semestre,
        beforeEnter: (to, from, next) => {
            document.title = "IUD - " + to.meta
            next()
        },
    },
    {
        name: 'create_semestre',
        path: '/semestre/create',
        meta: 'Crear Semestre',
        component: create_semestre,
        beforeEnter: (to, from, next) => {
            document.title = "IUD - " + to.meta
            next()
        },
    },
    {
        name: 'edit_semestre',
        path: '/semestre/:id',
        meta: 'Crear Semestre',
        component: edit_semestre,
        props: true,
        beforeEnter: (to, from, next) => {
            document.title = "IUD - " + to.meta
            next()
        },
    },
    {
        name: 'dashboard',
        path: '*',
        meta: 'Pensum',
        component: dashboard,
        beforeEnter: (to, from, next) => {
            document.title = "IUD - " + to.meta
            next()
        }
    },
]

const router = new VueRouter({
    LinkaAtiveClass: 'active',
    mode: 'history',
    routes
})


export default router
