<template>
    <div class="flex flex-column height-100">
        <div class="header flex flex-middle pb-20">
            <div class="header_img">
                <img :src="HeaderImg" alt="">
            </div>

            <div class="ml-20">
                <h5 class="user_name">用户名</h5>
                <p class="essay_num">文章数量：{{total}}</p>
            </div>
        </div>
        <div class="height-0 flex-1">
            <ul class="scroll height-100" v-infinite-scroll="load" style="overflow:auto" infinite-scroll-disabled="disabled">
                <li v-for="value in listData" class="infinite-list-item" :key="value.id">
                    <ListItem :itemInfo='value' @delSuccess='delSuccess'/> 
                </li>
                <p v-if="loading" class="loading">加载中...</p>
                <p v-if="noMore" class="loading">没有更多了</p>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderImg from '@/assets/Header.jpg'
import ListItem from '@/components/essay/ListItem'
import { essayService } from '@/api'
export default {
    data() {
        return {
            HeaderImg,
            loading: false,
            listData: [],
            noMore: false,
            pageNum: 1,
            total: 0
        }
    },
    created() {
        this.queryEssayListByUserId();
    },
    methods: {
        load () {
            this.pageNum += 1;
            this.queryEssayListByUserId()
        },
        queryEssayListByUserId() {
            essayService.queryEssayListByUserId({
                pageNum: this.pageNum,
                pageSize: 10,
                userId: this.$store.getters.getUserId
            }).then(res=>{
                this.listData = res.data;
                this.total = res.total;
            })
        },
        delSuccess() {
            this.pageNum = 1;
            this.queryEssayListByUserId();
        }
    },
    components: {
        ListItem,
    }
}
</script>

<style scoped>
    .header {
        height: 80px;
        /* border: 1px solid #000; */
    }
    .header_img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        /* border: 1px solid #000; */
        overflow: hidden;
    }
    .header_img img{
        width: 100%;
        height: 100%;
    }
    .user_name {
        font-size: 16px;
    }
    .essay_num {
        margin-top: 10px;
        font-size: 12px;
        color: #aaa;
    }
</style>