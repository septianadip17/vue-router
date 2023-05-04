import Example from "./components/ExampleComponent.vue";
import Home from "./components/HomeComponent.vue";
import User from "./components/UserComponent.vue";
import Hello from "./components/HelloComponent.vue";
import Bye from "./components/ByeComponent.vue";
import NotFound from "./components/NotFoundComponent.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        alias: "/rumah",
    },
    // {
    //     path: "/rumah",
    //     redirect: "/",
    // },
    {
        path: "/example",
        name: "example",
        component: Example,
    },
    {
        path: "/user/:username?",
        name: "user",
        component: User,
        children: [
            {
                path: "hello",
                component: Hello,
            },
            {
                path: "bye",
                component: Bye,
            },
        ],
    },
    {
        name: "about",
        path: "/about",
        component: () =>
            import(
                /*webpackChunkName: "about"*/ "./components/AboutComponent.vue"
            ),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: NotFound,
    },
];
