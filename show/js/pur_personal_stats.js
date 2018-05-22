//////////// 前面月份开发成功率//////////////////
var graph11_dom = document.getElementById('graph11_main');
var graph11_myChart = echarts.init(graph11_dom, 'light');
var graph11_option = {
    backgroundColor: '#FFFFFF',
    title: {
        left: 'center',
        text: '三月开发成功率',
        padding: [14, 0, 0, 0]
        //,textStyle: {color: '#000',fontSize: 18,fontWeight: 'lighter'}
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '55%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                fontSize: '30',
                position: 'center'
            }
        },
        data: [{
            value: 82,
            name: '82%'
        },
        {
            value: 18,
            name: '',
			color:'#EBEBEB'
        }]
    }]
};
graph11_myChart.setOption(graph11_option);
//////////// 最近月份新品采购率//////////////////
var graph12_dom = document.getElementById('graph12_main');
var graph12_myChart = echarts.init(graph12_dom, 'light');
var graph12_option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '五月新品采购率',
        padding: [14, 0, 0, 0],
        x: 'center'
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '55%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                fontSize: '30',
                position: 'center'
            }
        },
        data: [{
            value: 84,
            name: '84%'
        },
        {
            value: 16,
            name: ''
        }]
    }]
};
graph12_myChart.setOption(graph12_option);
//////////// 最近月份品类占比//////////////////
var circle_graph2_dom = document.getElementById('circle_graph2_main');
var circle_graph2_myChart = echarts.init(circle_graph2_dom, 'light');
var circle_graph2_option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '五月品类占比',
        subtext: '采购SKU总数：11000',
        padding: [14, 0, 0, 10]
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['3C数码', '键盘', '屏线', '汽车产品', 'LED', '其他类目']
    },
    series: [{
        name: '5月采购类占比',
        type: 'pie',
        center: ['50%', '55%'],
        radius: ['50%', '70%'],
        data: [{
            value: 2500,
            name: '3C数码'
        },
        {
            value: 2500,
            name: '键盘'
        },
        {
            value: 1000,
            name: '屏线'
        },
        {
            value: 3000,
            name: '汽车产品'
        },
        {
            value: 2000,
            name: 'LED'
        },
        {
            value: 1000,
            name: '其他类目'
        }]
    }]
};
circle_graph2_myChart.setOption(circle_graph2_option);
//////////// 财年采购金额曲线//////////////////
var graph21_dom = document.getElementById('graph21_main');
var graph21_myChart = echarts.init(graph21_dom, 'light');
var graph21_option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '财年采购金额曲线',
        padding: [14, 0, 0, 10]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['月度总额','月度新品'],
        padding: [16, 0, 0, 0]
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4月','5月','6月','7月','8月','9月','10月','11月','12月','1月','2月','3月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
	
        {
            name:'月度总额',
            type:'line',
            data:[30, 38, 32, 36, 90, 42, 28,33,31,32,40],
			color:'#F90000'
        },
        {
            name:'月度新品',
            type:'line',
            data:[0, 4, 2, 5, 4, 4, 4,4],
			color:'#C07203'
        }
    ]
};
graph21_myChart.setOption(graph21_option);
//////////// 最近月份品类占比//////////////////
var graph22_dom = document.getElementById('graph22_main');
var graph22_myChart = echarts.init(graph22_dom, 'light');
var graph22_option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '财年开发SKU统计',
        padding: [14, 0, 0, 10]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新建SKU总数','开发成功数'],
        padding: [16, 120, 0, 120],
        right:'right'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4月','5月','6月','7月','8月','9月','10月','11月','12月','1月','2月','3月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
	
        {
            name:'新建SKU总数',
            type:'line',
            data:[41,58,42,57,62,38,44,43,43,60],
			color:'#F90000'
        },
        {
            name:'开发成功数',
            type:'line',
            data:[25,36,30,35,34,35,34],
			color:'#C07203'
        }
    ]
};
graph22_myChart.setOption(graph22_option);
//////////// 采购月新建SKU数量对比//////////////////
var bar_graph1_dom = document.getElementById('bar_graph1_main');
var bar_graph1_myChart = echarts.init(bar_graph1_dom, 'light');
var bar_graph1_option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '采购月新建SKU数量对比',
        padding: [14, 0, 0, 10]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['五月新建SKU总数','三月新建SKU总数','三月成功数'],
        padding: [16, 0, 0, 0],
    },
    xAxis: [
        {
            type: 'category',
            data: ['采购 A','采购 B','采购 C','采购 D','采购 E','采购 F','采购 G','采购 H','采购 I','采购 J','采购 K','采购 L'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis:  {
        type: 'value'
    },
    series: [
        {
            name:'五月新建SKU总数',
            type:'bar',
            data:[210,175,225,102,205,210,175,225,205,175,225,102],
			color:'#850001'
        },
        {
            name:'三月新建SKU总数',
            type:'bar',
             data:[160,140,160,125,160,140,160,125,160,140,170,125],
			color:'#16C300'
        },
        {
            name:'三月成功数',
            type:'bar',
             data:[103,90,140,60,105,95,140,65,105,85,140,75],
			color:'#8D8D8D'
        }
    ]
};
bar_graph1_myChart.setOption(bar_graph1_option);
//////////// 五月采购金额对比//////////////////
var bar_graph2_dom = document.getElementById('bar_graph2_main');
var bar_graph2_myChart = echarts.init(bar_graph2_dom, 'light');
var bar_graph2_option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '五月采购金额对比',
        padding: [14, 0, 0, 10]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['五月采购金额','五月新品采购金额'],
        padding: [16, 0, 0, 0],
    },
    xAxis: [
        {
            type: 'category',
            data: ['采购 A','采购 B','采购 C','采购 D','采购 E','采购 F','采购 G','采购 H','采购 I','采购 J','采购 K','采购 L'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis:  {
        type: 'value'
    },
    series: [
        {
            name:'五月新建SKU总数',
            type:'bar',
            data:[210,175,225,102,205,210,175,225,205,175,225,102],
			color:'#008284'
        },
        {
            name:'三月新建SKU总数',
            type:'bar',
             data:[160,140,160,125,160,140,160,125,160,140,170,125],
			color:'#B300C9'
        }
    ]
};
bar_graph2_myChart.setOption(bar_graph2_option);