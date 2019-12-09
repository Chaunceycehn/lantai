import Vue from 'vue'
import Button from './button'
import icon from './icon'

Vue.component('l-button',Button);
Vue.component('l-icon',icon);
new Vue({
    el: '#app',
    data:{
        loading:true
    }
})