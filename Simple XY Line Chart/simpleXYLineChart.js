// this is simple line chart with custom x
var chart=c3.generate({
	dropto: "#chart",
	data: {
		x:'x',
		
		columns: [
			['x','50','60','80'],
			['data1',10,30,20],	
			['data2',20,10,50],	
		],	
	}
	
});

