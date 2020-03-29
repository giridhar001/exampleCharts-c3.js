var chart=c3.generate({
	dropto: "#chart",
	data: {
		x:'x',
		// xFormat:'%Y%m%d',
		columns: [
			['x','2010-01-01','2015-01-01','2020-01-01'],
			['data1',10,30,20],	
			['data2',20,10,50],	

		],
		
		
	},
	axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
	
});

