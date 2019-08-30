<template>
    <div class="containe">
        <div class="title">运维中心数据展示</div>
        <div class="table">
            <div class="swiper-container gallery-top">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style="position:relative;">
                        <template>
                            <div style="position: absolute;right: 0%;  top: 0%;  z-index: 9999;  width: 40%;height:21%;  text-align: left;" @click="notice">
                                <div class="marquee" style="height:75%">
                                    <div style="position: absolute;left:2.5%;top:-5%">
                                        <!--  <el-badge :value="yuyue_length" style="margin-top: 10px;margin-right: 45px;">
                            <i class="el-icon-lxgonggao" style="font-size: 1.3vw;color:#E99B04"></i>
                        </el-badge> -->
                                    </div>
                                    <div class="marquee_title" style="">
                                        <p style="font-size: 1vw;color:#fba600;padding:0px;">实验室预约情况:</p>
                                    </div>
                                    <div class="marquee_box" style="color:#fba600;width:100%;margin-top:1%;">
                                        <ul class="marquee_list" :class="{marquee_top:animate}">
                                            <li v-for="(item,index) in marqueeList" style="font-size:0.9vw;margin-bottom:0px;letter-spacing: 0px;"><i class="el-icon-lxgonggao" style="font-size:0.8vw">&nbsp;&nbsp;</i><i v-html="item" style="font-style: normal;"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template>
                            <div style="position: absolute;  right: 0%; bottom:-1%; z-index: 9999;  width: 40%;height:19%; text-align: left;" @click="policeman">
                                <div class="marquee">
                                    <div style="position: absolute;left:1%;top:-9%">
                                        <el-badge :value="marquee_value" style="margin-top: 10px;margin-right: 40px;">
                                            <i class="el-icon-lxtixing" style="font-size: 2vw;color:#f56c66"></i>
                                        </el-badge>
                                    </div>
                                    <div class="marquee_title" style=" padding: 0 55px;">
                                        <p style="font-size: 1vw;color:#F56C6C">系统报警:</p>
                                    </div>
                                    <div class="marquee_box" style="color:#F56C6C;font-size:1vw;width:100%;margin-top:1%;">
                                        <ul class="marquee_list" :class="{marquee_top:animate_two}" style="color:#F56C6C">
                                            <li v-for="(item,index) in callArr" style="font-size:0.9vw;margin-bottom:0px;letter-spacing: 0px;"><i class="el-icon-lxtixing"></i><i v-html="item" style="font-style: normal;"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <p style="color:#07a8f9;margin-bottom:5px;font-size: 1.5vw;font-weight: 700;position: absolute;text-align:center;left:0px;right:0px;font-family:'楷体';top:1px;">精准医学研究与服务中心</p>
                        <div class="all_data" style="width:40%;height:22%;position: absolute;left:0%;top:2%；z-index:9999;display: flex;justify-content: space-around;flex-wrap: wrap;box-sizing: border-box;cursor:pointer">
                            <div style="width:100%;height:25%;border-bottom:1px solid #185BFF;display: flex;justify-content: space-around;">
                                <div class="table_data table_title" style='border-left:1px solid #185bff;;width:30%;font-weight: bold;'>实验室</div>
                                <div class="table_data table_title">正在使用</div>
                                <div class="table_data table_title suju" @click="sys_status(sys_uses,'正在使用的实验室','正在使用')">{{SysztSummary.use}}</div>
                                <div class="table_data table_title">空闲</div>
                                <div class="table_data table_title suju" @click="sys_status(sys_frees,'空闲实验室','空闲')">{{SysztSummary.free}}</div>
                                <div class="table_data table_title">维修</div>
                                <div class="table_data table_title suju" @click="sys_status(sys_repairs,'正在维修的实验室','维修')">{{SysztSummary.repair}}</div>
                                <div class="table_data table_title">离线</div>
                                <div class="table_data table_title suju" @click="sys_status(sys_offlines,'离线的实验室','离线')">{{SysztSummary.offline}}</div>
                            </div>
                            <div style="width:100%;height:25%;border-bottom:1px solid #185BFF;display: flex;justify-content: space-around;">
                                <div class="table_data" style='border-left:1px solid #185bff;width:30%;font-weight: bold;'>通风系统</div>
                                <div class="table_data">良好</div>
                                <div class="table_data suju" @click="sys_status(systfxt_goods,'通风系统良好','良好')">{{SystfxtSummary.good}}</div>
                                <div class="table_data">关闭</div>
                                <div class="table_data suju" @click="sys_status(systfxt_closes,'通风系统关闭','关闭')">{{SystfxtSummary.close}}</div>
                                <div class="table_data">故障</div>
                                <div class="table_data suju" @click="sys_status(systfxt_faults,'通风系统故障','故障')">{{SystfxtSummary.fault}}</div>
                                <div class="table_data table_title">离线</div>
                                <div class="table_data table_title suju" @click="sys_status(systfxt_offlines,'通风系统离线','离线')">{{SystfxtSummary.offline}}</div>
                            </div>
                            <div style="width:100%;height:25%;border-bottom:1px solid #185BFF;display: flex;justify-content: space-around;">
                                <div class="table_data" style='border-left:1px solid #185bff;width:30%;font-weight: bold;'>净化空调系统</div>
                                <div class="table_data">良好</div>
                                <div class="table_data suju" @click="sys_status(sysjhxt_goods,'净化系统良好','良好')">{{SysjhxtSummary.good}}</div>
                                <div class="table_data">关闭</div>
                                <div class="table_data suju" @click="sys_status(sysjhxt_closes,'净化系统关闭','关闭')">{{SysjhxtSummary.close}}</div>
                                <div class="table_data">故障</div>
                                <div class="table_data suju" @click="sys_status(sysjhxt_faults,'净化系统故障','故障')">{{SysjhxtSummary.fault}}</div>
                                <div class="table_data table_title">离线</div>
                                <div class="table_data table_title suju" @click="sys_status(sysjhxt_offlines,'净化系统离线','离线')">{{SysjhxtSummary.offline}}</div>
                            </div>
                            <div style="width:100%;height:25%;border-bottom:1px solid #185BFF;display: flex;justify-content: space-around;">
                                <div class="table_data" style='border-left:1px solid #185bff;width:30%;font-weight: bold;'>污水处理系统</div>
                                <div class="table_data">良好</div>
                                <div class="table_data suju" @click="sys_status(syswscl_goods,'污水系统良好','良好')">{{SyswsclSummary.good}}</div>
                                <div class="table_data">关闭</div>
                                <div class="table_data suju" @click="sys_status(syswscl_closes,'污水系统关闭','关闭')">{{SyswsclSummary.close}}</div>
                                <div class="table_data">故障</div>
                                <div class="table_data suju" @click="sys_status(syswscl_faults,'污水系统故障','故障')">{{SyswsclSummary.fault}}</div>
                                <div class="table_data table_title">离线</div>
                                <div class="table_data table_title suju" @click="sys_status(syswscl_offlines,'污水系统离线','离线')">{{SyswsclSummary.offline}}</div>
                            </div>
                        </div>
                        <div>
                            <p class="common_style_one" :style="Syszt.syszt_07" @click="explict(Syswd.sys_wd_07,Syssd.sys_sd_07,laboratory_names.laboratory_07,Systfxt.sys_tfxt_07,Sysjhxt.sys_jhxt_07,Syswscl.sys_wscl_07,Systfxt2.sys_tfxt_07_good,Systfxt2.sys_tfxt_07_fault,Sysjhxt2.sys_jhxt_07_fault,Syswscl2.sys_wscl_07_fault,Syszt.syszt_07)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_07_good,'blank':Systfxt2.sys_tfxt_07_fault}" :style="Systfxt.sys_tfxt_07"></i>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_07}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_07}}%</span>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_07}}</span>
                                <i :class="{'el-icon-lxkongtiao1':true,'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_07_fault}" :style="Sysjhxt.sys_jhxt_07"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true, 'blank':Syswscl2.sys_wscl_07_fault}" :style="Syswscl.sys_wscl_07"></i>
                            </p>
                            <p class="common_style_Twenty-two" :style="Syszt.syszt_08" @click="explict(Syswd.sys_wd_08,Syssd.sys_sd_08,laboratory_names.laboratory_08,Systfxt.sys_tfxt_08,Sysjhxt.sys_jhxt_08,Syswscl.sys_wscl_08,Systfxt2.sys_tfxt_08_good,Systfxt2.sys_tfxt_08_fault,Sysjhxt2.sys_jhxt_08_fault,Syswscl2.sys_wscl_08_fault,Syszt.syszt_08)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_08_good,'blank':Systfxt2.sys_tfxt_08_fault}" :style="Systfxt.sys_tfxt_08"></i>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_08}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_08}}%</span>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_08}}</span>
                                <i :class="{'el-icon-lxkongtiao1':true,'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_08_fault}" :style="Sysjhxt.sys_jhxt_08"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true, 'blank':Syswscl2.sys_wscl_08_fault}" :style="Syswscl.sys_wscl_08"></i>
                            </p>
                            <p class="common_style_Twenty-three" :style="Syszt.syszt_09" @click="explict(Syswd.sys_wd_09,Syssd.sys_sd_09,laboratory_names.laboratory_09,Systfxt.sys_tfxt_09,Sysjhxt.sys_jhxt_09,Syswscl.sys_wscl_09,Systfxt2.sys_tfxt_09_good,Systfxt2.sys_tfxt_09_fault,Sysjhxt2.sys_jhxt_09_fault,Syswscl2.sys_wscl_09_fault,Syszt.syszt_09)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_09_good,'blank':Systfxt2.sys_tfxt_09_fault}" :style="Systfxt.sys_tfxt_09"></i>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_09}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_09}}%</span>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_09}}</span>
                                <i :class="{'el-icon-lxkongtiao1':true,'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_09_fault}" :style="Sysjhxt.sys_jhxt_09"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true, 'blank':Syswscl2.sys_wscl_09_fault}" :style="Syswscl.sys_wscl_09"></i>
                            </p>
                            <p :style="Syszt.syszt_10" class="common_style_two" @click="explict(Syswd.sys_wd_10,Syssd.sys_sd_10,laboratory_names.laboratory_10,Systfxt.sys_tfxt_10,Sysjhxt.sys_jhxt_10,Syswscl.sys_wscl_10,Systfxt2.sys_tfxt_10_good,Systfxt2.sys_tfxt_10_fault,Sysjhxt2.sys_jhxt_10_fault,Syswscl2.sys_wscl_10_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_10_good,'blank':Systfxt2.sys_tfxt_10_fault}" :style="Systfxt.sys_tfxt_10"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_10}}</span>
                                <span style="position:absolute;left:0%;top:20%;color:#00ff00;font-size:0.9vw">{{Syswd.sys_wd_10}}℃</span>
                                <span style="position:absolute;right:0%;top:20%;color:#00ff00;font-size:0.9vw">{{Syssd.sys_sd_10}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_10_fault}" :style="Sysjhxt.sys_jhxt_10"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true,'wushui_style':true,'blank':Syswscl2.sys_wscl_10_fault}" :style="Syswscl.sys_wscl_10"></i></p>
                            <p class="common_style_Twenty-four" :style="Syszt.syszt_11" @click="explict(Syswd.sys_wd_11,Syssd.sys_sd_11,laboratory_names.laboratory_11,Systfxt.sys_tfxt_11,Sysjhxt.sys_jhxt_11,Syswscl.sys_wscl_11,Systfxt2.sys_tfxt_11_good,Systfxt2.sys_tfxt_11_fault,Sysjhxt2.sys_jhxt_11_fault,Syswscl2.sys_wscl_11_fault,Syszt.syszt_11)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_11_good,'blank':Systfxt2.sys_tfxt_11_fault}" :style="Systfxt.sys_tfxt_11"></i>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_11}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_11}}%</span>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_11}}</span>
                                <i :class="{'el-icon-lxkongtiao1':true,'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_11_fault}" :style="Sysjhxt.sys_jhxt_11"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true, 'blank':Syswscl2.sys_wscl_11_fault}" :style="Syswscl.sys_wscl_11"></i>
                            </p>
                            <p :style="Syszt.syszt_11" class="common_style_three" @click="explict(Syswd.sys_wd_12,Syssd.sys_sd_12,laboratory_names.laboratory_12,Systfxt.sys_tfxt_12,Sysjhxt.sys_jhxt_12,Syswscl.sys_wscl_12,Systfxt2.sys_tfxt_12_good,Systfxt2.sys_tfxt_12_fault,Sysjhxt2.sys_jhxt_12_fault,Syswscl2.sys_wscl_12_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_12_good,'blank':Systfxt2.sys_tfxt_12_fault}" :style="Systfxt.sys_tfxt_12"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_12}}</span>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:1vw">{{Syswd.sys_wd_12}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:1vw">{{Syssd.sys_sd_12}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_12_fault}" :style="Sysjhxt.sys_jhxt_12"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true,'blank':Syswscl2.sys_wscl_12_fault}" :style="Syswscl.sys_wscl_12"></i>
                            </p>
                            <p class="common_style_Twenty-five" :style="Syszt.syszt_13" @click="explict(Syswd.sys_wd_13,Syssd.sys_sd_13,laboratory_names.laboratory_13,Systfxt.sys_tfxt_13,Sysjhxt.sys_jhxt_13,Syswscl.sys_wscl_13,Systfxt2.sys_tfxt_13_good,Systfxt2.sys_tfxt_13_fault,Sysjhxt2.sys_jhxt_13_fault,Syswscl2.sys_wscl_13_fault,Syszt.syszt_13)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_13_good,'blank':Systfxt2.sys_tfxt_13_fault}" :style="Systfxt.sys_tfxt_13"></i>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_13}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_13}}%</span>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_13}}</span>
                                <i :class="{'el-icon-lxkongtiao1':true,'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_13_fault}" :style="Sysjhxt.sys_jhxt_13"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true, 'blank':Syswscl2.sys_wscl_13_fault}" :style="Syswscl.sys_wscl_13"></i>
                            </p>
                            <p :style="Syszt.syszt_04" class="common_style_four" @click="explict(Syswd.sys_wd_04,Syssd.sys_sd_04,laboratory_names.laboratory_04,Systfxt.sys_tfxt_04,Sysjhxt.sys_jhxt_04,Syswscl.sys_wscl_04,Systfxt2.sys_tfxt_04_good,Systfxt2.sys_tfxt_04_fault,Sysjhxt2.sys_jhxt_04_fault,Syswscl2.sys_wscl_04_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_04_good,'blank' :Systfxt2.sys_tfxt_04_fault}" :style="Systfxt.sys_tfxt_04"></i>
                                <span style="position:absolute;left:10%;top:20%;color:#00ff00;font-size:1vw">{{Syswd.sys_wd_04}}℃</span>
                                <span style="position:absolute;right:10%;top:20%;color:#00ff00;font-size:1vw">{{Syssd.sys_sd_04}}%</span>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_04}}</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_04_fault}" style=""></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true,'blank':Syswscl2.sys_wscl_04_fault}" :style="Syswscl.sys_wscl_04"></i>
                            </p>
                            <p :style="Syszt.syszt_05" class="common_style_Twenty-one" @click="explict(Syswd.sys_wd_05,Syssd.sys_sd_05,laboratory_names.laboratory_05,Systfxt.sys_tfxt_05,Sysjhxt.sys_jhxt_05,Syswscl.sys_wscl_05,Systfxt2.sys_tfxt_05_good,Systfxt2.sys_tfxt_05_fault,Sysjhxt2.sys_jhxt_05_fault,Syswscl2.sys_wscl_05_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_05_good,'blank':Systfxt2.sys_tfxt_05_fault}" :style="Systfxt.sys_tfxt_05"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_05}}</span>
                                <span style="position:absolute;left:1%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_05}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_05}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_05_fault}" :style="Sysjhxt.sys_jhxt_05"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true,'blank':Syswscl2.sys_wscl_05_fault}" :style="Syswscl.sys_wscl_05"></i>
                            </p>
                            <p :style="Syszt.syszt_06" class="common_style_six" @click="explict(Syswd.sys_wd_06,Syssd.sys_sd_06,laboratory_names.laboratory_06,Systfxt.sys_tfxt_06,Sysjhxt.sys_jhxt_06,Syswscl.sys_wscl_06,Systfxt2.sys_tfxt_06_good,Systfxt2.sys_tfxt_06_fault,Sysjhxt2.sys_jhxt_06_fault,Syswscl2.sys_wscl_06_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_06_good,'blank':Systfxt2.sys_tfxt_06_fault}" :style="Systfxt.sys_tfxt_06"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_06}}</span>
                                <span style="position:absolute;left:1%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_06}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_06}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_06_fault}" :style="Sysjhxt.sys_jhxt_06"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true,'blank':Syswscl2.sys_wscl_06_fault}" :style="Syswscl.sys_wscl_06"></i>
                            </p>
                            <p :style="Syszt.syszt_01" class="common_style_seven" @click="explict(Syswd.sys_wd_01,Syssd.sys_sd_01,laboratory_names.laboratory_01,Systfxt.sys_tfxt_01,Sysjhxt.sys_jhxt_01,Syswscl.sys_wscl_01,Systfxt2.sys_tfxt_01_good,Systfxt2.sys_tfxt_01_fault,Sysjhxt2.sys_jhxt_01_fault,Syswscl2.sys_wscl_01_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_01_good,'blank':Systfxt2.sys_tfxt_01_fault}" :style="Systfxt.sys_tfxt_01"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_01}}</span>
                                <span style="position:absolute;left:10%;top:20%;color:#00ff00;font-size:0.7vw">{{Syswd.sys_wd_01}}℃</span>
                                <span style="position:absolute;right:10%;top:20%;color:#00ff00;font-size:0.7vw">{{Syssd.sys_sd_01}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_01_fault}" :style="Sysjhxt.sys_jhxt_01"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true,'blank':Syswscl2.sys_wscl_01_fault}" :style="Syswscl.sys_wscl_01"></i>
                            </p>
                            <p :style="Syszt.syszt_02" class="common_style_eighteen" @click="explict(Syswd.sys_wd_02,Syssd.sys_sd_02,laboratory_names.laboratory_02,Systfxt.sys_tfxt_02,Sysjhxt.sys_jhxt_02,Syswscl.sys_wscl_02,Systfxt2.sys_tfxt_02_good,Systfxt2.sys_tfxt_02_fault,Sysjhxt2.sys_jhxt_02_fault,Syswscl2.sys_wscl_02_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_02_good,'blank':Systfxt2.sys_tfxt_02_fault}" :style="Systfxt.sys_tfxt_02"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.9vw'>{{laboratory_names.laboratory_02}}</span>
                                <span style="position:absolute;left:10%;top:20%;color:#00ff00;font-size:0.7vw">{{Syswd.sys_wd_02}}℃</span>
                                <span style="position:absolute;right:10%;top:20%;color:#00ff00;font-size:0.7vw">{{Syssd.sys_sd_02}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_02_fault}" :style="Sysjhxt.sys_jhxt_02"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true,'blank':Syswscl2.sys_wscl_02_fault}" :style="Syswscl.sys_wscl_01"></i>
                            </p>
                            <p :style="Syszt.syszt_03" class="common_style_nineteen" @click="explict(Syswd.sys_wd_03,Syssd.sys_sd_03,laboratory_names.laboratory_03,Systfxt.sys_tfxt_03,Sysjhxt.sys_jhxt_03,Syswscl.sys_wscl_03,Systfxt2.sys_tfxt_03_good,Systfxt2.sys_tfxt_03_fault,Sysjhxt2.sys_jhxt_03_fault,Syswscl2.sys_wscl_03_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_one':true, 'run':Systfxt2.sys_tfxt_03_good,'blank':Systfxt2.sys_tfxt_03_fault}" :style="Systfxt.sys_tfxt_03"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size:0.9
                                vw;'>{{laboratory_names.laboratory_03}}</span>
                                <span style="position:absolute;left:10%;top:20%;color:#00ff00;font-size:0.7vw">{{Syswd.sys_wd_03}}℃</span>
                                <span style="position:absolute;right:10%;top:20%;color:#00ff00;font-size:0.7vw">{{Syssd.sys_sd_03}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style':true,'blank':Sysjhxt2.sys_jhxt_03_fault}" :style="Sysjhxt.sys_jhxt_03"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style':true,'blank':Syswscl2.sys_wscl_03_fault}" :style="Syswscl.sys_wscl_03"></i>
                            </p>
                            <p :style="Syszt.syszt_19" class="common_style_eight" @click="explict(Syswd.sys_wd_19,Syssd.sys_sd_19,laboratory_names.laboratory_19,Systfxt.sys_tfxt_19,Sysjhxt.sys_jhxt_19,Syswscl.sys_wscl_19,Systfxt2.sys_tfxt_19_good,Systfxt2.sys_tfxt_19_fault,Sysjhxt2.sys_jhxt_19_fault,Syswscl2.sys_wscl_19_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_19_good,'blank':Systfxt2.sys_tfxt_19_fault}" :style="Systfxt.sys_tfxt_19"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size:0.45vw;'>{{laboratory_names.laboratory_19}}</span>
                                <span style="position:absolute;left:10%;top:30%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_19}}℃</span>
                                <span style="position:absolute;right:10%;top:30%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_19}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_two':true,'blank':Sysjhxt2.sys_jhxt_19_fault}" :style="Sysjhxt.sys_jhxt_19"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_19_fault}" :style="Syswscl.sys_wscl_19"></i>
                            </p>
                            <p :style="Syszt.syszt_20" class="common_style_nine" @click="explict(Syswd.sys_wd_20,Syssd.sys_sd_20,laboratory_names.laboratory_20,Systfxt.sys_tfxt_20,Sysjhxt.sys_jhxt_20,Syswscl.sys_wscl_20,Systfxt2.sys_tfxt_20_good,Systfxt2.sys_tfxt_20_fault,Sysjhxt2.sys_jhxt_20_fault,Syswscl2.sys_wscl_20_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_20_good,'blank':Systfxt2.sys_tfxt_20_fault}" :style="Systfxt.sys_tfxt_20"></i>
                                <span style='position: absolute;left:0%;right:0%;display: inline-block;color:#77F7F9;font-size:0.45vw'>{{laboratory_names.laboratory_20}}</span>
                                <span style="position:absolute;left:5%;top:30%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_20}}℃</span>
                                <span style="position:absolute;right:5%;top:30%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_20}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_three':true,'blank':Sysjhxt2.sys_jhxt_20_fault}" :style="Sysjhxt.sys_jhxt_20"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_20_fault}" :style="Syswscl.sys_wscl_20"></i>
                            </p>
                            <p :style="Syszt.syszt_21" class="common_style_Twenty-seven" @click="explict(Syswd.sys_wd_21,Syssd.sys_sd_21,laboratory_names.laboratory_21,Systfxt.sys_tfxt_21,Sysjhxt.sys_jhxt_21,Syswscl.sys_wscl_21,Systfxt2.sys_tfxt_21_good,Systfxt2.sys_tfxt_21_fault,Sysjhxt2.sys_jhxt_21_fault,Syswscl2.sys_wscl_21_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_21_good,'blank':Systfxt2.sys_tfxt_21_fault}" :style="Systfxt.sys_tfxt_21"></i>
                                <span style='position: absolute;left:0%;right:0%;display: inline-block;color:#77F7F9;font-size:0.6vw'>{{laboratory_names.laboratory_21}}</span>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_21}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_21}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_three':true,'blank':Sysjhxt2.sys_jhxt_21_fault}" :style="Sysjhxt.sys_jhxt_21"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_21_fault}" :style="Syswscl.sys_wscl_21"></i>
                            </p>
                            <p :style="Syszt.syszt_22" class="common_style_ten" @click="explict(Syswd.sys_wd_22,Syssd.sys_sd_22,laboratory_names.laboratory_22,Systfxt.sys_tfxt_22,Sysjhxt.sys_jhxt_22,Syswscl.sys_wscl_22,Systfxt2.sys_tfxt_22_good,Systfxt2.sys_tfxt_22_fault,Sysjhxt2.sys_jhxt_22_fault,Syswscl2.sys_wscl_22_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_22_good,'blank':Systfxt2.sys_tfxt_22_fault}" :style="Systfxt.sys_tfxt_22"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.6vw'>{{laboratory_names.laboratory_22}}</span>
                                <span style="position:absolute;left:10%;top:30%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_22}}℃</span>
                                <span style="position:absolute;right:10%;top:30%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_22}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_two':true,'blank':Sysjhxt2.sys_jhxt_22_fault}" :style="Sysjhxt.sys_jhxt_22"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_22_fault}" :style="Syswscl.sys_wscl_22"></i>
                            </p>
                            <p :style="Syszt.syszt_23" class="common_style_Twenty-eight" @click="explict(Syswd.sys_wd_23,Syssd.sys_sd_23,laboratory_names.laboratory_23,Systfxt.sys_tfxt_23,Sysjhxt.sys_jhxt_23,Syswscl.sys_wscl_23,Systfxt2.sys_tfxt_23_good,Systfxt2.sys_tfxt_23_fault,Sysjhxt2.sys_jhxt_23_fault,Syswscl2.sys_wscl_07_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_23_good,'blank':Systfxt2.sys_tfxt_23_fault}" :style="Systfxt.sys_tfxt_23"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.5vw'>{{laboratory_names.laboratory_23}}</span>
                                <span style="position:absolute;left:5%;top:5%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_23}}℃</span>
                                <span style="position:absolute;right:5%;top:5%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_23}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_two':true,'blank':Sysjhxt2.sys_jhxt_23_fault}" :style="Sysjhxt.sys_jhxt_23"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_23_fault}" :style="Syswscl.sys_wscl_23"></i>
                            </p>
                            <p :style="Syszt.syszt_24" class="common_style_eleven" @click="explict(Syswd.sys_wd_24,Syssd.sys_sd_24,laboratory_names.laboratory_24,Systfxt.sys_tfxt_24,Sysjhxt.sys_jhxt_24,Syswscl.sys_wscl_24,Systfxt2.sys_tfxt_24_good,Systfxt2.sys_tfxt_24_fault,Sysjhxt2.sys_jhxt_24_fault,Syswscl2.sys_wscl_07_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_24_good,'blank':Systfxt2.sys_tfxt_24_fault}" :style="Systfxt.sys_tfxt_24"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.5vw'>{{laboratory_names.laboratory_24}}</span>
                                <span style="position:absolute;left:5%;top:0%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_24}}℃</span>
                                <span style="position:absolute;right:5%;top:0%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_24}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_two':true,'blank':Sysjhxt2.sys_jhxt_24_fault}" :style="Sysjhxt.sys_jhxt_24"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_24_fault}" :style="Syswscl.sys_wscl_24"></i>
                            </p>
                            <p :style="Syszt.syszt_25" class="common_style_twelve" @click="explict(Syswd.sys_wd_25,Syssd.sys_sd_25,laboratory_names.laboratory_25,Systfxt.sys_tfxt_25,Sysjhxt.sys_jhxt_25,Syswscl.sys_wscl_25,Systfxt2.sys_tfxt_25_good,Systfxt2.sys_tfxt_25_fault,Sysjhxt2.sys_jhxt_25_fault,Syswscl2.sys_wscl_25_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_25_good,'blank':Systfxt2.sys_tfxt_25_fault}" :style="Systfxt.sys_tfxt_25"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.5vw'>{{laboratory_names.laboratory_25}}</span>
                                <span style="position:absolute;left:5%;top:0%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_25}}℃</span>
                                <span style="position:absolute;right:5%;top:0%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_25}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_two':true,'blank':Sysjhxt2.sys_jhxt_25_fault}" :style="Sysjhxt.sys_jhxt_25"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_25_fault}" :style="Syswscl.sys_wscl_25"></i>
                            </p>
                            <p :style="Syszt.syszt_26" class="common_style_thirteen" @click="explict(Syswd.sys_wd_26,Syssd.sys_sd_26,laboratory_names.laboratory_26,Systfxt.sys_tfxt_26,Sysjhxt.sys_jhxt_26,Syswscl.sys_wscl_26,Systfxt2.sys_tfxt_26_good,Systfxt2.sys_tfxt_26_fault,Sysjhxt2.sys_jhxt_26_fault,Syswscl2.sys_wscl_26_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_26_good,'blank':Systfxt2.sys_tfxt_26_fault}" :style="Systfxt.sys_tfxt_26"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size: 0.5vw'>{{laboratory_names.laboratory_26}}</span>
                                <span style="position:absolute;left:5%;top:10%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_26}}℃</span>
                                <span style="position:absolute;right:5%;top:10%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_26}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_two':true,'blank':Sysjhxt2.sys_jhxt_26_fault}" :style="Sysjhxt.sys_jhxt_26"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_26_fault}" :style="Syswscl.sys_wscl_26"></i>
                            </p>
                            <p :style="Syszt.syszt_14" class="common_style_fourteen" @click="explict(Syswd.sys_wd_14,Syssd.sys_sd_14,laboratory_names.laboratory_14,Systfxt.sys_tfxt_14,Sysjhxt.sys_jhxt_14,Syswscl.sys_wscl_14,Systfxt2.sys_tfxt_14_good,Systfxt2.sys_tfxt_14_fault,Sysjhxt2.sys_jhxt_14_fault,Syswscl2.sys_wscl_14_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_three':true, 'run':Systfxt2.sys_tfxt_14_good,'blank':Systfxt2.sys_tfxt_14_fault}" :style="Systfxt.sys_tfxt_14"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size:0.7vw'>{{laboratory_names.laboratory_14}}</span>
                                <span style="position:absolute;left:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syswd.sys_wd_14}}℃</span>
                                <span style="position:absolute;right:5%;top:20%;color:#00ff00;font-size:0.8vw">{{Syssd.sys_sd_14}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_two':true,'blank':Sysjhxt2.sys_jhxt_14_fault}" :style="Sysjhxt.sys_jhxt_14"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_two':true,'blank':Syswscl2.sys_wscl_14_fault}" :style="Syswscl.sys_wscl_14"></i>
                            </p>
                            <p :style="Syszt.syszt_15" class="common_style_fifteen" @click="explict(Syswd.sys_wd_15,Syssd.sys_sd_15,laboratory_names.laboratory_15,Systfxt.sys_tfxt_15,Sysjhxt.sys_jhxt_15,Syswscl.sys_wscl_15,Systfxt2.sys_tfxt_15_good,Systfxt2.sys_tfxt_15_fault,Sysjhxt2.sys_jhxt_15_fault,Syswscl2.sys_wscl_15_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_four':true, 'run':Systfxt2.sys_tfxt_15_good,'blank':Systfxt2.sys_tfxt_15_fault}" :style="Systfxt.sys_tfxt_15"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size:0.7vw'>{{laboratory_names.laboratory_15}}</span>
                                <span style="position:absolute;left:7%;top:20%;color:#00ff00;font-size:0.7vw">{{Syswd.sys_wd_15}}℃</span>
                                <span style="position:absolute;right:7%;top:20%;color:#00ff00;font-size:0.7vw">{{Syssd.sys_sd_15}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_three':true,'blank':Sysjhxt2.sys_jhxt_15_fault}" :style="Sysjhxt.sys_jhxt_15"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_three':true,'blank':Syswscl2.sys_wscl_15_fault}" :style="Syswscl.sys_wscl_15"></i>
                            </p>
                            <p :style="Syszt.syszt_16" class="common_style_sixteen" @click="explict(Syswd.sys_wd_16,Syssd.sys_sd_16,laboratory_names.laboratory_16,Systfxt.sys_tfxt_16,Sysjhxt.sys_jhxt_16,Syswscl.sys_wscl_16,Systfxt2.sys_tfxt_16_good,Systfxt2.sys_tfxt_16_fault,Sysjhxt2.sys_jhxt_16_fault,Syswscl2.sys_wscl_16_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_four':true, 'run':Systfxt2.sys_tfxt_16_good,'blank':Systfxt2.sys_tfxt_16_fault}" :style="Systfxt.sys_tfxt_16"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size:0.7vw'>{{laboratory_names.laboratory_16}}</span>
                                <span style="position:absolute;left:7%;top:20%;color:#00ff00;font-size:0.7vw">{{Syswd.sys_wd_16}}℃</span>
                                <span style="position:absolute;right:7%;top:20%;color:#00ff00;font-size:0.7vw">{{Syssd.sys_sd_16}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_three':true,'blank':Sysjhxt2.sys_jhxt_16_fault}" :style="Sysjhxt.sys_jhxt_16"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_three':true,'blank':Syswscl2.sys_wscl_16_fault}" :style="Syswscl.sys_wscl_16"></i>
                            </p>
                            <p :style="Syszt.syszt_17" class="common_style_seventeen" @click="explict(Syswd.sys_wd_17,Syssd.sys_sd_17,laboratory_names.laboratory_17,Systfxt.sys_tfxt_17,Sysjhxt.sys_jhxt_17,Syswscl.sys_wscl_17,Systfxt2.sys_tfxt_17_good,Systfxt2.sys_tfxt_17_fault,Sysjhxt2.sys_jhxt_17_fault,Syswscl2.sys_wscl_17_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_four':true, 'run':Systfxt2.sys_tfxt_17_good,'blank':Systfxt2.sys_tfxt_17_fault}" :style="Systfxt.sys_tfxt_17"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size:0.7vw'>{{laboratory_names.laboratory_17}}</span>
                                <span style="position:absolute;left:7%;top:20%;color:#00FF00;font-size:0.7vw">{{Syswd.sys_wd_17}}℃</span>
                                <span style="position:absolute;right:7%;top:20%;color:#00FF00;font-size:0.7vw">{{Syssd.sys_sd_17}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_three':true,'blank':Sysjhxt2.sys_jhxt_17_fault}" :style="Sysjhxt.sys_jhxt_17"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_three':true,'blank':Syswscl2.sys_wscl_17_fault}" :style="Syswscl.sys_wscl_17"></i>
                            </p>
                            <p :style="Syszt.syszt_18" class="common_style_Twenty-six" @click="explict(Syswd.sys_wd_18,Syssd.sys_sd_18,laboratory_names.laboratory_18,Systfxt.sys_tfxt_18,Sysjhxt.sys_jhxt_18,Syswscl.sys_wscl_18,Systfxt2.sys_tfxt_18_good,Systfxt2.sys_tfxt_18_fault,Sysjhxt2.sys_jhxt_18_fault,Syswscl2.sys_wscl_18_fault)">
                                <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true, 'tfxt_style_four':true, 'run':Systfxt2.sys_tfxt_18_good,'blank':Systfxt2.sys_tfxt_18_fault}" :style="Systfxt.sys_tfxt_18"></i>
                                <span style='position: absolute;left:0;right:0;display: inline-block;color:#77F7F9;font-size:0.7vw'>{{laboratory_names.laboratory_18}}</span>
                                <span style="position:absolute;left:7%;top:25%;color:#00FF00;font-size:0.5vw">{{Syswd.sys_wd_18}}℃</span>
                                <span style="position:absolute;right:7%;top:25%;color:#00FF00;font-size:0.5vw">{{Syssd.sys_sd_18}}%</span>
                                <i :class="{'el-icon-lxkongtiao1':true, 'kontiao_style_three':true,'blank':Sysjhxt2.sys_jhxt_18_fault}" :style="Sysjhxt.sys_jhxt_18"></i>
                                <i :class="{'el-icon-lxwushuijinggai':true, 'wushui_style_three':true,'blank':Syswscl2.sys_wscl_18_fault}" :style="Syswscl.sys_wscl_18"></i>
                            </p>
                        </div>
                        <img src="../../assets/twoF.png">
                        <template>
                            <div class="shiyans" style="position: absolute;top:28%;width:180px;height:200px;left:0.5%;z-index: 9999;color:#7AFDFE;font-family:'黑体';text-align: left">
                                <p style='display: inline-block;font-size: 16px;font-weight: bold;'>实验室状态</p><br /><br />
                                <p><span :style="SysztConfig.free" class="sys_title"></span>&nbsp;{{SysztConfig.free_text}}</p><br />
                                <p><span :style="SysztConfig.use" class="sys_title"></span>&nbsp;{{SysztConfig.use_text}}</p><br />
                                <p><span :style="SysztConfig.repair" class="sys_title"></span>&nbsp;{{SysztConfig.repair_text}}</p><br />
                                <p><span :style="SysztConfig.offline" class="sys_title"></span>&nbsp;{{SysztConfig.offline_text}}</p><br />
                                <p style='display: inline-block;font-size: 16px;font-weight: bold;'>系统状态</p><br /><br />
                                <p><span :style="SysxtztConfig.good" class="sys_title"></span>&nbsp;{{SysxtztConfig.good_text}}</p><br />
                                <p><span :style="SysxtztConfig.close" class="sys_title"></span>&nbsp;{{SysxtztConfig.close_text}}</p><br />
                                <p><span :style="SysxtztConfig.fault" class="sys_title"></span>&nbsp;{{SysxtztConfig.fault_text}}</p><br />
                                <p><span :style="SysxtztConfig.offline" class="sys_title"></span>&nbsp;{{SysxtztConfig.offline_text}}</p>
                            </div>
                        </template>
                    </div>
                    <div class="swiper-slide" style="position:relative;">
                        <p style="color:#07a8f9;margin-bottom:5px;font-size: 1.5vw;font-weight: 700;position: absolute;text-align:center;left:0px;right:0px;top:1px;font-family:'楷体'">国家遗传资源共享平台</p>
                        <img src="../../assets/QL.jpg">
                        <div style="width:30%;height:40%;position: absolute;left:38%;top:17%;z-index: 9999;">
                            <div id="yibiao" style="width:100%;height:100%"></div>
                        </div>
                        <div style="width:30%;height:40%;position: absolute;left:44%;top:39%;z-index: 9999;">
                            <div id="humidity" style="width:100%;height:100%"></div>
                        </div>
                        <p class="qunlou_style_one" @click="explict(qunlou_data.samplebank_wd2,qunlou_data.samplebank_sd2,'未定','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)')">
                            <span style="position: absolute; left: 7%; top: 50%; color: #77F7F9;font-size: 1.2vw;">{{qunlou_data.samplebank_wd2}}℃</span>
                            <span style="position:absolute;right:7%;top:50%;color:#77F7F9;font-size:1.2vw">{{qunlou_data.samplebank_sd2}}%</span>
                        </p>
                        <p class="qunlou_style_two" @click="explict(qunlou_data.samplebank_wd3,qunlou_data.samplebank_sd3,'未定','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)')">
                            <span style="position: absolute; left: 7%; top: 25%; color: #77F7F9;font-size: 1.2vw;">{{qunlou_data.samplebank_wd3}}℃</span>
                            <span style="position:absolute;right:7%;top:25%;color:#77F7F9;font-size:1.2vw">{{qunlou_data.samplebank_sd3}}%</span>
                        </p>
                        <p class="qunlou_style_three" @click="explict(qunlou_data.samplebank_wd4,qunlou_data.samplebank_sd4,'未定','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)')">
                            <span style="position: absolute; left: 7%; top: 25%; color: #77F7F9;font-size: 1.2vw;">{{qunlou_data.samplebank_wd4}}℃</span>
                            <span style="position:absolute;right:7%;top:25%;color:#77F7F9;font-size:1.2vw">{{qunlou_data.samplebank_sd4}}%</span>
                        </p>
                        <p class="qunlou_style_four" @click="explict(qunlou_data.samplebank_wd5,qunlou_data.samplebank_sd5,'未定','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)')">
                            <span style="position: absolute;left: 7%;top: 38%;color: rgb(119, 247, 249);font-size: 0.8vw;transform: rotate(-32deg);">{{qunlou_data.samplebank_wd5}}℃</span>
                            <span style="position:absolute;right:10%;top:45%;color:#77F7F9;font-size:0.8vw;transform: rotate(-32deg);">{{qunlou_data.samplebank_sd5}}%</span>
                        </p>
                        <p class="qunlou_style_five" @click="explict(qunlou_data.samplebank_wd6,qunlou_data.samplebank_sd6,'未定','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)')">
                            <span style="position: absolute; left: 7%; top: 38%; color: #77F7F9;font-size: 1.2vw;">{{qunlou_data.samplebank_wd6}}℃</span>
                            <span style="position:absolute;right:7%;top:38%;color:#77F7F9;font-size:1.2vw">{{qunlou_data.samplebank_sd6}}%</span>
                        </p>
                        <p class="qunlou_style_six" @click="explict(qunlou_data.samplebank_wd7,qunlou_data.samplebank_sd7,'未定','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)')">
                            <span style="position: absolute; left: 7%; top: 38%; color: #77F7F9;font-size: 1.2vw;">{{qunlou_data.samplebank_wd7}}℃</span>
                            <span style="position:absolute;right:7%;top:38%;color:#77F7F9;font-size:1.2vw">{{qunlou_data.samplebank_sd7}}%</span>
                        </p>
                        <p class="qunlou_style_seven" @click="explict(qunlou_data.samplebank_wd8,qunlou_data.samplebank_sd8,'未定','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)','color:rgba(255,255,255,0)')">
                            <span style="position: absolute; left: 7%; top: 38%; color: #77F7F9;font-size: 1.2vw;">{{qunlou_data.samplebank_wd8}}℃</span>
                            <span style="position:absolute;right:7%;top:38%;color:#77F7F9;font-size:1.2vw">{{qunlou_data.samplebank_sd8}}%</span>
                        </p>
                    </div>
                    <div class="swiper-slide" style="position:relative;">
                        <p style="color:#07a8f9;margin-bottom:5px;font-size: 40px;font-weight: 700;text-align:center;left:0px;right:0px;top:10px;">实验室预约情况</p>
                        <template>
                            <div style="text-align:left;font-size: 2vw;line-height: 1vw;margin-top:2%;height:80%">
                                <div class="marquee" style="height:80%">
                                    <div style="position: absolute;left:2%;top:-9%">
                                    </div>
                                    <div class="marquee_box" style="color:#07A8F9;margin:0 auto;">
                                        <ul class="marquee_list" :class="{marquee_top:false}">
                                            <li v-for="(item,index) in marqueeList_two" style="font-size:1.3vw;line-height: 20px;"><i class="el-icon-lxgonggao">&nbsp;&nbsp;</i><i v-html="item" style="font-style: normal;"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="swiper-slide" style="position:relative;">
                        <p style="color:#07a8f9;margin-bottom:5px;font-size: 40px;font-weight: 700;text-align:center;left:0px;right:0px;top:10px;">系统报警</p>
                        <template>
                            <div style="text-align:left;font-size: 2vw;line-height: 1vw;margin-top:2%;height:80%">
                                <div class="marquee" style="position: relative;height:80%">
                                    <div style="position: absolute;left:2%;top:-9%">
                                    </div>
                                    <div class="marquee_box" style="color:#07A8F9;margin:0 auto;">
                                        <ul class="marquee_list" :class="{marquee_top:false}" style="color:#F56C6C">
                                            <li v-for="(item,index) in busArr" style="font-size:1.3vw;line-height: 20px;"><i class="el-icon-lxtixing"></i><i v-html="item" style="font-style: normal;"></i></li>
                                        </ul>
                                        <p style="position:absolute;top:2%;left:42%;color:#07A8F9;font-size: 2vw" v-if="xitong">系统运行一切正常</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style="position: relative;width:20px !important;">
                        <div style="text-align:left;position: absolute;color:#07a8f9;left:5px;top:5px;font-size: 0.8vw;font-family:'楷体';font-weight: 700;">精准医学研究与服务中心</div>
                        <img src="../../assets/twoF.png">
                    </div>
                    <div class="swiper-slide" style="position: relative;">
                        <div style="text-align:left;position: absolute;color:#07a8f9;left:5px;top:5px;font-size: 0.8vw;font-family:'楷体';font-weight: 700;">国家遗传资源共享平台</div>
                        <img src="../../assets/QL.jpg">
                    </div>
                    <div class="swiper-slide" style="position: relative;">
                        <!-- <div :class="{'el-icon-lxgonggao':true}" style="font-size: 7vw;color:#07A8F9"></div> -->
                    </div>
                    <div class="swiper-slide" style="position: relative;">
                        <!-- <div :class="{'el-icon-lxtixing':true,'blank':jingbao,'jingbao':jingbao,'jingbao_good':jingbao_good}" style="font-size: 7vw;"></div> -->
                    </div>
                </div>
            </div>
            <el-dialog :visible.sync='visable' :title="title" width="40%" height="50%" center>
                <!-- <div class="dl_title" :style="details_back"><span style="font-size: 1.5vw;color:yellow;padding:20px;display: inline-block;">{{title}}</span></div> -->
                <div class="dl_status">
                    <i :class="{'el-icon-lxkongtiao1':true,'details_style':true,'blank':kt_blank,}" :style="details_kt"></i>
                    <i :class="{'el-icon-lxjiajutongfengfengshanmianxing':true,'details_style':true,'blank':tf_blank,'run':tf_run}" :style="details_tf"></i>
                    <i :class="{'el-icon-lxwushuijinggai':true, 'details_style':true,'blank':ws_blank}" :style="details_ws"></i>
                </div>
                <div class="dl-echart">
                    <div id="template_details" style="width:100%;height:100%"></div>
                </div>
                <div class="dl-echart_two">
                    <div id="humidity_details" style="width:100%;height:100%"></div>
                </div>
            </el-dialog>
            <el-dialog :visible.sync='police' :title="sys_name" width="20%" height="50%" center>
                <template>
                    <el-scrollbar style="height:100%">
                        <el-table :data="tableData" :height='heightTable' style="width: 100%" :show-header='false'>
                            <el-table-column type="index" header-align="center" align="center" width="100">
                            </el-table-column>
                            <el-table-column prop="name">
                            </el-table-column>
                        </el-table>
                    </el-scrollbar>
                </template>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import '../../assets/css/icon/iconfont.css';
