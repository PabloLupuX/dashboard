import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { createPinia } from "pinia"; // Importa Pinia
import PrimeVue from "primevue/config"; // Importa PrimeVue 4
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";

import { definePreset } from "@primevue/themes";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const myPreset = definePreset(Aura, {
    semantic: {
        primary: {
            0: "#ffffff",
            50: " {teal.50}",
            100: "{teal.100}",
            200: "{teal.200}",
            300: "{teal.300}",
            400: "{teal.400}",
            500: "{teal.500}",
            600: "{teal.600}",
            700: "{teal.700}",
            800: "{teal.800}",
            900: "{teal.900}",
            950: "{teal.950}",
        },
        formField: {
            paddingX: "1rem",
            paddingY: "0.5rem",
        },
        myButton: {
            // paddingX: "3rem",
            // paddingY: "1rem",
            marginX: "0.5rem",
        },
        colorScheme: {
            light: {
                surface: {
                    0: "#ffffff",
                    50: " {cyan.50}",
                    100: "{cyan.100}",
                    200: "{cyan.200}",
                    300: "{cyan.300}",
                    400: "{cyan.400}",
                    500: "{cyan.500}",
                    600: "{cyan.600}",
                    700: "{cyan.700}",
                    800: "{cyan.800}",
                    900: "{cyan.900}",
                    950: "{cyan.950}",
                },
                formField: {
                    hoverBorderColor: "{primary.color}",
                },
            },
            dark: {
                surface: {
                    0: "#ffffff",
                    50: "{slate.50}",
                    100: "{slate.100}",
                    200: "{slate.200}",
                    300: "{slate.300}",
                    400: "{slate.400}",
                    500: "{slate.500}",
                    600: "{slate.600}",
                    700: "{slate.700}",
                    800: "{slate.800}",
                    900: "{slate.900}",
                    950: "{slate.950}",
                },
                formField: {
                    hoverBorderColor: "{primary.100}",
                },
            },
        },
    },

    components: {
        button: {
            // paddingX: "{my.button.padding.x}",
            // paddingY: "{my.button.padding.y}",
            marginX: "{my.button.margin.x}",
        },
        menubar: {
            padding: "0rem",
        },
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: myPreset,
                    options: {
                        darkModeSelector: ".my-app-dark",
                    },
                },
            })
            .use(createPinia()) // Agrega Pinia a la instancia de Vue
            .use(ZiggyVue)
            .use(ToastService)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
