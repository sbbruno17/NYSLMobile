var vue = new Vue({
    el: '#app',
    data: {
        mostrar: false,
        juegoSeleccionado: {},
        juegos: juegosData
    },
    methods: {
        gametable: function (dato) {
            for (i = 0; i < vue.juegos.length; i++) {
                if (vue.juegos[i].id == dato) {
                    vue.juegoSeleccionado = vue.juegos[i];
                }
            }
        },
        showHide: function () {
            this.mostrar = !this.mostrar;
        }
    }
})