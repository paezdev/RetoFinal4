<template>
    <div id="sidebar" class='active'>
        <div class="sidebar-wrapper active">
            <div class="sidebar-header">
                <img src="/images/iud.png" alt="" srcset="" style="width: 190px; height: 190px; margin: 0px;">
            </div>
            <div class="sidebar-menu">
                <ul class="menu">
                    <li class='sidebar-title'>Menu General</li>

                    <router-link to="*" v-slot="{ href,navigate, isActive, isExactActive }" custom>
                        <li class="sidebar-item" :class="[isActive && 'active', isExactActive && '']">
                            <a :href="href" @click="navigate" class='sidebar-link'>
                                <i data-feather="user" width="20"></i>
                                <span>Pensum</span>
                            </a>
                        </li>
                    </router-link>
                    <li class='sidebar-title'>Universidad Digital de Antioquia</li>
                    <!-- link : navigasi : active : non active -->
                    <router-link to="/asignatura" v-slot="{ href,navigate, isActive, isExactActive }" custom>
                        <!-- add active link class -->
                        <li class="sidebar-item" :class="[isActive && 'active', isExactActive && '']">
                            <a :href="href" @click="navigate" class='sidebar-link'>
                                <i data-feather="user" width="20"></i>
                                <span>Asignaturas</span>
                            </a>
                        </li>
                    </router-link>
                    <router-link to="/semestre" v-slot="{ href,navigate, isActive, isExactActive }" custom>
                        <li class="sidebar-item" :class="[isActive && 'active', isExactActive && '']">
                            <a :href="href" @click="navigate" class='sidebar-link'>
                                <i data-feather="home" width="20"></i>
                                <span>Semestres</span>
                            </a>
                        </li>
                    </router-link>
                </ul>
            </div>
            <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
        </div>
    </div>
</template>
