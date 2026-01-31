import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ComponenteTransition from "@/views/ComponenteTransition.vue";
import Teleports from "@/views/Teleports.vue";
import CicloVida from "@/views/CicloVida.vue";
import VariablesReactivas from "@/views/VariablesReactivas.vue";
import AppWatcher from "@/views/AppWatcher.vue";
import AppComputadas from "@/views/AppComputadas.vue";
import AppProps from "@/views/AppProps.vue";
import AppProvide from "@/views/AppProvide.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/componente-transition",
        name: "ComponentesTransitions",
        component: ComponenteTransition,
    },
    {
        path: "/teleports",
        name: "Teleports",
        component: Teleports,
    },
    {
        path: "/ciclo-vida",
        name: "CicloVida",
        component: CicloVida,
    },
    {
        path: "/variable-reactiva",
        name: "VariablesReactivas",
        component: VariablesReactivas,
    },
    {
        path: "/watcher",
        name: "Watcher",
        component: AppWatcher,
    },
    {
        path: "/computadas",
        name: "AppComputadas",
        component: AppComputadas,
    },
    {
        path: "/app-props",
        name: "AppProps",
        component: AppProps,
    },
    {
        path: "/app-provide",
        name: "AppProvide",
        component: AppProvide,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
