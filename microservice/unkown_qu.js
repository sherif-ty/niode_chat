const request = require('request-promise')

module.exports = async args => {

	var options_daig = {
		method: 'POST',
		url: 'https://pentavalue-bot.herokuapp.com/chat',
		headers: {
			'cache-control': 'no-cache',
			'content-type': 'application/json'
		},
		body: {
			message: args[0]
		},
		json: true
	};

  let response;

	await request(options_daig).then(res => {
    response = res;
  });

  return response;
}