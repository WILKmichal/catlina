const con = require('./1variableEnvironment')

data = {}

data.verifDuplicataUser = (COURRIEL) => {
    return new Promise((resolve, reject) => {

        con.query(" SELECT * FROM user WHERE COURRIEL = '" + COURRIEL + "'", (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}


data.register = (keys, data) => {
    return new Promise((resolve, reject) => {

        con.query('INSERT INTO user(' + keys + ') VALUES(' + data + '); ', (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}


data.getID = (COURRIEL) => {
    return new Promise((resolve, reject) => {

        con.query("SELECT ID_USER FROM user WHERE COURRIEL ='" +COURRIEL + "'", (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}


data.photoInsert = (IDuser , photo) => {
    return new Promise((resolve, reject) => {

        con.query("INSERT INTO PHOTO(PATH_IMG,ID_PATH) VALUES('"+ photo + "','"+ IDuser + "');", (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)

        })
    })

}


module.exports = data;