<template>
    <div class="list_meeting">
        <Row class="model ">
            <Col span="20" class="icon"><h2>智库会议</h2></Col>
            <Col span="4"><p>更多</p></Col>
        </Row>
        <Row>
            <Col span="24">
                <ul class="list_content" style="position:relative">
                    <li v-for="(list, index) of meeting" :key="index" style="border-bottom:1px dotted #eee">
                        <div @click="ContentInfoid(list.id)">
                            <Row class="model " style="padding-top:10px">
                                <Col span="4" style="text-align:center;padding:6px 0">
                                    {{list.writer}} <br>
                                    <span style="background:#0CA4D6;color:#fff;padding:2px 5px">
                                        {{list.source}}
                                    </span>
                                </Col>
                                <Col span="20">
                                    <div>
                                        <p style="text-align:left;padding: 5px 0px 0;font:14px/20px '微软雅黑';color:#666">{{list.title}}</p>
                                    </div> 
                                </Col>
                            </Row>
                        </div>
                           
                    </li>
                </ul>
            </Col>
        </Row>
        <Row Row :gutter="16" class="model model-right" style="padding:15px 0px 25px">
            <Col span="12" v-for="list in ad2">
                <a :href="list.url" target="_blank">
                    <img :src="list.img_url" alt="" width="100%">
                </a>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    props:[
       'meeting',
       'ad2'
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

.list_meeting .model{
    padding-top:15px;
    // padding-bottom:15px;
}
.list_meeting .model .icon{
    border-left:3px solid #0CA4D6;
}
.list_meeting .model .icon h2 {
    padding-left:15px;
}
.list_meeting .model p {
    text-align: right;
    color:#777;
}
.list_meeting ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.list_meeting .model-right{
    padding-left:15px;
    padding-right:15px;
}
.list_meeting .text-2 {
    height: 48px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.mlist_meeting .list_content p {
    color: rgb(102, 102, 102);
    padding: 5px 15px;
    font: 14px/20px '微软雅黑';
}
.list_meeting .text-3 span {
    color: rgb(153, 153, 153);
    padding: 0px 15px 5px;
    font: 12px/12px '微软雅黑';
}



</style>
