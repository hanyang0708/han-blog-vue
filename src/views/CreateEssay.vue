<template>
    <div class='flex flex-column'>
        <div class="flex-1 flex flex-column height-0">
            <mavon-editor 
                v-model="mdCon" 
                ref="md" 
                @change="mdChange" 
                style="height: 100%;flex:1;box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 12px 0px;"
                @imgAdd="$imgAdd"
                ishljs
                :scrollStyle='true'
            />
        </div>

        <div class='footer'>
            <el-button style="width:100px" @click="onCancelClick">取消</el-button>
            <el-button type="primary" style="width:100px" class="ml-20" @click="onSaveClick">发布</el-button>
        </div>

        <el-dialog
            title="文章标题"
            :visible.sync="centerDialogVisible"
            width="30%"
            destroy-on-close
        >
            <el-input
                placeholder="请输入文章标题"
                v-model="title"
            />
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitClick">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { essayService } from '@/api'

export default {
    data() {
        return {
            centerDialogVisible: false,
            mdCon: '',
            title: '',
            preview: ''
        }
    },
    methods: {
        mdChange(value,render) {
            console.log(value,'value');
            var div = document.createElement("div");
            div.innerHTML = render;
            this.preview = div.innerText.substr(0,100);
        },
        onCancelClick() {
            this.$router.go(-1);
        },
        $imgAdd(pos, $file){
            console.log($file);
            this.$refs.md.$img2Url(pos, '123');
        },
        onSaveClick() {
            this.centerDialogVisible = true;
        },
        submitClick() {
            essayService.createEssay({
                title: this.title, 
                preview: this.preview, 
                content: this.mdCon, 
                userId: this.$store.getters.getUserId
            }).then(res=>{
                console.log(res,'创建成功')
                this.$message.success('发布成功！感谢您的分享');
                this.$router.push({path:'/'});
            }).catch(err=>{
                console.log(err,'创建失败')
            })
        }
    },
    components: {
        mavonEditor,
    }
}
</script>

<style scoped>
    .footer {
        text-align: right;
        padding: 20px 0px;
    }
</style>