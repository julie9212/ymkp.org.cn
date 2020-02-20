
<template>
    <div class="layout">
        <Layout>
            <div class="header_top">
                <Row style="background:#0CA4D6">
                    <Col span="24">
                        <Row  class="header_main">
                            <Col span="19">
                                <div class="layout-logo">
                                    <router-link to="/">
                                        <img :src="admininfo.logo" style="height:65px">
                                    </router-link>
                                </div>
                            </Col>
                            <Col span="5">
                                <Row>
                                    <Col span="4">
                                        <router-link to="/search">
                                            <div style="padding:10px 5px 5px;">
                                                <p style="font:28px/50px '微软雅黑';color:#fff">
                                                    <!-- <Icon type="ios-search"></Icon> -->
                                                </p>
                                            </div>
                                        </router-link>
                                    </Col>
                                    <Col span="6">
                                    <!-- {{userInfo}} -->
                                        <div style="padding:10px 5px 5px;">
                                            <div v-if="userInfo == ''">
                                                <!-- 登录 -->
                                                <div style="width:50px;height:50px;border-radius:50%;padding:12px">
                                                    <img @click="modal1 = true" src="../../public/img/hair.png" alt="" style="width:100%">
                                                </div>
                                                
                                            </div>
                                            <div v-else style="text-align:center">
                                                <Dropdown>
                                                    <a href="javascript:void(0)">
                                                        <img :src="userInfo.head_url" alt="" style="width:50px;height:50px;border-radius:50%;">
                                                    </a>
                                                    <Dropdown-menu slot="list">
                                                        <Dropdown-item><p @click="inUser">主页</p></Dropdown-item>
                                                        <Dropdown-item><p @click="clickOut">退出</p></Dropdown-item>
                                                    </Dropdown-menu>
                                                </Dropdown>
                                            </div>   
                                        </div>
                                    </Col>
                                    <Col span="14">
                                        <div style="padding:10px 5px 5px;">
                                            <p style="font:16px/50px '微软雅黑';color:#fff">
                                                <span>
                                                    <router-link to="/">
                                                        <span>中文</span>
                                                    </router-link>
                                                </span> | 
                                                <span>
                                                    <router-link to="/">
                                                        <span>ENGLISH</span>
                                                    </router-link>
                                                </span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            <Nav>
                <Row class="header_bottom">
                    <Col span="24">

                        <div class="header_main">
                            <div class="layout-assistant">
                                <div class="column_nav">
                                    <div v-if="columnName == 0">
                                        <p style="color:#2d8cf0;border-bottom:2px solid #2d8cf0">首页</p>
                                    </div>
                                    <div v-else>
                                        <p @click="home()">首页</p>
                                    </div>
                                </div>
                                
                                <div v-for="info in column" class="column_nav">
                                    <div v-if="columnName == info.id">
                                        <p style="color:#2d8cf0;border-bottom:2px solid #2d8cf0">{{info.name}}</p>
                                    </div>
                                    <div v-else>
                                        <p @click="routeColumn(info.template,info.pid,info.id)">{{info.name}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- <Menu mode="horizontal" :active-name="index" class="header_main">
                            <div class="layout-assistant" style="padding-top:8px">
                                <Menu-item name="a"><p @click="home()" style="line-height:28px">智库首页</p></Menu-item>
                                <div v-for="info in column">
                                    <Menu-item :name="info.id">
                                        <p @click="routeColumn(info.template,info.pid,info.id)" style="line-height:28px;">{{info.name}}</p>
                                    </Menu-item>
                                </div>
                            </div>
                        </Menu> -->
                        <!-- <Menu mode="horizontal" :active-name="index" class="header_main">
                            <div class="layout-assistant" style="padding-top:8px">
                                <Menu-item name="a"><p @click="home()" style="line-height:28px">智库首页</p></Menu-item>
                                <div v-for="info in column">
                                    <Menu-item :name="info.id">
                                        <p @click="routeColumn(info.template,info.pid,info.id)" style="line-height:28px;">{{info.name}}</p>
                                    </Menu-item>
                                </div>
                            </div>
                        </Menu> -->
                    </Col>
                </Row>
            </Nav>
            </div>
           
            
            <Content style="min-height:200px" class="contentMain mainFix">
                <Row>
                    <Col span="24">
                        <div :class="globalWidth">
                            <router-view  v-if="isRouterAlive"></router-view>
                        </div>
                    </Col>
                </Row>
               
            </Content>
            
            <Footer class="footer-img">
                <Row class="contentFooter">
                    <Col span="24" style="padding:15px 30px">
                       <Row>
                            <Col span="16">
                                <img src="../../public/img/logo_footer.png" width="250px">
                                <p style="padding:15px 0">智库动态  |  研究观点  |  报告厅  |  智库会议  |  智库视频  |  媒体报道  |  关于我们</p>
                                <p>邮箱：{{admininfo.email}}</p>
                                <p>合作咨询：{{admininfo.phone}}</p>
                                <p>作者投稿：{{admininfo.phone2}}</p>
                                <p>地址：{{admininfo.address}}</p>
                            </Col>
                            <Col span="4">
                                <div style="text-align:center;padding-top:15px">
                                    <img src="../../public/img/10zhikuerweima.png" width="120px">
                                    <p>环球影响力智库</p>
                                </div>
                            </Col>
                            <Col span="4">
                                <div style="text-align:center;padding-top:15px">
                                    <img src="../../public/img/10meichuanghuierweima.png" width="120px">
                                    <p>美创会</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Footer>
            <Footer class="footer">
               <p>{{admininfo.title}} <br> {{admininfo.copyright}}
                </p>
            </Footer>
        </Layout>


        <!-- login开始 -->
        <Modal
            v-model="modal1"
            title="普通的Modal对话框标题"
        >
            <p slot="header" style="color:#04A5D7;text-align:center;font-size:22px">
                <Icon type="information-circled"></Icon>
                <span>GITT</span>
            </p>
            <!-- 注册，登录 开始 -->
            <div :style="Clogin">
                <Tabs value="login" class="common" style="text-align:center;">
                    <Tab-pane label="登录" name="login">
                        <br>
                        <Row>
                            <Col span="16" offset="4">
                                <Form ref="formLogin" :model="formLogin" :rules="ruleValidate" :label-width="0">
                                    <Form-item prop="phone">
                                        <Input v-model="formLogin.phone" placeholder="请输入手机号"></Input>
                                    </Form-item><br>
                                    <Form-item prop="password">
                                        <Input v-model="formLogin.password" placeholder="请输入密码"></Input>
                                    </Form-item>
                                    <Row>
                                        <Col span="18">
                                            <Form-item prop="clause" style="text-align:left">
                                                <Radio-group v-model="formLogin.clause">
                                                    <Radio label="male">阅读并同意</Radio><span style="color:#04A5D7;">《环球影响力智库用户协议》</span>
                                                </Radio-group>
                                            </Form-item>
                                        </Col>
                                        <Col span="6">
                                            <p style="line-height: 34px;text-align:right;color:#04A5D7;" @click="changeDisplay(1)">忘记密码？</p>
                                        </Col>
                                    </Row>
                                    <br>
                                    <Form-item>
                                        <Button type="primary" @click="handleLogin('formLogin')" style="width:100%" :loading="loading">登录</Button>
                                    </Form-item>
                                </Form>
                            </Col>
                        </Row>
                    </Tab-pane>
                    <Tab-pane label="注册" name="register">
                        <br>
                        <Row>
                            <Col span="16" offset="4">
                                <Form ref="formRegister" :model="formRegister" :rules="ruleValidate" :label-width="0">
                                    <Form-item prop="phone">
                                        <Input v-model="formRegister.phone" placeholder="请输入手机号"></Input>
                                    </Form-item><br>
                                    <Row>
                                        <Col span="13">
                                            <Form-item prop="code">
                                                <Input v-model="formRegister.code" placeholder="请输入验证码"></Input>
                                            </Form-item>
                                        </Col>
                                        <Col span="9" offset="2">
                                            <Button type="info" style="width:100%" @click="getCodes('register')" :disabled="disabled">{{ btnText }}</Button>
                                        </Col>
                                    </Row><br>
                                    <Form-item prop="password">
                                        <Input v-model="formRegister.password" placeholder="请输入密码"></Input>
                                    </Form-item>
                                    <Form-item prop="clause" style="text-align:left">
                                        <Radio-group v-model="formRegister.clause">
                                            <Radio label="male">阅读并同意</Radio><span style="color:#04A5D7;">《环球影响力智库用户协议》</span>
                                        </Radio-group>
                                    </Form-item>
                                    
                                    <br>
                                    <Form-item>
                                        <Button type="primary" @click="handleRegister('formRegister')" style="width:100%">注册</Button>
                                    </Form-item>
                                </Form>
                            </Col>
                        </Row>
                    </Tab-pane>
                    <Tab-pane  name="pass">标签三的内容</Tab-pane>
                </Tabs>
            </div>
            
            <!-- 注册，登录 结束 -->

             <!-- 修改密码 开始 -->
             <div :style="Cpass"  class="common">
                <p style="font:16px/30px '微软雅黑';text-align:center;padding-bottom:15px;color:#04A5D7">修改密码</p>
                <Row>
                    <Col span="16" offset="4">
                        <Form ref="formPass" :model="formPass" :rules="ruleValidate" :label-width="0">
                            <Form-item prop="phone">
                                <Input v-model="formPass.phone" placeholder="请输入手机号"></Input>
                            </Form-item><br>
                            <Row>
                                <Col span="13">
                                    <Form-item prop="code">
                                        <Input v-model="formPass.code" placeholder="请输入验证码"></Input>
                                    </Form-item>
                                </Col>
                                <Col span="9" offset="2">
                                    <Button type="info" style="width:100%" @click="getCodes('pass')" :disabled="disabled">{{ btnText }}</Button>
                                </Col>
                            </Row><br>
                            <Form-item prop="password">
                                <Input v-model="formPass.password" placeholder="请输入新密码"></Input>
                            </Form-item>
                            <Row>
                                <Col span="18">
                                    <Form-item prop="clause" style="text-align:left">
                                        <Radio-group v-model="formPass.clause">
                                            <Radio label="male">阅读并同意</Radio><span style="color:#04A5D7;">《环球影响力智库用户协议》</span>
                                        </Radio-group>
                                    </Form-item>
                                </Col>
                                <Col span="6">
                                    <p style="line-height: 34px;text-align:right;color:#04A5D7;" @click="changeDisplay(2)">登录</p>
                                </Col>
                            </Row>
                            
                            <br>
                            <Form-item>
                                <Button type="primary" @click="handlePass('formPass')" style="width:100%">修改密码</Button>
                            </Form-item>
                        </Form>
                    </Col>
                </Row>
             </div>
            <!-- 修改密码 结束 -->
        </Modal>
        <!-- login结束 -->
    </div>
</template>
<script>
export default {
    provide (){
        return {
        reload:this.reload
        }
    },
    data() {
        return {
            loading:false,
            columnName:0,
            columnId:'0',
            columnPid:'0',
            navid:this.$route.query.id,
            userInfo: '',
            index:'a',
            isRouterAlive:true,
            fullWidth:document.documentElement.clientWidth,
            globalWidth:{},
            admininfo:[],
            column:[],
            modal1: false,
            formLogin: {
                phone: '',
                password: '',
                clause: '',
            },
            formRegister: {
                phone: '',
                password: '',
                code: '',
                clause: '',
            },
            formPass:{
                phone: '',
                password: '',
                code: '',
                clause: '',
            },
            ruleValidate: {
                phone: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' }
                ],
                clause: [
                    { required: true, message: '请阅读并同意条例', trigger: 'change' }
                ],
            },
            // 获取验证码
            disabled: false,
            interval:undefined,
            totalCount:0,
            // 修改密码 
            Clogin:"",
            Cpass:{
                'display':'none',
            },
        }
    }, 
    mounted() {
        this.global();
        this.info();
        this.loginInfo();
    },
    watch:{
        $route(){
            this.global();
        }
    },
    methods: {
        reload (){
            this.isRouterAlive = false
            this.$nextTick(function(){
                this.isRouterAlive = true
            })
        },
        async global(){
            // console.log(this.fullWidth);
            if(this.fullWidth <=1300){
                this.globalWidth= {
                    globals:'1000px'
                };
            }

            let param = {
                id:this.$route.params.id || 0,
                pid:this.$route.params.pid || 0,
            }
            let res = await this.$api.indexNav(param);
            if (res) {
                this.columnName = res.columnName;
                console.log(res)
            }
            this.reload();
        },
        async info(){
            this.$Spin.show();
            let res = await this.$api.index();
            if (res) {
                this.admininfo = res.admininfo;
                this.column = res.column;
            }
            this.$Spin.hide();
        },
        home(){
            this.$router.push({path:'/'})
            this.global();
            
        },
        routeColumn(template,pid,id){
            // this.$router.push({ path: '/'+ template , query: {id} });
            this.$router.push({ path: '/'+ template + '/' + pid + '/' +id});
            this.global();
            
        },

        // 登录开始
        async login () {
            let res = await this.$api.login(this.formLogin);
            if(res){
                console.log(res);
                this.handleReset ('formLogin');
                this.loginInfo();
                this.$router.push({ path: '/'});
                this.$Message.success('登录成功!');
                this.modal1 = false;
            }
        },
        async loginInfo () {
            let res = await this.$api.loginInfo();
            if(res){
                console.log(res);
                this.userInfo = res;
                this.modal1 = false;
            }
        },
        handleLogin (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.login();
                    // this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        // 注册
        async register () {
            let res = await this.$api.register(this.formRegister);
            if(res){
                console.log(res);
                this.$Message.success('注册成功，请登录');
                this.handleReset ('formRegister');
            }
        },
        handleRegister (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.register();
                    // this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        // 修改密码
        async pass (form) {
            let res = await this.$api.pass(this.formPass);
            if(res){
                console.log(res);
                this.changeDisplay(2);
                this.$Message.success('密码修改成功，请登录');
                this.handleReset ('formPass');
            }
        },
        handlePass (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.pass();
                    // this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        // 验证码开始
        async onCode (phone) {
            console.log(phone)

            let res = await this.$api.onCode({phone:phone});
            if(res){
                console.log(res);
                // this.$router.push({ path: '/user'});
                // this.$Message.success('提交成功!');
            }
        },
        // code 倒计时
        getCodes(n){
            if(n == 'register'){
                this.onCode(this.formRegister.phone);
            }else if(n == 'pass'){
                this.onCode(this.formPass.phone);
            }else{
                this.$Message.error('验证发送错误!');
            }
          // 按钮60秒倒计时
            this.disabled=true
            this.totalCount=60
            // this.getCode()    //60秒过倒计时过后才能调用的事件
            this.interval=setInterval(()=>{
              this.totalCount--
              if(this.totalCount === 0){
                clearInterval(this.interval)
                this.disabled=false
              }
            },1000);
        },
        // 切换显示
        changeDisplay(n){
            if(n == 1){ //显示pass 隐藏login
                this.Clogin = {
                    "display":"none"
                }
                this.Cpass = ''
            }else if(n == 2){ //显示login 隐藏pass
                this.Clogin = '',
                this.Cpass = {
                    "display":"none"
                }
            }
        },
        // 重置内容
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        // 退出
        async clickOut () {
            this.$Modal.confirm({
                title:"提示",
                content:"确定要退出登录吗",
                onOk:() =>{
                    this.setOut();
                }
            })
        },
        async setOut () {
            this.userInfo = '';
            let res = await this.$api.out();
            if(res){
                // this.loginInfo();
                this.userInfo = '';
                // this.reload();
                this.$Message.success('退出登录成功');
            }
        },
        // 进入主页
        inUser(){
            this.$router.push({path:'/user'})
        }

    },
    // code计算属性监视
    computed: {
      btnText(){
         return this.totalCount !==0? `${this.totalCount}秒再次获取`: "短信获取验证码"
       }
   },


}
</script>

<style lang="less" scope>
// a:active {
//     color: #515a6e;
// }

.layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    width: 100%;
    margin:0 auto;
}
.header_top{
    position: fixed;
    width: 100%;
    z-index: 1000;
}
.header_top .header_main{
    width: 1180px;
    margin: 0 auto;
}
.header_top a{
    color:#f5f7f9;
}
.header_bottom{
    width: 100%;
    background: rgba(255,255,255,0.7);
    background-image: linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.6),rgba(255,255,255,0));
}

