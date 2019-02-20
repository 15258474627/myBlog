// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//全局自定义指令
/*Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color="#"+Math.random().toString(16).slice(2,8)
	}
})*/
Vue.directive('theme',{
	bind(el,binding,vnode){
			if(binding.arg=='column'){
				el.style.background ="#6677cc";
				el.style.padding ="20px";
			}//v-theme:column="wide" 中的column
			if(binding.value=='wide'){
				el.style.maxWidth ="560px";
			}//v-theme:column="wide" 中的wide
		}
})
//全局自定义过滤器
/*Vue.filter("to-uppercase",function(value){
	return value.toUpperCase();
})*///英文全部大写

//创建路由
const router = new VueRouter({
	routes:Routes,
	mode:"history" 
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
