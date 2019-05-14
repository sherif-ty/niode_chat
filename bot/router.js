const google = require('../microservice/search-google');
const {addUser} = require('../infra_db/add_users');
const unknown = require('../microservice/unkown_qu')
const get_temp= require('../microservice/temp')
//const {addUser,conv} = requier('../infra_db/add_users');
module.exports = {
	searchGoogle: {
		triggers: [
			"google *"
        ],
		args: '"<star>"',
		handler: function(bot, args) {
			return google(args);
		}
	},
	addName: {
		triggers: [
			"انا اسمي *"
		],
		args: '"<star>"',
		handler: (bot, args) => {
			addUser(args);
 
			return "اهلا بيك يا " + args;
		}
	},
	default: {
		triggers: [
			'*',
		],
		args: '"<star>"',
		handler: async (bot, args) => {
			let response = await unknown(args)
			return response.message;
		}
	},
	get_temp:{
		triggers:[
			"درجة الحرارة *",
		],
		args: '"<star>"',
		handler:async (bot, args)=>{
			let response = await get_temp(args);
			console.log(response.weather);

			return response.weather[0].description;
		}
	}
}