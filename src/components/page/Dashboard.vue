<template>
    <div class="containe">
        <div class="title">运维中心数据展示</div>
        <div class="subtitle" style="font-family: '楷体';">遗传资源共享平台</div>
        <div class="table">
            <div class="top">
                <div class="chart_title chart_two" style="display:flex;justify-content: space-between;flex-wrap: wrap;">
                    <div class="right_title" style="width:100%;height:100%;display: flex;justify-content: space-around;flex-wrap: wrap;margin-top:30px;">
                        <div style="width:35%;height:20%;text-align:left;">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">样本总数<span style="font-size:1vw;color:#fff">({{suffix_one}})</span></p>
                            <!-- <p style="width:35%;height:2px;  background: radial-gradient(#7962d5 24%, #4692d9 35%);margin:5px auto;"></p> -->
                            <p style="font-family: '黑体';font-size:2.4vw;color:#01fffd;">
                                <countTo ref="example" :startVal='0' :endVal='all_data' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div style="width:36%;height:20%;text-align:left;">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">遗传资源共享频次<span style="font-size:1vw;color:#fff">({{suffix_two}})</span></p>
                            <p style="font-family: '黑体';font-size:2.4vw;color:#01fffd;">
                                <countTo ref="example_two" :startVal='0' :endVal='all_share' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <!-- <div class='border-bottom'></div> -->
                        <div style="width:35%;height:20%;text-align:left;">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">总共享样本数<span style="font-size:1vw;color:#fff">({{suffix_three}})</span></p>
                            <p style="font-family: '黑体';font-size:2.4vw;color:#01fffd;">
                                <countTo ref="example_three" :startVal='0' :endVal='all_share_data' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div style="width:36%;height:20%;text-align:left;">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">流行病学调查数据<span style="font-size:1vw;color:#fff">({{unit_one}})</span></p>
                            <!-- <p style="width:35%;height:2px;  background: radial-gradient(#7962d5 24%, #4692d9 35%);margin:5px auto;"></p> -->
                            <p style="font-family: '黑体';font-size:2.4vw;color:#01fffd;">
                                <countTo ref="ref_one" :startVal='0' :endVal='r_title_one' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div style="width:35%;height:20%;text-align:left;">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">表型测量数据<span style="font-size:1vw;color:#fff">({{unit_two}})</span></p>
                            <p style="font-family: '黑体';font-size:2.4vw;color:#01fffd;">
                                <countTo ref="ref_two" :startVal='0' :endVal='r_title_two' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div style="width:36%;height:20%;text-align:left;">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">基因组测序数据<span style="font-size:1vw;color:#fff">({{unit_three}})</span></p>
                            <p style="font-family: '黑体';font-size:2.4vw;color:#01fffd;">
                                <countTo ref="ref_three" :startVal='0' :endVal='r_title_three' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div style="width:35%;height:20%;text-align:left;">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">医疗共享频次<span style="font-size:1vw;color:#fff">({{unit_four}})</span></p>
                            <p style="font-family: '黑体';font-size:2.4vw;color:#01fffd;">
                                <countTo ref="ref_four" :startVal='0' :endVal='r_title_four' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div style="width:35%;height:20%;text-align:left;">
                        </div>
                    </div>
                </div>
                <div class="chart_china">
                    <div class="chart_chinese" style="width:100%;height:100%;overflow: hidden">
                        <div id="china" style="width:100%;height:100%;overflow: hidden">
                        </div>
                    </div>
                    <el-button-group style="display: inline-block;font-size: 25px;position: absolute;bottom: 5%;left:50px;z-index: 9999;color:#00ffff;;background:none">
                        <el-button type="primary" icon="el-icon-plus" @click="increase"></el-button>
                        <el-button type="primary" icon="el-icon-lxhuanyuan" @click="reduction"></el-button>
                        <el-button type="primary" icon="el-icon-minus" @click="reduce"></el-button>
                    </el-button-group>
                </div>
                <div class="chart_title">
                    <div style="width:100%;height:100%;" @click="book_btn">
                        <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体'">各类型样本共享数({{share_uit}})</p>
                        <div id="type_share" style="width:100%;height:100%"></div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="chart_bottom" @click="type_sample_btn">
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;padding: 4px;padding-top: 0px;font-family: '楷体';">各类型样本数({{type_unit}})</p>
                    <div id="type_sample" style="width:100%;height:100%"></div>
                </div>
                <div class="chart_bottom" @click="dig_btn">
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;padding: 4px;padding-top: 0px;font-family: '楷体';">各病种样本数({{die_unit}})</p>
                    <div id="type_disease" style="width:100%;height:100%;"></div>
                </div>
            </div>
        </div>
        <transition name="myWrap" class="myWrap" style="width:100%;height:100%">
            <div v-show="detailstwo" class="dalog" style="position:absolute;width:100%;height:101%;left:0px;top:0px;z-index: 9999">
                <p style="font-size: 25px;color:#49dff0;">
                    <i class="el-icon-lxfanhui" @click="revert" style="text-align:left;display: inline-block;margin-left: 0px;float: left"></i>
                    <span style="font-size: 25px;color:#49dff0;display: inline-block;text-align:center;font-family: '楷体';">{{type_title}} </span>
                </p>
                <div style="width:100%;height:100%">
                    <div id="echart_enlarge" style="width:100%;height:100%">
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
import "../../assets/css/icon/iconfont.css";
import "../../assets/css/table.css";
import "../../assets/css/icon/iconfont.js";
import "echarts/lib/component/title";
import 'echarts/map/js/china';
import countTo from 'vue-count-to';
var echarts = require('echarts');
var myvue = {};
// pillar颜色
var colorList = ["#f6d54a", "#f69846", "#44aff0", "#45dbf7", "#f845f1", "#ad46f3", "#5045f6", "#4777f5"];
var colorListSub = ['rgba(35,143,56,.5)', 'rgba(26,87,178,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)'];
// 各类型样本共享数

