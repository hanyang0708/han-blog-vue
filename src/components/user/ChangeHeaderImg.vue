<template>
    <el-dialog
        title="上传头像"
        :visible="true"
        width="500px"
        @clone="$emit('close')"
    >
        <div style="height:300px">
            <VueCropper
                ref="cropper"
                :img="imgUrl"
                :canScale='false'
                fixedBox
                autoCrop
                mode='100%'
                centerBox
                :fixedNumber='[1,1]'
                fixed
                :outputSize='0.5'
            >
            </VueCropper>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('clone')">取 消</el-button>
            <el-button type="primary" @click="handok" :loading="loading" :disabled="loading">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import { userService, uploadService } from '@/api'

export default {
    props: {
        imgUrl: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            loading: false,
        }
    },
    methods: {
        handok() {
            this.loading = true
            this.$refs.cropper.getCropBlob((data) => {
                let fileName = new Date().getTime() + this.$store.getters.getUserId + '.' + data.type.substr(data.type.indexOf('/') + 1);
                uploadService.getUploadUrl({
                    name: fileName,
                    type: 1
                }).then(res=>{
                    uploadService.uploadImg(res.data.url,data).then(response=>{
                        let url = res.data.url
                        url = url.substring(0, url.indexOf('?'));
                        userService.uploadHeaderImg({
                            url,
                            id: this.$store.getters.getUserId
                        }).then(resp=>{
                            this.$message.success('修改成功');
                            this.$store.dispatch('setUserInfo',resp.data);
                            this.$emit('clone');
                        }).catch(err=>{
                            this.$message.error('上传失败，请稍后重试');
                            this.loading = false
                        })
                    }).catch(()=>{
                        this.$message.error('图片上传失败');
                    })
                })
            })
        }
    },
    components: {
        VueCropper
    }
}
</script>

<style lang="less" scoped>

</style>