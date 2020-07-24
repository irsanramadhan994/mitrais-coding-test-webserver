const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "root",
  database: "user",
  host: "127.0.0.1",
  port: "3306",
  user: "root",
});

let userdb = {};

userdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM user`, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

userdb.insert = (payload) => {
  console.log(payload);
  let dateBirth = payload.date_birth !== '' ? '"'+ payload.date_birth + '"' : null
  let genders =  payload.gender != '' ?payload.gender : 0
 
  return new Promise((resolve, reject) => {
    pool.query(

        `INSERT INTO user (mobile_number,first_name,last_name,date_birth,gender,email) VALUES (` +
        payload.mobile_number +
        ',"' +
        payload.first_name +
        '","' +
        payload.last_name+'",'+dateBirth+','+genders +',"'+payload.email+'")',


      (err, result) => {
        if (err) {
            console.log(err)
            // console.log(err)
          return reject(err);
        }
        return resolve("Data Saved");
      }
    );
  });
};


userdb.login = (payload) =>{
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user WHERE first_name="`+payload.first_name+'" AND email="'+payload.email+'"', (err, result) => {
          if (err) {
              console.log(err)
            return reject(err);
            
          }
          console.log(result)
          return resolve(result);
        });
      });
}

module.exports = userdb;
