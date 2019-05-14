var express = require('express');
var router = express.Router();
var bot = require('../bot');


router.post('/', function(req, res, next) {
  let username = req.body.username;
  let message = req.body.message;
  
	if (typeof(username) === "undefined" || typeof(message) === "undefined") {
    res.status(422).json({
      status: 'error',
      error: "username and message are required keys"
    });
    
    return;
	}
  
  bot.sortReplies();

	bot.reply(username, message, this).then(function(reply) {
		res.json({
			"status": "ok",
			"reply": reply
		});
	}).catch(function(err) {
		res.json({
			"status": "error",
			"error": err
		});
	});
});

module.exports = router;
