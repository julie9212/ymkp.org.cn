<template>
    <div>
        <Row>
            <Col span="24" v-for="list in info" style="padding:10px 2px">
                <Card style="padding:10px 2px">
                    <!-- <div @click="ContentInfoid(list.id)">
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
                    </div> -->
                    <!-- is_url 1.启用 链接外部网址 -->
                    <div v-if = "list.is_url == 1">
                        <a :href="list.url" target="_blank" style="color:#333">
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
                        </a>
                    </div>
                    <!-- is_url 不启用 链接内部文章页 -->
                    <div v-else>
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
                path: "/content/content",
                query: {id:id}
            });
            window.open(routeUrl.href, '_blank');
        },
    },
}
</script>

<style lang="less" scope>
li{
    list-style-type:none;
}
</style>
