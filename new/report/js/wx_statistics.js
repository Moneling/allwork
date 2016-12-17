;(function(window){

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('show-report'));

        // 指定图表的配置项和数据
        myChart.title = '坐标轴刻度与标签对齐';

       option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['访问量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['12月1日','12月2日','12月3日','12月4日','......','12月28日','12月29日','12月30日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
       {
            name:'访问量',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210, 210]
        },
    ]
  
   };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
     })(window)