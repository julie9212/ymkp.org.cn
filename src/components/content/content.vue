<template>
    <div>
        <br>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <div style="padding:0px 15px">
                    <p style="font: 26px/30px '微软雅黑'">{{info.title}}</p><br>
                    <Row>
                        <Col span="24">
                            <p style="font:16px/26px '微软雅黑';color:#666"><span>{{info.source}}</span> / <span>{{info.writer}}</span> / <span>{{info.create_time}}</span></p>
                        </Col>
                    </Row><br>
                    <Row>
                        <Col span="24">
                            <div style="padding: 15px 30px; background: #eee;">
                                <p style="font:16px/24px '微软雅黑';color:#666"><span style="font-weight:bold">[ 环球影响力智库 提要 ]</span> {{info.abstract}}</p>
                            </div>
                            <br>
                        </Col>
                        <Col span="24">
                            <div style="background:#eee;padding:30px">
                                <img :src="info.img_url" alt="" width="100%">
                            </div>
                        </Col>
                    </Row>
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
