<template>
    <div class="video">
        <Row class="model">
            <Col span="20" class="icon"><h2>智库视频</h2></Col>
            <Col span="4">
                <router-link to="/video/0/5">
                    <p>更多</p>
                </router-link>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="8" v-for="list in video">
                <div class="thumbnail" @click="ContentInfoid(list.id)">
                    <img :src="list.img_url" width="100%" class="img_animation">
                    <div class="thumbnail_title">
                        <p>{{list.title}}</p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    props:{
        video:{
            type:Array,
            default:{},
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
//         // this.banner();
//     },
    methods: {
         ContentInfoid(id){
            let routeUrl = this.$router.resolve({
                path: "/content/video",
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
.video .img_animation {
    transition: All 0.8s ease-in-out;
    -webkit-transition: All 0.8s ease-in-out;
    -moz-transition: All 0.8s ease-in-out;
    -o-transition: All 0.8s ease-in-out;
}

.video .img_animation:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.video .model{
    padding-top:25px;
    padding-bottom:25px;
}
.video .model .icon{
    border-left:3px solid #0CA4D6;
}
.video .model .icon h2 {
    padding-left:15px;
}
.video .model p {
    text-align: right;
    color:#777;
}

.video .thumbnail{
    position:relative;
    overflow:hidden;
    width:100%;
    margin-top:0px;
}
.video .thumbnail_title{
    position: absolute;
    bottom:0;
    width:100%;
    height:30px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7), rgba(0,0,0,1));
    // background:rgba(0,0,0,0.4);
}
.video .thumbnail_title>p{
    padding:0 15px;
    font:14px/30px '微软雅黑';
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
