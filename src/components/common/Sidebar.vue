<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" 
            text-color="#bfcbd9" active-text-color="" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    import "../../assets/css/icon/iconfont.css";
    import "../../assets/css/icon/iconfont.js";

    import "../../assets/css/ECC/iconfont.css";
    import "../../assets/css/ECC/iconfont.js";
    export default {
        data() {
            return {
                collapse: true,
                items: [
                    {
                        icon: 'el-icon-lxshouye',
                        index: 'dashboard',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-lxrenqun',
                        index: 'basic',
                        title: '泰州队列人群基本情况'
                    },
                    {
                        icon: 'el-icon-lxsuifang',
                        index: 'visit',
                        title: '泰州队列人群随访情况'
                    },
                    {
                        icon: 'el-icon-lxshujushiyanshi',
                        index: 'laboratory',
                        title: '智能化实验室管理'
                    },
                    {
                        icon: 'el-icon-lxshexiangtou',
                        index: 'ibmsmonitor',
                        title: '视频监控系统'
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = true;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 36px;
        bottom:0;
        /*overflow-y: scroll;*/
    }
    /*.sidebar::-webkit-scrollbar{
        width: 0;
    }*/
    .sidebar-el-menu{
        /*background: url(../../assets/back.png);*/
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
    .el-menu{
        background: none;
        border-right:none;
    }
    /deep/.el-tooltip{
        background:url(../../assets/back2.png);
    }
</style>
