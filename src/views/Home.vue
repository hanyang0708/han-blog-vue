<template>
    <el-container class="height-0">
        <el-main class="height-100 overflow-hidden bothSides" style="flex:1;text-align:right">
            
        </el-main>
        <el-main class="height-100 overflow-hidden" style="flex:3">
            <router-view class="flex-1"></router-view>
        </el-main>
        <el-main class="height-100 overflow-hidden bothSides" style="flex:1">
            
        </el-main>
    </el-container>
</template>

<script>
export default {
    methods:{

    }
}
</script>

<style scoped>
    .bothSides{
        padding-left: 0px;
        padding-right: 0px;
    }
</style>