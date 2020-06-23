<template>
    <h5>user: {{userId}}</h5>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userId(){
            console.log(this.$route)
            return this.$route.params.id
        }
    },
}
</script>

<style>

</style>