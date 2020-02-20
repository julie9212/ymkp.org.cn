<template>
    <div>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <div class="ql-editor">
                    <div v-html="contents.content"></div>
                </div>
            </Col>
        </Row>
    </div>
</template>
 
<script>
export default {
    props:[
        "contents",
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
.ql-editor img{
    width:100%
}
</style>
