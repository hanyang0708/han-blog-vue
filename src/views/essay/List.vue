<template>
    <div class="height-100 flex flex-column">
        <div style="text-align:right;padding: 0px 0px 20px 20px">
            <el-switch
                v-model="switchValue"
                active-text="最新发布"
                inactive-text="阅读最多"
                @change="switchChange"
            >
            </el-switch>
        </div>
        
        <ul class="scroll height-0 flex-1" v-infinite-scroll="load" style="overflow:auto" infinite-scroll-disabled="disabled">
            <li v-for="value in listData" class="infinite-list-item" :key="value.id">
                <ListItem :itemInfo='value'/> 
            </li>
            <p v-if="loading" class="loading">加载中...</p>
            <p v-if="noMore" class="loading">没有更多了</p>
        </ul>
    </div>
</template>

<script>
import ListItem from '@/components/essay/ListItem'
import { essayService } from '@/api'

export default {
    data() {
        return {
            loading: false,
            pageNum: 1,
            listData: [],
            noMore: false,
            switchValue: false,
        }
    },
    computed: {
        disabled () {
            return this.loading || this.noMore
        }
    },
    methods: {
        load () {
            this.pageNum += 1;
            this.queryEssayList()
        },
        queryEssayList() {
            this.loading = true;
            essayService.queryEssayList({
                queryType: this.switchValue,
                pageNum: this.pageNum,
                pageSize: 10
            }).then(res=>{
                this.listData = [
                    ...this.listData,
                    ...res.data
                ];
                this.loading = false;
                if(!res.data.length){
                    this.noMore = true;
                }
            }).catch(err=>{
                console.log(err,'queryEssayList')
            })
        },
        switchChange() {
            this.pageNum = 1;
            this.listData = [];
            this.queryEssayList();
        }
    },
    created() {
        this.queryEssayList()
    },
    components: {
        ListItem
    }
}
</script>

<style scoped>
    .scroll::-webkit-scrollbar{
        width:3px;
        height:5px;
    }
    .scroll::-webkit-scrollbar-track{
        background: rgb(239, 239, 239);
        border-radius:2px;
    }
    .scroll::-webkit-scrollbar-thumb{
        background: #bfbfbf;
        border-radius:10px;
    }
    .scroll::-webkit-scrollbar-thumb:hover{
        background: #1989fa;
    }
    .loading {
        font-size: 12px;
        text-align: center;
        color: #ccc;
    }
</style>