export default {
    name: 'dashboard',
    data() {
        return {
            weather_time: "",
            details: false,
            detailstwo: false,
            // 数据类型共享表格
            type_title: "",
            tableHeight: window.innerHeight * 0.42,
            // 最终值
            all_data: '',
            /*总样本数*/
            all_share: '',
            /*总共享频次*/
            all_share_data: '',
            /*总共享样本数*/
            series: [],
            bus: 1.2,
            type_unit: '',
            die_unit: '',
            suffix: '',
            suffix_one: '',
            suffix_two: '',
            suffix_three: '',
            // 右边标题数据
            r_title_one: '',
            r_title_two: '',
            r_title_three: '',
            r_title_four: '',
            // 右边标题单位
            unit_one: '',
            unit_two: '',
            unit_three: '',
            unit_four: '',
            share_uit:'',
            // 流行病学数据调查
            epidemic_option: {
                series: [{
                    "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        "offset": 0,
                        "color": '#f125ff'
                    }, {
                        "offset": 1,
                        "color": '#2dcbff'
                    }]),
                    name: '访问来源',
                    type: 'pie',
                    radius: ['80%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 180000,
                        name: '',
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold',
                                    color: '#2dcbff',
                                }
                            }
                        },
                    }, ]
                }]
            },
            // 表型测试数据
            phenotype_option: {
                series: [{
                    color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }], ), "red"],
                    name: '访问来源',
                    type: 'pie',
                    radius: ['80%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 180000,
                        name: '1800000\n条',
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold',
                                    color: '#70ffac'
                                }
                            }
                        },
                    }, ]
                }]
            },
            // 基因组测序数据
            gene_option: {
                series: [{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#40d738'
                    }, {
                        offset: 1,
                        color: '#2235d4'
                    }]),
                    name: '访问来源',
                    type: 'pie',
                    radius: ['80%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 180000,
                        name: '1800000\nGB',
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold',
                                    color: '#2235d4'
                                }
                            }
                        },
                    }, ]
                }]
            },
            // 总共享频次
            SharedFrequency_option: {
                series: [{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#EEFF00'
                    }, {
                        offset: 1,
                        color: '#00FBFF'
                    }]),
                    name: '访问来源',
                    type: 'pie',
                    radius: ['80%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 180000,
                        name: '1800000\n次',
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold',
                                    color: '#00FBFF'
                                }
                            }
                        },
                    }, ]
                }]
            },
            // 各类型样本共享数
            type_share_option: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color: ['rgba(215, 164, 221,0.7)', 'rgba(248, 219, 115,0.7)', 'rgba(235, 189, 191,0.7)', 'rgba(117, 204, 232,0.7)', 'rgba(164, 221, 230,0.7)', 'rgba(129, 191, 176,0.7)', 'rgba(179, 221, 209,0.7)', 'rgba(209, 220, 226,0.7)', 'rgba(245, 185, 148,0.7)', 'rgba(238, 156, 108,0.7)', 'rgba(171, 202, 207,0.7)', 'rgba(182, 179, 196,0.7)', 'rgba(243, 221, 208,0.7)', ],
                series: [{
                    name: '',
                    type: 'pie',
                    radius: '65%',
                    center: ["50%", "50%"],
                    radius: ["50%", "78%"],
                    data: [],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                //                              position:'inside',
                                formatter: '{b}:({d}%)'
                            },
                            borderColor: '#0A0E35',
                            borderWidth: 10,
                        },
                    }
                }]
            },
            // 中国地图
            china_option: {
                tooltip: {
                    trigger: 'item',
                    borderColor: '#FFFFCC',
                    showDelay: 0,
                    hideDelay: 0,
                    enterable: true,
                    transitionDuration: 0,
                    extraCssText: 'z-index:100',
                    formatter: function(params, ticket, callback) {
                        //根据业务自己拓展要显示的内容
                        var res = "";
                        var name = params.name;
                        var value = params.value[params.seriesIndex + 1];
                        // res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                        // return res;
                    }
                },
                // backgroundColor:"rgba(6,16,96,1)",
                visualMap: { //图例值控制
                    min: 0,
                    max: 1,
                    calculable: true,
                    show: false,
                    color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    zoom: 1.2,
                    label: {
                        emphasis: {
                            show: false,

                        }
                    },
                    roam: false, //是否允许缩放
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            color: 'rgba(51, 69, 89, .5)', //地图背景色
                            borderWidth: 1,
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                            fontSize: 12,
                        },
                        // emphasis: {
                        //   color: 'rgba(37, 43, 61, .5)' //悬浮背景
                        // }
                    },
                    scaleLimit: { //所属组件的z分层，z值小的图形会被z值大的图形覆盖
                        min: 1.2, //最小的缩放值                    //最大的缩放值
                    }
                },
                series: []
            },
            // 类型样本数
            type_sample_option: {
                "color": ["#3cefff"],
                "tooltip": {},
                "grid": {
                    bottom: '20%',
                    left: '8%',
                    right: '4%',
                    to: '0%'
                },
                "xAxis": [{
                    "type": "category",
                    "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                    "axisTick": {
                        // "alignWithLabel": true
                    },
                    "nameTextStyle": {
                        "color": "#82b0ec"
                    },
                    "axisLine": {
                        "lineStyle": {
                            "color": "#82b0ec"
                        }
                    },
                    "axisLabel": {
                        "textStyle": {
                            "color": "#82b0ec"
                        }
                    }
                }],
                "yAxis": [{
                    "type": "value",
                    "axisLabel": {
                        "textStyle": {
                            "color": "#82b0ec"
                        },
                        "formatter": "{value}"
                    },
                    "splitLine": {
                        "lineStyle": {
                            "color": "#0c2c5a"
                        }
                    },
                    "axisLine": {
                        "show": false
                    }
                }],
                "series": [{
                    "name": "",
                    "type": "pictorialBar",
                    "symbolSize": [20, 10],
                    "symbolOffset": [0, -5],
                    "symbolPosition": "end",
                    "z": 12,
                    "label": {
                        "normal": {
                            "show": true,
                            "position": "top",
                            "formatter": "{c}"
                        }
                    },
                    "data": [60, 70, 80, 90, 60, 70, 80, 90]
                }, {
                    "name": "",
                    "type": "pictorialBar",
                    "symbolSize": [20, 10],
                    "symbolOffset": [0, 5],
                    "z": 12,
                    "data": [60, 70, 80, 90, 60, 70, 80, 90]
                }, {
                    "type": "bar",
                    "itemStyle": {
                        "normal": {
                            "opacity": 0.7
                        }
                    },
                    "barWidth": "20",
                    "data": [60, 70, 80, 90, 60, 70, 80, 90],
                    "markLine": {
                        "silent": true,
                        "symbol": "none",
                        "label": {
                            // "position": "middle",
                            "formatter": "{b}"
                        },
                    }
                }]
            },
            // 各种病样本数
            type_disease_option: {
                grid: {
                    bottom: '20%',
                    left: '8%',
                    right: '4%',
                    top: '6%'
                },
                tooltip: {
                    show: true,
                    trigger: 'item'
                },
                legend: {
                    show: true,
                    x: 'center',
                    y: '35',
                    icon: 'stack',
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: '#1bb4f6'
                    },
                    data: ['各病种样本数', '已发布', '浏览量']
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        color: '#30eee9',
                        // rotate:40,
                        interval: 0,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#397cbc'
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#195384'
                        }
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }],
                yAxis: [{
                    type: 'value',
                    // name : '各类型样本数',
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#2ad1d2'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#27b4c2'
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#11366e'
                        }
                    }
                }, ],
                series: [{
                    // name:'各类型样本数',
                    type: 'line',
                    stack: '总量',
                    symbol: 'circle',
                    smooth: true,
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#0092f6',
                            lineStyle: {
                                color: "#0092f6",
                                width: 1
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#01FFFD',
                                }
                            },
                            areaStyle: {
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,146,246,0.9)'
                                }]),
                            }
                        }
                    },
                    markPoint: {
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
                }, ]
            },
            // 放大类型样本数
            echart_enlarge_option: {
                tooltip: { //提示框组件
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                grid: [{
                    left: '2%',
                    right: '2%',
                    bottom: '0',
                    top: 100,
                    containLabel: true,
                }],
                legend: { //图例组件，颜色和名字
                    right: 20,
                    top: 45,
                    itemGap: 16,
                    itemWidth: 18,
                    itemHeight: 10,
                    data: [{
                            // name:'实收数量',
                            //icon:'image://../wwwroot/js/url2.png', //路径
                        },
                        {
                            name: '预约数量',
                        }
                    ],
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                xAxis: [{
                    type: 'category',
                    //  boundaryGap: true,//坐标轴两边留白
                    data: ['2018-12-1', '2018-12-2', '2018-12-3', '2018-12-4', '2018-12-5', '2018-12-6', '2018-12-7', '2018-12-8'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        //      interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        //  margin:15,
                        textStyle: {
                            color: '#078ceb',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
                        rotate: 50,
                    },
                    axisTick: { //坐标轴刻度相关设置。
                        show: false,
                    },
                    axisLine: { //坐标轴轴线相关设置
                        lineStyle: {
                            color: '#fff',
                            opacity: 0.2
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }],
                yAxis: [{
                    type: 'value',
                    splitNumber: 5,
                    axisLabel: {
                        textStyle: {
                            color: '#078ceb',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#fff'],
                            opacity: 0.06
                        }
                    }

                }],
                series: [{
                        // name:'实收数量',
                        type: 'bar',
                        data: [45, 42, 40, 35, 34, 32, 30, 29],
                        barWidth: 10,
                        barGap: 0, //柱间距离
                        label: { //图形上的文本标签
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#078ceb',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 12,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                show: true,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#1a98f8'
                                }, {
                                    offset: 1,
                                    color: '#7049f0'
                                }]),
                                barBorderRadius: 50,
                                borderWidth: 0,
                            }
                        },
                    },
                    //饼图2
                ]
            },
            // 各类型样本数放大
            echart_enlarge_two: {
                tooltip: { //提示框组件
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                grid: [{
                    left: '2%',
                    right: '2%',
                    bottom: '0',
                    top: 100,
                    containLabel: true,
                }],
                legend: { //图例组件，颜色和名字
                    right: 20,
                    top: 45,
                    itemGap: 16,
                    itemWidth: 18,
                    itemHeight: 10,
                    data: [{
                            // name:'实收数量',
                            //icon:'image://../wwwroot/js/url2.png', //路径
                        },
                        {
                            name: '预约数量',
                        }
                    ],
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                xAxis: [{
                    type: 'category',
                    //  boundaryGap: true,//坐标轴两边留白
                    data: ['2018-12-1', '2018-12-2', '2018-12-3', '2018-12-4', '2018-12-5', '2018-12-6', '2018-12-7', '2018-12-8'],
                    axisLabel: { //坐标轴刻度标签的相关设置。
                        //      interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                        //  margin:15,
                        textStyle: {
                            color: '#078ceb',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
                        rotate: 50,
                    },
                    axisTick: { //坐标轴刻度相关设置。
                        show: false,
                    },
                    axisLine: { //坐标轴轴线相关设置
                        lineStyle: {
                            color: '#fff',
                            opacity: 0.2
                        }
                    },
                    splitLine: { //坐标轴在 grid 区域中的分隔线。
                        show: false,
                    }
                }],
                yAxis: [{
                    type: 'value',
                    splitNumber: 5,
                    axisLabel: {
                        textStyle: {
                            color: '#078ceb',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#fff'],
                            opacity: 0.06
                        }
                    }

                }],
                series: [{
                        // name:'实收数量',
                        type: 'bar',
                        data: [45, 42, 40, 35, 34, 32, 30, 29],
                        barWidth: 10,
                        barGap: 0, //柱间距离
                        label: { //图形上的文本标签
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#078ceb',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 12,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                show: true,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#1a98f8'
                                }, {
                                    offset: 1,
                                    color: '#7049f0'
                                }]),
                                barBorderRadius: 50,
                                borderWidth: 0,
                            }
                        },
                    },
                    //饼图2
                ]
            },
            // 各类型样
            // 放大柱状图
        }
    },
    components: {
        Schart,
        countTo,
    },
    computed: {

    },
    methods: {
        // 表格颜色
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 != 0) {
                return 'success-row';
            }
            return '';
        },
        // 各类型放大数据
        type_sample_btn() {
            this.type_title = "各类型样本数"+"(" + this.type_unit+")";
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "PieOther,21,4|Histogram,21,0|Table,21,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    this.type_sample_option.grid = { bottom: '5%', left: '5%', right: '2%' }
                    this.type_sample_option.xAxis[0].data = response[1].DataNames;
                    this.type_sample_option.series[0].data = response[1].DataValues;
                    this.type_sample_option.series[1].data = response[1].DataValues;
                    this.type_sample_option.series[2].data = response[1].DataValues;
                    // this.echart_enlarge_option.xAxis[0].data = response[1].DataNames;
                    // this.echart_enlarge_option.series[0].data = response[1].DataValues;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    // this.tableData_share = response[2].TableItemDatas;
                    // 饼图
                    this.detailstwo = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.type_sample_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        // 各病种样本数放大数据
        dig_btn() {
            this.type_title = "各病种样本数" +"(" + this.die_unit+")";
            this.table_name = "病种";
            this.table_value = '数量';
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "PieOther,22,4|Histogram,22,0|Table,22,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    this.type_disease_option.grid = {
                        bottom: '5%',
                        left: '2%',
                        right: '1%',
                        top: '2%'
                    }
                    this.type_disease_option.xAxis[0].data = response[1].DataNames;
                    this.type_disease_option.series[0].data = response[1].DataValues;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    // 饼图
                    this.detailstwo = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.type_disease_option;

                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        // 各类型样本数放大
        book_btn() {
            this.type_title = "各类型样本共享数" +"(" + this.share_uit+")";
            this.table_name = "类型样本";
            this.table_value = '数量';
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "Pie,25,0|Histogram,25,0|Table,25,0"
                })
                .then((response) => {
                    this.type_share_option.series[0].data = response[0].PieItemDatas;
                    this.type_share_option.series[0].itemStyle.normal.labelLine = {
                        length: 50,
                        length2: 20,
                        show: true,
                        color: '#00ffff'
                    };
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    this.detailstwo = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.type_share_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        reduction() {
            document.getElementsByClassName('chart_chinese')[0].innerHTML =
                "<div id='china' style='width:100%;height:100%'></div>"
            var china_myChart = echarts.init(document.getElementById('china'));
            this.bus = 1.2;
            this.china_option.geo.zoom = 1.2;
            this.china_option.geo = {
                map: 'china',
                zoom: 1.24,
                label: {
                    normal: {
                        show: true,
                        color: '#a1ffff',
                    },
                    emphasis: {
                        show: false,
                        color: '#a1ffff',
                    }
                },
                roam: true, //是否允许缩放
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        color: 'rgba(51, 69, 89, .5)', //地图背景色
                        borderWidth: 1,
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10,
                        fontSize: 12,
                    },
                    emphasis: {
                        color: 'rgba(37, 43, 61, .5)' //悬浮背景
                    }
                }
            };
            china_myChart.clear();
            china_myChart.setOption(this.china_option);
            this.get_china()
        },
        //中国地图重加载
        china() {
            var china_myChart = echarts.init(document.getElementById('china'));
            china_myChart.setOption(this.china_option);
            setTimeout(function() {
                window.onresize = function() {
                    china_myChart.resize();
                }
            }, 200)
        },
        // 中国地图放大
        increase() {
            this.bus++;
            this.china_option.geo.zoom += this.bus;
            if (this.china_option.geo.zoom > 8) {
                this.china_option.series[1].label.normal.show = true;
            }
            this.china();
        },
        reduce() {
            this.bus--;
            if (this.bus < 1) {
                this.bus = 1.2;
            }
            this.china_option.geo.zoom = this.bus;
            if (this.china_option.geo.zoom < 8) {
                this.china_option.series[1].label.normal.show = false;
            }
            this.china();
        },

        // 更新中国地图数据
        get_china() {
            var chinaGeoCoordMap = {
                '山东大学': [127.9688, 45.368],
                '黑龙江大学': [125.9644, 45.368],
                '泰州市': [119.88116, 32.31841],
            };
            var chinaDatas = [
                [{
                    name: '山东大学',
                    value: 0
                }],
                [{
                    name: '黑龙江大学',
                    value: 0
                }]
            ];
            var china_myChart = echarts.init(document.getElementById('china'));
            china_myChart.on('georoam', params => {
                let zoom = china_myChart.getOption().geo[0].zoom;
                if (zoom > 8) {
                    this.china_option.series[1].label.normal.show = true;
                    this.china_option.geo.zoom = zoom;
                    china_myChart.setOption(this.china_option);
                } else {
                    this.china_option.series[1].label.normal.show = false;
                    this.china_option.geo.zoom = zoom;
                    china_myChart.setOption(this.china_option);
                }
            })
            china_myChart.on('georoam', params => {

            })
            // var number = 1;
            //   var that = this;
            //  china_myChart.on('click', function (params) {
            //      var json = {
            //         '黑龙江': [127.9688, 45.368],
            //         '内蒙古': [110.3467, 41.4899],
            //         "吉林": [125.8154, 44.2584],
            //         '北京': [116.4551, 40.2539],
            //         "辽宁": [123.1238, 42.1216],
            //         "河北": [114.4995, 38.1006],
            //         "天津": [117.4219, 39.4189],
            //         "山西": [112.3352, 37.9413],
            //         "陕西": [109.1162, 34.2004],
            //         "甘肃": [103.5901, 36.3043],
            //         "宁夏": [106.3586, 38.1775],
            //         "青海": [101.4038, 36.8207],
            //         '新疆': [87.9236, 43.5883],
            //         "西藏": [91.11, 29.97],
            //         "四川": [103.9526, 30.7617],
            //         "重庆": [108.384366, 30.439702],
            //         "山东": [117.1582, 36.8701],
            //         "河南": [113.4668, 34.6234],
            //         "江苏": [118.8062, 31.9208],
            //         "安徽": [117.29, 32.0581],
            //         "湖北": [114.3896, 30.6628],
            //         "浙江": [119.5313, 29.8773],
            //         "福建": [119.4543, 25.9222],
            //         "江西": [116.0046, 28.6633],
            //         "湖南": [113.0823, 28.2568],
            //         "贵州": [106.6992, 26.7682],
            //         "云南": [102.9199, 25.4663],
            //         "广东": [113.12244, 23.009505],
            //         "广西": [108.479, 23.1152],
            //         "海南": [110.3893, 19.8516],
            //         '上海': [121.4648, 31.2891],
            //       };
            //     var city = params.name;
            //      that.china_option.geo.zoom =  that.china_option.geo.zoom;
            //       china_myChart.clear()
            //   that.$get('/emsapi/DataValues/GetExhibitionData?',{
            //       parameters:'Position,34,0'
            //   })
            // .then((response) => {
            //   that.china_option.geo.center = json[city];
            //   var chinaData=eval("(" + response[0].PositionDataTxt + ")")
            //   chinaGeoCoordMap = chinaData;
            //   chinaDatas = response[0].PositionDataItems
            //   var convertData = function(data) {
            //     var res = [];
            //     for(var i = 0; i < data.length; i++) {
            //       var dataItem = data[i];
            //       var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            //       var toCoord = [119.88116,32.31841];
            //       if(fromCoord && toCoord) {
            //         res.push([{
            //           coord: toCoord,
            //           value: dataItem[0].value
            //         }, {
            //           coord: fromCoord,
            //         }]);
            //       }
            //     }
            //     return res;
            //   };
            //   [['泰州市', chinaDatas]].forEach(function(item, i) {

            //     that.series.push({
            //         type: 'lines',
            //         zlevel: 2,
            //         effect: {
            //           show: true,
            //           period: 4, //箭头指向速度，值越小速度越快
            //           trailLength: 0.08, //特效尾迹长度[0,1]值越大，尾迹越长重
            //           symbol: 'arrow', //箭头图标
            //           symbolSize: 5, //图标大小
            //         },
            //         lineStyle: {
            //           normal: {
            //             width: 1, //尾迹线条宽度
            //             opacity: 1, //尾迹线条透明度
            //             curveness: .3 //尾迹线条曲直度
            //           }
            //         },
            //         data: convertData(item[1])
            //       }, {
            //         type: 'effectScatter',
            //         coordinateSystem: 'geo',
            //         zlevel: 2,
            //         rippleEffect: { //涟漪特效
            //           period: 4, //动画时间，值越小速度越快
            //           brushType: 'stroke', //波纹绘制方式 stroke, fill
            //           scale: 4 //波纹圆环最大限制，值越大波纹越大
            //         },
            //         label: {
            //           normal: {
            //             show: true,
            //             position: 'right', //显示位置
            //             offset: [5, 0], //偏移设置
            //             formatter: function(params){//圆环显示文字
            //               return params.data.name;
            //             },
            //             fontSize: 12
            //           },
            //           emphasis: {
            //             show: true
            //           }
            //         },
            //         symbol: 'circle',
            //         symbolSize: function(val) {
            //           return 5+ val[2] * 5; //圆环大小
            //         },
            //         itemStyle: {
            //           normal: {
            //             show: false,
            //             color: '#f00'
            //           }
            //         },
            //         data: item[1].map(function(dataItem) {
            //           return {
            //             name: dataItem[0].name,
            //             value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            //           };
            //         }),
            //       },
            //       //被攻击点
            //       {
            //         type: 'scatter',
            //         coordinateSystem: 'geo',
            //         zlevel: 5,
            //         rippleEffect: {
            //           period: 4,
            //           brushType: 'stroke',
            //           scale: 4
            //         },
            //         label: {
            //           normal: {
            //             show: true,
            //             position: 'right',
            //             //offset:[5, 0],
            //             color: '#0f0',
            //             formatter: '{b}',
            //             textStyle: {
            //               color: "#0f0"
            //             }
            //           },
            //           emphasis: {
            //             show: true,
            //             color: "#f60"
            //           }
            //         },
            //         symbol: 'pin',
            //         symbolSize: 50,
            //         data: [{
            //           name: item[0], 
            //           value: chinaGeoCoordMap[item[0]].concat([10]),
            //         }],
            //       }
            //     );
            //   that.china_option.series = that.series;
            //   china_myChart.clear()
            //   that.series=[];
            //   china_myChart.setOption(that.china_option,true);
            //   });
            //   }).catch(function (error) {

            //   });
            //   });
            china_myChart.clear()
            this.$get('/emsapi/DataValues/GetExhibitionData?', {
                    parameters: 'Position,34,0'
                })
                .then((response) => {
                    var chinaData = eval("(" + response[0].PositionDataTxt + ")")
                    chinaGeoCoordMap = chinaData;
                    chinaDatas = response[0].PositionDataItems
                    var convertData = function(data) {
                        var res = [];
                        for (var i = 0; i < data.length; i++) {
                            var dataItem = data[i];
                            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
                            var toCoord = [119.88116, 32.31841];
                            if (fromCoord && toCoord) {
                                res.push([{
                                    coord: toCoord,
                                    value: dataItem[0].value
                                }, {
                                    coord: fromCoord,
                                }]);
                            }
                        }
                        return res;
                    };
                    var that = this;
                    [
                        ['泰州市', chinaDatas]
                    ].forEach(function(item, i) {
                        that.series.push({
                                type: 'lines',
                                zlevel: 2,
                                aspectScale: 0.75,
                                effect: {
                                    show: true,
                                    period: 4, //箭头指向速度，值越小速度越快
                                    trailLength: 0.08, //特效尾迹长度[0,1]值越大，尾迹越长重
                                    symbol: 'arrow', //箭头图标
                                    symbolSize: 5, //图标大小
                                },
                                lineStyle: {
                                    normal: {
                                        width: 1, //尾迹线条宽度
                                        opacity: 1, //尾迹线条透明度
                                        curveness: .3 //尾迹线条曲直度
                                    }
                                },
                                data: convertData(item[1])
                            }, {
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                zlevel: 2,
                                rippleEffect: { //涟漪特效
                                    period: 4, //动画时间，值越小速度越快
                                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                                },
                                label: {
                                    normal: {
                                        show: false,
                                        position: 'right', //显示位置
                                        offset: [5, 0], //偏移设置
                                        formatter: function(params) { //圆环显示文字
                                            return params.data.name;
                                        },
                                        fontSize: 12
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                symbol: 'circle',
                                symbolSize: function(val) {
                                    return 5 + val[2] * 5; //圆环大小
                                },
                                itemStyle: {
                                    normal: {
                                        show: true,
                                        color: '#f00'
                                    }
                                },
                                data: item[1].map(function(dataItem) {
                                    return {
                                        name: dataItem[0].name,
                                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                                    };
                                }),
                            },
                            //被攻击点
                            {
                                type: 'scatter',
                                coordinateSystem: 'geo',
                                zlevel: 5,
                                rippleEffect: {
                                    period: 4,
                                    brushType: 'stroke',
                                    scale: 4
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'right',
                                        //offset:[5, 0],
                                        color: '#0f0',
                                        formatter: '{b}',
                                        textStyle: {
                                            color: "#0f0"
                                        }
                                    },
                                    emphasis: {
                                        show: true,
                                        color: "#f60"
                                    }
                                },
                                symbol: 'pin',
                                symbolSize: 50,
                                data: [{
                                    name: item[0],
                                    value: chinaGeoCoordMap[item[0]].concat([10]),
                                }],
                            }
                        );
                        that.china_option.series = that.series;
                        china_myChart.clear()
                        that.series = [];
                        china_myChart.setOption(that.china_option, true);
                    });
                }).catch(function(error) {

                });
        },
        // 更新视图
        get_data() {
            var china_myChart = echarts.init(document.getElementById('china'));
            var type_sample = echarts.init(document.getElementById('type_sample'));
            var type_disease = echarts.init(document.getElementById('type_disease'));
            var type_share = echarts.init(document.getElementById('type_share'));
            var that = this;
            that.$refs.example.start();
            that.$refs.example_two.start();
            that.$refs.example_three.start();
            that.$refs.ref_one.start();
            that.$refs.ref_two.start();
            that.$refs.ref_three.start();
            that.$refs.ref_four.start();
            // 放大后类型样表
            // 1.各类型样本共享数2.各类型样本数3.个病种样本数4.样本总数5.总共享频次6.总共享样本数7.流行病学调查数据8.表型测试数据9.基因组测试数据10.总共享频次
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: 'PieOther,25,4|Histogram,21,10|Histogram,22,10|Value,20,0|Value,23,0|Value,24,0|Value,30,0|Value,31,0|Value,32,0|Value,33,0'
                })
                .then((response) => {
                    // 样本总数
                    that.all_data = response[3].Value;
                    that.suffix_one = response[3].DataUnit;
                    // 总共享频次
                    that.all_share = response[4].Value;
                    that.suffix_two = response[4].DataUnit;
                    // 总共享样本数
                    that.all_share_data = response[5].Value;
                    that.suffix_three = response[5].DataUnit;
                    // 流行病学调查数据
                    that.r_title_one = response[6].Value;
                    that.r_title_two = response[7].Value;
                    that.r_title_three = response[8].Value;
                    that.r_title_four = response[9].Value;
                    that.unit_one = response[6].DataUnit;
                    that.unit_two = response[7].DataUnit;
                    that.unit_three = response[8].DataUnit;
                    that.unit_four = response[9].DataUnit;
                    var name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    // 各类型样本共享数

                    that.type_share_option.series[0].data = response[0].PieItemDatas;
                    this.share_uit = response[0].DataUnit;
                    // that.type_share_option.series[2].data = response[0].PieItemDatas;

                    type_share.setOption(that.type_share_option);
                    // 各类型样本数数据
                    that.type_unit = response[1].DataUnit;
                    that.type_sample_option.xAxis[0].data = response[1].DataNames;
                    that.type_sample_option.series[0].data = response[1].DataValues;
                    that.type_sample_option.series[1].data = response[1].DataValues;
                    that.type_sample_option.series[2].data = response[1].DataValues;
                    type_sample.setOption(that.type_sample_option);
                    // 各病种样本数
                    that.die_unit = response[1].DataUnit;
                    that.type_disease_option.xAxis[0].data = response[2].DataNames;
                    that.type_disease_option.series[0].data = response[2].DataValues;
                    type_disease.setOption(that.type_disease_option);
                }).catch(function(error) {

                });
            // 放大后类型样表
            setTimeout(function() {
                window.onresize = function() {
                    china_myChart.resize();
                    type_sample.resize();
                    type_disease.resize();
                    type_share.resize();
                }
            }, 200)
        },
        // 第一个放大图
        // 返回
        revert() {
            var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));

            echart_enlarge.clear();
            // pillar.clear();
            // this.details = false;
            this.detailstwo = false;
        },
    },
    mounted() {

        this.reduction();
        this.get_data();
        this.weather_time = setInterval(() => {
            // this.get_china();
            this.reduction();
            this.get_data();
        }, 3600000)
    },
    created() {
        myvue = this;
    },
    beforeDestroy() {
        clearInterval(this.weather_time);
    },
    destroyed() {
        clearInterval(this.weather_time);
    },
}
</script>
<style scoped>
.containe {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 30px solid rgba(255, 255, 255, 0);
    /*border-image: url(../../assets/wrapper-bg.png) 35 fill;*/
    text-align: center;
    position: relative;
}

