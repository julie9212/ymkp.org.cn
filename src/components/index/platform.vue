<template>
    <div class="platform">
        <Row class="model model-right">
            <Col span="20" class="icon"><h2>智库平台</h2></Col>
            <!-- <Col span="4"><p>更多</p></Col> -->
        </Row>
        <Row :gutter="16" class="model model-right" style="padding:15px 15px 15px">
            <Col span="24" v-for="list in ad3">
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
       'ad3'
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
.platform .model-right{
    padding-left:15px;
    padding-right:15px;
}
.platform .model{
    padding-top:15px;
    // padding-bottom:15px;
}
.platform .model .icon{
    border-left:3px solid #0CA4D6;
}
.platform .model .icon h2 {
    padding-left:15px;
}
.platform .model p {
    text-align: right;
    color:#777;
}

</style>
