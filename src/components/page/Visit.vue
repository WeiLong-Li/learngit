<template>
    <div class="containe">
        <div class="title">运维中心数据展示</div>
        <!-- <div class="subtitle">泰州队列人群随访情况</div> -->
        <div class="table">
            <div class="head">
                <!--  <div class="chart_title">

                </div> -->
                <div class="chart_top" @click="disease_btn">
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体'">疾病构成({{fill_unit}})</p>
                    <div style="width:100%;height:95%">
                        <div id="constitute" style="width:100%;height:100%"></div>
                    </div>
                </div>
                <div class="chart_top" style="border:none">
                    <div class="subtitle">泰州队列人群随访情况</div>
                    <div class="chart_top_title" style='width:100%;height:12%;display: flex;justify-content: space-between;text-align: center'>
                        <div class="left_title" style="color:#6649F7;width:34%">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">当年已随访人数<span style="font-size:1vw;color:#fff;">({{suffix_one}})</span></p>
                            <p style="font-family: '黑体';font-size:2vw;color:#01fffd;">
                                <countTo ref="example_one" :startVal='0' :endVal='all_visit' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div class="left_title" style="color:#ffc91f">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">总发病率<span style="font-size:1vw;color:#fff;">({{suffix_three}})</span></p>
                            <p style="font-family: '黑体';font-size:2vw;color:#01fffd;">
                                <countTo ref="example_two" :startVal='0' :endVal='all_morbidity' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div class="left_title" style="color:#ec5571">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">总死亡率<span style="font-size:1vw;color:#fff;">({{suffix_four}})</span></p>
                            <p style="font-family: '黑体';font-size:2vw;color:#01fffd;">
                                <countTo ref="example_three" :startVal='0' :endVal='all_death' :duration='3000' separator=""></countTo>
                            </p>
                        </div>
                        <div class="left_title" style="color:#50b1ff;width:31%">
                            <p style="color:#fff;font-size: 1vw;font-family:'楷体'">总人口迁徙率<span style="font-size:1vw;color:#fff;">({{suffix_five}})</span></p>
                            <p style="font-family: '黑体';font-size:2vw;color:#01fffd;">
                                {{all_migrate}}
                            </p>
                        </div>
                    </div>
                    <!-- <p style="color:#49dff0;text-align: left;font-size: 18px;font-weight:600">各渠道数据获取情况</p> -->
                    <div class="chart_channel" style="width:100%;height:80%;box-sizing: border-box;position: relative;" @click="extremely_btn">
                        <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;position: absolute;left:0px;top:20px;font-family: '楷体'">死因构成({{death_unit}})</p>
                        <div id="channel" style="width:100%;height:100%;"></div>
                    </div>
                </div>
                <div class="chart_top" @click="canal_btn">
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体'">各渠道人数获取情况({{qudao}})</p>
                    <div id="cause" style="width:100%;height:100%;"></div>
                </div>
                <div class="chart_bottom" @click="attack_btn">
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体'">年发病率({{year_fill}})</p>
                    <div id="morbidity" style="width:100%;height:100%;"></div>
                </div>
                <div class="chart_bottom" @click='move_btn'>
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体'">人口迁移率({{transfer_uit}})</p>
                    <div style="width:97%;height:99%">
                        <div id="shift" style="width:100%;height:100%"></div>
                    </div>
                </div>
                <div class="chart_bottom" @click="die_btn">
                    <p style="color:#49dff0;text-align: left;font-size: 1vw;font-weight:600;font-family: '楷体'">年死亡率({{die_uit}})</p>
                    <!-- <div id="death" style="width:100%;height:100%;"></div> -->
                    <el-scrollbar style="height:100%">
                        <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%;" :height="heightTable">
                            <el-table-column prop="name" label="病种" width="130">
                            </el-table-column>
                            <el-table-column label="死亡率">
                                <template slot-scope="scope">
                                    <el-progress :percentage="scope.row.value*10" status="exception"></el-progress>
                                </template>
                            </el-table-column>
                            <el-table-column prop="value" width="70">
                                <template slot-scope="scope">
                                    <span>{{scope.row.value}}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-scrollbar>
                </div>
            </div>
        </div>
        <transition name="myWrap" class="myWrap" style="width:100%;height:100%">
            <div v-show="details" class="dalog" style="position:absolute;width:100%;height:101%;left:0px;top:0px;z-index: 9999">
                <p style="font-size: 25px;color:#49dff0;">
                    <i class="el-icon-lxfanhui" @click="revert" style="text-align:left;display: inline-block;margin-left: 0px;float: left"></i>
                    <span style="font-size: 25px;color:#49dff0;display: inline-block;text-align:center;font-family: '楷体';">{{type_title}}</span>
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
import '../../assets/css/table.css';
import "../../assets/css/icon/iconfont.css";
import "../../assets/css/icon/iconfont.js";
import "echarts/lib/component/title";
import countTo from 'vue-count-to';
var echarts = require('echarts');
// 总概率

