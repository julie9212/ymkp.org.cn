<template>
    <div>
        <!-- {{info}} -->
        <Row>
            <Col span="24" style="padding:10px 2px">
                <div style="padding:0">
                    <Row>
                        <Col span="24">
                            <div style="text-align: center; font: 14px/20px 微软雅黑; color: rgb(102, 102, 102);">
                                <img :src="info.head_url" alt="" style="width: 80px; height: 80px; border-radius: 50%;">
                                <p style="padding: 10px;">
                                    {{info.username}} | 
                                    <span v-if="info.vip == 1">普通</span>
                                    <span v-else-if="info.vip == 2">VIP</span> 
                                    <span v-else>未知</span> 
                                </p>
                                <P style="padding: 10px; background: rgba(12, 164, 214, 0.1);">{{info.abstract}}</P>
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
    // data(){
    //     return {
    //     }
    // },
    // mounted() {
    // },
    // methods: {
    // },
}
</script>

<style lang="less" scope>
.list_content p {
    padding: 15px 15px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
li{
    list-style-type:none;
}
</style>
