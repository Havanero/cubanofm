var express = require('express');
 
var cubano = express();
 
cubano.get('/', function (req, res) {
  res.send('Under Construction..Coming soon!');
});
 
cubano.listen(process.env.PORT || 5000);
 
module.exports = cubano;
