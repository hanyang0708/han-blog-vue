<template>
    <div class='content flex flex-column'>
        <div class="flex-1">
            <mavon-editor 
                v-model="mdCon" 
                ref="md" 
                @change="mdChange" 
                style="height: 100%;box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 12px 0px;"
                @imgAdd="$imgAdd"
                ishljs
            />
        </div>

        <div class='footer'>
            <el-button style="width:100px" @click="onCancelClick">取消</el-button>
            <el-button type="primary" style="width:100px" class="ml-20" @click="onSaveClick">发布</el-button>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    data() {
        return {
            mdCon: ''
        }
    },
    methods: {
        mdChange(value,render) {
            console.log(render);
        },
        onCancelClick() {
            this.$router.go(-1);
        },
        $imgAdd(pos, $file){
            console.log($file);
            this.$refs.md.$img2Url(pos, '123');
        },
        onSaveClick() {
            this.$message.success('发布成功！感谢您的分享');
            this.$router.go(-1);
        }
    },
    components: {
        mavonEditor,
    }
}
</script>

<style scoped>
    .content {
        padding: 0px 120px;
    }
    .footer {
        text-align: right;
        padding: 20px 0px;
    }
</style>