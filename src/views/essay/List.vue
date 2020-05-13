<template>
    <el-container class="height-0">
        <el-main class="height-100 overflow-hidden" style="flex:1;text-align:right">
            左边栏
        </el-main>
        <el-main class="height-100 overflow-hidden" style="flex:3">
            <ul class="height-100 scroll" v-infinite-scroll="load" style="overflow:auto">
                <li v-for="i in 20" class="infinite-list-item" :key="i">
                    <ListItem/> 
                </li>
            </ul>
        </el-main>
        <el-main class="height-100 overflow-hidden" style="flex:1">
            <el-button type="primary" plain @click="onWritingClick" icon="el-icon-edit">开始写作</el-button>
        </el-main>
    </el-container>
</template>

<script>
import ListItem from '@/components/essay/ListItem'

export default {

    methods: {
        load () {
            console.log('到底部了吗')
        },
        onWritingClick() {
            this.$router.push({path:'/essay/create'})
        }
    },
    components: {
        ListItem
    }
}
</script>

<style scoped>
    .scroll {
        padding: 0px 20px;
    }
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
</style>