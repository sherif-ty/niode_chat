// save users conversion from DB
const mysql = require('mysql');
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path')


app.use("/getconv",function(res,req){

let connection = mysql.createConnection({
    host: 'penta-test.com',
    user: 'pentatest',
    password: '9r/nqX8UkJ,9.S)E',
    database: 'pentates_chatbot',
})
connection.connect(function(err) {    
    let sql = "SELECT statements.`name` as q , statement_responses.`name` as a FROM `statements` , `statement_responses` WHERE `statements`.`id` = `statement_responses`.`statement_id`";
    connection.query(sql, function(err, result, fields) {

        const file = path.resolve(__dirname, '../brain/training.rive');
        result.forEach(record => {
            let lines = "+ " + record.q + "\n";
            lines += "- " + record.a + "\n\n";

            fs.appendFile(file, lines, 'utf8', err => {
                if (err) {
                    console.error('Exception: ' + err.message);
                }
            })
        })

        console.log('Done...');
        




        
        

    })
    connection.end();
})

})


const server = app.listen(3000 || process.env.port, function () {
  const host = server.address().address
  const  port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})
