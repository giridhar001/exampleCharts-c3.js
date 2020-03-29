var chart=c3.generate({
	dropto: "#chart",
	data: {
		columns: [
			['data1',30,10,50],
			['data2',10,25,30],
			['data3',50,30,35],
		],
		
		
		types: {
			data1:'area-spline',
			data2:'area-spline',
			data3:'area-spline',
		},
		groups:[['data1','data2','data3']]

	}
});