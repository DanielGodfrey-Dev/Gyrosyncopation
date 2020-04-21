const mongoose = require('mongoose');
const dbName = 'gyrosyncopation';


//-------------establish connection---------------------
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", function() {
console.log("*** MongoDB connected ***");
console.log(`Our Current Database Name : ${connection.db.databaseName}`);
});

//------------------------------------------------------
//import model
const Node = require('./schema');

//___________generates fakes______
const faker = require('faker');
//________________________________

handleError = function(err) {

  console.log('\n');
  console.log('Database error log below:');
  console.log('\n');
  console.error(err);
  console.log('\n');
  throw new Error('full database population and/or re-seeding failed.\n');

}

const names = 
['Kim ' + faker.hacker.noun(),
'Bradley ' + faker.hacker.noun(), 
'Laura ' + faker.hacker.noun(), 
'Austin ' + faker.hacker.noun(), 
'Richard ' + faker.hacker.noun(), 
'Summer ' + faker.hacker.noun(), 
'Steven ' + faker.hacker.noun(), 
'Dennis ' + faker.hacker.noun(), 
'Pete ' + faker.hacker.noun(), 
]

const getRandomStat = () => {
  return Math.ceil(Math.random() * 6);
}

populate = function() {

  //drop database for re-seeding
  connection.once("open", function() {
    mongoose.connection.db.dropDatabase(
    console.log(`clearing current entries`)
    );
  });

  for (let i = 1; i < 9; i++) {

    let node = new Node({
      index: i,
      name: names[i],
      friendNodeProcessor: getRandomStat(),
      friendNodeRAM: getRandomStat(),
      friendNodeQuantum: getRandomStat()
    });

    node.save(function (err) {
      if (err) {
        return handleError(err);
      }
    });
  }

  //gives time to throw error and stop process
  setTimeout(() => {
    console.log('database seeded.');
    process.exit();
  }, 2000);

};

populate();