.column_nav{
    padding:10px 15px 10px;
    float: left;
    font:14px/28px '微软雅黑';
    line-height:28px;
}

.layout-logo img{
    padding:13px 0;
    width:300px;
    height:64px;
}
.ivu-menu {
    z-index: 10;
}
.ivu-menu-light {
    background: rgba(0,0,0,0); 
    width:100%;
}
.ivu-menu-horizontal.ivu-menu-light:after {
    height: 0px;
}
.ivu-menu-horizontal {
    line-height: 30px;
}
.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    padding: 0;
    margin: 0 20px;
}
.ivu-menu-horizontal {
    height: 45px;
}
.footer-img{
    background: #202425 url('../../public/img/footer.png');
    width:100%
}
.footer{
    background: #202425;
    width:100%;
    text-align:center;
    padding:10px;
}
.footer,.footer-img p{
    font: 12px/20px '微软雅黑';
    color:#f5f7f9;
}
.contentFooter {
    width: 1180px;
    margin: 0 auto 0;
}
.contentMain {
    width: 1180px;
    margin: 120px auto 0;
}
.mainFix {
    zoom: 1;
}
.marnFix:after {
    content: " ";
    clear: both;
    display: block;
}

.common .ivu-form-item {
    margin-bottom: 0px;
    vertical-align: top;
}

.common .ivu-tabs-nav-wrap {
    position: relative;
    left: 50%;
    transform: translateX(-15%);
}

</style>