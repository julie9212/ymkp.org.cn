<template>
    <div style="padding-top:25px" class="cooperation">
        <Row class="model">
            <Col span="20" class="icon"><h2>合作伙伴</h2></Col>
        </Row>
        <Row :gutter="16" class="model model-right" style="padding:20px 0 25px">
            <Col span="3" v-for="list in ad4">
                <a :href="list.url" target="_blank">
                    <img :src="list.img_url" alt="" width="100%" style="margin:5px 0">
                </a>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    props:[
       'ad4'
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
//     methods: {
//        
//     },
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
.index .ivu-card-body {
    padding: 15px 0px;
}
.index .ivu-card-bordered {
     border: 0px solid #dcdee2;
}
.index ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.index .list_content{
    width: 100%;
}
.index .list_content p{
    padding:5px 15px 5px;
    font:14px/20px '微软雅黑';
    color: #666;

}
.index .text-2{
    height:48px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>
