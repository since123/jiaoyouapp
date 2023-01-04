import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

App.mpType = 'app';

// 此处为演示Vue.prototype使用，非uView的功能部分
import utils from 'common/util.js'
Vue.prototype.$appId = "appId";
Vue.prototype.$showToast = utils.showToast
Vue.prototype.$copyTxt = utils.copyTxt 

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

const app = new Vue({
	...App
});

app.$mount();
