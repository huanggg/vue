option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: { //鼠标悬停提示内容
                    trigger: 'axis',
                  
                },
                legend: {
                    y: '20px',
                    data: ['标准保费', '增长'],
                    // selectedMode: false,
                },
                xAxis: [
                    //X轴
                     {
                     type: 'category',
                        data: [1, 2, 3, 4, 5, 6],
                       
                    
                    
                   },
                  //x轴显示两组数据  第2个X轴
                     {
                        type: 'category',
                      axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false, interval: 0},
                      splitArea: {show: false},
                      splitLine: {show: false},
                     data: [1, 2, 3, 4, 5, 6],
                    }
                ],
                
                yAxis: [ //两个y轴  左边y轴
                    {
                        type: 'value',
                        name: "标准保费",

                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}% '
                        },
                        splitNumber: 10,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        // max: 100,
                        // interval: 10,
                    },
                   
                    //右边y轴
                    {
                        type: 'value',
                        name: "增长",
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}'
                        },
                        splitNumber: 10,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        // max: 100,
                        // interval: 10,
                    }
                ],
                series: [ //用于指定图标显示类型
                 //第一个柱状图的数据
                    {
                        name: '标准保费',
                        type: 'line',
                      
                      
                        data: [100,200, 30, 90,210,110]
                    },
                       //第二个柱状图的数据
               
                    
                    {
                        name: '增长',
                        type: 'line',
                    
                       
                        yAxisIndex: '1',      
                       
                        data: [3, 6, 8, 5, 7, 10]
                    },
                ]
};
