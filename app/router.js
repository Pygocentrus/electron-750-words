import VueRouter from 'vue-router';

const Home = { template: '<div>home</div>' };
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ],
});
