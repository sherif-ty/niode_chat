const RiveScript = require('rivescript');
const files = require('./files');
const chalk = require('chalk');
const router = require('./router');

const bot = new RiveScript({utf8: true});

for (const callable in router) {
	if (!router.hasOwnProperty(callable)) continue;

	for (var i in router[callable].triggers) {
		bot.stream("+ " + router[callable].triggers[i] + "\n"
			+ "- <call>" + callable + " " + router[callable].args + "</call>\n"
		);
	}

	bot.setSubroutine(callable, router[callable].handler);
}

bot.loadFile(files)
    .catch((error, filename, lineno) => {
        console.log(chalk.red("Exception has been thrown: " + error));
    });
    
module.exports = bot;
