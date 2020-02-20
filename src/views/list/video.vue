<template>
    <div >
        <div class="model_banner">
           <img :src="banner.img_url" width="100%">
        </div>
        <Row :gutter="30" style="padding:15px 0 60px">
            <Col span="17">
                <Video :info="info"></Video>
                <br>
                <div style="text-align:center">
                    <Page :total="total" show-total  show-elevator @on-change="page"></Page>
                </div>
            </Col>
            <Col span="7">
                <div style="background:#fff;padding:15px;margin-top:15px">
                     <Ad :meeting="meeting" :ad2="ad2"></Ad>
                </div>
            </Col>
        </Row>

    </div>
</template>

<script>

import Video from '../../components/list/video'
import Ad from '../../components/list/ad'

export default {
    components:{
        Video,
        Ad
    },
    data() {
        return {
            column:'',
            columnId:this.$route.params.id,
            columnPid:this.$route.params.pid,
            template:'',
            info:'',
            total: 1,
            meeting:'',
            ad2:'',
            banner:'没有上传banner',
        }
    },   
    mounted() {
        this.list();
    },
    methods: {
        async list(page= 1){
            this.loading = true;
            this.columnId =this.$route.params.id;
            this.columnPid =this.$route.params.pid;
            let aa =this.$route.params
            let param = {
                id:this.$route.params.id,
                pid:this.$route.params.pid,
                page:page,
            }
            let res = await this.$api.models(param);
            if(res){
                this.total = res.total;
                this.info = res.info;
                this.column = res.column;
                this.meeting = res.meeting;
                this.ad2 = res.ad2;
                this.banner = res.banner;
                this.template = res.template;
                console.log(res);
            }
            this.loading = false;
        },
        // 子栏目url
        routeColumn(template,pid,id){
            this.$router.push({ path: '/'+ template + '/' + pid + '/' +id});
            this.list();
        },
        // 顶级栏目内容
        routeColumnAll(){
            let allId = this.$route.params.pid;
            this.$router.push({ path: '/'+ this.template + '/0/' +allId});
            this.list();
        },
        page(num){
            this.list(num);
        }
    },
}
</script>

<style lang="less" scoped>
.column_nav{
    padding:0px 15px 10px;
    float: left;
    font:14px/28px '微软雅黑'
}
</style>
