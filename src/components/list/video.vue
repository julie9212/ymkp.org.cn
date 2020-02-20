<template>
    <div>
        <Row class="list_video">
            <Col span="24"> 
                <Row :gutter="16">
                    <Col span="8" v-for="info in info" >
                        <Card style="width:100%;height:250px;margin-top:15px" >
                            <div  @click="ContentInfoid(info.id)">
                                <Col span="24">
                                    <img :src="info.img_url" width="100%">
                                    <p>{{info.title}}</p>
                                    <div class="text-2">
                                        <Row>
                                            <Col span="12"><p><span style="color:#0CA4D6">{{info.writer}}</span></p></Col>
                                            <Col span="12"><p style="text-align:right"><span style="background:#0CA4D6;color:#eee;padding:2px 3px">{{info.source}}</span></p></Col>
                                        </Row>
                                    </div> 
                                </Col>
                            </div>
                        </Card>
                    </Col>
                </Row>                
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
            modal1: false,
            data:'123',
            video_url:"",
        }
    },
    mounted() {
    },
    methods: {
         ContentInfoid(id){
            let routeUrl = this.$router.resolve({
                path: "/content/video",
                query: {id:id}
            });
            window.open(routeUrl.href, '_blank');
        } 
    },
}
</script>

<style lang="less" scope>
.list_video .ivu-card-body {
    padding: 0px;
}
.list_video .ivu-card-body p {
    padding: 15px 15px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
li{
    list-style-type:none;
}
</style>
