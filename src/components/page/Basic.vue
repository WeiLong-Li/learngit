<template>
    <div class="containe">
        <div class="title">运维中心数据展示</div>
        <div class="table">
            <div class="head">
                <div class="chart all" style="width:40%;height:60%;border:none; font-family: '楷体';">
                    <div class="all_people" style="height:100%">
                        <div style="width:100%;height:40%;justify-content: space-around;flex-wrap: wrap;">
                            <div class="people data" style='color:#01fffd;width:100%;text-align: center;height:50%'>
                                <i class="el-icon-lxzongrenshuad" style="font-size: 2.5vw;margin-top:6%;margin-left:35px"></i>
                                <p style="display: inline-block;margin-left:20px"><span style="color:#fff;font-size:1vw;">总人数</span><span style="color:#fff;font-size:1vw;">({{suffix_one}})</span><br /><strong style="font-size: 1.5vw;font-family: '黑体'">
                                        <countTo ref="example_one" :startVal='startVal' :endVal='all_people' :duration='3000' separator=""></countTo>
                                    </strong></p>
                            </div>
                            <div class="man data" style='color:#01fffd;width:50%;text-align:center;'>
                                <i class="el-icon-lxnanren1" style="font-size: 2.5vw;margin-top:6%;margin-left:35px"></i>
                                <p style="display: inline-block;margin-left:20px"><span style="color:#fff;font-size:1vw;">男性</span><span style="color:#fff;font-size:1vw;">({{suffix_two}})</span><br /><strong style="font-size: 1.5vw;font-family: '黑体'">
                                        <countTo ref="example_two" :startVal='startVal' :endVal='man' :duration='3000' separator=""></countTo>
                                    </strong></p>
                            </div>
                            <div class="woman data" style='color:#01fffd;width:50%;text-align:center;'>
                                <i class="el-icon-lxnvren1" style="font-size: 2.5vw;margin-top:6%;margin-left:35px"></i>
                                <p style="display: inline-block;margin-left:20px"><span style="color:#fff;font-size:1vw;">女性</span><span style="color:#fff;font-size:1vw;">({{suffix_three}})</span><br /><strong style="font-size: 1.5vw;font-family: '黑体'">
                                        <countTo ref="example_three" :startVal='startVal' :endVal='woman' :duration='3000' separator=""></countTo>
                                    </strong></p>
                            </div>
                        </div>
                        <div class="chart students" style='width:100%;height:60%'>
                            <p style="color:#49dff0;text-align: center;font-size: 1vw;font-weight:600; font-family: '楷体';">性别比例</p>
                            <div id="sex" style="width:100%;height:100%;"></div>
                        </div>
                    </div>
                </div>
                <div class="chart_one" @click="age_scatter">
                    <div class="subtitle" style="font-family:'楷体';">泰州队列人群基本情况</div>
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体';padding-left:10px;">年龄分布</p>
                    <div id="nation" style="width:100%;height:100%;margin:0 auto"></div>
                </div>
                <!--  <div class="chart students" style='width:40%'>
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600; font-family: '楷体';">性别比例</p>
                    <div id="sex" style="width:100%;height:100%;"></div>
                </div> -->
                <div style="width:100%;height:40%">
                    <div id="total" style="width:100%;height:100%"></div>
                </div>
            </div>
            <div class="main">
                <div class="chart_two" @click="taizhou_btn">
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体';">地域分布</p>
                    <div id="taizhou" style="width:100%;height:98%;float: left"></div>
                </div>
            </div>
        </div>
        <transition name="myWrap" class="myWrap" style="width:100%;height:100%">
            <div v-show="nation" class="dalog" style="position:absolute;width:100%;height:101%;left:0px;top:0px;z-index: 99999">
                <p style="font-size: 25px;color:#49dff0;">
                    <i class="el-icon-lxfanhui" @click="nation_revert" style="text-align:left;display: inline-block;margin-left: 0px;float: left"></i>
                    <span style="font-size: 25px;color:#49dff0;display: inline-block;text-align:center;font-family: '楷体'">{{type_title}}</span>
                </p>
                <div style="width:100%;height:100%">
                    <div id="nation_enlarge" style="width:100%;height:100%"></div>
                </div>
            </div>
        </transition>
        <transition name="myWrap" class="myWrap" style="width:100%;height:100%">
            <div v-show="minute" class="dalog" style="position:absolute;width:100%;height:102.5%;left:0px;top:0px;z-index: 99999;">
                <p style="font-size: 25px;color:#49dff0;margin-bottom: 20px;">
                    <i class="el-icon-lxfanhui" @click="nation_revert" style="text-align:left;display: inline-block;margin-left: 0px;float: left"></i>
                    <span style="font-size: 25px;color:#49dff0;display: inline-block;text-align:center;font-family: '楷体'">{{type_title}}</span>
                </p>
                <div style="width:100%;height:96%;display: flex;justify-content: space-around;flex-wrap: wrap;float: left;">
                    <div style="width:50%;height:100%;">
                        <div id="EthnicGroups" style="width:100%;height:100%;"></div>
                    </div>
                    <div style="width:50%;height:100%;">
                        <div id="reconciliation" style="width:100%;height:100%;"></div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
