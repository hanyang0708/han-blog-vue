<template>
    <el-dialog title="修改昵称" :visible='true' width="30%" :before-close="handleClose">
        <el-input  placeholder="请输入新昵称" v-model="nickName"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('cloneChangeNickModal')">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    data() {
        return {
            nickName : '',
        };
    },
    methods: {
        submit() {
            this.$emit('cloneChangeNickModal');
        },
        handleClose() {
            this.$emit('cloneChangeNickModal');
        }
    }
  };
</script>
<style scoped>
</style>