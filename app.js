var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var testdata = 1;
var y = 210;
var i =1;
var stringData ="";
var data = [[1,  1500],
    [2,  900],
    [3,  1300],
    [4,  800],
    [5,  2000],
    [6,  1500],
    [7,  1200],
    [8,  1000],
    [9,  1400],
    [10,  135],
    [11,  1500],
    [12,  1300],
    [13,  1200],
    [14,  1100],
    [15,  1170],
    [16,  1170],
    [17,  900],
    [18,  1030],
    [19,  300],
    [20,  660],
    [21,  660],
    [22,  660],
    [23,  660],
    [24,  660]
  ];

app.get('/connect', function(req, res){

    res.writeHead(200, {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
	  'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
	var interval = setInterval(function(){

		testdata++;
		if(i==24){
			i=1;
		}
		console.log('x: ' + testdata + 'y: '+data[i][1]);
		res.write("data: {\"x\":"+testdata+",\"y\":"+data[i][1]+" } \n\n");
		i++;
		
    }, 6000);
	
	req.connection.addListener("close", function () {
      clearInterval(interval);
    }, false);
	
});

/*
app.post('/message', function(req, res) {
  testdata = req.body;
});
//*/


app.listen(8080, function() {
  console.log("Running at Port 8080" );
});