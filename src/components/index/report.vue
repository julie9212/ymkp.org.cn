<template>
    <div class="report">
        <Row class="model">
            <Col span="20" class="icon">
                <div class="switch">
                    <h2>报告厅
                        <span style="padding:0 15px">
                            <span @click="names('1')" :class="name1">智库报告</span> |
                            <span @click="names('2')" :class="name2">外部报告</span>
                        </span>
                    </h2>
                </div>
            </Col>
            <Col span="4">
                <router-link to="/report/0/3">
                    <p>更多</p>
                </router-link>
            </Col>
        </Row>

        <Tabs :value="name">
            <Tab-pane name="1">
                <Row :gutter="16">
                    <Col span="8" v-for="list in report[1]">
                    <Card style="width:100%;height:330px" >
                        <div @click="ContentInfoid(list.id)">
                            <Col span="24">
                                <div class="thumbnail">
                                    <img :src="list.img_url" style="width:100%;height:200px">
                                    <div class="text-2" style="margin:15px 15px">
                                        <p>{{list.title}}</p> 
                                    </div>
                                    <p style="margin:0 15px;text-align:right">{{list.create_time}}</p>
                                </div>
                                <br>
                            </Col>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Tab-pane>
            <Tab-pane name="2">
                <Row :gutter="16">
                    <Col span="8" v-for="list in report[2]">
                    <Card style="width:100%;height:330px" >
                        <div @click="ContentInfoid(list.id)">
                            <Col span="24">
                                <div class="thumbnail">
                                    <img :src="list.img_url" style="width:100%;height:200px">
                                     <div class="text-2" style="margin:15px 15px">
                                        <p>{{list.title}}</p> 
                                    </div>
                                    <p style="margin:0 15px ;text-align:right">{{list.create_time}}</p>
                                </div>
                                <br>
                            </Col>
                            
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Tab-pane>
        </Tabs>
    </div>
</template>

<script>
export default {
    props:[
        "report",
    ],
    data(){
        return {
            name:'1',
            name1:{
                'report_color':'#0CA4D6'
            },
            name2:{},
        }
    },
//     mounted() {

//     },
    methods: {
       names(n){
           if(n == 1){
               this.name = '1',
               this.name1 = {
                   'report_color':'#0CA4D6'
               },
               this.name2 = ''
           }
           if(n == 2){
               this.name = '2',
               this.name2 = {
                   'report_color':'#0CA4D6'
               },
               this.name1 = ''
           }
       },
        ContentInfoid(id){
            let routeUrl = this.$router.resolve({
                path: "/content/report",
                query: {id:id}
            });
            window.open(routeUrl.href, '_blank');
        }
    },
}
</script>

<style lang="less" scope>
.report .model{
    padding-top:25px;
    padding-bottom:25px;
}
.report .model .icon{
    border-left:3px solid #0CA4D6;
}
.report .model .icon h2 {
    padding-left:15px;
}
.report .model p {
    text-align: right;
    color:#777;
}
.report .switch h2>span{
    font:14px/16px '微软雅黑';
}
.report .report_color{
    color:#0CA4D6;
}
.report .ivu-tabs-ink-bar {
    height: 0;
}
.report .ivu-tabs-bar {
    border-bottom: 0px solid #dcdee2;
    margin-bottom: 0px
}
.report .thumbnail {
    margin-top: 0px;
}
.report .ivu-card-body {
    padding: 0px;
}
.report .ivu-tabs-nav-scroll {
    display:none;
    white-space: nowrap;
}
.report .text-2{
    height:46px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>
