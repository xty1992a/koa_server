/**
 * Created by rule on 2019/1/13.
 */
const Koa = require('koa');
const router = require('koa-router')();
const post = 3001;

const app = new Koa();

router.get('/', async ctx => {
  ctx.body = 'hello koa';
});


app.use(router.routes());
app.use(router.allowedMethods());


app.listen(post, () => {
  console.log(`server listen localhost:${post}`);
});
