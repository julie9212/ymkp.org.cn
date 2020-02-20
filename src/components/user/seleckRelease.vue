<template>
    <div class="seleckRelease">
        <Row>
            <Col span="24" style="padding:10px 2px">
               <Tabs >
                    <Tab-pane label="通过">
                        <!-- {{info.unaudited}} -->
                        <Row>
                            <Col span="20" v-for="list in info.adopt" style="padding:10px 2px">
                                <Card style="padding:10px 2px">
                                    <div @click="ContentInfoid(list.id)">
                                        <Row>
                                            <Col span="8">
                                                <div style="width:200px;height:120px;overflow:hidden">
                                                    <img :src="list.img_url"  style="width:100%;height:100%" class="img_animation">
                                                </div>
                                                
                                            </Col>
                                            <Col span="16">
                                                <h3>{{list.title}}</h3>
                                                <p style="padding:5px 0"> <span>{{list.writer}}</span> | <span>{{list.create_time}}</span> </p>
                                                <p>{{list.abstract}}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Tab-pane>
                    <Tab-pane label="未审核">
                        <Row>
                            <Col span="20" v-for="list in info.unaudited" style="padding:10px 2px">
                                <Card style="padding:10px 2px">
                                    <div @click="ContentInfoid(list.id)">
                                        <Row>
                                            <Col span="8">
                                                <div style="width:200px;height:120px;overflow:hidden">
                                                    <img :src="list.img_url"  style="width:100%;height:100%" class="img_animation">
                                                </div>
                                                
                                            </Col>
                                            <Col span="16">
                                                <h3>{{list.title}}</h3>
                                                <p style="padding:5px 0"> <span>{{list.writer}}</span> | <span>{{list.create_time}}</span> </p>
                                                <p>{{list.abstract}}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Tab-pane>
                    <Tab-pane label="驳回"> <Row>
                            <Col span="20" v-for="list in info.reject" style="padding:10px 2px">
                                <Card style="padding:10px 2px">
                                    <div @click="ContentInfoid(list.id)">
                                        <Row>
                                            <Col span="8">
                                                <div style="width:200px;height:120px;overflow:hidden">
                                                    <img :src="list.img_url"  style="width:100%;height:100%" class="img_animation">
                                                </div>
                                                
                                            </Col>
                                            <Col span="16">
                                                <h3>{{list.title}}</h3>
                                                <p style="padding:5px 0"> <span>{{list.writer}}</span> | <span>{{list.create_time}}</span> </p>
                                                <p>{{list.abstract}}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        </Row></Tab-pane>
                </Tabs>
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
            console.log(id);
            let routeUrl = this.$router.resolve({
                path: "/content/content",
                query: {id:id}
            });
            window.open(routeUrl.href, '_blank');
        }

    },
    
}
</script>

<style lang="less" scope>
.seleckRelease .ivu-tabs-ink-bar {
    height: 0px;
}
.seleckRelease .ivu-tabs-bar {
    border-bottom: 0px solid #dcdee2; 
}
</style>
