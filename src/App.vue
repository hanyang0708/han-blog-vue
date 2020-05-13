<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style scoped>
    #app {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: #fff;
    }
</style>