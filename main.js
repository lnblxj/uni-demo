import App from './App'
import uView from './uni_modules/vk-uview-ui';
import { createPinia } from 'pinia';
import { setupRouterInterceptor } from '@/Interceptor/router-interceptor.js';
import api from './request/api';
import { globalConfig } from '@/config/global-config';

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import { PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
Vue.config.productionTip = false
Vue.prototype.$http = api
app.config.globalProperties.$globalConfig = globalConfig
App.mpType = 'app'
const pinia = createPinia()
const app = new Vue({
	...App,
	pinia
})
setupRouterInterceptor()
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	const pinia = createPinia()
	app.use(pinia)
	app.use(uView)
	app.config.globalProperties.$http = api
	app.config.globalProperties.$globalConfig = globalConfig
	setupRouterInterceptor()
	return {
		app,
		pinia
	}
}
// #endif