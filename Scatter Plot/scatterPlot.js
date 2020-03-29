var chart = c3.generate({
    data: {
        xs: {
            'data': 'x',
            'data1': 'x1',
        },
        
        columns: [
            ['x',50,60,80,100,110,120],
            ['x1',30,45,70,90,99,130],
            ['data',10,30,20,35,65,76], 
            ['data1',20,10,50,78,98,56], 
        ],
        type: 'scatter'
    },
});