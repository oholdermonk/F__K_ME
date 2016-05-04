// our firebase reference
var data = new Firebase('https://booktracker.firebaseio.com/');


// On change get data
data.on("value", function(snapshot) {
  var context = snapshot.val();

  var source   = $("#home-template").html();
  var template = Handlebars.compile(source);
  var html = template(context);

  console.log(context);
  $("#yield").html(html);
}); 


//Event Method
$("#submit").click(function(){

  var book = {
      title: null, 
      author: null, 
      genre: null
  }

  book.title = $("#title").val();
  book.author = $("#author").val();
  book.genre = $("#genre").val();

  data.child("books").push(book);
});
