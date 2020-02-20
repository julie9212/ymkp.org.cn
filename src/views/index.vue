<template>
    <div class="home">
        <Row :gutter="30">
            <Col span="17">
                <div style="background:#666">
                    <Banner :banner="banner"></Banner>
                </div>
            </Col>
            <Col span="7">
                <div style="background:#fff;">
                    <News :news="news"></News>
                </div>
            </Col>
        </Row>
        <Row :gutter="30">
            <Col span="17">
                    <Video :video="video"></Video>
                    <Viewpoint :viewpoint="viewpoint"></Viewpoint>
            </Col>
            <Col span="7">
                <div style="padding-top:25px">
                    <a :href="ad1.url" target="_blank">
                        <img :src="ad1.img_url" width="100%">
                    </a>
                    
                </div>
                <div style="background:#fff;margin-top:15px">
                    <Meeting :meeting="meeting" :ad2="ad2"></Meeting>
                </div>
                <div style="background:#fff;margin-top:15px">
                    <Media :media="media"></Media>
                </div>
                
            </Col>
        </Row>
        <Row :gutter="30">
            <Col span="24">
                <div style="padding:30px 0 0">
                    <img src="../../public/img/ad.png" width="100%">
                </div>
            </Col>
        </Row>
        <Row :gutter="30">
            <Col span="17">
                    <Report :report="report"></Report>
            </Col>
            <Col span="7">
                <div style="background:#fff;margin-top:15px">
                    <Platform :ad3="ad3"></Platform>
                </div>
            </Col>
        </Row>
        <Row :gutter="30">
            <Col span="24">
                <Cooperation :ad4="ad4"></Cooperation>
            </Col>
        </Row>
    </div>
</template>

<script>

import Banner from '../components/index/banner'
import News from '../components/index/news'
import Video from '../components/index/video'
import Viewpoint from '../components/index/viewpoint'
import Meeting from '../components/index/meeting'
import Media from '../components/index/media'
import Report from '../components/index/report'
import Platform from '../components/index/platform'
import Cooperation from '../components/index/cooperation'


export default {
    components:{
        Banner,
        News,
        Video,
        Viewpoint,
        Meeting,
        Media,
        Report,
        Platform,
        Cooperation
    },
    data() {
        return {
            list:{},
            banner:[],
            news:[],
            video:[],
            viewpoint:[],
            meeting:[],
            media:[],
            report:[],
            ad1:[],
            ad2:[],
            ad3:[],
            ad4:[],
        }
    },   

    mounted() {
        this.indexList();
    },

    methods: {
        async indexList(){
            this.$Spin.show(); 
            let res = await this.$api.indexList();
            if (res) {
                console.log(res);
                this.banner = res.banner;
                this.news = res.news;
                this.video = res.video;
                this.viewpoint = res.viewpoint;
                this.meeting = res.meeting;
                this.media = res.media;
                this.report = res.report;
                this.ad1 = res.ad1;
                this.ad2 = res.ad2;
                this.ad3 = res.ad3;
                this.ad4 = res.ad4;
            }
            this.$Spin.hide();
        },
    },
}
</script>

<style lang="less" scoped>
.home{
    margin: 10px 0;
    .advert{
        margin: 5px 0;
    }
}


</style>