// 各渠道数据获取
var yAxisData = [];
//年发病率
var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=';
var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';


var spirit = 'image://data:image/png;base64,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';
var scale = 1;
//富文本配置
var rich = {
    white: {
        color: "#fff",
        align: 'left',
        fontSize: 18 * scale,
        padding: [0, 0]
    },
};
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

// 年发病率
export default {
    name: 'dashboard',
    data() {
        return {
            // 初始值
            tableHeight: window.innerHeight * 0.42,
            tableData: [],
            table_title: '',
            table_name: '',
            tableData_share: [],
            heightTable: window.innerHeight * 0.34,
            details: false,
            type_title: '',
            timer: '',
            all_visit: '',
            all_morbidity: '',
            all_death: '',
            all_migrate: "",
            qudao: '',
            suffix_one: '',
            suffix_three: '',
            suffix_four: '',
            suffix_five: "",
            // 疾病构成单位
            fill_unit: '',
            death_unit: '',
            year_fill:'',
            transfer_uit:'',
            die_uit:"",
            constitute_option: {
                tooltip: {
                    formatter: function(params) {
                        return params.name
                    }
                },
                color: ['#22C3AA'],
                series: [{
                    type: 'pie',
                    data: [],
                    bottom: '0%',
                    radius: ['0%', '65%'],
                    roseType: 'area',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255,255,255,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(255,255,255,0)'
                            }]),
                            borderColor: '#01FFFD'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }, {
                    type: 'pie',
                    data: [],
                    radius: ['65%', '90%'],
                    zlevel: -2,
                    itemStyle: {
                        normal: {
                            color: 'rgba(1, 255, 253,0.5)',
                            borderColor: '#01FFFD'
                        }
                    },
                    label: {
                        normal: {
                            position: 'inside'
                        }
                    }
                }]
            },
            // 死因构成
            channel_option: {
                grid: {
                    left: '10%',
                    right: '10%',
                    top: '20%',
                    bottom: '10%',
                    show: false
                },
                tooltip: {
                    show: false
                },
                xAxis: {
                    data: ['国能电气', '栋良电气', '德辉电气', '方大电气', '宇辰电气', '益和电气'],
                    axisLine: {
                        lineStyle: {
                            color: '#185BFF',
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        color: '#185BFF',
                        fontSize: 12
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: 'red',
                        }
                    }
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#185BFF',
                        fontSize: 16
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#185BFF',
                            // type: 'dashed'
                        }
                    }

                },
                series: [{
                    type: 'bar',
                    name: '今年',
                    barWidth: 24,
                    label: {
                        normal: {
                            show: true,
                            position: "top",
                            textStyle: {
                                color: "#ffc72b",
                                fontSize: 20
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1ABA9F'
                            }, {
                                offset: 0.8,
                                color: '#093B48'
                            }], false)
                        }
                    },
                    data: [12, 354, 165, 144, 477, 211]
                }]
            },
            // 死因构成
            cause_option: {
                legend: {
                    show: true,
                    icon: "circle",
                    // top: "center",
                    right: '0%',
                    data: [],
                    width: 50,
                    padding: [0, 5],
                    itemGap: 25,
                    formatter: function(name) {
                        return name
                    },
                    textStyle: {
                        color: '#77ffff',
                        rich: {
                            name: {
                                fontSize: 16,
                                lineHeight: 15,
                                color: "red"
                            },
                            value: {
                                fontSize: 18,
                                lineHeight: 20,
                                color: "#fff"
                            }
                        }
                    },
                },
                tooltip: {
                    show: true,
                    trigger: "item",
                    formatter: "{a}<br>{b}:{c}({d}%)"
                },
                color: ['rgb(24, 183, 142)', 'rgb(1, 179, 238)', 'rgb(22, 75, 205)', 'rgb(52, 52, 176)'],
                grid: {
                    top: '10%',
                    bottom: '52%',
                    left: "50%",
                    containLabel: false
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        inside: true,
                        textStyle: {
                            color: "#fff",
                            fontSize: 16,
                        },
                        show: true
                    },
                    data: []
                }],
                xAxis: [{
                    show: false
                }],
                series: []
            },
            morbidity_option: {
                grid: {
                    left: '3%',
                    right: '6%',
                    bottom: '10%',
                    containLabel: true
                },
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        // show: false,
                        lineStyle: {
                            color: '#0b5263'
                        }
                    },
                    axisTick: {
                        show: true,
                        inside: true,
                        length: 10 * scale
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 14 * scale
                        }
                    },
                }],
                xAxis: [{
                    type: 'category',
                    data: ['初级', '中级', '高级', '3级'],
                    boundaryGap: ['20%', '20%'],
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        // show: false,
                        lineStyle: {
                            color: '#0b5263'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        //   rotate: 45,
                        padding: [15, 0, 0, 0],
                        textStyle: {
                            fontSize: 16 * scale,
                            color: '#3fdaff'
                        }
                    }
                }],
                series: [{
                    name: '100',
                    type: 'pictorialBar',
                    stack: '总量',
                    z: 3,
                    barWidth: '45%',
                    data: [],
                    symbol: 'image://' + fillImg,
                    symbolClip: true,
                    symbolSize: [52, '100%']
                }, {
                    name: '占位',
                    type: 'pictorialBar',
                    barWidth: '45%',
                    barGap: '-100%',
                    silent: true,
                    label: {
                        normal: {
                            show: true,
                            position: "top",
                            distance: 20 * scale,
                            formatter: '',
                            textStyle: {
                                color: "#ffc72b",
                                fontSize: 20 * scale
                            },
                            rich: rich
                        }
                    },
                    symbol: 'image://' + bgImg,
                    symbolClip: true,
                    symbolSize: [52, '100%'],
                    data: []
                }]
            },
            // 人口迁移率
            shift_option: {
                "grid": {
                    "left": "25%",
                    "top": "2%",
                    "bottom": 10,
                },
                "tooltip": {
                    "trigger": "item",
                    "textStyle": {
                        "fontSize": 12
                    },
                    "formatter": "{b0}:{c0}"
                },
                "xAxis": {
                    "max": 80,
                    "splitLine": {
                        "show": false
                    },
                    "axisLine": {
                        "show": false
                    },
                    "axisLabel": {
                        "show": false
                    },
                    "axisTick": {
                        "show": false
                    }
                },
                "yAxis": [{
                        "type": "category",
                        "inverse": false,
                        "data": [
                            "山西",
                            "四川",
                            "西藏",
                            "北京",
                            "上海",
                            "内蒙古",
                        ],
                        "axisLine": {
                            "show": false
                        },
                        "axisTick": {
                            "show": false
                        },
                        "axisLabel": {
                            // "margin": -4,
                            "textStyle": {
                                "color": "#FFC72B",
                                "fontSize": 16.25
                            }
                        }
                    },

                ],
                "series": [{
                        "type": "pictorialBar",
                        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
                        "symbolRepeat": "fixed",
                        "symbolMargin": "5%",
                        "symbolClip": true,
                        "symbolSize": 22.5,
                        "symbolPosition": "start",
                        "symbolOffset": [
                            20,
                            0
                        ],
                        "symbolBoundingData": 300,
                        "data": [
                            13,
                            42,
                            67,
                            81,
                            86,
                            94,
                        ],
                        "z": 10
                    },
                    {
                        "type": "pictorialBar",
                        "itemStyle": {
                            "normal": {
                                "opacity": 0.3
                            }
                        },
                        "label": {
                            "normal": {
                                "show": false
                            }
                        },
                        "animationDuration": 0,
                        "symbolRepeat": "fixed",
                        "symbolMargin": "5%",
                        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
                        "symbolSize": 22.5,
                        "symbolBoundingData": 300,
                        "symbolPosition": "start",
                        "symbolOffset": [
                            20,
                            0
                        ],
                        "data": [
                            13,
                            42,
                            67,
                            81,
                            86,
                            94,
                        ],
                        "z": 5
                    }
                ]
            },
            // 数据放大
            pillar_option: {
                color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
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
                    bottom: "1%",
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
                    radius: ["5%", "10%"],
                    hoverAnimation: false,
                    labelLine: {
                        normal: {
                            show: false,
                            length: 30,
                            length2: 20
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
                    radius: ["30%", "45%"],
                    hoverAnimation: false,
                    labelLine: {
                        normal: {
                            show: false,
                            length: 30,
                            length2: 20
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
                    radius: ['20%', '50%'],
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
                            length: 5,
                            length2: 10
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
            // 年死亡率
            year_death: {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    // formatter: function(prams) {
                    //     if (prams[0].data === min) {
                    //         return "合格率：0%"
                    //     } else {
                    //         return "合格率：" + prams[0].data + "%"
                    //     }
                    // }
                },
                legend: {
                    data: ['直接访问', '背景'],
                    show: false
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '1%',
                    top: '1%',
                    // height: '85%',
                    containLabel: true,
                    z: 22
                },
                xAxis: [{
                    type: 'category',
                    gridIndex: 0,
                    data: [],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0c3b71'
                        }
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        rotate: 40,
                        color: '#0280FF',
                        fontSize: 16
                    }
                }],
                yAxis: [{
                        type: 'value',
                        gridIndex: 0,
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        min: 0,
                        max: 2,
                        axisLine: {
                            lineStyle: {
                                color: '#0c3b71'
                            }
                        },
                        axisLabel: {
                            color: '#0280FF',
                            formatter: '{value} %'
                        }
                    },
                    {
                        type: 'value',
                        gridIndex: 0,
                        min: 0,
                        max: 2,
                        splitNumber: 12,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        // splitArea: {
                        //     show: true,
                        //     areaStyle: {
                        //         color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                        //     }
                        // }
                    }
                ],
                series: [{
                        name: '合格率',
                        type: 'bar',
                        barWidth: '30%',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 30,
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#01FFFD',
                                    }
                                },
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#00feff'
                                        },
                                        {
                                            offset: 0.5,
                                            color: '#027eff'
                                        },
                                        {
                                            offset: 1,
                                            color: '#0286ff'
                                        }
                                    ]
                                )
                            }
                        },
                        data: [],
                        zlevel: 11

                    },
                    // {
                    //     name: '背景',
                    //     type: 'bar',
                    //     barWidth: '50%',
                    //     xAxisIndex: 0,
                    //     yAxisIndex: 1,
                    //     barGap: '-135%',
                    //     data: [100, 100, 100, 100, 100, 100, 100],
                    //     itemStyle: {
                    //         normal: { 
                    //             color: 'rgba(255,255,255,0.1)'
                    //         }
                    //     },
                    //     zlevel: 9
                    // },

                ]
            }

        }
    },

    components: {
        Schart,
        countTo
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
        //发病率放大
        attack_btn() {
            this.type_title = "年发病率" +'(' + this.year_fill +')';
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "PieOther,14,0|Histogram,14,0|Table,14,0"
                })
                .then((response) => {
                    // // 第一个柱状图
                    var modify_data = response[0].PieItemDatas;
                    var morbidity_name = response[0].PieItemDatas.map(function(item) {
                        return item['name'];
                    });
                    var maxData = [];
                    var maxNumArray = [];
                    modify_data.forEach(function(value, index) {
                        maxNumArray.push(value.value);
                    })
                    modify_data.forEach(function(value, index) {
                        var num;
                        maxData.push({
                            name: value.name,
                            value: Math.max.apply(null, maxNumArray)
                        });
                    })
                    this.morbidity_option.grid = {
                        left: '2%',
                        right: '2%',
                        bottom: '3%',
                        containLabel: true
                    };
                    this.morbidity_option.xAxis[0].axisLabel.interval = 0;
                    this.morbidity_option.xAxis[0].axisLabel.rotate = 40;
                    this.morbidity_option.xAxis[0].data = morbidity_name;
                    this.morbidity_option.series[1].data = maxData;
                    this.morbidity_option.series[0].data = modify_data;
                    this.morbidity_option.series[1].label.normal.formatter = function(params) {
                        var stuNum = 0;
                        modify_data.forEach(function(value, index, array) {
                            if (params.name == value.name) {
                                stuNum = value.value;
                            }
                        })
                        return stuNum + '{white|}';
                    };
                    this.details = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.morbidity_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        // 死亡率放大
        die_btn() {
            this.type_title = "年死亡率"+'(' + this.die_uit +')';
            this.table_name = "病种";
            this.table_title = "年死亡率";
            // this.echart_enlarge_option.series[0].label.normal.formatter = "{c}" + "%";
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "Pie,15,0|Histogram,15,0|Table,15,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    var data = [];
                    data = response[0].PieItemDatas;
                    var array = response[1].DataValues;
                    var max = Math.max.apply(null, array) +0.3;
                    var xData = [],
                        yData = [];
                    data.map(function(a, b) {
                        xData.push(a.name);
                        if (a.value === 0) {
                            yData.push(a.value + min);
                        } else {
                            yData.push(a.value);
                        }
                    });
                    this.year_death.yAxis[0].max = max;
                    this.year_death.yAxis[1].max = max;
                    this.year_death.xAxis[0].data = xData;
                    this.year_death.series[0].data = yData;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    // this.tableData_share = response[2].TableItemDatas;
                    // 饼图

                    this.details = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));

                    var data = this.year_death;

                    setTimeout(function() {
                        echart_enlarge.resize();

                        echart_enlarge.setOption(data, true);

                    }, 600)
                }).catch(function(error) {

                });
        },
        // 疾病构成放大
        disease_btn() {
            this.type_title = "疾病构成" + '(' + this.fill_unit + ')';
            this.table_name = "病种";
            this.table_title = "人数";
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "Pie,12,5|Histogram,12,0|Table,12,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    var fill_data = [];
                    var labelData = [];
                    console.log(response[1].DataNames, response[1].DataValues)
                    var data_one = response[1].DataValues;
                    var data_name = response[1].DataNames;
                    for (var i = 0; i < data_one.length; ++i) {
                        fill_data.push({
                            value: data_one[i],
                            name: ''
                        });
                    }
                    for (var i = 0; i < data_name.length; ++i) {
                        labelData.push({
                            value: 1,
                            name: data_name[i] + '\n' + '\n' + data_one[i]
                        });
                    }
                    this.constitute_option.series[0].data = fill_data;
                    this.constitute_option.series[1].data = labelData;
                    // this.echart_enlarge_option.xAxis[0].data = response[1].DataNames;
                    // this.echart_enlarge_option.series[0].data = response[1].DataValues;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    this.details = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.constitute_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        extremely_btn() {
            this.type_title = "死因构成" + '(' + this.death_unit + ')';
            this.table_name = "死因";
            this.table_title = "人数";
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "Pie,13,5|Histogram,13,0|Table,13,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    this.channel_option.series[0].data = response[1].DataValues;
                    this.channel_option.xAxis.data = response[1].DataNames;
                    this.channel_option.grid = {
                        left: '5%',
                        right: '5%',
                        top: '2%',
                        bottom: '5%',
                        show: false
                    };
                    // this.echart_enlarge_option.xAxis[0].data = response[1].DataNames;
                    // this.echart_enlarge_option.series[0].data = response[1].DataValues;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    this.details = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.channel_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        // 各渠道数据获取
        canal_btn() {
            this.type_title = "各渠道人数获取情况";
            this.table_name = "渠道";
            this.table_title = "人数";
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "PieOther,19,4|Histogram,19,0|Table,19,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    this.echart_enlarge_option.xAxis[0].data = response[1].DataNames;
                    this.echart_enlarge_option.series[0].data = response[1].DataValues;
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    this.tableData_share = response[2].TableItemDatas;
                    // 饼图
                    this.details = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.echart_enlarge_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        move_btn() {
            this.type_title = "人口迁移率"+'(' + this.transfer_uit +')';
            this.table_name = "区域";
            this.table_title = "人口迁移率";
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: "PieOther,17,4|Histogram,17,0|Table,17,0"
                })
                .then((response) => {
                    // 第一个柱状图
                    let array = [];
                    array.push(response[1].DataNames[0] + "(" + (response[1].DataValues[0]) + "%" + ")");
                    array.push(response[1].DataNames[1] + "(" + (response[1].DataValues[1]) + "%" + ")");
                    array.push(response[1].DataNames[2] + "(" + (response[1].DataValues[2]) + "%" + ")");
                    array.push(response[1].DataNames[3] + "(" + (response[1].DataValues[3]) + "%" + ")");
                    array.push(response[1].DataNames[4] + "(" + (response[1].DataValues[4]) + "%" + ")");
                    array.reverse();
                    this.shift_option.yAxis[0].data = array;
                    var reverse_one = response[1].DataValues.reverse();
                    let new_array = [];
                    for (let i = 0; i <= reverse_one.length; i++) {
                        new_array.push(reverse_one[i] * 1000)
                    }
                    this.shift_option.series[0].data = new_array;
                    this.shift_option.series[1].data = new_array;
                    this.shift_option.grid = {
                        left: '10%',
                        right: '10',
                        top: '2%',
                        bottom: '10',
                    };
                    let name = response[0].PieItemDatas.map(function(item) {
                        return item["name"]
                    })
                    // 饼图
                    this.details = true;
                    var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
                    var data = this.shift_option;
                    setTimeout(function() {
                        echart_enlarge.resize();
                        echart_enlarge.setOption(data, true);
                    }, 600)
                }).catch(function(error) {

                });
        },
        revert() {
            this.details = false;
            var echart_enlarge = echarts.init(document.getElementById("echart_enlarge"));
            echart_enlarge.clear();
        },
        // 首次拉取数据
        get_data() {
            var constitute_myChart = echarts.init(document.getElementById('constitute'));
            var channel_myChart = echarts.init(document.getElementById('channel'));
            var cause_myChart = echarts.init(document.getElementById('cause'));
            var morbidity_myChart = echarts.init(document.getElementById('morbidity'));
            // var death_myChart = echarts.init(document.getElementById('death'));
            var shift = echarts.init(document.getElementById('shift'));
            this.$refs.example_one.start();
            this.$refs.example_two.start();
            this.$refs.example_three.start();
            // this.$refs.example_four.start();
            // 疾病构成
            // 1.疾病构成2.死因构成3.年发病率4.年死亡率5.年患病率6.各渠道数据获取情况7.当年已随访人数8.总患病率9.总发病率10.总死亡率11.总人口迁徙12.人口迁移率
            this.$get('/emsapi/DataValues/GetExhibitionData', {
                    parameters: 'Pie,12,10|Pie,13,5|Pie,14,4|Table,15,0|Histogram,16,10|Pie,19,5|Value,18,0|Value,28,0|Value,26,0|Value,27,0|Value,29,0|Histogram,17,0'

                })
                .then((response) => {
                    this.all_visit = response[6].Value;
                    this.suffix_one = response[6].DataUnit;
                    this.all_morbidity = response[8].Value;
                    this.suffix_three = response[8].DataUnit;
                    this.all_death = response[9].Value;
                    this.suffix_four = response[9].DataUnit;
                    this.all_migrate = response[10].Value;
                    this.suffix_five = response[10].DataUnit;
                    // 人口迁移率
                    let array = [];
                    array.push(response[11].DataNames[0] + "(" + (response[11].DataValues[0]) + "%" + ")");
                    array.push(response[11].DataNames[1] + "(" + (response[11].DataValues[1]) + "%" + ")");
                    array.push(response[11].DataNames[2] + "(" + (response[11].DataValues[2]) + "%" + ")");
                    array.push(response[11].DataNames[3] + "(" + (response[11].DataValues[3]) + "%" + ")");
                    array.push(response[11].DataNames[4] + "(" + (response[11].DataValues[4]) + "%" + ")");
                    array.reverse();
                    this.shift_option.yAxis[0].data = array;
                    this.transfer_uit = response[11].DataUnit;
                    var reverse_one = response[11].DataValues.reverse();
                    let new_array = [];
                    for (let i = 0; i <= reverse_one.length; i++) {
                        new_array.push(reverse_one[i] * 1000)
                    }
                    this.shift_option.series[0].data = new_array;
                    this.shift_option.series[1].data = new_array;
                    shift.setOption(this.shift_option);
                    // this.tableData = response[11].TableItemDatas;
                    // this.
                    // 疾病构成
                    var name_one = response[0].PieItemDatas.map(function(item) {
                        return item['name'];
                    });
                    var value_one = response[0].PieItemDatas.map(function(item) {
                        return item["value"];
                    })
                    var fill_data = [];
                    var labelData = [];
                    for (var i = 0; i < value_one.length; ++i) {
                        fill_data.push({
                            value: value_one[i],
                            name: i + ':00'
                        });
                    }
                    for (var i = 0; i < name_one.length; ++i) {
                        labelData.push({
                            value: 1,
                            name: name_one[i] + '\n' + '\n' + value_one[i]
                        });
                    }
                    this.constitute_option.series[0].data = fill_data;
                    this.constitute_option.series[1].data = labelData;
                    this.fill_unit = response[0].DataUnit;
                    // this.constitute_option.legend.data = name_one;
                    // this.constitute_option.series[2].data = response[0].PieItemDatas;
                    // this.constitute_option.series[0].name = response[0].DataUnit;
                    constitute_myChart.setOption(this.constitute_option);
                    // 死因构成
                    var name_two = response[1].PieItemDatas.map(function(item) {
                        return item['name'];
                    });
                    var value_two = response[1].PieItemDatas.map(function(item) {
                        return item["value"];
                    })
                    // 各渠道数据获取情况
                    var data = response[5].PieItemDatas;
                    var arrName = getArrayValue(data, "name");
                    var arrValue = getArrayValue(data, "value");
                    var sumValue = eval(arrValue.join('+'));
                    var objData = array2obj(data, "name");
                    var optionData = getData(data)

                    function getArrayValue(array, key) {
                        var key = key || "value";
                        var res = [];
                        if (array) {
                            array.forEach(function(t) {
                                res.push(t[key]);
                            });
                        }
                        return res;
                    }

                    function array2obj(array, key) {
                        var resObj = {};
                        for (var i = 0; i < array.length; i++) {
                            resObj[array[i][key]] = array[i];
                        }
                        return resObj;
                    }

                    function getData(data) {
                        var res = {
                            series: [],
                            yAxis: []
                        };
                        for (let i = 0; i < data.length; i++) {
                            // console.log([70 - i * 15 + '%', 67 - i * 15 + '%']);
                            res.series.push({
                                name: '',
                                type: 'pie',
                                clockWise: false, //顺时加载
                                hoverAnimation: false, //鼠标移入变大
                                radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
                                center: ["50%", "50%"],
                                label: {
                                    show: false
                                },
                                itemStyle: {
                                    label: {
                                        show: false,
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    borderWidth: 5,
                                },
                                data: [{
                                    value: data[i].value,
                                    name: data[i].name
                                }, {
                                    value: sumValue - data[i].value,
                                    name: '',
                                    itemStyle: {
                                        color: "rgba(0,0,0,0)",
                                        borderWidth: 0
                                    },
                                    tooltip: {
                                        show: false
                                    },
                                    hoverAnimation: false
                                }]
                            });
                            res.series.push({
                                name: '',
                                type: 'pie',
                                silent: true,
                                z: 1,
                                clockWise: false, //顺时加载
                                hoverAnimation: false, //鼠标移入变大
                                radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
                                center: ["50%", "50%"],
                                label: {
                                    show: false
                                },
                                itemStyle: {
                                    label: {
                                        show: false,
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    borderWidth: 5,
                                },
                                data: [{
                                    value: 7.5,
                                    itemStyle: {
                                        color: "rgb(3, 31, 62)",
                                        borderWidth: 0
                                    },
                                    tooltip: {
                                        show: false
                                    },
                                    hoverAnimation: false
                                }, {
                                    value: 2.5,
                                    name: '',
                                    itemStyle: {
                                        color: "rgba(0,0,0,0)",
                                        borderWidth: 0
                                    },
                                    tooltip: {
                                        show: false
                                    },
                                    hoverAnimation: false
                                }]
                            });
                            res.yAxis.push((data[i].value));
                        }
                        return res;
                    }
                    this.cause_option.legend.data = arrName
                    this.cause_option.yAxis[0].data = optionData.yAxis;
                    this.cause_option.series = optionData.series
                    cause_myChart.setOption(this.cause_option);
                    // 年发病率
                    var modify_data = response[2].PieItemDatas;
                    this.year_fill=response[2].DataUnit;
                    var morbidity_name = response[2].PieItemDatas.map(function(item) {
                        return item['name'];
                    });
                    var maxData = [];
                    var maxNumArray = [];
                    modify_data.forEach(function(value, index) {
                        maxNumArray.push(value.value);
                    })
                    modify_data.forEach(function(value, index) {
                        var num;
                        maxData.push({
                            name: value.name,
                            value: Math.max.apply(null, maxNumArray)
                        });
                    })
                    this.morbidity_option.xAxis[0].data = morbidity_name;
                    this.morbidity_option.series[1].data = maxData;
                    this.morbidity_option.series[0].data = modify_data;
                    this.morbidity_option.series[1].label.normal.formatter = function(params) {
                        var stuNum = 0;
                        modify_data.forEach(function(value, index, array) {
                            if (params.name == value.name) {
                                stuNum = value.value;
                            }
                        })
                        return stuNum + '{white|}';
                    };
                    // console.logstuNum);
                    morbidity_myChart.setOption(this.morbidity_option);
                    // 年死亡率
                    let xData = ["华北", "华东", "东北", "西北", "西南", "中南", "乌鲁木齐"];
                    let data_max = [13, 13, 13, 16, 17, 15, 15];
                    let maxPlanCourseCnt = Math.max.apply(null, response[3].DataValues);
                    this.tableData = response[3].TableItemDatas;
                    this.die_uit = response[3].DataUnit;
                    // this.death_option.series[0].data = response[3].PieItemDatas;
                    // death_myChart.setOption(this.death_option);
                    // 年患病率
                    // 死因构成
                    this.qudao = response[5].DataUnit;
                    this.death_unit = response[1].DataUnit;
                    this.channel_option.series[0].data = value_two;
                    this.channel_option.xAxis.data = name_two;
                    channel_myChart.setOption(this.channel_option);
                }).catch(function(error) {

                });
            // 放
            // 放大
            setTimeout(function() {
                window.onresize = function() {
                    constitute_myChart.resize();
                    channel_myChart.resize();
                    cause_myChart.resize();
                    morbidity_myChart.resize();
                    death_myChart.resize();
                    bill_myChart.resize();
                    shift.resize();
                }
            }, 200)
        },
    },
    mounted() {
        this.get_data()
        this.timer = setInterval(() => {
            this.get_data()
        }, 3600000)
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
    /*border-image: url(../../assets/wrapper-bg.png) 35 fill;*/
    text-align: center;
    position: relative;
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
    font-family: "楷体";
    overflow: hidden;
    margin-bottom: 10px;
}

.table {
    width: 100%;
    height: 100%;
    margin-top: -20px;
    /*  display: flex;
        justify-content: space-between;*/
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

.cricle {
    width: 33%;
    height: 100%;
}

.chart_top {
    width: 33%;
    height: 60%;
    /*background: pink;*/
    box-sizing: border-box;
    /* border: 15px solid rgba(255, 255, 255, 0);
        border-image: url(../../assets/border.png) 40 fill;*/
}

.chart_title {
    width: 100%;
    height: 10%;
    background: red;
}

.chart_bottom {
    width: 33%;
    height: 40%;
    box-sizing: border-box;
    /* border: 15px solid rgba(255, 255, 255, 0);
        border-image: url(../../assets/border.png) 40 fill;*/
}

.chart {
    width: 50%;
    height: 40%;
    box-sizing: border-box;
    /* border: 15px solid rgba(255, 255, 255, 0);
        border-image: url(../../assets/border.png) 40 fill;*/
}

.data {
    width: 33%;
    height: 100%;
    text-align: left;
    color: #49dff0;
}

#total {
    width: 100%;
    height: 90%;
}

.left_title {
    width: 25%;
}

.dalog {
    background: url(../../assets/back.png);
    background-position: center;
    box-sizing: border-box;
    /*border: 15px solid rgba(255, 255, 255, 0);*/
    background-size: 100% 100%;
    margin-top:0.5%;
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
</style>
<style scoped>
/deep/.el-dialog {
    width: 100%;
    height: 100%;
    background: url(../../assets/back.png);
    /* border: 15px solid rgba(255, 255, 255, 0);
    border-image: url(../../assets/border.png) 40 fill;*/
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
    /*width: 98% !important;*/
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
    /*padding-right: 15px !important;*/
}

/deep/.el-progress__text i {
    display: none;
}
</style>