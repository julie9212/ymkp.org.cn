<template>
    <div>
        <Row>
            <Col span="24" v-for="list in info" style="padding:10px 2px">
                <Card style="padding:10px 2px">
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
    },
}
</script>

<style lang="less" scope>
/*效果二：放大 修改scale(放大的值)*/
.img_animation {
    transition: All 0.8s ease-in-out;
    -webkit-transition: All 0.8s ease-in-out;
    -moz-transition: All 0.8s ease-in-out;
    -o-transition: All 0.8s ease-in-out;
}

.img_animation:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.model{
    padding-top:25px;
}
.model .icon{
    border-left:3px solid #0CA4D6;
}
.model .icon h2 {
    padding-left:15px;
}
.model p {
    text-align: right;
    color:#777;
}

.thumbnail{
    position:relative;
    overflow:hidden;
    width:100%;
    margin-top:15px;
}
.thumbnail_title{
    position: absolute;
    bottom:0;
    width:100%;
    height:30px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7), rgba(0,0,0,1));
    // background:rgba(0,0,0,0.4);
}
.thumbnail_title>p{
    padding:0 15px;
    font:14px/30px '微软雅黑';
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
