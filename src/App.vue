<template>
    <div id="app">
        <el-container class="All-100">
            <el-header class="header" v-if="$route.name != 'login'">
                <Header />
            </el-header>
            <router-view class="flex-1 content"></router-view>
            <Footer />
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    .header {
        border-bottom: 1px solid #f8f8f8;
    }
    #app {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: #fff;
    }
    .content {
        padding: 0px 120px;
    }
</style>