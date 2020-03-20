var wordfall = [
  "apple",
  "orange",
  "mango",
  "sweet",
  "banana",
  "tree",
  "shoe",
  "love",
  "friends",
  "bread",
  "clothes",
  "market",
  "jet",
  "made",
  "great",
  "ocean",
  "country",
  "market",
  "history",
  "geography",
  "science",
  "google",
  "brain",
  "spine",
  "nervous"
];
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
wordfall.random();

var bake = document.getElementById("word1").innerHTML;
console.log(bake);

let button = document.getElementById("thewords");
button.addEventListener("click", myFunction);

function myFunction() {
  let n = document.getElementById("myInput").value;
  return n;
}
console.log(myFunction);

// document.querySelector('form.inp').addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     console.log(nameInput.value);
// });
// var inputVal = document.getElementById("MyInput").addEventListener( "keydown", function( e ) {
//     var keyCode = e.keyCode || e.which;
//     if ( keyCode === 13 ) {
//        // enter pressed
//        get();
//     }
// }, false);

// console.log(inputVal);
