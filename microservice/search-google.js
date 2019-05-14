const google = require('google');

google.resultsPerPage = 1
var nextCounter = 0

module.exports = function (query) {
    google(query, function (err, res){
        if (err) console.error(err)
        
        console.log(res.links[0]);
        
        return res.links[0];
    });
}