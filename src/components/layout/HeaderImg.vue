<template>
    <el-dropdown>
        <div class="headerImg flex flex-middle">
            <span>{{$store.getters.getUserInfo.nickName}}</span>
            <img :src='HeaderImg' alt="">
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改头像</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>修改昵称</el-dropdown-item>
            <el-dropdown-item>
                <div @click="onMyEssayClick">我的文章</div>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
import HeaderImg from '@/assets/Header.jpg'
export default {
    data(){
        return {
            HeaderImg,
        }
    },
    methods: {
        onMyEssayClick() {
            this.$router.push({name:'myList'});
        }
    }
}
</script>
<style scoped>
    .headerImg{
        text-align: right;
    }
    .headerImg span{
        font-size: 14px;
    }
    .headerImg img{
        width: 30px;
        height: 30px;
        border-radius:50%;
        display: inline-block;
        margin-left: 10px;
        border: 1px #ccc solid;
    }
</style>