import '../../assets/css/icon/iconfont.js'
import '../../assets/css/swiper.min.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
var echarts = require('echarts');
var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#87F3ED'
    },

    {
        offset: 0.62,
        color: '#A5B8FF'
    },

    {
        offset: 1,
        color: '#FF0000'
    }
]);
// 轮播图
var galleryThumbs, galleryTop;
//   import {videoPlayer} from 'vue-video-player';
export default {
    name: 'dashboard',
    data() {
        return {
            // 实验室详细状态
            sys_frees: [],
            sys_offlines: [],
            sys_repairs: [],
            sys_uses: [],
            sysjhxt_closes: [],
            sysjhxt_faults: [],
            sysjhxt_goods: [],
            sysjhxt_offlines: [],
            systfxt_closes: [],
            systfxt_faults: [],
            systfxt_goods: [],
            systfxt_offlines: [],
            syswscl_closes: [],
            syswscl_faults: [],
            syswscl_goods: [],
            syswscl_offlines: [],
            laboratory_names:{},
            sys_name: "",
            sys_header: "",
            // 系统报警提示
            heightTable: window.innerHeight * 0.44,
            marquee_value: '',
            police: false,
            xitong: false,
            tableData: [],
            yuyue_length: '',
            marqueeList_two: [],
            // 放大明细样式
            details_kt: '',
            details_tf: '',
            details_ws: '',
            kt_blank: '',
            tf_blank: '',
            ws_blank: '',
            tf_run: '',
            details_back: "",
            animate: false,
            animate_two: false,
            // 实验室预约情况和报警消息滚动数组
            marqueeList: [],
            callArr: [],
            busArr: [],
            visable: false,
            title: '',
            get_yugao: '',
            // 最大滚动数量
            iserror: true,
            isicon: true,
            isblank: true,
            show: false,
            max_length: 0,
            // 汇总
            SysztSummary: {},
            SyswsclSummary: {},
            SystfxtSummary: {},
            SysjhxtSummary: {},
            all_title: true,
            title_one: false,
            title_two: false,
            title_three: false,
            title_four: false,
            // 定时器
            show_timer: '',
            show_timer_two: '',
            // 左侧标点
            SysztConfig: {},
            SysxtztConfig: {},
            // 实验室状态
            Syszt: {
                // syszt_07:{background: 'rgba(192, 192, 192,1)'},
                syszt_22: { background: '#ddd' }
            },
            // 温度
            Syswd: {},
            qunlou_data: {},
            // 湿度
            Syssd: {},
            // 空调
            Sysjhxt: {},
            // 污水处理
            Syswscl: {},
            // 净化系统
            Sysjhxt2: {

            },
            // 通风系统
            Systfxt2: {

            },
            Systfxt: {

            },
            // 污水处理警告状态
            Syswscl2: {},
            // 
            // 通风系统
            Systfxt: {

            },
            // 定时器
            timer: '',
            get_timer: "",
            uid: '',
            yibiao_option: {
                title: {
                    text: '温度',
                    x: "45%",
                    y: '68%',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 20,
                        color: "#77F7F9"
                    },
                },
                series: [{
                    name: '',
                    textStyle: {
                        color: '#fff'
                    },
                    type: 'gauge',
                    //仪表盘详情，用于显示数据。
                    // 刻度
                    splitNumber: 10,
                    min: -30,
                    max: 60,
                    radius: '55%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.2, '#6F962B'],
                                [0.4, '#A1EC20'],
                                [0.6, '#EDED36'],
                                [0.8, '#F1CD16'],
                                [1.0, '#F13F16'],

                            ],
                            width: 10
                        }
                    },
                    axisLabel: {
                        show: true,
                        distance: 0,
                        textStyle: {
                            fontSize: 16,
                            fontWeight: 500
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        show: true, // 属性show控制显示与否，默认不显示
                        splitNumber: 5, // 每份split细分多少段
                        length: 15, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: '#eee',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: { // 分隔线
                        length: 15, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 5
                    },
                    detail: {
                        formatter: '{value}℃',
                        show: true,
                        offsetCenter: [0, '50%'],
                        textStyle: {
                            fontSize: 20,
                            // color: '#6F962B',
                        }
                    },
                    data: [30]
                }]
            },
            // 显示详细温度
            template_details: {
                title: {
                    text: '温度',
                    x: "40%",
                    y: '71%',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 30,
                        color: "#77F7F9"
                    },
                },
                series: [{
                    name: '',
                    textStyle: {
                        color: '#fff'
                    },
                    type: 'gauge',
                    //仪表盘详情，用于显示数据。
                    // 刻度
                    splitNumber: 10,
                    min: -30,
                    max: 60,
                    radius: '70%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.2, '#6F962B'],
                                [0.4, '#A1EC20'],
                                [0.6, '#EDED36'],
                                [0.8, '#F1CD16'],
                                [1.0, '#F13F16'],

                            ],
                            width: 10
                        }
                    },
                    axisLabel: {
                        show: true,
                        distance: 0,
                        textStyle: {
                            fontSize: 16,
                            fontWeight: 500
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        show: true, // 属性show控制显示与否，默认不显示
                        splitNumber: 5, // 每份split细分多少段
                        length: 15, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: '#eee',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    splitLine: { // 分隔线
                        length: 15, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 5
                    },
                    detail: {
                        formatter: '{value}℃',
                        show: true,
                        offsetCenter: [0, '50%'],
                        textStyle: {
                            fontSize: 30,
                            // color: '#6F962B',
                        }
                    },
                    data: [30]
                }]
            },
            // 湿度详细显示
            humidity_details: {
                title: {
                    x: "41%",
                    y: '71%',
                    text: '湿度',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 30,
                        color: "#77F7F9"
                    },
                },
                series: [{
                    name: '车辆总数',
                    type: 'gauge',
                    z: 1,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '70%',
                    axisLine: { // 坐标轴线
                        show: false,
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 0
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: '#00dffe',
                        fontSize: 16,
                    },
                    splitLine: { // 分隔线
                        show: true,
                        length: 15,
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 1,
                            color: '#0090FF',
                            opacity: 0.4
                        }
                    },
                    detail: {
                        show: false,
                    },
                    data: []
                }, {
                    name: '车辆总数',
                    type: 'gauge',
                    z: 1,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '80%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 2,
                            color: [
                                [1, '#0090FF']
                            ],
                            opacity: 0.5
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                    splitLine: { // 分隔线
                        show: false,
                        length: 15,
                    },
                    detail: {
                        show: false,
                    },
                    data: []
                }, {
                    name: '车辆总数',
                    type: 'gauge',
                    z: 2,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '70%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 10,
                            color: [
                                [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#00E4FF'
                                }, {
                                    offset: 1,
                                    color: '#0077F0'
                                }])]
                            ],
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: { // 分隔线
                        show: false,
                        length: 15,
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#0090FF'
                        }
                    },
                    title: {
                        show: false,
                    },
                    //   detail: {
                    //       offsetCenter:[0, '80%'],
                    //       textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    //           color: '#FFFFFF',
                    // fontSize:22,
                    // fontWeight: 500
                    //       }
                    //   },
                    itemStyle: {
                        normal: {
                            color: {
                                x: "0.00",
                                y: "0.00",
                                x2: "1.00",
                                y2: "1.00",
                                type: "linear",
                                global: false,
                                colorStops: [{
                                    offset: 0,
                                    color: "#0077F0"
                                }, {
                                    offset: 1,
                                    color: "#00E4FF"
                                }]
                            }
                        }
                    },
                    pointer: {
                        show: true,
                        length: '65%',
                        width: 4
                    },
                    detail: {
                        formatter: '{value}%',
                        offsetCenter: [0, '50%'],
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 30,
                            color: "yellow"
                        },
                    },
                    data: [{
                        value: 90,
                        name: '33'
                    }]
                }]
            },
            // 湿度
            humidity: {
                title: {
                    x: "45%",
                    y: '68%',
                    text: "湿度",
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 20,
                        color: "#77F7F9"
                    },
                },
                series: [{
                    name: '车辆总数',
                    type: 'gauge',
                    z: 1,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '50%',
                    axisLine: { // 坐标轴线
                        show: false,
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 0
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: '#00dffe',
                        fontSize: 14,
                    },
                    splitLine: { // 分隔线
                        show: true,
                        length: 15,
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 1,
                            color: '#0090FF',
                            opacity: 0.4
                        }
                    },
                    detail: {
                        show: false,
                    },
                    data: []
                }, {
                    name: '车辆总数',
                    type: 'gauge',
                    z: 1,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '60%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 2,
                            color: [
                                [1, '#0090FF']
                            ],
                            opacity: 0.5
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                    splitLine: { // 分隔线
                        show: false,
                        length: 15,
                    },
                    detail: {
                        show: false,
                    },
                    data: []
                }, {
                    name: '车辆总数',
                    type: 'gauge',
                    z: 2,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '50%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 10,
                            color: [
                                [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#00E4FF'
                                }, {
                                    offset: 1,
                                    color: '#0077F0'
                                }])]
                            ],
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: { // 分隔线
                        show: false,
                        length: 15,
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#0090FF'
                        }
                    },
                    title: {
                        show: false,
                    },
                    //   detail: {
                    //       offsetCenter:[0, '80%'],
                    //       textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    //           color: '#FFFFFF',
                    // fontSize:22,
                    // fontWeight: 500
                    //       }
                    //   },
                    itemStyle: {
                        normal: {
                            color: {
                                x: "0.00",
                                y: "0.00",
                                x2: "1.00",
                                y2: "1.00",
                                type: "linear",
                                global: false,
                                colorStops: [{
                                    offset: 0,
                                    color: "#0077F0"
                                }, {
                                    offset: 1,
                                    color: "#00E4FF"
                                }]
                            }
                        }
                    },
                    pointer: {
                        show: true,
                        length: '65%',
                        width: 4
                    },
                    detail: {
                        formatter: '{value}%',
                        offsetCenter: [0, '50%'],
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: 20,
                            color: "yellow"
                        },
                    },
                    data: [{
                        value: 90,
                        name: '33'
                    }]
                }]
            },
        }

    },

    components: {
        Swiper,
        SwiperSlide,
        // videoPlayer
    },
    computed: {
        // player() {
        //     return this.$refs.videoPlayer.player
        // },
    },
    methods: {
        // 显示看哪个实验室
        sys_status(item, sys_name, sys_header) {
            this.sys_name = sys_name;
            this.sys_header = sys_header;
            this.tableData = item;
            this.police = true;
        },
        // 表格样式
        // tableRowClassName({ row, rowIndex }) {
        //     if (rowIndex % 2 != 0) {
        //         return 'success-row';
        //     }
        //     return '';
        // },
        showMarquee: function() {
            var that = this;
            if (that.marqueeList.length < 4) {
                that.animate = false
            } else {
                that.animate = true;
                setTimeout(() => {
                    that.marqueeList.push(that.marqueeList[0]);
                    that.marqueeList.shift();
                    that.animate = false;
                }, 500);
            }

        },
        timing: function() {
            var that = this;
            if (that.callArr.length < 4) {
                that.animate_two = false
            } else {
                that.animate_two = true;
                setTimeout(() => {
                    var arr = that.callArr[0];
                    that.callArr.shift();
                    that.callArr.push(arr);
                    that.animate_two = false;
                }, 600);
            }
        },
        init_swiper() {
            galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs
                }
            });
        },
        // 公告滚动
        // 获取预约公告
        get_data() {
            this.$get('/emsapi/LabReserve/GetReserveDescription', {})
                .then((response) => {
                    var arr = response.map(function(item, index) {

                        return item["description"]
                    })
                    var arr_two = response.map(function(item, index) {

                        return index + 1 + '.' + '\xa0' + item["description"]
                    })
                    this.marqueeList_two = arr_two
                    arr[arr.length - 1] = arr[arr.length - 1];
                    this.marqueeList = arr;
                    this.yuyue_length = this.marqueeList.length;
                }).catch(function(error) {

                });
        },
        company_data() {
            this.$get('emsapi/laboratory/getlaboratorydata', {})
                .then((response) => {
                    var AlarmData = eval("(" + response.AlarmData + ")");
                    let alarm_date = AlarmData.map(function(item) {
                        return item['order_number'] + '.' + '\xa0' + item["alarm_date"] + "\xa0\xa0\xa0" + item["alarm_content"];
                    })
                    this.callArr = alarm_date;
                    if (alarm_date.length > 0) {
                        this.xitong = false;
                    } else {
                        this.xitong = true;
                    }
                }).catch(function(error) {

                });
        },
        // 获取仪器室的情况
        get_yiqi() {
            this.$get('emsapi/laboratory/getlaboratorydata', {})
                .then((response) => {
                    var data = response;
                    this.SysjhxtSummary = eval("(" + data.SysjhxtSummary + ")");
                    this.SystfxtSummary = eval("(" + data.SystfxtSummary + ")");
                    this.SyswsclSummary = eval("(" + data.SyswsclSummary + ")");
                    this.SysztSummary = eval("(" + data.SysztSummary + ")");
                    // 空调系统
                    this.Sysjhxt = eval("(" + data.Sysjhxt + ")");
                    // 实验室名称
                    this.laboratory_names = eval("(" + data.laboratory_names + ")");
                    console.log(this.laboratory_names)
                    // 污水系统
                    this.Syswscl = eval("(" + data.Syswscl + ")");
                    // 实验室
                    this.Syszt = eval("(" + data.Syszt + ")");
                    // 报警
                    var AlarmData = eval("(" + data.AlarmData + ")");
                    // 通风系统
                    this.Systfxt = eval("(" + data.Systfxt + ")");
                    this.Systfxt2 = eval("(" + data.Systfxt2 + ")");
                    // 温度
                    this.Syswd = eval("(" + data.Syswd + ")");
                    console.log(this.Syswd)
                    // 湿度
                    this.Syssd = eval("(" + data.Syssd + ")");
                    // console.log(this.Syssd)
                    // 净化系统处理
                    this.Sysjhxt2 = eval("(" + data.Sysjhxt2 + ")");
                    // 污水处理系统
                    this.Syswscl2 = eval("(" + data.Syswscl2 + ")");
                    // 左侧菜单
                    this.SysztConfig = eval("(" + data.SysztConfig + ")");
                    this.SysxtztConfig = eval("(" + data.SysxtztConfig + ")");
                    var alarm_date = AlarmData.map(function(item) {
                        return item['order_number'] + '.' + '\xa0' + item["alarm_date"] + "\xa0\xa0\xa0" + item["alarm_content"];
                    })

                    this.marquee_value = alarm_date.length;
                    if (this.busArr.toString() != alarm_date.toString()) {
                        this.busArr = alarm_date;
                        this.company_data();
                    }
                    // 裙楼数据
                    var qunlou_data = eval("(" + data.SampleBankParas + ")");
                    let qunlou_template = qunlou_data.samplebank_wd1;
                    let qunlou_humidity = qunlou_data.samplebank_sd1;
                    this.get_qunlou(qunlou_template, qunlou_humidity, qunlou_data);
                    // 实验室放大明细
                    this.sys_frees = response.sys_frees;
                    this.sys_offlines = response.sys_offlines;
                    this.sys_repairs = response.sys_repairs;
                    this.sys_uses = response.sys_uses;
                    this.sysjhxt_closes = response.sysjhxt_closes;
                    this.sysjhxt_faults = response.sysjhxt_faults;
                    this.sysjhxt_goods = response.sysjhxt_goods;
                    this.sysjhxt_offlines = response.sysjhxt_offlines;
                    this.systfxt_closes = response.systfxt_closes;
                    this.systfxt_faults = response.systfxt_faults;
                    this.systfxt_goods = response.systfxt_goods;
                    this.systfxt_offlines = response.systfxt_offlines;
                    this.syswscl_closes = response.syswscl_closes;
                    this.syswscl_faults = response.syswscl_faults;
                    this.syswscl_goods = response.syswscl_goods;
                    this.syswscl_offlines = response.syswscl_offlines;
                }).catch(function(error) {

                });
        },
        // 裙楼数据
        get_qunlou(qunlou_template, qunlou_humidity, qunlou_data) {
            var yibiao = echarts.init(document.getElementById("yibiao"));
            var humidity = echarts.init(document.getElementById('humidity'));
            this.yibiao_option.series[0].data[0] = qunlou_template;
            this.humidity.series[2].data[0].value = qunlou_humidity;
            this.qunlou_data = qunlou_data
            var data = this.yibiao_option;
            var humidity_data = this.humidity;
            setTimeout(function() {
                yibiao.setOption(data, true);
                humidity.setOption(humidity_data, true);
                yibiao.resize();
                humidity.resize();
            }, 200)

        },
        // 放大仪表的温度
        explict(wd, sd, title, details_tf, details_kt, details_ws, tf_run, tf_blank, kt_blank, ws_blank, details_back) {
            this.visable = true;
            this.title = title;
            this.template_details.series[0].data[0] = wd;
            this.humidity_details.series[2].data[0].value = sd;
            this.details_tf = details_tf;
            this.details_kt = details_kt;
            this.details_ws = details_ws;
            this.tf_run = tf_run;
            this.tf_blank = tf_blank;
            this.kt_blank = kt_blank;
            this.ws_blank = ws_blank;
            this.details_back = details_back
            this.$nextTick(() => {
                var template_details = echarts.init(document.getElementById('template_details'));
                var humidity_details = echarts.init(document.getElementById('humidity_details'));
                var template_details_data = this.template_details;
                var humidity_details_data = this.humidity_details;
                setTimeout(function() {
                    template_details.setOption(template_details_data, true);
                    humidity_details.setOption(humidity_details_data, true);
                    template_details.resize();
                    humidity_details.resize();
                }, 200)

            })
        },
        police_data() {
            this.police = true
        },
        // 实验室预约情况跳转到指定界面
        notice() {
            galleryTop.slideTo(2, 100, true);
        },
        // 报警跳转到置顶界面
        policeman() {
            galleryTop.slideTo(3, 100, true);
        }
    },
    mounted() {
        this.get_data();
        this.get_yiqi();
        this.company_data();
        this.get_timer = setInterval(this.get_yiqi, 2000);
        this.get_yugao = setInterval(this.get_data, 60000);
        this.init_swiper();
        this.get_qunlou();
        this.show_timer = setInterval(this.showMarquee, 4000);
        this.show_timer_two = setInterval(this.timing, 4000);
        // 跳转过来的转到当前报警界面
        if (this.$route.params.id == 1) {
            galleryTop.slideTo(3, 100, true);
        }
    },
    beforeDestroy() {
        clearInterval(this.timer);
        clearInterval(this.get_timer);
        clearInterval(this.show_timer);
        clearInterval(this.show_timer_two);
    },
    destroyed() {
        clearInterval(this.timer);
        clearInterval(this.get_timer);
        clearInterval(this.show_timer);
        clearInterval(this.show_timer_two);
    }

}
</script>
<style scoped>
.swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
    width: 50%;
}

