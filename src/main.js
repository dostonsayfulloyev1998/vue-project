
import Vue from 'vue';
import  App from "./App"

new Vue({
    el:"#app",
    data: {
        render:function (h){
            return h(App)
        }
    }
})