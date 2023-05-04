<template>
    <div>
        <h1>HOME</h1>
        <button @click="testQuery">Test Query</button>
        <br>
        <button @click="about">About</button>
    </div>
</template>

<script>
export default {
    methods: {
        testQuery() {
            // this.$router.push({ name: 'user', params: { username: "iay" }, query: { id: 123 } })
            this.$router.push('user/iay?id=345')
        },
        about() {
            this.$router.push('/about')
        }
    }
}
</script>