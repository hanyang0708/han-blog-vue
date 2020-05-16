<template>
    <el-dropdown>
        <div class="headerImg flex flex-middle">
            <span>{{$store.getters.getUserInfo.nickName}}</span>
            <img :src='$store.getters.getUserInfo.headerImg || HeaderImg' alt="">
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
                <div @click="changeHeaderImgClick">修改头像</div>
                <input type="file" name="file" accept="image/*" ref="upload" style="display:none" @change="uploadChange">
            </el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>修改昵称</el-dropdown-item>
            <el-dropdown-item>
                <div @click="onMyEssayClick">我的文章</div>
            </el-dropdown-item>
        </el-dropdown-menu>

        <ChangeHeaderImg :imgUrl='imgUrl' v-if="isChangeHImgModal" @clone='cloneChangeHIM'/>
    </el-dropdown>
</template>
<script>
import HeaderImg from '@/assets/Header.jpg'
import ChangeHeaderImg from '@/components/user/ChangeHeaderImg'
export default {
    data(){
        return {
            HeaderImg,
            imgUrl: '',
            isChangeHImgModal: false,
        }
    },
    methods: {
        onMyEssayClick() {
            this.$router.push({name:'myList'});
        },
        changeHeaderImgClick() {
            this.$refs.upload.click();
        },
        uploadChange() {
            this.imgUrl = window.URL.createObjectURL(this.$refs.upload.files[0])
            this.isChangeHImgModal = true;
        },
        cloneChangeHIM() {
            this.isChangeHImgModal = false;
        }
    },
    components: {
        ChangeHeaderImg
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