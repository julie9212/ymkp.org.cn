<template>
    <div class="news">
        <Row class="model model-right">
            <Col span="20" class="icon"><h2>智库新闻</h2></Col>
            <Col span="4">
                <router-link to="/news/0/1">
                    <p>更多</p>
                </router-link>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <ul class="list_content" style="position:relative">
                    <li v-for="(list, index) of news.slice(0, 5)" :key="index" style="border-bottom:1px dotted #eee;padding:15px 0 0">
                        <div @click="ContentInfoid(list.id)">
                            <div class="text-2">
                                <p>{{list.title}}</p>
                            </div> 
                            <div class="text-3">
                                <span>{{list.create_time}}</span>
                            </div> 
                        </div>
                        
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    props:{
        news:{
            type:Array,
            default:true,
        },
    },
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
                path: "/content/content",
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
.news .model-right{
    padding-left:15px;
    padding-right:15px;
}
.news .model{
    padding-top:25px;
    padding-bottom:0px;
}
.news .model .icon{
    border-left:3px solid #0CA4D6;
}
.news .model .icon h2 {
    padding-left:15px;
}
.news .model p {
    text-align: right;
    color:#777;
}
.news ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.news .text-2 {
    height: 48px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.news .list_content p {
    color: rgb(102, 102, 102);
    padding: 5px 15px;
    font: 14px/20px '微软雅黑';
}

.news .text-3 span {
    color: rgb(153, 153, 153);
    padding: 0px 15px 5px;
    font: 12px/12px '微软雅黑';
}
</style>
