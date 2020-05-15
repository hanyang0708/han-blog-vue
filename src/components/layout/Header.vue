<template>
    <div class="height-100 flex flex-middle header">
        <div class="flex-1">
            <h1 class="logo theme-color">Han's Blog</h1>
        </div>

        <div class="height-100 flex flex-middle" style="flex-direction:row-reverse;flex:3">
            <div>
                
            </div>
        </div>

        <div class="flex flex-1 flex-between">
            <el-button plain @click="onWritingClick" icon="el-icon-edit" size="small" >开始写作</el-button>
            <HeaderImg v-if="$store.getters.getUserInfo && $store.getters.getUserInfo.id"/>
            <el-button size="small" @click="onLoginClick" v-else type="primary">登录</el-button>
        </div>
    </div>
</template>

<script>
import HeaderImg from './HeaderImg'
export default {
    methods: {
        onLoginClick() {
            this.$router.push({path:'/login'});
        },
        onWritingClick() {
            this.$router.push({path:'/createEssay'})
        }
    },
    components: {
        HeaderImg
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