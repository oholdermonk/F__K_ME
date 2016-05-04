console.log('The bot is starting');

var Twit = require('twit');
var Firebase = require('firebase')

var config = require('./config');
var T = new Twit(config);

var myFirebaseRef = new Firebase("https://fcku.firebaseio.com");

//setInterval(tweetIt(), 1000*20);


	//var myFirebaseRef = new Firebase("https://fcku.firebaseio.com");


myFirebaseRef.on("child_added", function(snapshot) {
  var words1 = [];
  var words2 = [];
  snapshot.forEach(function(childSnapshot) {
    // key will be "fred" the first time and "barney" the second time
    //var key = childSnapshot.key();
    //console.log(key);
    var childData = snapshot.val();
    words1.push(childData.text);
    words2.push(childData.name);
    console.log(childData.text);
    var thing1= new Firebase(myFirebaseRef+snapshot.key());
    thing1.remove();
  });
  	var num1 = Math.floor(Math.random()*words1.length);
	var num2 = Math.floor(Math.random()*words2.length);
	

console.log(words1.length+" "+words2.length);

var tweet ={
	status: "I am " + words1[num1] +", I am "+ words2[num2]+", I am unique. F*%K U."

}
console.log(tweet);
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
  	console.log(err);
  } else {
    console.log("It worked!");
  }
}
//snapshot.key().set(null);
//myFirebaseRef.remove("https://fcku.firebaseio.com");

 //  	for (i = 0; i < words.length; i++) {
 //    	console.log(words[i]);
	// }

});



// myFirebaseRef.orderKeyBy().on("child_added", function(snapshot) {
// 	console.log(snapshot.val());
// 	var key = snapshot.val();
// 	console.log(key.text);
// 	console.log(snapshot.key());
	




// 	for(var key in ){
// 		console.log(x.text);
// 	}
// 		// var tweet = { 
// 		// 	status: snapshot.val().name
// 		// }
// 		// console.log(tweet);
// 	 //  console.log(snapshot.key() + " was " + key.name + " meters tall");
// });



// myFirebaseRef.on("value", function(snapshot) {
//   	for(var key in snapshot.val()){
//   		var tweet = {
//   			status: key.name
// 		}
// 	T.post('statuses/update', tweet, tweeted);
// }
// function tweeted(err, data, response) {
//   if (err) {
//   	console.log(err);
//   } else {
//     console.log("It worked!");
//   }
// }
// });










