<template>
    <el-container class="All-100">
        <el-header class="header">
            <Header />
        </el-header>
        <router-view class="flex-1"></router-view>
        <Footer />
    </el-container>
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
</style>