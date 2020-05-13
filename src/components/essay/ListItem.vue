<template>
    <div class="pb-20 card mb-20">
        <div class="header" @click="onTilteClick">
            <h1 class="title font-title-color">
                Divider 分割线
            </h1>
        </div>
        <div class="content">
            先要对职业读书人的背景有两个认识： 1、职业读书人得益于现代的信息爆炸，更侧重于筛选。所以职业读书人能产生拆选价值。 2、行业还处于野蛮生长期，...
        </div>
        <div class="footer">
            <span>日期</span>
            <span class='ml-15'>阅读量</span>
            <span class='ml-15'>点赞量</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onTilteClick() {
            
        }
    }
}
</script>

<style scoped>
    .card {
        border-bottom: 1px solid #ddd;
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