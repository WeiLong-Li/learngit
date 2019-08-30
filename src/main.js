import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
// import 'lib-flexible/flexible.js';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import "babel-polyfill";
// import VCharts from 'v-charts';
import VueParticles from 'vue-particles';
// import stream from '';
import {post,get} from './utils/http.js';
// import {weather} from './utils/weather.js';
import moment from 'moment';//导入文件
import VideoPlayer from 'vue-video-player'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


// import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css';


// Vue.use(VueAwesomeSwiper, /* { default global options } */) 

 Vue.prototype.$moment = moment;//赋值使用
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.prototype.$get=get;
// Vue.prototype.$weather = weather;
Vue.use(VueI18n);
// Vue.use(VCharts);
Vue.use(ElementUI, {
    size: 'small'
});
Vue.prototype.$axios = axios;

const i18n = new VueI18n({
    locale: 'zh',
    messages
})
var myvue = new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')