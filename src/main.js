import Vue from 'vue';
import Router from './router';
import Store from './vuex';

import App from './App.vue';

import './sass/styles.scss';
import './js/scripts';

Vue.config.productionTip = false;

new Vue({
	router: Router,
	store: Store,
	render: h => h(App),
}).$mount('#app');
