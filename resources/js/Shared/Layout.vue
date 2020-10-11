<template>
    <header class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <inertia-link class="nav-link active" :href="route('main')">Main</inertia-link>
                        </li>
                        <li class="nav-item">
                            <inertia-link class="nav-link active" :href="route('about')">About</inertia-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main class="container p-5">
        <slot />
    </main>
</template>

<script>
export default {
    inject: ['route'],
    props: {
        errors: Object,
    },
}
</script>
