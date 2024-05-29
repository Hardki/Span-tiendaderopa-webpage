import Header from './header.js';
import Footer from './footer.js';
import { obtenerDatos } from './productos.js';
import { stickyfunction } from './sticky.js';

const App = {
    template: `<mi-header></mi-header>
    <main>
        <br>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <br><br>
                <div class="col" v-for="producto in imagenes" :key="producto.id">
                    <br><br>
                    <div class="tarjeta shadow-sm">
                        <img v-if="producto.image" :src="producto.image" class="card-img-top imagen-tarjeta" alt="...">
                        <div class="card-body">
                            <h5 class="card-title product-title">{{ producto.title }}</h5>
                            <p class="card-text product-price">$ {{ producto.price }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <a href="#" class="btn btn-success boton-agregar">Agregar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <mi-footer></mi-footer>
    </div>`,
    components: {
        'mi-header': Header,
        'mi-footer': Footer,
    },
    data() {
        return {
            imagenes: [],
        };
    },
    methods: {
        async fetchImages() {
            try {
                const mujeresDatos = await obtenerDatos("https://fakestoreapi.com/products/category/women's clothing");
                this.imagenes = [...mujeresDatos];
            } catch (error) {
                console.error('Error buscando imágenes:', error);
            }
        },
    },
    created() {
        this.fetchImages();
    },
    mounted() {
        stickyfunction();
    },
};

Vue.createApp(App).mount('#app');
