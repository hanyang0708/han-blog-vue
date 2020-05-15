<template>
    <div class="height-100 flex flex-column">
        <div class="title">
            <h1>{{essayInfo.title}}</h1>
        </div>
        <div class="flex-1 height-0">
            <mavon-editor 
                v-model="essayInfo.content" 
                ref="md"
                style="height: 100%;"
                :editable='false'
                defaultOpen='preview'
                :subfield='false'
                :toolbarsFlag='false'
                ishljs
                :boxShadow='false'
                :scrollStyle='true'
            />
        </div>
        <div class="footer flex flex-between">
            <div>
                <span>{{$moment(essayInfo.createTime).format('YYYY-MM-DD HH:mm:ss')}}</span>
                <span class="ml-20">阅读量：{{essayInfo.readNum}}</span>
            </div>
            <div>
                作者：{{essayInfo.nickName}}
            </div>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { essayService } from '@/api'

export default {
    props:['id'],
    data() {
        return {
            mdCon: '',
            essayInfo: {}
        }
    },
    methods: {
        queryEssayById() {
            essayService.queryEssayById({
                id: this.id
            }).then(res=>{
                this.essayInfo = res.data;
                console.log(res.data);
            }).catch(err=>{

            })
        }
    },
    created() {
        this.queryEssayById();
    },
    components: {
        mavonEditor,
    }
}
</script>

<style scoped>
    .title{
        padding-bottom: 20px;
        font-size: 20px;
        font-weight: bolder;
    }
    .footer{
        padding-top: 10px;
        color: #ccc;
        font-size: 14px;
    }
</style>