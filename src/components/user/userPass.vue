<template>
    <div>
        <br><br>
        <Form ref="formPass" :model="formPass" :rules="ruleValidate" :label-width="80">
            <Form-item label="旧密码" prop="oldpass">
                <Input type="text" v-model="formPass.oldpass" placeholder="请输入旧密码"></Input>
            </Form-item>
            <Form-item label="新密码" prop="newpass">
                <Input type="text" v-model="formPass.newpass" placeholder="请输入新密码"></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="updatePass('formPass')">提交</Button>
                <Button type="text" @click="handleReset('formPass')" style="margin-left:15px">重置</Button>
            </Form-item>
        </Form> 



    </div>
</template>

<script>
export default {
    props:[

    ],
    data(){
        return {
            formPass:{
                oldpass:'',
                newpass:'',
            },
            ruleValidate: {
                oldpass: [
                    { required: true, message: '旧密码不能为空', trigger: 'blur' }
                ],
                newpass: [
                    { required: true, message: '新密码不能为空', trigger: 'blur' }
                ],
            },
        }
    },
    mounted() {
    },
    methods: {
         // 修改密码
        updatePass (name) {
            console.log(name)
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.Pass(this.formPass);
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        async Pass (formPass) {
            let res = await this.$api.updatePass(formPass);
            if(res){
                this.$Message.success('修改成功!');
                this.handleReset('formPass');
            }
        },
        // 重置
        handleReset (name) {
                this.$refs[name].resetFields();
            }

    },
    
}
</script>

<style lang="less" scope>
.list_content p {
    padding: 15px 15px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
li{
    list-style-type:none;
}
</style>
