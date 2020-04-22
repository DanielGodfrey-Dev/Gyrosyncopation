const mongoose = require('mongoose');
const dbName = 'gyrosyncopation';

//-------------establish connection---------------------
const database = mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", function() {
console.log('\n');
console.log("*** MongoDB connected ***");
console.log(`10000AD Datacenter_id : ${connection.db.databaseName}`);
});

module.exports = database;