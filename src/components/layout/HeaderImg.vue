<template>
    <el-dropdown>
        <div class="headerImg flex flex-middle">
            <span>{{$store.getters.getUserInfo.nickName}}</span>
            <img :src='HeaderImg' alt="">
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><div @click="onChangePwd">修改密码</div></el-dropdown-item>
            <el-dropdown-item><div @click="onChangNickClick">修改昵称</div></el-dropdown-item>
            <el-dropdown-item><div @click="onMyEssayClick">我的文章</div></el-dropdown-item>
        </el-dropdown-menu>
        <ChangeNickname v-if="isChangNickName" @cloneChangeNickModal='cloneChangeNickModal'/>
        <ChangePassWord v-if="isChangePwd"  @cloneChangePwdModal='cloneChangePwdModal'/>
    </el-dropdown>
    
</template>
<script>
import HeaderImg from '@/assets/Header.jpg'
import ChangeNickname from './../user/ChangeNickname'
import ChangePassWord from './../user/ChangePassWord'
export default {
    data(){
        return {
            HeaderImg,
            isChangNickName :false,
            isChangePwd : false,
        }
    },
        
    created(){
        
    },
    components: {
        ChangeNickname,
        ChangePassWord
    },
    methods : {
        onChangNickClick(){
            this.isChangNickName = true;
        },
        cloneChangeNickModal() {
            this.isChangNickName = false;
        },
        onChangePwd(){
            this.isChangePwd = true;
        },
        cloneChangePwdModal(){
            this.isChangePwd = false;
        },
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