// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  window.names = names;
}
)(window);


for (var i = 0; i < names.length; i++) {
  if (names[i][0] === "J") {
    byeSpeaker.speak(names[i])
  } else {
    helloSpeaker.speak(names[i])
  }
}