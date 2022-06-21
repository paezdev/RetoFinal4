<template>
    <div class="card">
        <div class="card-body">
            <!-- button atas -->
            <template>
                <v-toolbar flat>
                    <v-toolbar-title>Vista General de Semestres</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click.prevent="tambahRoute()" dark class="mb-2">
                        Crear Semestre
                    </v-btn>
                </v-toolbar>
            </template>
            <!-- end button atas -->
            <!-- header -->
            <v-card-title>
                <v-spacer></v-spacer>
                <!-- search engine -->
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscador" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <!-- end header -->
            <!-- table -->
            <!-- :header untuk header , : items untuk data , :search untuk search dan perpage untuk pagination -->
            <v-data-table :headers="headers" :items="data" :search="search" :items-per-page="10"  class="elevation-2">
                <!--  action icon di json nya -->
                <template v-slot:item.action="{ item }">
                    <!-- icon menggunaka  v icon -->
                    <v-icon @click="editItem(item)">mdi-pencil</v-icon>
                    <v-icon color="error" @click="deleteItem(item)"> mdi-delete</v-icon>
                </template>
                <!-- end -->
            </v-data-table>
            
        </div>

    </div>

</template>


<script>
    export default {
        data() {
            return {
                headers: [{
                        text: '# Semestre', // nama header
                        value: 'level' //  value dari database
                    },
                    {
                        text: 'Asignaturas',
                        value: 'jurusan'
                    },
                    {
                        text: 'Acciones',
                        value: 'action', // action dari v-slot:item.action
                        sortable: false,
                        align: 'center'
                    },
                ],
                data: [], // isi data yang ada du databse
                search: '',
                modelDelete: false
            }
        },
        methods: {
            GetData() {
                axios.get('/api/semestre').then((response) => {
                    this.data = response.data
                }).catch((eror) => {
                    console.log(eror);
                })
            },
            tambahRoute() {
                this.$router.push('/semestre/create')
            },
            deleteItem(item) {
                console.log(item.id);
                Swal.fire({
                    title: 'Esta seguro que desea eliminar el semestre ?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirmar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete('/api/semestre/' + item.id).then((response) => {
                            console.log('berhasil');
                            // delete tanpa reload
                            const idx = this.data.indexOf(item)
                            this.data.splice(idx, 1)
                            // alert
                            Swal.fire(
                                'Eliminado!', 'El Semestre Ha Sido Eliminado.', 'success'
                            )
                        })

                    }
                })

            },
            editItem(item) {
                this.$router.push('/semestre/' + item.id);
            }
        },

        mounted() {
            this.GetData()
        },
    }

</script>
