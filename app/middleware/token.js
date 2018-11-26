var jwt = require('jsonwebtoken');

module.exports = (option, app) => {
    return async function verify_token(ctx, next) {
        try {
            // console.log()
            if (!ctx.headers.token) {
                ctx.body = {
                    code: 401,
                    msg: "缺少token"
                }
                return;
            }
            let decode_token = jwt.verify(ctx.headers.token, 'eggjs');
            let exp_time = decode_token.exp
            let now_time = Date.parse(new Date()) / 1000;
            if (exp_time < now_time) {
                ctx.body = {
                    code : 401,
                    msg  : "token失效"
                } 
                return ;
            }
            if (option.role == 'undefined' || option.role != decode_token.data.role) {
                ctx.body = {
                    code : 400,
                    msg : "您没有权限"
                }
                return;
            }

        } catch (err) {
            console.log(err)
        }
        await next();
    }
}