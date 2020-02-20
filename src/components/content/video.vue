<template>
    <div><br>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <div style="padding:0px 15px">
                    <iframe frameborder="0" :src="info.video_url" allowFullScreen="true" style="width:100%;height:480px"></iframe>
                    <p style="text-align:right">发布时间{{info.create_time}}</p>
                </div>
                <div class="ql-editor">
                    <p style="font:600 24px/30px '微软雅黑'">{{info.title}}</p><br>
                    <p style="font: 16px/26px '微软雅黑'">{{info.abstract}}</p><br>
                    
                </div>
            </Col>
        </Row>
    </div>
</template>
 
<script>
 
export default {
    props:[
        "info",
    ],
    data(){
        return {
           
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
