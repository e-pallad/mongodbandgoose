require('dotenv').config();
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name:  { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  var johnDoe = new Person({name: "John Doe", age: 142, favoriteFoods: ["banana", "meat", "puss"]});

  johnDoe.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

var arrayOfPeople = [
  {name: "Maya", age: 5, favoriteFoods: ["raw meat"]},
  {name: "Frank", age: 45, favoriteFoods: ["hookers"]},
  {name: "Steve", age: 32, favoriteFoods: ["beer"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, res) {
    if (err) return console.log(err);
    done(null, res);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, res) {
    if (err) return console.log(err);
    done(null, res);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, res) {
    if (err) return console.log(err);
    done(null, res);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
