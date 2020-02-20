<template>
    <div><br>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <div style="padding:0px 15px">
                    <Row :gutter="32">
                        <Col span="12">
                            <img :src="info.img_url" alt="" style="width:100%">
                        </Col>
                        <Col span="12">
                            <p style="font:600 24px/24px '微软雅黑'">{{info.title}}</p><br>
                            <p style="font:16px/26px '微软雅黑'">
                                <span>所属行业：{{info.source}}</span> <br>
                                <span>发布时间：{{info.create_time}}</span> <br>
                                <span>发布作者：{{info.writer}}</span> <br>
                            </p>
                            <br><br><br><br>
                            <Button type="info" @click="modal1 = true" style="margin-right:20px">点击预览</Button>
                            <a :href="info.file_url" download="pdf" target="_blank"><Button type="warning">下载报告</Button></a>
                        </Col>
                    </Row><br>
                </div>
                <div class="ql-editor">
                    <div v-html="info.content"></div>
                </div>
            </Col>
        </Row>

        <Modal
        :styles="{top: '20px'}"
        v-model="modal1"
        :title="info.title"
        width="1000px">
             <embed :src="info.file_url" width="100%" height="600" ></embed>
        </Modal>

    </div>
</template>
 
<script>
 
export default {
    props:[
        "info",
    ],
    data(){
        return {
            modal1: false,
        }
    },
    mounted() {

    },
    methods: {
       
    },
}
</script>

<style lang="less" scope>
li{
    list-style-type:none;
}
.ql-editor p{
    font:16px/26px '微软雅黑'
}
</style>
