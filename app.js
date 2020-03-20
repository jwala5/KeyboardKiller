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
/// random words generation in array

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
var m = wordfall.random();
var j = wordfall.random();
var k = wordfall.random();
var l = wordfall.random();
// changing words in div

function autoRefreshDiv() {
  document.getElementById("word1").innerHTML = m;
  document.getElementById("word2").innerHTML = j;
  document.getElementById("word3").innerHTML = k;
  document.getElementById("word4").innerHTML = l;
}
setInterval(autoRefreshDiv, 1000);

// geting element name from div

var bake = document.getElementById("word1").innerHTML;
console.log(bake);

//function for creating new element if the word matches

function crElement() {
  var element = document.getElementById("arpos").querySelectorAll("div");
  var siv = document.getElementById("arpos").querySelector("div");
  let siv1 = document.createElement("div");
  siv1.textContent(wordfall.random());
  element.replaceChild(siv, siv1);
}

let n;
let b;

var i = 0;
function increment() {
  i++;
  document.getElementById("bron").innerHTML = i;
}
setInterval(increment, 300);
//function for process after submit button is pressed

document.getElementById("submit").onclick = function() {
  n = document.getElementById("myInput").value;
  b = document.getElementById("word1").value;
  if (b == n) {
    crElement();
  }
};
