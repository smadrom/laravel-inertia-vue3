import {createApp, h} from 'vue';
import {app, plugin} from '@inertiajs/inertia-vue3';
import route from 'ziggy-js';

const el = document.getElementById("app");

const vueApp = createApp({
    render: () =>
        h(app, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) =>
                import(`@/Pages/${name}`).then((module) => module.default),
        }),
});

vueApp.use(plugin);
vueApp.mount(el);

vueApp.provide('route', (...args) => route(...args).url())