.gallery-top {
    height: 100%;
    width: 100%;
}

.gallery-thumbs {
    height: 20%;
    position: absolute;
    bottom: 0px;
    box-sizing: border-box;
    padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.gallery-thumbs .swiper-slide-thumb-active {
    opacity: 1;
}

.containe {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 30px solid rgba(255, 255, 255, 0);
    text-align: center;
    position: relative;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

#scrolldiv {
    height: 400px;
    overflow: hidden;
}

.title {
    font-size: 1.5vw;
    position: relative;
    top: -45px;
    color: #185bff;
}

.table {
    width: 100%;
    height: 99%;
    position: relative;
}

.subtitle {
    color: #49dffd;
    font-size: 1.2vw;
    overflow: hidden;
    margin-bottom: 10px;
}

.swiper {
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 20px;
    background: red;
}

.f_one {
    background: url(../../assets/QL.jpg);
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
}

img {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
}

button {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 999
}

.run {
    animation-name: myfirst;

    animation-duration: 3s;

    animation-timing-function: linear;

    animation-iteration-count: infinite;

    animation-direction: normal;

    animation-play-state: running;

    animation-fill-mode: forwards;

    /* Safari and Chrome: */

    -webkit-animation-name: myfirst;

    -webkit-animation-duration: 3s;

    -webkit-animation-timing-function: linear;

    -webkit-animation-iteration-count: infinite;

    -webkit-animation-direction: normal;

    -webkit-animation-play-state: running;

    animation-fill-mode: forwards;

}

@keyframes myfirst {
    from {
        -webkit-transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(360deg)
    }

}

@-webkit-keyframes myfirst {

    from {
        -webkit-transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(360deg)
    }

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
}

@keyframes dark {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@-webkit-keyframes dark {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.dark {
    animation: dark 1s linear infinite;
    -webkit-animation: dark 1s linear infinite;
}

.state_run {
    background: #06dccd;
}

.state_off {
    background: #ddd;
}

.state_free {
    background: #185bfe;
}

.player {
    width: 20%;
    height: 10%;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 99999;
}

.free {
    background: rgba(64, 158, 255, 0.7);
}

.use {
    background: rgba(255, 255, 0, 0.7);
}

.repair {
    background: rgba(220, 106, 13, 0.7);
}

/*消息提示框*/
/*标题基本样式*/
.common_style_one {
    width: 9.5%;
    height: 14.5%;
    position: absolute;
    left: 15.5%;
    bottom: 23%;
    z-index: 1000;
    text-align: center;
}

.common_style_two {
    width: 6.9%;
    height: 14.5%;
    position: absolute;
    left: 34.6%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_three {
    width: 7.4%;
    height: 14.5%;
    position: absolute;
    left: 46.5%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_four {
    width: 23.8%;
    height: 15.7%;
    position: absolute;
    left: 22.8%;
    top: 41.8%;
    z-index: 1000;
}

.common_style_five {
    width: 7.5%;
    height: 12.7%;
    position: absolute;
    left: 50%;
    top: 44.5%;
    z-index: 1000;
}

.common_style_six {
    width: 9.2%;
    height: 13.5%;
    position: absolute;
    left: 54.5%;
    top: 43.8%;
    z-index: 1000;
}

.common_style_seven {
    width: 6.3%;
    height: 14.4%;
    position: absolute;
    left: 33%;
    top: 23.3%;
    z-index: 1000;
}

.common_style_eight {
    width: 7.4%;
    height: 7.4%;
    position: absolute;
    left: 65.8%;
    top: 29%;
    z-index: 1000;
}

.common_style_nine {
    width: 6.1%;
    height: 8%;
    position: absolute;
    left: 65.9%;
    top: 41.1%;
    z-index: 1000;
}

.common_style_ten {
    width: 7.2%;
    height: 8%;
    position: absolute;
    left: 65.9%;
    top: 49.4%;
    z-index: 1000;
}

.common_style_eleven {
    width: 6.6%;
    height: 5.5%;
    position: absolute;
    left: 79.4%;
    top: 36.5%;
    z-index: 1000;
}

.common_style_twelve {
    width: 6.6%;
    height: 6%;
    position: absolute;
    left: 79.4%;
    top: 41.8%;
    z-index: 1000;
}

.common_style_thirteen {
    width: 7.3%;
    height: 6.8%;
    position: absolute;
    left: 79.4%;
    top: 50.7%;
    z-index: 1000;
}

.common_style_fourteen {
    width: 4.8%;
    height: 10.5%;
    position: absolute;
    left: 62.3%;
    bottom: 23%;
    z-index: 1000;
    font-size: 0.1vw;
}

.common_style_fifteen {
    width: 5.9%;
    height: 10.6%;
    position: absolute;
    left: 67%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_sixteen {
    width: 6%;
    height: 10.5%;
    position: absolute;
    left: 73%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_seventeen {
    width: 7%;
    height: 10.5%;
    position: absolute;
    left: 79%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_eighteen {
    width: 6%;
    height: 14.4%;
    position: absolute;
    left: 39.4%;
    top: 23.3%;
    z-index: 1000;
}

.common_style_nineteen {
    width: 8.8%;
    height: 14.4%;
    position: absolute;
    left: 45.4%;
    top: 23.3%;
    z-index: 1000;
}

.common_style_Twenty-one {
    width: 8%;
    height: 15.7%;
    position: absolute;
    left: 46.5%;
    top: 41.5%;
    z-index: 1000;
}

.common_style_Twenty-two {
    width: 5.2%;
    height: 14.5%;
    position: absolute;
    left: 25%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_Twenty-three {
    width: 4.7%;
    height: 14.5%;
    position: absolute;
    left: 30%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_Twenty-four {
    width: 4.9%;
    height: 14.5%;
    position: absolute;
    left: 41.5%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_Twenty-five {
    width: 8.2%;
    height: 14.5%;
    position: absolute;
    left: 54%;
    bottom: 23%;
    z-index: 1000;
}

.common_style_Twenty-six {
    width: 3.5%;
    height: 10.5%;
    position: absolute;
    left: 86%;
    bottom: 23.2%;
    z-index: 1000;
}

.common_style_Twenty-seven {
    width: 5.1%;
    height: 13.2%;
    position: absolute;
    left: 72%;
    top: 36.1%;
    z-index: 1000;
}

.common_style_Twenty-eight {
    width: 6.6%;
    height: 7.3%;
    position: absolute;
    left: 79.4%;
    top: 28.9%;
    z-index: 1000;
}

/*裙楼各个房间的样式*/
.qunlou_style_one {
    width: 10.6%;
    height: 16.3%;
    position: absolute;
    left: 39.4%;
    top: 7.9%;
    z-index: 999999;
    transform: rotateZ(37deg);
}

.qunlou_style_two {
    width: 10%;
    height: 8.3%;
    position: absolute;
    left: 35%;
    top: 12.9%;
    z-index: 999999;
    transform: rotateZ(38deg);
    transform-origin: bottom left;
}

.qunlou_style_three {
    width: 10%;
    height: 8.3%;
    position: absolute;
    left: 32%;
    top: 18.9%;
    z-index: 999999;
    transform: rotateZ(36deg);
    transform-origin: bottom left;
}

.qunlou_style_four {
    width: 10%;
    height: 7.3%;
    position: absolute;
    left: 30%;
    top: 23.9%;
    z-index: 999999;
    transform: rotateZ(35deg);
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
}

.qunlou_style_five {
    width: 10%;
    height: 12.3%;
    position: absolute;
    left: 30%;
    top: 31%;
    z-index: 999999;
    /* -webkit-transform: rotateZ(35deg); */
    transform: rotateZ(45deg);
    -webkit-transform-origin: bottom left;
    transform-origin: top left;
}

.qunlou_style_six {
    width: 10%;
    height: 13%;
    position: absolute;
    left: 35%;
    top: 50%;
    z-index: 999999;
    /* -webkit-transform: rotateZ(35deg); */
    /* -webkit-transform: rotateZ(45deg); */
    /* transform: rotateZ(45deg); */
    transform-origin: top left;
}

.qunlou_style_seven {
    width: 10%;
    height: 15%;
    position: absolute;
    left: 45%;
    top: 64%;
    z-index: 999999;
    -webkit-transform: rotateZ(13deg);
    transform: rotateZ(34deg);
    -webkit-transform-origin: top left;
    transform-origin: bottom left;
}

/*空调的公共样式*/
.kontiao_style {
    position: absolute;
    bottom: 2%;
    left: 2%;
    font-size: 1.5vw;
    color: #09E91D;
}

.kontiao_style_two {
    position: absolute;
    bottom: 2%;
    left: 2%;
    font-size: 0.9vw;
    color: #09E91D;
}

.kontiao_style_three {
    position: absolute;
    bottom: 2%;
    left: 2%;
    font-size: 0.9vw;
    color: #09E91D;
}

/*s实验室title*/
.sys_title {
    display: inline-block;
    width: 20px;
    height: 10px;
    border-radius: 20%;
}

/*污水*/
.wushui_style {
    position: absolute;
    bottom: 2%;
    right: 2%;
    font-size: 1.5vw;
    color: #09E91D;
}

.wushui_style_two {
    position: absolute;
    bottom: 2%;
    right: 2%;
    font-size: 0.9vw;
    color: #09E91D
}

.wushui_style_three {
    position: absolute;
    bottom: 2%;
    right: 2%;
    font-size: 0.9vw;
    color: #09E91D
}

.table_data {
    width: 14%;
    height: 100%;
    line-height: 50px;
    color: #7AFDFE;
    border-right: 1px solid #185BFF;
    /*border-left:1px solid #185BFF;*/
}

.table_title {
    border-top: 1px solid #185bff;
}

.pop-top {
    left: 65.8% !important;
    top: 74% !important;
}

.pop_right {
    left: 76% !important;
    top: 41% !important;
}

.last_pop {
    left: 76% !important;
    top: 41% !important;
}

.pop_bottom {
    left: 80.5% !important;
    top: 29.2% !important;
    width: 3.3% !important;
    height: 4% !important;
}

.popover-top .popover-down {
    width: 300px;
    float: left;
    position: absolute;
    top: 40px;
}

.popover-top,
.popover-left {
    left: 50px;
}

.popover-down,
.popover-right {
    left: 450px;
}

.popover {
    opacity: 1;
    z-index: 1060;
    padding: 1px;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    background: none;
    /*font-weight: 900;*/
    /*font-size: 1vw;*/
    background: rgba(64, 158, 255, 1);
    color: #fff;
    border: 1px solid #409EFF;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border-radius: 6px;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    line-break: auto;
}

.popover-content {
    padding: 7px 2px;
}

.triangle,
.triangle:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}

.triangle {
    border-width: 11px;
}

.triangle.down {
    margin-left: 31%;
    border-top-color: #999;
    border-top-color: rgba(0, 0, 0, .25);
    border-bottom-width: 0;
}

.triangle.down:after {
    bottom: 1px;
    margin-left: -10px;
    content: " ";
    border-top-color: #409EFF;
    border-width: 10px;
    border-bottom-width: 0;
}

.triangle.top {
    top: -10px;
    margin-left: 13px;
    border-bottom-color: #999;
    border-bottom-color: rgba(0, 0, 0, .25);
    border-top-width: 0;
}

.triangle.top:after {
    top: 1px;
    bottom: 1px;
    margin-left: -10px;
    content: " ";
    border-width: 10px;
    border-top-width: 0;
    border-bottom-color: #409EFF;
}

.popover-left,
.popover-right {
    width: 300px;
    float: left;
    position: absolute;
    top: 150px;
}

.triangle.left {
    top: 50%;
    right: -10px;
    margin-top: -11px;
    border-right-width: 0;
    border-left-color: #999;
    border-left-color: rgba(0, 0, 0, .25);
}

.triangle.left:after {
    border-width: 10px;
    right: 1px;
    bottom: -10px;
    content: " ";
    border-right-width: 0;
    border-left-color: #409EFF;
}

.triangle.right {
    top: 50%;
    left: -10px;
    margin-top: -11px;
    border-right-color: #999;
    border-right-color: rgba(0, 0, 0, .25);
    border-left-width: 0;
}

.triangle.right:after {
    content: " ";
    border-width: 10px;
    bottom: -10px;
    left: 1px;
    border-right-color: #409EFF;
    border-left-width: 0;
}

.suju {
    color: #fba600;
    font-weight: 700;
    font-size: 1.2vw
}

.tfxt_style_one {
    position: relative;
    bottom: 50%;
    top: 40%;
    font-size: 1.5vw;
    color: #09E91D;
    z-index: 9999;
}

.tfxt_style_two {
    position: relative;
    bottom: 50%;
    top: 60%;
    font-size: 1vw;
    color: #09E91D;
    z-index: 9999;
}

.tfxt_style_three {
    position: relative;
    bottom: 50%;
    top: 40%;
    font-size: 1vw;
    color: #09E91D;
    z-index: 9999;
}

.tfxt_style_three {
    position: relative;
    bottom: 50%;
    top: 40%;
    font-size: 1vw;
    color: #09E91D;
    z-index: 9999;
}

.tfxt_style_four {
    position: relative;
    bottom: 50%;
    top: 40%;
    font-size: 1.3vw;
    color: #09E91D;
    z-index: 9999;
}

.marquee {
    width: 100%;

    /*height: 80%;*/

    align-items: center;

    color: #3a3a3a;

    background-color: none;

    /*display: flex;*/

    box-sizing: border-box;

    overflow: hidden;
}

.marquee_title {
    padding: 0 20px;



    font-size: 14px;

    /*border-right: 1px solid #fba600;*/

    align-items: center;
}

.marquee_box {
    display: block;

    /*position: relative;*/

    width: 55%;

    height: 83%;

    overflow: hidden;
}

.marquee_list {
    display: block;

    /*position: absolute;*/
    color: #fba600;
    top: 0;
    height: 150px;
    left: 0;
}

.marquee_top {
    transition: all 0.5s;
    margin-top: -30px;
}

.marquee_list li {

    line-height: 30px;

    font-size: 14px;

    padding-left: 20px;
    margin-bottom: 20px;
    letter-spacing: 3px;
}

.marquee_list li span {
    padding: 0 2px;
}

/deep/.el-dialog {
    width: 40%;
    height: 50%;
    background: rgba(24, 91, 255, 0.7);
    position: relative;
}

/deep/.el-dialog__title {
    color: #77F7F9;
    font-size: 1.5vw;
}

/deep/.el-icon-close:before {
    display: none;
}

/deep/.el-dialog__body {
    width: 100%;
    height: 90%;
    padding: 0px;
}

.details_style {
    width: 30%;
    height: 100%;
    font-size: 3vw;
    text-align: center;
    display: inline-block;
}

.dl-echart {
    width: 50%;
    height: 100%;
    float: left;
}

.dl-echart_two {
    width: 50%;
    height: 100%;
    float: right;
}

.dialogClass {
    background: red;
}

/deep/.el-scrollbar__wrap {
    overflow-y: hidden;
    overflow-x: hidden;
}

.el-scrollbar {
    overflow: hidden;
    position: relative;
}

/deep/.el-table--scrollable-y .el-table__body-wrapper {
    width: 104% !important;
}

/*/deep/.el-table--border, .el-table--group{
  border:2px solid #185BFF;
 }
 /deep/.el-table--border td{
  border:1px solid #185BFE;
 }
 /deep/.el-table--border th{
  border:1px solid #185BFE;
 }
/deep/.el-table--border th{
  background: none;
}*/
/deep/.el-table thead {
    /*background: rgba(24, 91, 255, 0.7);*/
}

/*/deep/.el-table--border::after, .el-table--group::after{
  background:none;
}*/
/deep/.el-table .warning-row {
    background: rgba(5, 69, 131, 0.7) !important;
    /*opacity: 0.3 !important;*/
}

/deep/.el-table .success-row {
    background: rgba(5, 69, 131, 0.7) !important;

}

.jingbao {
    color: red;
}

.jingbao_good {
    color: #07A8F9;
}

.gallery-thumbs .swiper-slide {
    width: 19% !important;
}

.gallery-thumbs .swiper-slide:nth-child(3) {
    width: 1% !important;
}

.gallery-thumbs .swiper-slide:nth-child(4) {
    width: 26% !important;
    margin-left: 20% !important;
}
</style>
<style scoped>
h2 {
    padding: 20px 0
}

.textBox {
    width: 100%;
    height: 120px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: left;
}

.text {
    width: 80%;
    color: red;
    top: 5%;
    left: 20%;
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    color: #72F1F7;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s linear;
}

.slide-enter {
    transform: translateY(20px);
    opacity: 1;
}

.slide-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

/deep/.el-table {
    position: absolute;
    background: none;
    color: #f56c66;
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
    color: #fba600;
    font-size: 0.9vw;
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
    background: none;
    color: #fba600;
    font-size: 0.9vw;
}

/deep/.el-table tbody tr:hover>td {
    background: none;
}

.dl_title {
    position: absolute;
    width: 100%;
    height: 12%;
    top: 0%;
    z-index: 0;
    text-align: center;
}

.dl_status {
    width: 100%;
    height: 16%;
    position: absolute;
    top: 11%;
    display: flex;
    justify-content: space-between;
}

/deep/.el-badge__content {
    background: #f56c66;
}
</style>
<style>
.el-table {
    background: none;
    color: #fff;
}

.el-table__row {
    background: none !important;
    color: ''#07a8f9;
}

.popper__arrow::after {
    border-right-color: #06DCC0 !important;
}

.el-popover {
    background: #06DCC0;
    color: #fff;
    border: none;
    opacity: 0.9;
}

.popper__arrow {}

.el-popover__title {
    color: #fff;
}

.el-popover--plain {
    /*padding: 0px;*/
}

.el-table::before {
    background-color: #185BFE;
}

.el-table>tr {
    background-color: red !important;
}

.el-table th,
.el-table tr {
    background: none;
    color: #fff;
}

.el-table th,
.el-table tr:hover {
    background: none;
}

/*.el-table tbody tr:hover>td { background:none;}*/
.el-table__row:hover {
    background: red;
}

.el-table::before {
    background: none;
}

.el-table__body tr:hover>td {
    background: none !important;
}

/deep/.el-table__header {
    display: none !important;
}
</style>