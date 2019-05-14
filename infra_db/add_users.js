const mysql = require('mysql')
// add users to the DB by name 

//  if ((userinput.irncludes("انا اسمي"))){
  module.exports.addUser = (username) => {
    //let username =((await reply).substring(10));
    // let username= userinput.substring(8);
    console.log(username)
      //connect to DB
      let connection = mysql.createConnection({
        host: 'penta-test.com',
        user: 'pentatest',
        password: '9r/nqX8UkJ,9.S)E',
        database: 'pentates_chatbot'
      })
      connection.connect(function(err) {
  
        if (err) throw err;
        console.log("Connected!");
        let sql = `INSERT INTO qusetions_set (id, questions, answer) VALUES (' ', 'user namedb', '${username}' )`;
        connection.query(sql, function(err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          //  ask();
  
        })
  
        connection.end();        
      })
  }


       
       

