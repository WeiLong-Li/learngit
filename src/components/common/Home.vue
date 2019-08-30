<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div :class="{'content_baojing':content,'content_two':content_two}"></div>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import bus from './bus';
import '../../assets/css/icon/iconfont.css';
import '../../assets/css/icon/iconfont.js';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
            content:false,
            content_two:false,
            content_timer:'',
        }
    },
    components: {
        vHead,
        vSidebar,
        vTags
    },
    methods:{
        get_store(){
            let store = sessionStorage.getItem("store");
           if(store ==0){
            this.content_two = true;
            this.content = false;
           }else{
            this.content_two = false;
            this.content = true;
           }
        }
    },
    created() {
         let store = sessionStorage.getItem("store");
           if(store ==0){
            this.content_two = true;
            this.content = false;
           }else{
            this.content_two = false;
            this.content = true;
           }
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        })
    },
    mounted(){
        this.content_timer = setInterval(this.get_store, 1000);
    }
}
</script>
<style>
.wrapper {
    background: url(../../assets/back.png);
    background-size: cover;
}

.content {
    text-align: center;
    position: relative;
    /*border-image: url(../../assets/wrapper-bg.png)0 fill !important;*/
}
.content_baojing{
    text-align: center;
    position:absolute;
     width: 100%;
    height:100%;
    top:0px;
    left:0px;
    border-image: url(../../assets/wrapper-bg.png)0 fill !important;
}
.content_two{
    text-align: center;
    position: relative;
    border-image: url(../../assets/police.png)0 fill !important;
    width: 100%;
    height:100%;
    position:absolute;
    top:0px;
    left:0px;
     animation: content_two 1s linear infinite;
    -webkit-animation: content_two 1s linear infinite;
}
@keyframes content_two {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@-webkit-keyframes content_two {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>