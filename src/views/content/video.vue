<template>
    <div>
        <div class="topicdetail" v-wechat-title="$route.meta.title=title" img-set="topicinfo.cover"></div>
        <Row :gutter="30" style="padding:0px 0 60px">
            <Col span="17">
                <Video :info="info"></Video>
                <!-- <Contents :contents="contents"></Contents> -->
                <br>
            </Col>
            <Col span="7">
                <!-- <div style="background:#fff;padding:15px;margin-top:10px">
                      <User :user="user" :user_article="user_article" :user_total="user_total"></User>
                </div> -->
                <div style="background:#fff;padding:15px;margin-top:10px">
                     <Ad :meeting="meeting" :ad2="ad2"></Ad>
                </div>
                <div style="background:#fff;padding:15px;margin-top:10px">
                    <img :src="ad1.img_url" alt="" style="width:100%">
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>

import Video from '../../components/content/video'
// import Contents from '../../components/content/contents'
// import User from '../../components/content/user'
import Ad from '../../components/list/ad'



export default {
    components:{
        Video,
        // Contents,
        Ad,
        // User,
    },
    data() {
        return {
            title:'',
            info:'',
            // user:'',
            // user_total:'',
            // user_article:'',
            meeting:'',
            ad2:'',
            ad1:'',
        }
    },   
    mounted() {
        // this.content();
        this.contentInfo();
    },
    methods: {
        // // 文章内容
        // async content(){
        //     this.loading = true;
        //     let id = this.$route.query.id;
        //     let res = await this.$api.content({id});
        //     if(res){
        //         this.contents = res.info;
        //         // this.user = res.user;
        //         // this.user_total = res.user_total;
        //         // this.user_article = res.user_article;
        //         console.log(res);
        //     }
        //     this.loading = false;
        // },
        // 文章信息 right信息
        async contentInfo(){
            let id = this.$route.query.id;
            let res = await this.$api.contentInfo({id});
            if(res){
                this.info = res.info;
                this.title = res.info.title + ' | 环球影响力智库';
                this.meeting = res.meeting;
                this.ad2 = res.ad2;
                this.ad1 = res.ad1;
                console.log(res);
            }
        },
    },
}
</script>

<style lang="less" scoped>

</style>
