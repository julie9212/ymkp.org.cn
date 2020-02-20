<template>
    <div class="viewpoint">
        <Row class="model">
            <Col span="20" class="icon"><h2>研究观点</h2></Col>
            <Col span="4">
                <router-link to="/list/0/2">
                    <p>更多</p>
                </router-link>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="8" v-for="list in viewpoint.slice(0, 9)">
                <Card style="width:100%;height:350px;margin-top:15px" >
                    <h3 slot="title" @click="routeColumn(list.template,list.pid,list.id)" style="padding:0">
                        {{list.name}}
                    </h3>
                    <Col span="24">
                        <div class="thumbnail"  v-for="(item, index) of list.content.slice(0, 1)" :key="index">
                            <div @click="ContentInfoid(item.id)">
                                <img :src="item.img_url" style="width:100%;height:163px" class="img_animation">
                                <div class="thumbnail_title">
                                    <p>{{item.title}}</p>
                                </div>
                            </div>
                        
                        </div>
                        <br>
                        <ul class="list_content" style="position:relative">
                            <li v-for="(item, index) of list.content.slice(1, 3)" :key="index">
                                <div class="text-2"  @click="ContentInfoid(item.id)">
                                    <p>{{item.title}}</p> 
                                </div> 
                            </li>
                        </ul>
                    </Col>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    props:{
        viewpoint:{
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
        },
        changeInfoid(n){
            // this.infoid = n;
            // this.list(1);
            console.log(n);
        },   
               // 子栏目url
        routeColumn(template,pid,id){
            this.$router.push({ path: '/'+ template + '/' + pid + '/' +id});
        },    
    },
}
</script>

<style lang="less" scope>


/*效果二：放大 修改scale(放大的值)*/
.viewpoint .img_animation {
    transition: All 0.8s ease-in-out;
    -webkit-transition: All 0.8s ease-in-out;
    -moz-transition: All 0.8s ease-in-out;
    -o-transition: All 0.8s ease-in-out;
}

.viewpoint .img_animation:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.viewpoint .model{
    padding-top:25px;
    padding-bottom:10px;
}
.viewpoint .model .icon{
    border-left:3px solid #0CA4D6;
}
.viewpoint .model .icon h2 {
    padding-left:15px;
}
.viewpoint .model p {
    text-align: right;
    color:#777;
}
.viewpoint .thumbnail{
    position:relative;
    overflow:hidden;
    width:100%;
    margin-top:-15px;
}
.viewpoint .thumbnail_title{
    position: absolute;
    bottom:0;
    width:100%;
    height:30px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7), rgba(0,0,0,1));
    // background:rgba(0,0,0,0.4);
}
.viewpoint .thumbnail_title>p{
    padding:0 15px;
    font:14px/30px '微软雅黑';
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}




.viewpoint .ivu-card-body {
    padding: 15px 0px;
}
.viewpoint .ivu-card-bordered {
     border: 0px solid #dcdee2;
}
.viewpoint ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.viewpoint .list_content{
    width: 100%;
}
.viewpoint .list_content p{
    padding:5px 15px 5px;
    font:14px/20px '微软雅黑';
    color: #666;

}
.viewpoint .text-2{
    height:48px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>
