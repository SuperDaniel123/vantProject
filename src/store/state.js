const state = {
    //MID
    MID:sessionStorage.getItem('MID')||'',
    //登录状态
    isLogin:false,
    //首页状态
    indexState:0,
    //交易状态
    trading:0
}

export default state