import ".././../assets/css/table.css";
import "../../assets/css/icon/iconfont.css";
import "../../assets/css/icon/iconfont.js";
import "echarts/lib/component/title";
import 'echarts/map/js/china';
import jiangsu from "echarts/map/js/province/jiangsu.js";
import taizhoushi from '../../assets/321200.json';
import countTo from 'vue-count-to';
var echarts = require('echarts');
var myvue = {};
// 中国地图
// 年龄分布
var scale = 1;
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 14 * scale,
        padding: [21, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 16 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
var age_datas = [{
    value: 2154,
    name: '30-39岁人数'
}, {
    value: 3854,
    name: '50-59岁人数'
}, {
    value: 3854,
    name: '60-69岁人数'
}, {
    value: 3515,
    name: '50-59岁人数'
}];
var scale = 0.7;
var age_rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 28 * scale,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        align: 'center',
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 18 * scale,
        padding: [10, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 20 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
};
//民族比例
var datas = [{
    value: 2154,
    name: '苗族'
}, {
    value: 3854,
    name: '傣族'
}, {
    value: 3004,
    name: '藏族'
}, {
    value: 2800,
    name: '满族'
}];
var scale = 0.7;
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 25 * scale,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: 27 * scale,
        align: 'center',
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: 15 * scale,
        padding: [10, 0]
    },
    blue: {
        color: '#49dff0',
        fontSize: 17 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
};
// 泰州市地图
var taizhoushi_geoCoordMap = {
    "兴化市": [119.8527266537, 32.9104233273],
    "姜堰市": [120.1270227467, 32.5088390585],
    "海陵区": [119.9193875367, 32.4913379871],
    "高港区": [119.8815857476, 32.3193364477],
    "泰兴市": [120.0515511378, 32.1718242905],
    "靖江市": [120.2772191451, 31.9832793384],
}
var taizhou_Data = [
    { name: '兴化市', value: 199 },
    { name: '姜堰市', value: 200 },
    { name: '海陵区', value: 152 },
    { name: '高港区', value: 299 },
    { name: '泰兴市', value: 89 },
    { name: '靖江市', value: 52 },
];
var taizhou_max = 300,
    taizhou_min = 10; // todo 
var taizhou_maxSize4Pin = 100,
    taizhou_minSize4Pin = 20;
