<template>
    <div class="height-100 flex flex-between flex-middle header">
        <div>
            <h1 class="logo theme-color">Han's Blog</h1>
        </div>

        <div>
            <el-button plain size="small" @click="onLoginClick">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onLoginClick() {
            this.$router.push({path:'/login'});
        }
    }
}
</script>

<style scoped>
    .logo {
        font-size: 20px;
        font-weight: bolder;
    }
    .header {
        padding: 0px 100px;
    }
</style>