var chart=c3.generate({
	dropto: "#chart",
	data: {
		columns: [
			['data1',30,10,70],
			['data2',45,25,55]
		],
		/*
		StepChart consist of 2 types of chart step and area-step, step is simply the outline and area-step is also same as step
		but with filled colour 
		*/
		types: {
			data1:'step',
			data2:'area-step',
		}

		}
});