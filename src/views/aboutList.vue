<template>
    <div >
        <div class="model_banner">
           <img :src="banner.img_url" width="100%">
        </div>

        <Row :gutter="30" style="padding:15px 0 0px">
            <Col span="24">
                <div v-for="info in column" class="column_nav">
                    <div v-if="columnId == info.id">
                        <p style="color:#2d8cf0;border-bottom:2px solid #2d8cf0">{{info.name}}</p>
                    </div>
                    <div v-else>
                        <p @click="routeColumn(info.template,info.pid,info.id)">{{info.name}}</p>
                    </div>
                </div>
            </Col>
        </Row>

        <Row :gutter="30" style="padding:0px 0 60px">
            <Col span="24">
                <About :info="info"></About>
                <br><br>
            </Col>
            <div style="text-align:center">
                <Page :total="total" show-total  show-elevator @on-change="page"></Page>
            </div>
        </Row>

    </div>
</template>

<script>

import About from '../components/about/list'


export default {
    components:{
        About,
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
