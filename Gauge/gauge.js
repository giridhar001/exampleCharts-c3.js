var chart=c3.generate({
	dropto: "#chart",
	data: {
		columns: [
		// if you give only one data then there will be only one gauge otherwise no. of gauge is equal to the number of datas.
			['data1',30],
			['data2',10],
			['data3',50],
		
		],
		type:'gauge',
		
	},
	gauge:{
			title:'donut',
		}
});