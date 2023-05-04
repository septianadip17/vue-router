<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                    <a href="/">Home</a>
                    <br>
                    <router-link to="/">Home (Router Link)</router-link>
                    <br>
                    <button @click="pushToHome">Home (Push)</button>
                    <br>
                    <button @click="goForward">Forward (Go)</button>
                    <br>
                    <button @click="goBack">goBack (Go)</button>
                    <br>
                    <button @click="replaceToHome">Home (Replace)</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    },
    methods: {
        pushToHome() {
            this.$router.push({ name: 'home' })
        },
        goForward() {
            this.$router.go(1)
        },
        goBack() {
            this.$router.go(-1)
        },
        replaceToHome() {
            this.$router.replace('/') //tidak menambahkan history
        }
    }
}
</script>
