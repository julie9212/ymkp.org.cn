<template>
    <div class="meeting">
        <Row class="model model-right">
            <Col span="20" class="icon"><h2>智库会议</h2></Col>
            <Col span="4">
                <router-link to="/meeting/0/4">
                    <p>更多</p>
                </router-link>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <ul class="list_content" style="position:relative">
                    <li v-for="(list, index) of meeting.slice(0, 3)" :key="index" style="border-bottom:1px dotted #eee">
                        <Row class="model model-right">
                            <div @click="ContentInfoid(list.id)">
                                <Col span="4" style="text-align:center;padding:6px 0">
                                    {{list.writer}} <br>
                                    <span style="background:#0CA4D6;color:#fff;padding:2px 5px">
                                        {{list.source}}
                                    </span>
                                </Col>
                                <Col span="20">
                                    <div class="text-2">
                                        <p style="text-align:left">{{list.title}}</p>
                                    </div> 
                                </Col>
                            </div>
                            
                        </Row>
                    </li>
                </ul>
            </Col>
        </Row>
        <Row Row :gutter="16" class="model model-right" style="padding:15px 15px 25px">
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
    // props:{
    //     meeting:{
    //         type:Array,
    //         default:true,
    //     },
    // },
    data(){
        return {
            // list:[],
            item:'第四届美创会在京隆重举办第四届美创会在第四届美创会在京',
            items:'hhhhhhhhhhhhhhhhhxxxxxxxxxxxxx美创会在京隆创会在京',
        }
    },
//     mounted() {

//     },
    methods: {
         ContentInfoid(id){
            let routeUrl = this.$router.resolve({
                path: "/content/meeting",
                query: {id:id}
            });
            window.open(routeUrl.href, '_blank');
        }       
    },
//     filters: {
//     ellipsis (value) {
//       if (!value) return ''
//       if (value.length > 20) {
//         return value.slice(0,20) + '...'
//       }
//       return value
//     }
//   }
}
</script>

<style lang="less" scope>

.meeting .model-right{
    padding-left:15px;
    padding-right:15px;
}
.meeting .model{
    padding-top:15px;
    // padding-bottom:15px;
}
.meeting .model .icon{
    border-left:3px solid #0CA4D6;
}
.meeting .model .icon h2 {
    padding-left:15px;
}
.meeting .model p {
    text-align: right;
    color:#777;
}
.meeting ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.meeting .model-right{
    padding-left:15px;
    padding-right:15px;
}
.meeting .text-2 {
    height: 48px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.meeting .list_content p {
    color: rgb(102, 102, 102);
    padding: 5px 15px;
    font: 14px/20px '微软雅黑';
}

</style>
