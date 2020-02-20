<template>
    <div><br>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <div style="padding:0px 15px">
                    <Row :gutter="32">
                        <Col span="12">
                            <img :src="info.img_url" alt="" style="width:100%">
                        </Col>
                        <Col span="12">
                            <p style="font:600 24px/24px '微软雅黑'">{{info.title}}</p><br>
                            <p style="font:16px/26px '微软雅黑'"><span>{{info.source}}</span> | <span>{{info.writer}}</span></p>
                            <p style="font:16px/26px '微软雅黑'"><span>{{info.keyword}}</span></p>
                            <pre style="margin: -12px 0;">
                                <p style="font:16px/26px '微软雅黑'"><span>{{info.abstract}}</span></p>
                            </pre>
                            <Button type="info" @click="modal1 = true">立即报名</Button>
                        </Col>
                    </Row><br>
                </div>
                <div class="ql-editor">
                    <div v-html="info.content"></div>
                </div>
            </Col>
        </Row>

        <Modal
            v-model="modal1"
            :title="info.title">
            <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
                <Form-item label="参与活动" prop="meeting">
                    <Input v-model="form.meeting=info.title" disabled ></Input>
                </Form-item>
                <Form-item label="姓名" prop="name">
                    <Input v-model="form.name" placeholder="请输入姓名"></Input>
                </Form-item>
                 <Form-item label="手机号" prop="phone">
                    <Input v-model="form.phone" placeholder="请输入手机号"></Input>
                </Form-item>
                <Form-item label="邮箱" prop="email">
                    <Input v-model="form.email" placeholder="请输入邮箱"></Input>
                </Form-item>
                <Form-item label="公司" prop="company">
                    <Input v-model="form.company" placeholder="请输入公司"></Input>
                </Form-item>
                <Form-item label="职务" prop="post">
                    <Input v-model="form.post" placeholder="请输入职务"></Input>
                </Form-item>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="handleSubmit('form')">提交</Button>
                <Button type="text" @click="handleReset('form')" style="margin-left: 8px">重置</Button>
            </div>
        </Modal>
    </div>
</template>
 
<script>
 
export default {
    props:[
        "info",
    ],
    data(){
        return {
            modal1: false,
            form: {
                meeting:'',
                name: '',
                email: '',
                company:'',
                post:'',
                phone:'',
            },
            ruleValidate: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
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
                phone: [
                    { required: true, message: '手机不能为空', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {

    },
    methods: {
        async insert (form) {
            let res = await this.$api.insertMeeting(form);
            console.log(res);
            if(res){
                this.$Message.success('提交成功!');
            }
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                    this.insert(this.form);
                    this.modal1 = false;
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    },
    ruleValidate: {
        name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        email: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
       
    }
}
</script>

<style lang="less" scope>
li{
    list-style-type:none;
}
.ql-editor p{
    font:16px/26px '微软雅黑'
}
</style>
