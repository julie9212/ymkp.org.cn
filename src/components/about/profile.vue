<template>
    <div>
        <Row>
            <Col span="24">
                <div class="ql-editor">
                    <div v-html="info.content" style="width:100%"></div>
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

<style lang="less" scope>.ql-editor p{
    font:16px/26px '微软雅黑'
}
</style>
