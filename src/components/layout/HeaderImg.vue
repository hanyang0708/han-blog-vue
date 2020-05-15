<template>
    <div class="headerImg flex flex-middle">
        <span>{{$store.getters.getUserInfo.nickName}}</span>
        <img :src='HeaderImg' alt="">
    </div>
</template>
<script>
import HeaderImg from '@/assets/Header.jpg'
export default {
    data(){
        return {
            HeaderImg,
        }
    },
    created(){
        console.log('123')
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