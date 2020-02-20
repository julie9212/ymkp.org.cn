<template>
    <div>
        <Row>
            <Col span="24">
                <Row :gutter="16">
                    <Col span="6" v-for="list in info">
                        <Card :bordered="false" style="text-align:center"> 
                            <div>
                                <img :src="list.img_url"  style="width:100%;height:100%">
                            </div><br>
                            <h3>{{list.title}}</h3>
                            <p>{{list.title_small}}</p><br>
                            <Button type="primary" shape="circle" size="small"  @click="modal(list)"> 详细信息 </Button>
                            
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Modal
            v-model="modal1"
            title="详细信息"
            footer="false"
            width="800"
            style="text-align:center">
            <!-- 模态框开始 -->
            <Row>
                <Col span="8">
                    <div style="width:200px"> 
                        <div>
                            <img :src="data.img_url"  style="width:100%;height:100%">
                        </div><br>
                        <h3>{{data.title}}</h3>
                        <p>{{data.title_small}}</p>
                    </div>
                </Col>
                <Col span="16">
                    <div>
                        <p style="text-align:left;font:14px/24px '微软雅黑'">{{data.abstract}}</p>
                    </div>
                </Col>
            </Row>
            <!-- 模态框结束 -->
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
            data:'',
        }
    },
    mounted() {
    },
    methods: {
        modal(list){
            this.data = list;
            this.modal1 = true;
        }
    },
}
</script>

<style lang="less" scope>
.ivu-card-body {
    padding: 16px;
}
</style>
