var chart=c3.generate({
	dropto: "#chart",
	data: {
		columns: [
			['data1',30,10,70],
			['data2',45,25,55],
		],
		type:"spline",

	}
})