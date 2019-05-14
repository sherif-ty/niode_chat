const request = require('request-promise');
const chalk = require('chalk');

// get the tepruture from api 

module.exports = async function() {

    const options_temp = {
        method: 'GET',
        url: 'https://samples.openweathermap.org/data/2.5/weather',
        qs: {
            q: 'cairo,EG',
            appid: '5ac0b6637344e743549d84d2781a3377'
        },
        headers: {
            'cache-control': 'no-cache'
        }
    };

    let response;
    
    await request(options_temp).then(res => {

        res = JSON.parse(res);
        response = res;  
    }).catch(err => {
        console.error(chalk.red('Exception: ' + err.message));
    });
    
    return response;
}