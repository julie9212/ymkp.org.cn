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
            <Col span="17">
                <h2 style="text-align:center">申请加入</h2><br>
                <!-- form 开始 -->
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <Form-item label="姓名" prop="name">
                        <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                    </Form-item>
                    <Form-item label="性别" prop="sex">
                        <Radio-group v-model="formValidate.sex">
                            <Radio label="1" name="1">男</Radio>
                            <Radio label="0" name="0">女</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="手机" prop="phone">
                        <Input v-model="formValidate.phone" placeholder="请输入手机号"></Input>
                    </Form-item>
                    <Form-item label="邮箱" prop="email">
                        <Input v-model="formValidate.email" placeholder="请输入邮箱"></Input>
                    </Form-item>
                    <Form-item label="公司" prop="company">
                        <Input v-model="formValidate.company" placeholder="请输入公司/机构名称"></Input>
                    </Form-item>
                    <Form-item label="职务" prop="post">
                        <Input v-model="formValidate.post" placeholder="请输入职务"></Input>
                    </Form-item>
                    <Form-item label="介绍" prop="introduce">
                        <Input v-model="formValidate.introduce" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入个人介绍，20字以上"></Input>
                    </Form-item>
                    <Form-item label="照片/名片">
                        <Row>
                            <Col span="6">
                                <Upload
                                    ref="uploadFile"
                                    action="http://mchapi.globalinfluence.cn/admin.php/admin/system/upload"
                                    :format="['jpg','jpeg','png']"
                                    :max-size="80"
                                    :show-upload-list="false"
                                    :on-success="uploadSuccess"
                                    :on-format-error="handleFormatError1">
                                    <Button icon="ios-cloud-upload-outline">上传文件</Button>
                                    <p>（请上传小于80kb，格式为jpg、png、jpeg，长宽1:1的图片）</p>
                                </Upload>
                            </Col>
                            <Col span="12">
                                <img :src="formValidate.head_url" style="height:100px;width:100px">
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item>
                        <!-- <Button type="primary">提交</Button>
                        <Button style="margin-left: 15px">重置</Button> -->
                        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                        <Button style="margin-left: 15px" @click="handleReset('formValidate')">重置</Button>
                    </Form-item>
                </Form>
                <!-- form 结束 -->
            </Col>
            <Col span="7">
                <div style="background:#fff;padding:15px;margin-top:10px">
                     <Ad :meeting="meeting" :ad2="ad2"></Ad>
                </div>
            </Col>
        </Row>

    </div>
</template>

<script>

import About from '../components/about/form'
import Ad from '../components/list/ad'

export default {
    components:{
        About,
        Ad
    },
    data() {
        return {
            id:{},
            column:'',
            data:'',
            meeting:'',
            ad2:'',
            banner:'没有上传banner',
            formValidate: {
                name: '',
                sex: '1',
                phone:'',
                email: '',
               company:'',
               post:'',
               introduce:'',
               head_url:'',
            },
            ruleValidate: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                ],
                company: [
                    { required: true, message: '公司不能为空', trigger: 'blur' }
                ],
                post: [
                    { required: true, message: '职务不能为空', trigger: 'blur' }
                ],
                introduce: [
                    { required: true, message: '请输入个人介绍', trigger: 'blur' },
                    { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                ],
                head_url: [
                    { required: true, message: '请选择照片', trigger: 'blur' },
                ]
            }
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
        async insert (form) {
            let res = await this.$api.insertAF(form);
            if(res){
                this.$Message.success('提交成功!');
            }
        },
        // form
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.insert (this.formValidate);
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        // 图片上传
        handleFormatError1(file) {
            this.$Message.info("图片选择失败，请上传小于80kb，格式为jpg、png、jpeg格式的图片");
            },
        uploadSuccess(res){
            if(res.ret == 200){
                this.formValidate.head_url = res.data;
            }else{
                this.$Message.error(res.msg);
            }
        },
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
