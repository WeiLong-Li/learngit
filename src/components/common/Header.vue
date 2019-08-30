<template>
    <div class="header">
        <!-- 折叠按钮 -->
       <!--  <div class="collapse-btn" >
            <i class="el-icon-menu"></i>
        </div> -->
        <div class="header_left">
            <span class="time">{{date_time}}</span>
            <span style="display: inline-block;margin-left:20px;color:#07a8f9;">{{week}}</span>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <div></div>
                <!-- 消息中心 -->
               <!--  <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div> -->
                <!-- 用户头像 -->
                <!-- <div class="user-avator"><img src="../../assets/img/img.jpg"></div> -->
                <!-- 用户名下拉菜单 -->
               <!--  <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown> -->
            </div>
        </div>
        <div class="right"style="float: right;margin-right:10px;">
             <i v-bind:class="{ 'el-icon-lxicon-test':qing,'el-icon-lxicon-test1': duoyun, 'el-icon-lxicon-test2': ying,'el-icon-lxicon-test4': xiaoyu,'el-icon-lxicon-test7':zhongyu,'el-icon-lxicon-test6':dayu,'el-icon-lxbaoyu':baoyu,'el-icon-lxdabaoyu':dabaoyu,'el-icon-lxtedabaoyu':tedabaoyu,'el-icon-lxicon-test5':leizhengyu,'el-icon-lxxiaoxue':xiaoxue,'el-icon-lxzhenxue':zhenxue,'el-icon-lxtq-401':zhongxue,'el-icon-lxdaxue':daxue,'el-icon-lxbaoxue':baoxue,'el-icon-lxicon-test15':fucheng,'el-icon-lxicon-test12':mai}"style="color:#07a8f9;align-items: center;line-height: 40px;font-size: 25px;"></i>
              <span style="display: inline-block;margin-left:5px;color:#07a8f9;font-size:13px;">{{contxt}}</span>
                <span style="display: inline-block;margin-left:20px;color:#07a8f9;font-size:13px;">温度:{{tem}}</span>
                <i class="el-icon-lxwendu"style="color:#07a8f9"></i>
                <span style="display: inline-block;margin-left:20px;color:#07a8f9;font-size:13px;">湿度:{{hum}}%</span>
                <span style="display: inline-block;margin-left:20px;color:#07a8f9;font-size:13px;">空气指数
                :{{qlty}}</span>
                <i :class="{'el-icon-lxtixing':true,'blank':blank,'normal':normal}" style="font-size:35px;margin-left:20px;" @click="police">
                     <router-link to="laboratory"></router-link> 
                </i>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    import "../../assets/css/icon/iconfont.css";
    import "../../assets/css/icon/iconfont.js";
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                weather_time:"",
                timer:'',
                name: 'linxin',
                message: 2,
                date: new Date(),
                date_time:"",
                week:"",
                contxt:'',
                tem:'',
                hum:'',
                qlty:'',
                // 天气
                qing:false,
                duoyun:false,
                ying:false,
                xiaoyu:false,
                zhongyu:false,
                dayu:false,
                baoyu:false,
                dabaoyu:false,
                tedabaoyu:false,
                leizhengyu:false,
                xiaoxue:false,
                zhenxue:false,
                zhongxue:false,
                daxue:false,
                baoxue:false,
                fucheng:false,
                mai:false,
                // 警报系统
                blank:false,
                normal:false,
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },
            // 获取天气
             get_weather(){
                this.$axios({
                method:'get',
                url:'http://47.100.249.250:9099/api/weather/now',
                params:{
                    location:'CN101191201'
                },
                }).then((response) =>{      
                    switch(response.data.cond_icon) {
                        case 'qing':
                        this.qing = true 
                        break;
                        case 'duoyun':
                        this.duoyun = true
                        break;
                        case 'ying':
                        this.ying = true 
                        break;
                        case 'xiaoyu':
                        this.xiaoyu = true
                        break;
                        case 'zhongyu':
                        this.zhongyu = true 
                        break;
                        case 'dayu':
                        this.dayu = true
                        break;
                        case 'baoyu':
                        this.baoyu = true 
                        break;
                        case 'dabaoyu':
                        this.dabaoyu = true
                        break;
                         case 'tedabaoyu':
                        this.tedabaoyu = true 
                        break;
                        case 'leizhengyu':
                        this.leizhengyu = true
                        break;
                        case 'xiaoxue':
                        this.xiaoxue = true 
                        break;
                        case 'zhenxue':
                        this.zhenxue = true
                        break;
                        case 'zhongxue':
                        this.zhongxue = true 
                        break;
                        case 'daxue':
                        this.daxue = true
                        break;
                        case 'baoxue':
                        this.baoxue = true 
                        break;
                        case 'fucheng':
                        this.fucheng = true
                        break;
                        case 'mai':
                        this.mai = true
                        break;
                    }
                    this.contxt = response.data.cond_txt;
                    this.tem = response.data.tmp;
                    this.qlty = response.data.qlty;
                    this.hum = response.data.hum;
                      
                }).catch((error) =>{
                    console.log(error)      
                })
            },
            company_data() {
            this.$get('emsapi/laboratory/getlaboratorydata', {})
                .then((response) => {
                    var AlarmData = eval("(" + response.AlarmData + ")");
                    if (AlarmData.length > 0) {
                        sessionStorage.setItem("store", 0);
                        this.blank = true;
                        this.normal = false;
                    } else {
                        sessionStorage.setItem("store", 1);
                        this.blank = false;
                        this.normal = true;
                    }
                }).catch(function(error) {

                });
            },
            // 报警系统跳转
             police(){
                this.$router.push({name:'laboratory', params: {id:1}})
             }
        },
        mounted(){
            this.company_data()
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
            let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(() => {
              _this.date = new Date(); // 修改数据date
               _this.date_time=this.$moment(_this.date).format("YYYY年MM月DD日 HH时mm分ss秒");
               this.company_data()
            }, 1000)
            var week = new Date().getDay();
            var arr = ['日', '一', '二', '三', '四', '五', '六'];
            this.week = '星期'+arr[week];
        },
        created(){
           this.get_weather();
           this.weather_time = setInterval(()=>{
            this.get_weather()
           },3600000)

        },
         beforeDestroy() {
           clearInterval(this.weather_time)
            if (this.timer) {
              clearInterval(this.timer); 
            }
        },
        destroy(){
            clearInterval(this.weather_time);
            clearInterval(this.timer);
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        /*color: #fff;*/
        background: none;
        /*background: url(../../assets/header.png);*/
        /*background-size: 100% 100%;*/
        /*text-align: center;*/
    }
    .header_left{
        margin-left:100px;
        font-size: 13px;
        align-items: center;
        line-height: 50px;
    }
    .time{
        color:#07a8f9;
        align-items: center;
        font-family: "Arial";
    }
    .right{
        font-size: 17px;
    }
    .title{
        font-size: 1.5rem;
        /*align-items: center;*/
        height:100%;
        height:36px;
        vertical-align: middle;
        font-weight: 500;
        /*position: absolute;*/
        display: inline-block;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        /*padding-right: 50px;*/
    }
    .header-user-con{
        display: flex;
        height: 40px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 33px;
        color:#185bff;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .header_left{
        display: inline-block;
    }
    @keyframes blank {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@-webkit-keyframes blank {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.blank {
    animation: blank 1s linear infinite;
    -webkit-animation: blank 1s linear infinite;
    color:red;
}
.normal{
    color:#185BFF;
}
</style>
