<template>
    <div class="pb-20 card mb-20">
        <div class="header" @click="onTilteClick">
            <h1 class="title font-title-color">
                {{itemInfo.title}}
            </h1>
        </div>
        <div class="content">
            {{itemInfo.preview}}
        </div>
        <div class="footer flex flex-between">
            <div>
                <span>{{ $moment(itemInfo.createTime).format('YYYY-MM-DD HH:mm:ss') }}</span>
                <span class='ml-15'>阅读量：{{itemInfo.readNum}}</span>
                <!-- <span class='ml-15'>点赞量</span> -->
            </div>

            <div v-if="$route.name == 'myEssay'">
                <el-link :underline="false" style="font-size: 12px;" @click="onEditClick">编辑</el-link>
                <el-link  slot="reference" :underline="false" type="danger" class="ml-20" style="font-size: 12px;" @click="delEssayClick">删除</el-link>
            </div>
        </div>
    </div>
</template>

<script>
import { essayService } from '@/api'

export default {
    props: {
        itemInfo: {
            type: Object
        }
    },
    methods: {
        onTilteClick() {
            this.$router.push({name:'essayInfo',params: {id:this.itemInfo.id}})
        },
        delEssayClick() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                essayService.deleteEssay({
                    id: this.itemInfo.id,
                    userId: this.$store.getters.getUserId,
                }).then(res=>{
                    this.$message.success('删除成功')
                    this.$emit('delSuccess');
                })
            })
        },
        onEditClick() {
            this.$router.push({name:'updateEssay',params:{id:this.itemInfo.id}});
        }
    }
}
</script>

<style scoped>
    .card {
        margin-right: 20px;
        border-bottom: 1px solid #eee;
    }
    .header{
        cursor: pointer;
    }
    .title {
        font-size: 18px;
        font-weight: 700;
    }
    .content {
        margin-top: 15px;
        font-size: 14px;
        color: #999;
    }
    .footer {
        margin-top: 15px;
        font-size: 12px;
        color: #aaa;
    }
</style>