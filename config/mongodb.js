const { MongoClient } = require('mongodb');

const url = 'mongodb://admin:admin@127.0.0.1:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        client.connect();
        await console.log("Sucessfully connected");
    }catch(e) {
        await console.log(e);
    }
})();

const db = client.db('testing_native')

module.exports = db;