.normal {
    /*border-image: url(../../assets/wrapper-bg.png) 35 fill;*/
}

.title {
    font-size: 1.5vw;
    position: relative;
    top: -45px;
    color: #185bff;
}

.myWrap {
    transition: all ease .2s;
}

.myWrap-enter-active {
    animation: identifier .4s;
    overflow: hidden;
}

.myWrap-leave-active {
    animation: against .4s;
    overflow: hidden;
}

@keyframes identifier {

    from {
        width: 0;
        height: 0;
    }

    to {
        width: 100%;
        height: 100%;
    }

}

@keyframes against {

    from {
        width: 100%;
        height: 100%;
    }

    to {
        width: 0;
        height: 0;
    }

}

.subtitle {
    color: #49dffd;
    font-size: 1.2vw;
    position: relative;
    top: -20px;
    overflow: hidden;
}


.table {
    width: 100%;
    height: 95%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.top {
    width: 100%;
    height: 60%;
    display: inline-flex;
    justify-content: space-between;
    box-sizing: border-box;
}

.bottom {
    width: 100%;
    height: 40%;
    display: inline-flex;
    justify-content: space-between;
    box-sizing: border-box;
}

.head {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    /*background: yellow;*/
    /*margin-top:-20px;*/
    /*flex-direction: column;*/
}

.border-bottom {
    width: 100%;
    height: 1%;
    /*background:url(../../assets/border-bottom.png);*/
    background-size: 100% 100%;
}

.chart_top {
    width: 33%;
    height: 50%;
    /*background: pink;*/
    box-sizing: border-box;
    border: 15px solid rgba(255, 255, 255, 0);
    /* border-image: url(../../assets/border.png) 40 fill;
        box-shadow: inset 0px 0px 20px 0px rgba(9, 208, 231, 0.004);*/
}

.echart_left {
    width: 50%;
    height: 50%;
}

.chart_title {
    width: 30%;
    height: 109%;
    /*border: 15px solid rgba(255, 255, 255, 0);*/
    /* background:url(../../assets/zu.png);
       background-size: 100% 100%;*/
    /*border-image: url(../../assets/border.png) 40 fill;*/
    box-sizing: border-box;
    margin-top: -50px;
}

.right_title {
    background-size: cover;
}

.chart_two {
    /*background:url(../../assets/niankuang.png);*/
    /*border: 15px solid rgba(255, 255, 255, 0);*/
}

.chart_china {
    width: 40%;
    height: 100%;
    position: relative;
}

.chart_bottom {
    width: 50%;
    height: 100%;
    position: relative;
    /*background: black;*/
    box-sizing: border-box;
    border: 15px solid rgba(255, 255, 255, 0);
    /* border-image: url(../../assets/border.png) 40 fill;
        box-shadow: inset 0px 0px 20px 0px rgba(9, 208, 231, 0.004);*/
}

.chart {
    width: 50%;
    height: 40%;
    /*background: */
    box-sizing: border-box;
    /*flex-direction: column;*/
    border: 15px solid rgba(255, 255, 255, 0);
    /*border-image: url(../../assets/border.png) 40 fill;*/
}

.left_head {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
}

.left_title {
    width: 33%;
    height: 100%;
    box-sizing: border-box;
    text-align: left;
}

.share {
    /*background: url(../../assets/niankuang.png);*/
    background-size: 100% 100%;
}

.dalog {
    background: url(../../assets/back.png);
    background-position: center;
    box-sizing: border-box;
    margin-top:0.5%;
    background-size: 100% 100%;
    /*border: 15px solid rgba(255, 255, 255, 0);*/
}

.el-table__body {
    width: 100% !important;
    height: 100% !important;
}
</style>
<style scoped>
/deep/.el-dialog {
    width: 100%;
    height: 100%;
    background: url(../../assets/back.png);
    border: 15px solid rgba(255, 255, 255, 0);
    /*border-image: url(../../assets/border.png) 40 fill;*/
}

/deep/.el-button--primary {
    background: #080d2f;
    /*border-color:none;*/
}

/deep/.el-table {
    background: none;
    color: ''#07a8f9;
    z-index: 999;
}

/deep/.el-table__row {
    background: none !important;
    color: ''#07a8f9;
}

/deep/.el-table__row:hover {
    background: none;
}

/deep/.el-table td {
    color: #07a8f9;
    border-bottom: 1px solid #185bff;
}

/deep/.el-table tr {
    background: none;
    border-bottom: 1px solid #185bff;
}

/deep/.el-table th {
    background: none;
    border-bottom: 1px solid#185bff;
}

/deep/.el-table th.is-leaf {
    background: rgba(0, 176, 255, 0.8) !important;
    color: #fff;
}

/deep/.el-table tbody tr:hover>td {
    background: none;
}

/deep/.el-table .warning-row {
    background: rgba(5, 69, 131, 0.5) !important;
    /*opacity: 0.3 !important;*/
}

/deep/.el-table .success-row {
    background: rgba(5, 69, 131, 0.5) !important;

}

/deep/.el-scrollbar__wrap {
    overflow-y: hidden;
    overflow-x: hidden;
}

/deep/.el-progress-bar {
    width: 98% !important;
}

/deep/.el-progress__text {
    color: #07A8F9 !important;
}

/deep/.el-progress-bar__inner {
    background: rgba(97, 197, 195) !important;
}

/deep/.el-progress-bar__outer {
    background: rgba(7, 168, 249, 0.5) !important;
}

/deep/.el-table .cell {
    padding-right: 15px !important;
}
</style>