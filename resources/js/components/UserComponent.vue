<template>
    <div>
        <h1>Hello {{ $route.params.username }}. Have a nice day.</h1>
        <h1>Id saya adalah {{ $route.query.id }}</h1>
        <br>
        <br>
        <router-link :to="routeHello">Hello</router-link> |
        <router-link :to="routeBye">Bye</router-link>
        <br>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        routeHello() {
            return "/user/" + this.$route.params.username + "/hello"
        },
        routeBye() {
            return "/user/" + this.$route.params.username + "/bye"
        }
    }
}
</script>