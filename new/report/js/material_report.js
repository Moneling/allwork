;(function(window){

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('show-report'));

        // 指定图表的配置项和数据
        myChart.title = '坐标轴刻度与标签对齐';

        option = {
        	color: ['#3398DB'],
        	tooltip : {
        		trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
         }
      },
      grid: {
      	left: '3%',
      	right: '4%',
      	bottom: '3%',
      	containLabel: true
      },
      xAxis : [
      {
      	type : 'category',
      	data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      	axisTick: {
      		alignWithLabel: true
      	}
      }
      ],
      yAxis : [
      {
      	type : 'value'
      }
      ],
      series : [
      {
      	name:'直接访问',
      	type:'bar',
      	barWidth: '60%',
      	data:[10, 52, 200, 334, 390, 330, 220]
      }
      ]
   };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
     })(window)