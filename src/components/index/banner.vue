<template>
    <div>
        <Carousel >
            <Carousel-item v-for="list in banner">
                <div class="banner" @click="ContentInfoid(list.id)" style="width:857px;height:460px">
                    <img :src="list.img_url" style="width:100%;height:100%" class="img_animation">
                    <div class="banner_title">
                        <p>{{list.title}}</p>
                    </div>
                </div>
            </Carousel-item>
        </Carousel>
    </div>
</template>

<script>
export default {
    props:{
        banner:{
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
    mounted() {
        // this.banner();
    },
    methods: {
        ContentInfoid(id){
            let routeUrl = this.$router.resolve({
                path: "/content/content",
                query: {id:id}
            });
            window.open(routeUrl.href, '_blank');
        }
    },
    filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 20) {
        return value.slice(0,20) + '...'
      }
      return value
    }
  }
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

.banner{
    position:relative;
    
}
.banner_title{
    position: absolute;
    bottom:0;
    width:100%;
    height:50px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,1));
    // background:rgba(0,0,0,0.4);
}
.banner_title>p{
    padding:0 15px;
    font:18px/50px '微软雅黑';
    color: #fff;
}

.ivu-carousel-dots-inside {
    width:200px;
    display: block;
    position: absolute;
    bottom: 18px;
    right:0px;
}
.ivu-carousel-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin:0 4px;
}
.ivu-carousel-dots li.ivu-carousel-active>button {
    opacity: 1;
    width: 8px;
    height:8px;
}


</style>
