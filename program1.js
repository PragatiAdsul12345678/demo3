var express = require('express');
var app = express();
var componyController=function (req, res) {
  console.log("CAlling rest api");
  var componies=[
{compony:"fabrikam"},
{total_office:24},
{products:[{p_name:'web app'},{p_name:'web app'}]},
{iaas:"Amazon webservice cloud"},
{cloud_host:"AWS"}
];
  res.send(componies);
};

app.get('/componies',componyController );

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  
})