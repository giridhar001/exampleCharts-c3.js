var chart=c3.generate({
	dropto: "#chart",
	data: {
		columns: [
		// if you give only one data then there will be only one gauge otherwise no. of gauge is equal to the number of datas.
			['data1',30,50,60,20],
			['data2',10,45,68,90],
			['data3',50,60,70,80],
			['data4',20,35,60,65],
		
		],
		// type:'bar',
		types: {
			'data2':'bar',
			'data1':'bar',
			'data4':"area-spline",
		},
		groups:[
			['data1','data2'],
		]
		
	},
	
});