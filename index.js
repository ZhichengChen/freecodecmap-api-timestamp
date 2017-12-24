var express = require('express');
var app = express();
var moment = require('moment');

app.get('*', function(req, res, next) {
    var query = decodeURIComponent(req.path.replace('/', ''));
    if (query.match(/\d+/)) {
        query*=1000;
    }
    var date = new Date(query);
    var times = date.getTime();
    var natural = moment(date.getTime()).format('MMMM DD, YYYY');
    if (natural == 'Invalid date') {
        natural = null;
    }
    res.json({
            "unix": times/1000,
            "natural": natural
        });
});

app.listen(8080, function(){
   console.log('Running.'); 
});