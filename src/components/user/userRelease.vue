<template>
    <div class="release">
        <br><br>
        <Row>
            <Col span="24" style="padding:10px 2px">
                <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
                    <Row>
                        <Col span="16">
                            <Form-item label="标题" prop="title">
                                <Input v-model="form.title" placeholder="请输入文章标题"></Input>
                            </Form-item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <Form-item label="来源" prop="source">
                                <Input v-model="form.source" placeholder="请输入"></Input>
                            </Form-item>
                        </Col>
                        <Col span="8">
                            <Form-item label="作者" prop="writer">
                                <Input v-model="form.writer" placeholder="请输入"></Input>
                            </Form-item>
                        </Col>
                    </Row>
                   <Row>
                        <Col span="16">
                            <Form-item label="摘要" prop="abstract">
                                <Input v-model="form.abstract" type="textarea" placeholder="请输入..."></Input>
                            </Form-item>
                        </Col>
                    </Row>
                     <Row>
                        <Col span="6">
                            <Form-item label="所属栏目" prop="column_id">
                                <Select v-model="form.column_id">
                                    <Option v-for="item in column" :value="item.id"> {{ item.name }}</Option>
                                </Select>
                            </Form-item>
                        </Col>
                    </Row>
                    <Form-item label="封面图片">
                        <Row>
                            <Col span="9">
                                <img :src="form.img_url" style="height:160px;width:260px">
                            </Col>
                            <Col span="14">
                            <Upload
                                ref="uploadFile"
                                action="http://mchapi.globalinfluence.cn/admin.php/admin/system/upload"
                                :format="['jpg','jpeg','png']"
                                :max-size="300"
                                :show-upload-list="false"
                                :on-success="uploadSuccess"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :before-upload="handleBeforeUpload"
                                >
                                <Button icon="ios-cloud-upload-outline">上传文件</Button>
                                <p>（请上传小于300kb，格式为jpg、png、jpeg，长宽160:260的图片）</p>
                            </Upload>
                            </Col>
                        </Row>
                    </Form-item>
                    <Row>
                        <Col span="24">
                            <div class="edit_container" style="height:700px">
                                <quill-editor 
                                    v-model="form.content" 
                                    ref="myQuillEditor" 
                                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                                    @change="onEditorChange($event)"
                                    style="height:600px">
                                </quill-editor>
                            </div>  
                        </Col>
                    </Row>
                    <Form-item>
                        <Button type="primary" @click="handleSubmit('form')">提交</Button>
                        <Button type="text" @click="handleReset('form')" style="margin-left:15px">重置</Button>
                    </Form-item>
                </Form>
            </Col>
        </Row>



    </div>
</template>

<script>
// 工具栏配置
    const toolbarOptions = [
      ['bold', 'italic', 'underline'],
      [{'size': ['small', false, 'large', 'huge']}],
      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],
      ['image'],                                // remove formatting button
    ]
    


export default {
    props:[
        "column",
    ],
    data(){
        return {
            form: {
                // city:'',
                title:'',
                source:'',
                writer:'',
                abstract:'',
                column_id:'',
                img_url:'',
                content:'',
            },
           
            ruleValidate: {
                title: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                source: [
                    { required: true, message: '来源不能为空', trigger: 'blur' },
                ],
                writer: [
                    { required: true, message: '作者不能为空', trigger: 'blur' },
                ],
                abstract: [
                    { required: true, message: '请输入文章介绍', trigger: 'blur' },
                    { type: 'string', max: 40, message: '介绍不能多于40字', trigger: 'blur' }
                ],
                column_id: [
                    // { required: true, message: '请选文章栏目', trigger: 'change' }
                ],
                img_url: [
                    { required: true, message: '请选择图片', trigger: 'blur' },
                ],
            },
            // ================
                imgName: '',
                visible: false,
                uploadList: [],
            // ================
            
        }
    },
    mounted() {
        // this.uploadList = this.$refs.upload.fileList;
    },
    methods: {
        uploadSuccess(res){
            if(res.ret == 200){
                this.form.img_url = res.data;
            }else{
                this.$Message.error(res.msg);
            }
        },
        // form
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.insertRelease();
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        async insertRelease () {
            let res = await this.$api.insertRelease(this.form);
            if(res){
                this.$Message.success('提交成功，请等待审核');
            }
        },

        // 图片上传===============================
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
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
                desc: '文件 ' + file.name + ' 太大，不能超过 300kb。'
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
        // 重置
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        // 编辑器开始=======================================
        onEditorReady(editor) {}, // 准备编辑器
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(val,editor){
            console.log(val); // 富文本获得焦点时的内容
            // console.log(val.container.innerHTML); 
            // console.log(this.$refs.myQuillEditor.quill); 
            // editor.enable(false); // 在获取焦点的时候禁用
        }, // 获得焦点事件
        onEditorChange(){

        }, 
        // 编辑器结束=======================================
    },
    modules:{
        toolbar:[
          ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'],     //引用，代码块

            [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
            [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
            [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
            [{ 'direction': 'rtl' }],             // 文本方向


            [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题


            [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
            [{ 'font': [] }],     //字体
            [{ 'align': [] }],    //对齐方式


            ['clean'],    //清除字体样式
            ['image','video']    //上传图片、上传视频

        ]
    },
    
}
</script>

<style lang="less" scope>
.release p {
  margin: 16px;
}

.release .edit_container,
.release .quill-editor {
  height: 300px;
}

.release .ql-snow .ql-picker.ql-size .ql-picker-label::before,
.release .ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}

.release .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.release .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}
.release .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.release .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}
.release .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.release .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.release .ql-snow .ql-picker.ql-header .ql-picker-label::before,
.release .ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}
.release .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.release .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}
.release .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.release .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}
.release .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.release .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}
.release .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.release .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}
.release .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.release .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}
.release .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.release .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.release .ql-snow .ql-picker.ql-font .ql-picker-label::before,
.release .ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "标准字体";
}
.release .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.release .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "衬线字体";
}
.release .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.release .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "等宽字体";
}
</style>
