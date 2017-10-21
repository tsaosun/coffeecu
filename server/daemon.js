
/*var interval = 860; // 1 day
Meteor.setInterval( function () {
  // Randomize order of candidates once a day
  console.log("here");
  var max = PeopleCollection.find().count();
  var min = 1; 
  PeopleCollection.update({}, {$set: {priority: Math.round(Math.random()*(max - min) + min)} });
  // hard code myself into top 3
  PeopleCollection.update({uni: "UNI"}, {$set: {priority: Math.round(Math.random()*(3 - min) + min)} });
}, interval);

*/