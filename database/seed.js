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
['Kim ' + faker.hacker.abbreviation(),
'Bradley ' + faker.hacker.abbreviation(), 
'Laura ' + faker.hacker.abbreviation(), 
'Austin ' + faker.hacker.abbreviation(), 
'Richard ' + faker.hacker.abbreviation(), 
'Summer ' + faker.hacker.abbreviation(), 
'Steven ' + faker.hacker.abbreviation(), 
'Dennis ' + faker.hacker.abbreviation(), 
'Jordan ' + faker.hacker.abbreviation(),
'TJ ' + faker.hacker.abbreviation(), 
'Alex ' + faker.hacker.abbreviation(), 
'Michelle ' + faker.hacker.abbreviation(), 
'Rory ' + faker.hacker.abbreviation(), 
'Jacky ' + faker.hacker.abbreviation(), 
'Craig ' + faker.hacker.abbreviation(), 
'Rodrigo ' + faker.hacker.abbreviation(), 
'Jon ' + faker.hacker.abbreviation(), 
'Nicole ' + faker.hacker.abbreviation(), 
'Kelsey ' + faker.hacker.abbreviation(), 
'Joel ' + faker.hacker.abbreviation(),
'Phuc ' + faker.hacker.abbreviation(),
'Aston ' + faker.hacker.abbreviation(),
'Yas ' + faker.hacker.abbreviation(),
'Marcus ' + faker.hacker.abbreviation(),
'Marvin ' + faker.hacker.abbreviation()
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

  for (let i = 0; i < names.length; i++) {

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

