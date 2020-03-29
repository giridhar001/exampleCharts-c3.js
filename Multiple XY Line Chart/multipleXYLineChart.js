// Multiple line charts with multiple custom x
var chart=c3.generate({
	dropto: "#chart",
	data: {
		// specify the keys of the x values for each data
		xs:{
			'data1':'x',
			'data2':'x1',

		},
		
		columns: [
			['x','50','60','80'],
			['x1','30','45','70'],
			['data1',10,30,20],	
			['data2',20,10,50],	
		],	
	}
	
});