var taizhou_convertData = function(taizhou_Data) {
    var taizhou_res = [];
    for (var i = 0; i < taizhou_Data.length; i++) {
        var taizhou_geoCoord = taizhoushi_geoCoordMap[taizhou_Data[i].name];
        if (taizhou_geoCoord) {
            taizhou_res.push({
                name: taizhou_Data[i].name,
                value: taizhou_geoCoord.concat(taizhou_Data[i].value)
            });
        }
    }
    return taizhou_res;
};
echarts.registerMap('江苏', taizhoushi);
// 总人数
var val1data2 = [{
        value: 0.2,
        name: '装配完成率',
    },
    {
        value: 0.3,
        name: '班检完成率',
    },
    {
        value: 0.4,
        name: '初检完成率',
    },
    {
        value: 0.3,
        name: '复检完成率',
    },
    {
        value: 0.1,
        name: '出厂检完成率',
    },
]
var arr = ['middleLost', 0.6, val1data2, '今日完成进度']
// 性别比例
var sex_rich = {
    man: {
        align: 'center',
        padding: [20, 0, 0, 0],
        backgroundColor: {
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMxMTA2NzMxNzg0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2NzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQyMC40OCAxODkuNDRjLTMwLjcyIDAtNTMuNzYgMTAuMjQtNzYuOCAzMC43MkMzMjMuMiAyNDMuMiAzMTAuNCAyNjguOCAzMTAuNCAyOTYuOTZ2MjYzLjY4YzAgMTAuMjQgMi41NiAxNy45MiAxMC4yNCAyNS42IDcuNjggNy42OCAxNS4zNiAxMC4yNCAyNS42IDEwLjI0czIwLjQ4LTIuNTYgMjguMTYtMTAuMjRjNS4xMi03LjY4IDEwLjI0LTE1LjM2IDEwLjI0LTI1LjZWMzI1LjEyaDE3LjkydjY1Mi44YzAgMTIuOCA1LjEyIDIzLjA0IDE1LjM2IDMzLjI4IDEwLjI0IDEwLjI0IDIwLjQ4IDEyLjggMzMuMjggMTIuOCAxNS4zNiAwIDI1LjYtNS4xMiAzNS44NC0xMi44IDEwLjI0LTEwLjI0IDE1LjM2LTIwLjQ4IDE1LjM2LTMzLjI4VjU5OS4wNGgyMC40OHYzNzguODhjMCAxMi44IDUuMTIgMjMuMDQgMTUuMzYgMzMuMjggMTAuMjQgNy42OCAyMy4wNCAxMi44IDM1Ljg0IDEyLjggMTIuOCAwIDIzLjA0LTUuMTIgMzMuMjgtMTIuOCAxMC4yNC0xMC4yNCAxMi44LTIwLjQ4IDEyLjgtMzMuMjh2LTY1Mi44aDIwLjQ4djIzNS41MmMwIDEwLjI0IDIuNTYgMTcuOTIgMTAuMjQgMjUuNiA3LjY4IDcuNjggMTcuOTIgMTAuMjQgMjUuNiAxMC4yNCAxMC4yNCAwIDIwLjQ4LTIuNTYgMjUuNi0xMC4yNCA1LjEyLTcuNjggMTAuMjQtMTUuMzYgMTAuMjQtMjUuNlYyOTYuOTZjMC0yOC4xNi0xMC4yNC01My43Ni0zMC43Mi03Ni44LTIwLjQ4LTIwLjQ4LTQ2LjA4LTMwLjcyLTc2LjgtMzAuNzJINDIwLjQ4ek01MTIuNjQgMTY4Ljk2YzIzLjA0IDAgNDMuNTItNy42OCA1OC44OC0yMy4wNCAxNS4zNi0xNS4zNiAyNS42LTM1Ljg0IDI1LjYtNjEuNDQgMC0yMy4wNC03LjY4LTQzLjUyLTI1LjYtNTguODgtMTUuMzYtMTcuOTItMzUuODQtMjUuNi01OC44OC0yNS42QzQ4OS42IDAgNDY5LjEyIDcuNjggNDUzLjc2IDI1LjYgNDM4LjQgNDAuOTYgNDMwLjcyIDYxLjQ0IDQzMC43MiA4NC40OGMwIDIzLjA0IDcuNjggNDMuNTIgMjMuMDQgNjEuNDQgMTUuMzYgMTUuMzYgMzUuODQgMjMuMDQgNTguODggMjMuMDR6IiBwLWlkPSIyNjcxIiBmaWxsPSIjNzA3ZGIyIj48L3BhdGg+PC9zdmc+'
        }
    },
    woman: {
        align: 'center',
        padding: [20, 0, 0, 0],
        backgroundColor: {
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMxMTA4Mjc1OTA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi41NzYgMTAzLjYxNm0tODcuNjggMGE4Ny42OCA4Ny42OCAwIDEgMCAxNzUuMzYgMCA4Ny42OCA4Ny42OCAwIDEgMC0xNzUuMzYgMFoiIHAtaWQ9IjEwNjIiIGZpbGw9IiNmZjc0ODciPjwvcGF0aD48cGF0aCBkPSJNNzM1LjgwOCA1MTQuMTc2TDY2Ni4zNjggMjk4LjI0Yy0wLjUxMi0xLjQwOC0xLjIxNi0yLjY4OC0xLjc5Mi00LjAzMi0yNy43MTItNzAuMDgtODkuMjgtODYuNTI4LTExMS4wNC04Ni41MjhINDcwLjRjLTIxLjgyNCAwLTgzLjM5MiAxNi41MTItMTExLjA0IDg2LjUyOC0wLjU3NiAxLjM0NC0xLjIxNiAyLjYyNC0xLjcyOCA0LjAzMkwyODguMTkyIDUxNC4xNzZhMzQuNTYgMzQuNTYgMCAwIDAgNjUuNDcyIDIxLjY5Nmw2Ni45NDQtMjA4LjA2NGgxNS42OGwtMTE0LjI0IDM1Ni44NjRoOTMuMjQ4djI4Mi43NTJhNDAuNzY4IDQwLjc2OCAwIDEgMCA4MS41MzYgMHYtMjgyLjc1MmgzMC41Mjh2MjgyLjc1MmE0MC43NjggNDAuNzY4IDAgMSAwIDgxLjUzNiAwdi0yODIuNzUyaDkzLjI0OEw1ODcuNzc2IDMyNy44MDhoMTUuNjE2bDY3LjAwOCAyMDguMDY0YTM0LjQ5NiAzNC40OTYgMCAxIDAgNjUuNDA4LTIxLjY5NnoiIHAtaWQ9IjEwNjMiIGZpbGw9IiNmZjc0ODciPjwvcGF0aD48L3N2Zz4='
        }
    },
    yellow: {
        color: "#ffc72b",
        fontSize: 34,
        padding: [5, 4],

    },
    blue: {
        color: '#49dff0',
        fontSize: 16,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
export default {
    name: 'dashboard',
    data() {
        return {
            // 显示
            minute: false,
            table_name: '',
            table_value: '',
            startVal: 0,
            man: '',
            woman: '',
            all_people: '',
            stmbolSize: '',
            taizhou_convertData: "",
            max: "",
            min: "",
            sCale: '',
            people: '',
            people_company: '',
            nation: false,
            timer: '',
            tableData: [],
            tableData_all: [],
            heightTable_two: window.innerHeight * 1,
            heightTable: window.innerHeight * 0.42,
            tableHeight: window.innerHeight * 0.52,
            type_title: '',
            sex_option: {
                tooltip: {
                    show: true,
                    trigger: 'item',
                    formatter: "{b} : {c} 人 <br/>占比:{d}%"
                },
                series: [{
                    name: '',
                    /*minAngle: 180,*/
                    startAngle: '',
                    type: 'pie',
                    radius: ['40%', '90%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            formatter: function(params, ticket, callback) {
                                var a = params.name === '男' ? '{man|}' : '{woman|}';
                                return a + '\n{blue|' + params.percent + '%}';
                            },
                            rich: sex_rich
                        },
                        emphasis: {
                            show: true,
                            formatter: null,
                            textStyle: {
                                color: '#fff',
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [],
                }],
                color: ['#71CCDF', '#F04382'],
                animation: true,
                animationThreshold: 2500,
                addDataAnimation: true,
                animationDuration: 2000,
                animationEasing: 'ExponentialOut'
            },
            total_option: {
                title: {
                    text: "",
                    textStyle: {
                        color: "#49dff0",
                        fontFamily: "楷体"
                    }
                },
                grid: {
                    left: '7%',
                    bottom: '10%',
                    right: '4%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                },
                xAxis: [{
                        type: 'category',
                        show: false,
                        data: [],
                        axisLabel: {
                            textStyle: {
                                color: '#b6b5ab'
                            }
                        }
                    },
                    {
                        type: 'category',
                        position: "bottom",
                        data: [],
                        boundaryGap: true,
                        // offset: 40,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#b6b5ab'
                            }
                        }
                    }

                ],
                yAxis: [{
                    show: true,
                    offset: 52,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true
                    },
                    axisLabel: {
                        show: true,
                        color: '#b6b5ab'
                    }
                }, {
                    show: false,
                    type: "value",
                    name: "合格率(%)",
                    nameTextStyle: {
                        color: '#ccc'
                    },
                    axisLabel: {
                        color: '#ccc'
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }],
                color: ['#e54035'],
                series: [{
                        name: '',
                        type: 'pictorialBar',
                        xAxisIndex: 1,
                        // barCategoryGap: '-80%',
                        barCategoryGap: '-5%',
                        symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                        itemStyle: {
                            normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: 'rgb(1, 255, 253)',
                                    fontSize:'15'
                                }
                            },
                                color: function(params) {
                                    let colorList = [
                                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                                    ];
                                    return colorList[params.dataIndex];
                                }
                            },
                            emphasis: {
                                opacity: 1
                            }
                        },
                        data: [],
                    },
                    {
                        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAGDUlEQVRogbWaPWxcRRDHf/fO92Ffgk2MrXygBEJACCiQkCgQcoPSIAVXoYCKFBRIKegpQJHSBokehIgoiBBFrEiAQuEKgoQiPiIQEIRANnFI7ODYvvP5fBQ74zdvb/e9y9keafV27+3Hf2ZnZmf2XYlulx2kClAFVqS9V57LO7mIUmmb4H2wO90/l7YLfru0LWYGAd8A1oF2dM4wFS1UB8oFc3sLbV/yMbD9kF1cd6EDNPtbuBh8BUiAVmacP09+21+kqN0XDSL5UuQZ+w2y4LqRp18fwalPVIWGckBWvIE+yJJXz2PKAg3VtV0y9TbOBgYCnwSA+4ATD7zPSAj8pgFui+1XokDqrlOx2oQkbIEnpsQYUICb5rkZ+C2kUnWp9xixL/kKbqu0Ywh44pWy97SMPQ78A9w2ADsGfEf6bRqwm/KbqlHTMJAhX/INUleVB7xsypCpPwncBO6QlbyCfQyYkz6dQMnbhULw2Xdx4EOmPCiLLRtGtK8u3hVwG15pm7plwNqFZaAsfYC4wYY8iwVeMeUO7nBpSFsZ0HEKXMG3cafoOnAMuAEsBDBYVQqS9SiNAAMxqU8CR3G6OIzzyS8DM8B9wMPAi8DzwCjwEHAROCnrjMi4FeB+w7Rv+BYLGKn74Ne9jpYBX+qTOCkq8HEB+ouA7QA/AX8BYzJmBjgF7DEMNHH6XyVVw5DnslSX+YI6H5K4gq4CNbISfwd4Hxe7q4dQr6WeZEOE0wLWgNPA18Cn0j6M80i/Sz+1Aav/yFM1ZCXvkFJGfJVRJurA2x7IESMZH3wLJ+khATkNXJL3i2S9loJWDFbC69KHEt2uH1P7qlI2gI+JhEZw278fp7Mdaasuqxoo+LYAX5N17uK807LU7wKr8r5Ferpa9+mHEwzJQr6+W10Lucgq8BZwXvo0BHxjCg6/Ac895YyWFqx/AVffhW9uOAkjoNoilBeAT2TeI8BvZFXXlzy43W0mIomiAEwZmDcMPC3jEplseAqOnIOTChygBtUT8Ox5eIV0Z4bdKxrAa6QqM0q+sWYoyXvpTXKY7A58Rurra0DtLJyouV3poQMwftoxXMP1qeJs4XtS9bxJ2FVaPCDhS0Ka4cc6an0f2Z24gjlpp+DgWHwuAI7DE2ZMWcCfM4CXcoD3UEzyscGx8Lc0FgmeLHXDYfQlD/CeAgxK5YTwnUroSP6B1OI/Bm6Zdnepj7yzFI7nIeBJIhgypMYWIj/LOYQzqC7wAc7oEiSwmoW5ecdQlL6Ea/QGYl8FGOorN02QozaHAS0jwIQsOIPb1iGcx2kBrTPweSt1uxm6DnPvwVXpq4FZGzhLNqL8L4cB+1snoTfV8iWuWz0vE6vkTgHP4NSlCazNwp9vwoUf4Q+dYAmWL8KVl5yq6UG0Jq+Pk4bFe4ED5BxKhurgJGd1VWMTO1CP6n9xJ+EIqdSmgcuYUGAWrs/C3+SfsGsyZp+Zaz9O7fpRoQrQ1MCsTjb102KzJQ3KxmWBhpRDpL69n9hmlTREWJGiO9I0zKhd6M6rcLeoKDCzybKfCWnGdAv4ELiAixSbEfDrMt/rAvYMaSyjgP10sAewJfXzvpvzt82CXyQb3t4GvsPlp9pnSfotSn0Jl3FtAI8C35JKegJ4hGwYHFIZrW8lTbEcNi+L0gjzKE5aa0h4gDO6j6RcJk1SpoFXSb1My5QJYXKBXumHdmDrMsyCt7e/NrrUE9Hqv2ZTkzjjrJLGOf3msJM4r+TreCgJj0g4BR+L64tuDypeu5/bg3Gc3i9wb7cHUfC973qZiN3bPAAcBH41fWxsMopTj2uGiXu9t6mRvakOgq+TJguD3piN4/z2z4QNfzNQt8At6B5dzwOvurtqgPsMWFvY7bvKKPV7P18KPEPhbSwDsmBit8Qh16ifeoLfrIoOKT15bdhgSS9KLWD/6YP36yEp+7cFQSqSfOh6OQ9k6LcYsCLQhTToBzUfXFG7KNGw7dA3sAiI/sHXSCPE7ByD00CSUyq6PbDUQm6qAgD6yYDyjLNC70VvIW3nO2zRx+Rdp536fB/9bhShHWF8t/574P/bY1d26X/PtooMr/p/9AAAAABJRU5ErkJggg==',
                        symbolSize: 42,
                        name: "",
                        smooth: true,
                        type: "line",
                        yAxisIndex: 1,
                        data: [],
                        itemStyle: {
                            normal: {
                                borderWidth: 5,
                                color: {
                                    colorStops: [{
                                            offset: 0,
                                            color: '#821eff'
                                        },

                                        {
                                            offset: 1,
                                            color: '#204fff'
                                        }
                                    ],
                                }
                            }
                        }
                    }
                ]
                // 进行修改的折线图
            },
            // age_option:{

            // },
            // 年龄分布
            nation_option: {
                color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05", "#00a0ff"],
                grid: {
                    left: -100,
                    top: 50,
                    bottom: 10,
                    right: 10,
                    containLabel: true
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    type: "scroll",
                    bottom: "4%",
                    itemWidth: 16,
                    itemHeight: 8,
                    itemGap: 16,
                    textStyle: {
                        color: '#A3E2F4',
                        fontSize: 12,
                        fontWeight: 0
                    },
                    data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
                },
                polar: {},
                angleAxis: {
                    interval: 1,
                    type: 'category',
                    data: [],
                    z: 10,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: "#0B4A6B",
                            width: 1,
                            type: "solid"
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        show: true,
                        color: "#0B4A6B",
                        margin: 8,
                        fontSize: 16
                    },
                },
                radiusAxis: {
                    min: 40,
                    max: 120,
                    interval: 20,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: "#0B3E5E",
                            width: 1,
                            type: "solid"
                        },
                    },
                    axisLabel: {
                        formatter: '{value} %',
                        show: false,
                        padding: [0, 0, 20, 0],
                        color: "#0B3E5E",
                        fontSize: 16
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#0B3E5E",
                            width: 2,
                            type: "solid"
                        }
                    }
                },
                calculable: true,
                series: [{
                    type: 'pie',
                    radius: ["15%", "20%"],
                    hoverAnimation: false,
                    labelLine: {
                        normal: {
                            show: false,
                            length: 40,
                            length2: 40
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: [{
                        name: '',
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: "#0B4A6B"
                            }
                        }
                    }]
                }, {
                    type: 'pie',
                    radius: ["40%", "55%"],
                    hoverAnimation: false,
                    labelLine: {
                        normal: {
                            show: false,
                            length: 40,
                            length2: 30
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    name: "",
                    data: [{
                        name: '',
                        value: 0,
                        itemStyle: {
                            normal: {
                                color: "#0B4A6B"
                            }
                        }
                    }]
                }, {
                    stack: 'a',
                    type: 'pie',
                    radius: ['30%', '60%'],
                    roseType: 'area',
                    zlevel: 10,
                    label: {
                        normal: {
                            show: true,
                            formatter: "{b} : {c} ({d}%)",
                            textStyle: {
                                fontSize: 12,
                            },
                            position: 'outside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 30,
                            length2: 35
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: [{
                            value: 10,
                            name: 'IDS'
                        },
                        {
                            value: 5,
                            name: 'VPN'
                        },
                        {
                            value: 15,
                            name: '交换机'
                        },
                        {
                            value: 25,
                            name: '防火墙'
                        },
                        {
                            value: 20,
                            name: 'WAF'
                        },
                        {
                            value: 35,
                            name: '堡垒机'
                        }
                    ]
                }, ]
            },
            // 泰州地图

            taizhou_option: {
                title: {
                    text: '',
                    subtext: '',
                    x: 'center',
                    textStyle: {
                        color: '#ccc'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        if (typeof(params.value)[2] == "undefined") {
                            return params.name + ' : ' + params.value;
                        } else {
                            return params.name + ' : ' + params.value[2];
                        }
                    }
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x: 'right',
                    data: ['credit_pm2.5'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                visualMap: {
                    show: true,
                    min: 0,
                    max: '',
                    left: 'right',
                    bottom: '1.5%',
                    // top: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    textStyle: {
                        color: '#01e7be',
                        
                    },
                    calculable: true,
                    seriesIndex: [1],
                    inRange: {
                        color: ['#1488CC', '#2B32B2'] // 浅蓝
                    }
                },
                geo: {
                    show: true,
                    map: '江苏',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#01FFFD'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    roam: true,
                    zoom:1.2,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                            borderColor: 'rgba(147, 235, 248, 1)',
                            color: 'rgba(51, 69, 89, .5)', //地图背景色
                            borderWidth: 1,
                            shadowColor: 'rgba(128, 217, 248, 1)',
                        },
                        emphasis: {
                            areaColor: '#2B91B7',
                        }
                    }
                },
                series: [{
                        name: '',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: taizhou_convertData(taizhou_Data),
                        symbolSize: function(val) {
                            return val[2] / 1000;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#05C3F9'
                            }
                        }
                    },
                    {
                        type: 'map',
                        map: '江苏',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#3B5077',
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                        animation: true,
                        data: []
                    },
                    {
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: function(val) {
                            var a = (taizhou_maxSize4Pin - taizhou_minSize4Pin) / (taizhou_max - taizhou_min);
                            var b = taizhou_minSize4Pin - a * taizhou_min;
                            b = taizhou_maxSize4Pin - a * taizhou_max;
                            return a * val[2] + b;
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: function(val) {
                                    return val.value[2] + myvue.people_company
                                },
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F62157', //标志颜色
                            }
                        },
                        zlevel: 6,
                        data: taizhou_convertData(taizhou_Data),
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: taizhou_convertData(taizhou_Data.sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: function(val) {
                            return val[2] / 30;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#05C3F9',
                                // shadowBlur: 10,
                                // shadowColor: '#05C3F9'
                            }
                        },
                        zlevel: 1
                    },

                ]

            },
            all_chart_option: {
                title: {
                    top: '45%',
                    left: 'center',
                    text: arr[3],
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 14
                    },
                    subtext: '(占所有数据的的' + (arr[1] * 10000 / 100).toFixed(2) + '%)',
                    subtextStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function(res) {


                        if (res.componentSubType == 'liquidFill') {
                            return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
                        } else {
                            return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value;
                        }
                    }
                },
                series: [{
                        type: 'liquidFill',
                        itemStyle: {
                            normal: {
                                opacity: 0.4,
                                shadowBlur: 0,
                                shadowColor: 'blue'
                            }
                        },
                        name: arr[3],
                        data: [{
                            value: 0.6,
                            itemStyle: {
                                normal: {
                                    color: '#53d5ff',
                                    opacity: 0.6
                                }
                            }
                        }],
                        //  background: '#fff',
                        color: ['#53d5ff'],
                        center: ['50%', '50%'],
                        /*  backgroundStyle: {
                              color: '#fff'
                          },*/
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    fontSize: 12
                                }
                            }
                        },
                        outline: {
                            itemStyle: {
                                borderColor: '#86c5ff',
                                borderWidth: 0
                            },
                            borderDistance: 0
                        }
                    },
                    {
                        type: 'pie',
                        radius: ['42%', '50%'],
                        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                        hoverAnimation: false, ////设置饼图默认的展开样式
                        label: {
                            show: true,

                            normal: {
                                formatter: '{b}\n{d}%',
                                show: true,
                                position: ''
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },

                        itemStyle: { // 此配置
                            normal: {
                                borderWidth: 2,
                                borderColor: '#fff',
                            },
                            emphasis: {
                                borderWidth: 0,
                                shadowBlur: 2,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        data: arr[2]
                    }
                ]
            },
            // 民族比例放大
            // 饼图
            EthnicGroups: {
                color: ['#0290D4', '#4d59e6', '#5c63c5', '#0472d9', '#42947f', '#4eb2d4', '#072a5b', '#61C5C3', '#61C5C3', '#1255FF', '#6495ED', '#AFEEEE', '#ddd'],
                series: [{
                        type: 'pie',
                        selectedMode: 'single',
                        selectedOffset: 20,
                        radius: [0, '60%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: []
                    },
                    {
                        type: 'pie',
                        selectedMode: 'single',
                        selectedOffset: 20,
                        radius: ['60%', '75%'],
                        label: {
                            normal: {
                                show: true,
                                formatter: '{b}({d}%)',
                                textStyle: {
                                    fontSize: 18,
                                    color: '#ade3ff'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.6
                            }
                        },
                        data: []
                    }
                ]
            }
        }
    },
    components: {
        Schart,
        countTo,
    },
    computed: {

    },
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 != 0) {
                return 'success-row';
            } else {
                return "error-row";
            }
            return '';
        },
        // 泰州地图
        taizhou_btn() {
            this.type_title = "地域分布";
            this.table_name = "地域";
            this.table_value = '人数';
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "Pie,11,0|Histogram,11,0|Table,11,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    this.nation_enlarge_option.xAxis[0].data = response[1].DataNames;
                    this.nation_enlarge_option.series[0].data = response[1].DataValues;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    this.tableData_all = response[2].TableItemDatas;
                    // 饼图
                    this.pillar_option.legend.data = name
                    this.pillar_option.series[2].data = response[0].PieItemDatas;
                    this.nation = true;
                    var echart_enlarge = echarts.init(document.getElementById("nation_enlarge"));
                    var pillar = echarts.init(document.getElementById("pillar"));
                    var data = this.nation_enlarge_option;
                    var pillar_data = this.pillar_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        pillar.resize();
                        echart_enlarge.setOption(data, true);
                        pillar.setOption(pillar_data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        nation_revert() {
            this.nation = false;
            this.minute = false;
            var nation_enlarge = echarts.init(document.getElementById("nation_enlarge"));
            nation_enlarge.clear();
        },
        // 年龄放大
        age_scatter() {
            this.type_title = "年龄分布";
            this.table_name = "年龄段";
            this.table_value = '人数';
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "Pie,8,0|Histogram,8,0|Table,8,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    this.nation_option.series[2].data = response[0].PieItemDatas;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    this.nation = true;
                    var echart_enlarge = echarts.init(document.getElementById("nation_enlarge"));
                    var data = this.nation_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        //泰州地图
        get_data() {
            var sex_myChart = echarts.init(document.getElementById('sex'));
            // var age_myChart = echarts.init(document.getElementById('age'));
            var nation_myChart = echarts.init(document.getElementById('nation'));
            var taizhou_myChart = echarts.init(document.getElementById('taizhou'));
            var total_myChart = echarts.init(document.getElementById('total'));
            this.$refs.example_one.start();
            this.$refs.example_two.start();
            this.$refs.example_three.start();
            // 1.男女比例2.总人数3.年龄分布4.民族比例
            this.$get('/emsapi/DataValues/GetExhibitionData?', {
                    parameters: 'Histogram,7,0|Value,10,0|Pie,8,0|Table,9,0|Pie,11,0'
                })
                .then((response) => {
                    this.all_people = response[1].Value;
                    // this.suffix_one = response[1].DataUnit;
                    this.suffix_one = response[1].DataUnit;
                    this.suffix_two = response[0].DataUnit;
                    this.suffix_three = response[0].DataUnit;
                    // 性别比例换算
                    var all_data = response[0].DataValues[0] + response[0].DataValues[1];
                    var man_people = "";
                    var woman_people = "";
                    if (response[0].DataNames[0] == "男性占比") {
                        this.man = response[0].DataValues[0];
                        man_people = response[0].DataValues[0];
                    } else {
                        this.man = response[0].DataValues[1];
                        man_people = response[0].DataValues[1];
                    }
                    if (response[0].DataNames[0] == "女性占比") {
                        this.woman = response[0].DataValues[0];
                        woman_people = response[0].DataValues[0];
                    } else {
                        this.woman = response[0].DataValues[1];
                        woman_people = response[0].DataValues[1];
                    }
                    var manNum = this.man;
                    var womanNum = this.woman;
                    var rotateAngle = (manNum) / 2 / (manNum + womanNum) * 360 + 180;
                    var sex_data = [{
                        value: manNum,
                        name: '男'
                    }, {

                        value: womanNum,
                        name: '女'
                    }]
                    this.sex_option.series[0].startAngle = rotateAngle;
                    this.sex_option.series[0].data = sex_data;
                    // var man_data = man_people / all_data * 10000;
                    // this.sex_option.series[0].data[0].value = Math.floor(woman_data) / 100 * 100;
                    // this.sex_option.series[0].data[1].value = Math.floor(man_data) / 100 * 100;
                    // // alert(woman_data)
                    // this.sex_option.series[0].data[0].name = Math.floor(woman_data) / 100 + '%';
                    // this.sex_option.series[1].data[0].value = Math.floor(man_data) / 100 * 100;
                    // this.sex_option.series[1].data[1].value = Math.floor(woman_data) / 100 * 100;
                    // this.sex_option.series[1].data[0].name = Math.floor(man_data) / 100 + '%';
                    sex_myChart.setOption(this.sex_option);
                    // 年龄分布
                    let name = response[2].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    let value = response[2].PieItemDatas.map(function(item) {
                        return item['value'];
                    })
                    this.total_option.title.text = "年龄分布" + '(' + response[2].DataUnit + ')';
                    let chart = response[2].PieItemDatas
                    let xAxisMonth = [];
                    let barData = [];
                    let lineData = [];
                    for (let i = 0; i < chart.length; i++) {
                        xAxisMonth.push(chart[i].name);
                        barData.push({
                            "name": xAxisMonth[i],
                            "value": chart[i].value
                        });
                        lineData.push({
                            "name": xAxisMonth[i],
                            "value": chart[i].value
                        });
                    }
                    this.total_option.xAxis[0].data = name;
                    this.total_option.xAxis[1].data = xAxisMonth;
                    this.total_option.series[0].data = barData;
                    this.total_option.series[1].data = lineData;
                    total_myChart.setOption(this.total_option);
                    // 民族分布
                    this.tableData = response[3].TableItemDatas;
                    this.nation_option.legend.data = name;
                    this.nation_option.series[2].data = response[2].PieItemDatas;
                    nation_myChart.setOption(this.nation_option);
                    taizhou_Data = response[4].PieItemDatas;
                    this.taizhou_option.series[1].data = response[4].PieItemDatas;
                    this.people_company = response[4].DataUnit;
                    var ditu = response[4].PieItemDatas;
                    var taizhou_res = [];
                    for (var i = 0; i < ditu.length; i++) {
                        var taizhou_geoCoord = taizhoushi_geoCoordMap[ditu[i].name];
                        if (taizhou_geoCoord) {
                            taizhou_res.push({
                                name: ditu[i].name,
                                value: taizhou_geoCoord.concat(ditu[i].value)
                            });
                        }
                    }
                    this.taizhou_option.series[0].data = taizhou_res;
                    this.taizhou_option.series[2].data = taizhou_res;
                    this.taizhou_option.series[3].data = taizhou_res;
                    // 泰州市圆点大小
                    let taizhou_value = response[4].PieItemDatas.map(function(item) {
                        return item['value']
                    })
                    Array.prototype.max = function() {
                        return Math.max.apply({}, this)
                    }
                    Array.prototype.min = function() {
                        return Math.min.apply({}, this)
                    }
                    var max = taizhou_value.max();
                    var min = taizhou_value.min();
                    this.taizhou_option.visualMap.max = max;
                    this.taizhou_option.series[2].symbolSize = function(val) {
                        var a = (taizhou_maxSize4Pin - taizhou_minSize4Pin) / (max - taizhou_min);
                        var b = taizhou_minSize4Pin - a * min;
                        b = taizhou_maxSize4Pin - a * max;
                        return a * val[2] + b;
                    }
                    var a1 = this.taizhou_option.series[3].symbolSize = function(val) {
                        return val[2] / (max / 10);
                    }
                    this.taizhou_option.series[0].symbolSize = a1
                    taizhou_myChart.setOption(this.taizhou_option);
                }).catch(function(error) {

                });
            setTimeout(function() {
                window.onresize = function() {
                    sex_myChart.resize();
                    // age_myChart.resize();
                    nation_myChart.resize();
                    taizhou_myChart.resize();
                    total_myChart.resize();
                }
            }, 200)
        },
    },
    mounted() {
        this.get_data();
        this.timer = setInterval(() => {
            this.get_data();
        }, 3600000)
    },
    created() {
        myvue = this;
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    destroyed() {
        clearInterval(this.timer);
    }
}
</script>
<style scoped>
.containe {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 30px solid rgba(255, 255, 255, 0);
    text-align: center;
    position: relative;
}

.dalog {
    background: url(../../assets/back.png);
    /*background-position: center;*/
    box-sizing: border-box;
    margin-top:0.5%;
    background-size: 100% 100%;
    /*border: 15px solid rgba(255, 255, 255, 0);*/
}

.title {
    font-size: 1.5vw;
    position: relative;
    top: -45px;
    color: #185bff;
}

.subtitle {
    color: #49dffd;
    font-size: 1.2vw;
    overflow: hidden;
    font-family: '楷体',
}

.table {
    width: 100%;
    height: 102%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: -20px;
}

.head {
    width: 70%;
    height: 98%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
}

.main {
    width: 30%;
    height: 98%;
}

.chart {
    width: 50%;
    height: 40%;
    box-sizing: border-box;
}

.chart_one {
    width: 60%;
    height: 60%;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 20px 0px rgba(9, 208, 231, 0.004);
}

.chart_two {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.all_people {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    flex-wrap: wrap;
}

.data {
    width: 33%;
    text-align: left;
    color: #49dff0;
    float: left;
}

#total {
    width: 100%;
    height: 90%;
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

/deep/.el-dialog {
    width: 100%;
    height: 100%;
    background: url(../../assets/back.png);
    border: 15px solid rgba(255, 255, 255, 0);
}

/deep/.el-button--primary {
    background: #080d2f;
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

/deep/.el-table__row--striped {
    /* background:red !important;*/
}

/deep/.el-table .warning-row {
    background: rgba(5, 69, 131, 0.5) !important;
    /*opacity: 0.3 !important;*/
}

/deep/.el-table .success-row {
    background: rgba(5, 69, 131, 0.5) !important;

}

/deep/.el-table .error-row {
    color: rgba(147, 235, 248, 1) !important;
}

/deep/.el-scrollbar__wrap {
    overflow-y: hidden;
    overflow-x: hidden;
}

/deep/.el-progress-bar {
    width: 97% !important;
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