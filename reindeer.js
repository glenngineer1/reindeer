var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < colors.length; i++) {
    for (var j = 0; j < reindeer.length; j++) {
      // console.log(colorsList);
      // console.log(reindeerList);
  }
      var colorsList = colors[i];
      var reindeerList = reindeer[i];
      hohohoElement.innerHTML += "<div> " + colorsList + " " + reindeerList + "</div>";
  // hohohoElementRevised = colorsList + " " + reindeerList;
  // console.log(hohohoElementRevised);
  // console.log("", );
  // document.getElementById("reindeer").innerHTML += "<div>" + colorsList + " " + reindeerList + "</div>";
}

