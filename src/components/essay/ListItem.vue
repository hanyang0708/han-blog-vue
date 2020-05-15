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
        <div class="footer">
            <span>{{ $moment(itemInfo.createTime).format('YYYY-MM-DD HH:mm:ss') }}</span>
            <span class='ml-15'>阅读量：{{itemInfo.readNum}}</span>
            <span class='ml-15'>点赞量</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemInfo: {
            type: Object
        }
    },
    methods: {
        onTilteClick() {
            this.$router.push({name:'essayInfo',params: {id:this.itemInfo.id}})
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