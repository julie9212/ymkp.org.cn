<template>
    <div>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <div style="padding:0">
                    <Row>
                        <Col span="24">
                            <div style="text-align: center; font: 14px/20px 微软雅黑; color: rgb(102, 102, 102);">
                                <img :src="user.head_url" alt="" style="width: 80px; height: 80px; border-radius: 50%;">
                                <p style="padding: 10px;">
                                    {{user.username}} | 
                                    <span v-if="user.vip == 1">普通</span>
                                    <span v-else-if="user.vip == 2">VIP</span> 
                                    <span v-else>未知</span> |
                                    文章:{{user_total}}篇
                                </p>
                                <P style="padding: 10px; background: rgba(12, 164, 214, 0.1);">{{user.abstract}}</P>
                            </div>
                            <ul class="list_content" style="position:relative">
                                <li v-for="(list, index) of user_article" :key="index" style="border-bottom:1px dotted #eee">
                                    <div class="model model-right" style="padding-top:10px">
                                        <div @click="ContentInfoid(list.id)">
                                            <p style="text-align:left;padding: 5px 0px 0;font:14px/20px '微软雅黑';color:#666">{{list.title}} <br> <span>{{list.create_time}}</span></p>
                                            <span style="color:#999;font:12px/24px '微软雅黑';">{{list.create_time}}</span>
                                        </div> 
                                    </div>
                                </li>
                            </ul>
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
        "user",
        "user_total",
        "user_article"
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
        }       
    },
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
