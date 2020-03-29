var chart=c3.generate({
	dropto: "#chart",
	data: {
		columns: [
			['data1',300,500,700],
			['data2',450,100,55],
		],
		regions:{
			'data1': [{'start':0,'end':1,'style':'dashed'},{'start':3}],
			'data2': [{'start':1,'style':'dashed'}],
		}

	}
})