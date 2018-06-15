

//注册api
function fn_api_signup(){
    return async(ctx, next) => {
        
    };
}
//注册界面
function fn_signup(){
    return async(ctx, next) => {        
        console.log(`templating fn_signup ${ctx.request.method}   ${ctx.request.url}`);
        ctx.render('signup.html');
    };
}

//登录api
function fn_api_signin(){
    return async(ctx, next) => {
        
    };
}
//登录界面
function fn_signin(){
    return async(ctx, next) => {
        
    };
}

//退出api
function fn_api_signout(){
    return async(ctx, next) => {
        
    };
}
//退出界面
function fn_signout(){
    return async(ctx, next) => {
        
    };
}



module.exports = {
    'GET /signout': fn_signout, //登录界面
    'POST /api/signout': fn_api_signout, //登录api
    'GET /signin': fn_signin, //登录界面
    'POST /api/signin': fn_api_signin, //登录api
    'GET /signup': fn_signup, //注册界面
    'POST /api/signup': fn_api_signup //注册api

}