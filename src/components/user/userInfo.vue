<template>
    <div>
        <br><br>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
                    <Form-item label="用户头像">
                        <Row>
                            <Col span="6">
                                <img :src="form.head_url" style="height:100px;width:100px">
                            </Col>
                            <Col span="18">
                            <Upload
                                ref="uploadFile"
                                action="http://mchapi.globalinfluence.cn/admin.php/admin/system/upload"
                                :format="['jpg','jpeg','png']"
                                :max-size="80"
                                :show-upload-list="false"
                                :on-success="uploadSuccess"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :before-upload="handleBeforeUpload"
                                >
                                <Button icon="ios-cloud-upload-outline">上传文件</Button>
                                <p>（请上传小于80kb，格式为jpg、png、jpeg，长宽1:1的图片）</p>
                            </Upload>
                            </Col>
                        </Row>
                    </Form-item>
                    <Form-item label="用户名" prop="username">
                        <Input type="text" v-model="form.username" placeholder="请输入用户名称"></Input>
                    </Form-item>
                    <Form-item label="手机号" prop="phone">
                        <Input type="text" v-model="form.phone" placeholder="请输入手机号"></Input>
                    </Form-item>
                    <Form-item label="用户类型">
                        <!-- <Radio-group v-model="form.vip"> -->
                            <div v-if="form.vip == 2">
                                <span>VIP用户</span>
                            </div>
                            <div v-else>
                                <span>普通用户</span>
                            </div>
                        <!-- </Radio-group> -->
                    </Form-item>
                    <Form-item label="用户介绍" prop="abstract">
                        <Input type="textarea" v-model="form.abstract" placeholder="请输入用户介绍，40字以内"></Input>
                    </Form-item><br>
                    <Form-item>
                        <Button type="primary" @click="handleSubmit('form')">提交</Button>
                    </Form-item>
                </Form>
            </Col>
        </Row>



    </div>
</template>

<script>
export default {
    props:[
        "form",
    ],
    data(){
        return {
            form: {
                username: '',
                phone:'',
                abstract:'',
                head_url:'',
            },
           
            ruleValidate: {
                username: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' },
                ],
                abstract: [
                    { required: true, message: '请输入个人介绍', trigger: 'blur' },
                    { type: 'string', max: 40, message: '介绍不能多于40字', trigger: 'blur' }
                ],
                head_url: [
                    { required: true, message: '请选择照片', trigger: 'blur' },
                ],
                oldpass: [
                    { required: true, message: '旧密码不能为空', trigger: 'blur' }
                ],
                newpass: [
                    { required: true, message: '新密码不能为空', trigger: 'blur' }
                ],
            },

            // ================
            
                imgName: '',
                visible: false,
                uploadList: []
            // ================
        }
    },
    mounted() {
        // this.uploadList = this.$refs.upload.fileList;
    },
    methods: {
        uploadSuccess(res){
            if(res.ret == 200){
                this.form.head_url = res.data;
            }else{
                this.$Message.error(res.msg);
            }
        },
        // form
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.update(this.form);
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        async update (form) {
            console.log(form)
            let res = await this.$api.userUpdate(form);
            if(res){
                this.$Message.success('提交成功!');
            }
        },

        // 图片上传===============================
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        // handleRemove (file) {
        //     // 从 upload 实例删除数据
        //     const fileList = this.$refs.upload.fileList;
        //     this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        // },
        handleSuccess (res, file) {
            file.url = 'http://mchapi.globalinfluence.cn/admin.php/admin/system/upload';
            // file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '超出文件大小限制',
                desc: '文件 ' + file.name + ' 太大，不能超过 80kb。'
            });
        },
        handleBeforeUpload () {
            const check = this.uploadList.length < 1;
            if (!check) {
                this.$Notice.warning({
                    title: '最多只能上传 1 张图片。'
                });
            }
            return check;
        },
        // ===============================

    },
    
}
</script>

<style lang="less" scope>

</style>
