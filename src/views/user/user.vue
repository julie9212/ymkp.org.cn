<template>
    <div >
        <Row :gutter="30" style="padding:15px 0 60px">
            <Col span="6" style="background:#fff;padding:15px;margin-top:15px">
                <UserShow :info="userinfo"></UserShow>
            </Col>
            <Col span="18">
                <div style="background:#fff;padding:15px;margin-top:15px">
                    <Tabs value="name1">
                        <Tab-pane label="个人资料" name="name1">
                            <Col span="18">
                                <UserInfo :form="userinfo"></UserInfo>
                            </Col>
                        </Tab-pane>
                        <Tab-pane label="修改密码" name="name2">
                            <Col span="18">
                                <UserPass></UserPass>
                            </Col>
                        </Tab-pane>
                        <Tab-pane label="发布文稿" name="name3">
                            <UserRelease :column="column"></UserRelease>
                        </Tab-pane>
                        <Tab-pane label="我的文稿" name="name4">
                            <SeleckRelease :info="release"></SeleckRelease>
                        </Tab-pane>
                        <!-- <Tab-pane label="发布文稿" name="name5">标签三的内容</Tab-pane> -->
                    </Tabs>
                </div>
            </Col>


        </Row>
    </div>
</template>

<script>
import UserShow from '../../components/user/userShow'
import UserInfo from '../../components/user/userInfo'
import UserPass from '../../components/user/userPass'
import UserRelease from '../../components/user/userRelease'
import SeleckRelease from '../../components/user/seleckRelease'

export default {
    components:{
        UserShow,
        UserInfo,
        UserPass,
        UserRelease,
        SeleckRelease,
    },
    data() {
        return {
            userinfo:'',
            user_operate:'',
            column:'',
            release:'',
        }
    },   
    mounted() {
        this. userInfo();
    },
    methods: {
      async userInfo(){
        this.$Spin.show();
        let res = await this.$api.userInfo();
        if (res) {
            console.log(res);
            this.userinfo = res.userInfo;
            this.user_operate = res.user_operate;
            this.column = res.column;
            this.release = res.release;
        }
        this.$Spin.hide();
    },
    },
}
</script>

<style lang="less" scoped>

</style>
