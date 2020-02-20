<template>
    <div>
        <Row :gutter="16" class="list_meeting">
            <Col span="8" v-for="list in info">
            <Card style="width:100%;height:280px;margin-top:15px" >
                <div @click="ContentInfoid(list.id)">
                    <Col span="24">
                        <img :src="list.img_url" width="100%">
                        <p>{{list.title}}</p>
                        <div class="text-2">
                            <Row>
                                <Col span="12"><p><span style="color:#0CA4D6">{{list.writer}}</span></p></Col>
                                <Col span="12"><p style="text-align:right"><span style="background:#0CA4D6;color:#eee;padding:2px 3px">{{list.source}}</span></p></Col>
                            </Row>
                        </div> 
                    </Col>
                </div>
            </Card>
               
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
         ContentInfoid(id){
            let routeUrl = this.$router.resolve({
                path: "/content/meeting",
                query: {id:id}
            });
            window.open(routeUrl.href, '_blank');
        }  
    },
}
</script>

<style lang="less" scope>
.list_meeting .ivu-card-body {
    padding: 0px;
}
.list_meeting .ivu-card-body p {
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
