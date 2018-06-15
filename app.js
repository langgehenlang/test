
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./middlewares/controller');
const config = require('./config/default');
const templating = require('./middlewares/templating');
const app = new Koa();

app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method}   ${ctx.request.url}`);
    await next();
})

let staticFiles = require('./middlewares/static-files')
app.use(staticFiles('/static/', __dirname + '/static'));

// parse request body:
app.use(bodyParser({
    formLimit: '1mb' //设置请求的最大数据量1M
}));

// add nunjucks as view:
app.use(templating('views', {
    noCache: true,
    watch: true
}));

app.use(controller());

app.listen(config.port);

console.log(`listening on port ${config.port}`)