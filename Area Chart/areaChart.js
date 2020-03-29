var chart=c3.generate({
	dropto: "#chart",
	data: {
		columns: [
			['data1',30,10,50],
			['data2',10,25,30]
		],
		/*
		AreaChart consist of 2 types of chart area and area-spline, area is a region filled with color but the lines are not smooth
		but in area-spline lines are smooth
		*/
		types: {
			data1:'area',
			data2:'area-spline',
		}

	}
});