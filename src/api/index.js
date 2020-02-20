import ajax from './axios';

let api = {
    index: () => { 
        return ajax.post('index/index');
    },
    indexNav: param => { 
        return ajax.post('index/indexNav', param);
    },
    indexList: () => { 
        return ajax.post('index/indexList');
    },
    models: param => { 
        return ajax.post('models/list', param);
    },
    modelsAP: param => { 
        return ajax.post('models/aboutProfile', param);
    },
    insertAF: param => { 
        return ajax.post('models/insertForm', param);
    },
    content: param => { 
        return ajax.post('content/index', param);
    },
    contentInfo: param => { 
        return ajax.post('content/info', param);
    },
    insertMeeting: param => { 
        return ajax.post('content/insertMeeting', param);
    },
    login: param => { 
        return ajax.post('common/login', param);
    },
    loginInfo: param => { 
        return ajax.post('common/logininfo', param);
    },
    register: param => { 
        return ajax.post('common/register', param);
    },
    pass: param => { 
        return ajax.post('common/pass', param);
    },
    out: () => { 
        return ajax.post('common/out');
    },
    onCode: param => { 
        return ajax.post('code/code', param);
    },
    userInfo: param => { 
        return ajax.post('user/user', param);
    },
    userUpdate: param => { 
        return ajax.post('user/update', param);
    },
    updatePass: param => { 
        return ajax.post('user/updatePass', param);
    },
    insertRelease: param => { 
        return ajax.post('user/insertRelease', param);
    },
};

export default {
    install: Vue => { 
        Vue.api = api,
        Vue.prototype.$api = api
    }
}
