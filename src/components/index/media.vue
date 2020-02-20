<template>
    <div class="media">
        <Row class="model model-right">
            <Col span="20" class="icon"><h2>媒体报道</h2></Col>
            <Col span="4">
                <router-link to="/news/0/1">
                    <p>更多</p>
                </router-link>
            </Col>
        </Row>
        <Row>
            <Col span="24" style="padding:0 15px">
                <div class="thumbnail"  v-for="list of media.slice(0, 1)" >
                    <!-- is_url 1.启用 链接外部网址 -->
                    <div v-if = "list.is_url == 1">
                        <a :href="list.url" target="_blank" style="color:#333">
                            <img :src="list.img_url" width="100%" class="img_animation">
                            <div class="thumbnail_title">
                                <p>{{list.title}}</p>
                            </div>
                        </a>
                    </div>
                    <!-- is_url 不启用 链接内部文章页 -->
                    <div v-else>
                        <div @click="ContentInfoid(list.id)">
                            <img :src="list.img_url" width="100%" class="img_animation">
                            <div class="thumbnail_title">
                                <p>{{list.title}}</p>
                            </div>
                        </div>
                            
                    </div>
                </div> 
                <br>
                <ul class="list_content" style="position:relative">
                    <li v-for="list of media.slice(1, 6)">
                        <!-- is_url 1.启用 链接外部网址 -->
                        <div v-if = "list.is_url == 1">
                            <a :href="list.url" target="_blank" style="color:#333">
                                <Row class="model">
                                    <div>
                                        <Col span="8">
                                            <img :src="list.img_url" style="width:72px;height:54px;margin-top:10px" >
                                        </Col>
                                        <Col span="16">
                                            <div class="text-2">
                                                <p style="text-align:left;padding:5px 0;">{{list.title}}</p>
                                            </div> 
                                            <div class="text-3">
                                                <span style="padding:0;">{{list.source}}</span>
                                            </div> 
                                        </Col>
                                    </div>
                                </Row>
                            </a>
                        </div>
                        <!-- is_url 不启用 链接内部文章页 -->
                        <div v-else>
                            <Row class="model">
                                <div @click="ContentInfoid(list.id)">
                                    <Col span="8">
                                        <img :src="list.img_url" style="width:72px;height:54px;margin-top:10px" >
                                    </Col>
                                    <Col span="16">
                                        <div class="text-2">
                                            <p style="text-align:left;padding:5px 0;">{{list.title}}</p>
                                        </div> 
                                        <div class="text-3">
                                            <span style="padding:0;">{{list.source}}</span>
                                        </div> 
                                    </Col>
                                </div>
                            </Row>
                        </div>
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    props:[
       'media',
    ],
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

/*效果二：放大 修改scale(放大的值)*/
.media .img_animation {
    transition: All 0.8s ease-in-out;
    -webkit-transition: All 0.8s ease-in-out;
    -moz-transition: All 0.8s ease-in-out;
    -o-transition: All 0.8s ease-in-out;
}

.media .img_animation:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.media .thumbnail{
    position:relative;
    overflow:hidden;
    width:100%;
    margin-top:15px;
}
.media .thumbnail_title{
    position: absolute;
    bottom:0;
    width:100%;
    height:30px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7), rgba(0,0,0,1));
    // background:rgba(0,0,0,0.4);
}
.media .thumbnail_title>p{
    padding:0 15px;
    font:14px/30px '微软雅黑';
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.media .model-right{
    padding-left:15px;
    padding-right:15px;
}
.media .model{
    padding-top:15px;
    // padding-bottom:15px;
}
.media .model .icon{
    border-left:3px solid #0CA4D6;
}
.media .model .icon h2 {
    padding-left:15px;
}
.media .model p {
    text-align: right;
    color:#777;
}
.media ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.media .model-right{
    padding-left:15px;
    padding-right:15px;
}
.media .text-2 {
    height: 48px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.media .list_content p {
    color: rgb(102, 102, 102);
    padding: 5px 15px;
    font: 14px/20px '微软雅黑';
}
.media .text-3 span {
    color: rgb(153, 153, 153);
    padding: 0px 15px 5px;
    font: 12px/12px '微软雅黑';
}


</style>
