;(function(window){

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('show-report'));

        // 指定图表的配置项和数据
        myChart.title = '坐标轴刻度与标签对齐';
        option = {
        	title : {
        		text: '内容审核报表',
        		subtext: '副标题...',
        		x:'center'
        	},
        	tooltip : {
        		trigger: 'item',
        		formatter: "{a} <br/>{b} : {c} ({d}%)"
        	},
        	legend: {
        		orient: 'vertical',
        		left: 'left',
        		data: ['未审核','审核通过','审核未通过']
        	},
        	series : [
        	{
        		name: '访问来源',
        		type: 'pie',
        		radius : '55%',
        		center: ['50%', '60%'],
        		data:[
        		{value:335, name:'未审核'},
        		{value:310, name:'审核通过'},
        		{value:234, name:'审核未通过'},
        		
        		],
        		itemStyle: {
        			emphasis: {
        				shadowBlur: 10,
        				shadowOffsetX: 0,
        				shadowColor: 'rgba(0, 0, 0, 0.5)'
        			}
        		}
        	}
        	]
        };



        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
     })(window)