//READ ME: In order to run this from local machine, please copy sample-input.txt file in the same directory as test.js

var fs = require("fs");
//TODO: instead of using a global variable, this should be passed to functions and then updated
var inputMap = new Map();

//TODO:buildRulesEngine() function is called everytime for each line in the input file
function splitLine(lineFromFile) {
  var businessRules = buildRulesEngine();
  var rating = parseInt(lineFromFile.slice(-1));
  var nameOfFlavor = lineFromFile.substr(0, lineFromFile.length - 2);

  if (inputMap.has(nameOfFlavor)) {
    console.log(
      nameOfFlavor +
        " exists" +
        ", adding rating: " +
        rating +
        " to its existing points of " +
        inputMap.get(nameOfFlavor)
    );

    var points = businessRules.get(rating);

    var currentPoints = parseInt(inputMap.get(nameOfFlavor));

    var newPoints = parseInt(currentPoints) + parseInt(points);

    inputMap.set(nameOfFlavor, newPoints);
  } else {
    let points = businessRules.get(rating);
    console.log(nameOfFlavor + " does not exist" + ", adding points " + points);

    inputMap.set(nameOfFlavor, points); // store name of the flavor as the key and corresponding points as the value
  }
}

/*5 points should be given to an attendee's favorite flavor - favorite flavor denoted as 1 in the input file
  3 points to their second favorite,  - second favorite is denoted by 2
  2 points to their third favorite, 
  1 point to their fourth favorite and 
  0 points to their fifth favorite.
*/
function buildRulesEngine() {
  var favoriteToPointsMapping = new Map();
  favoriteToPointsMapping
    .set(1, 5)
    .set(2, 3)
    .set(3, 2)
    .set(4, 1)
    .set(5, 0);

  return favoriteToPointsMapping;
}

var map = new Map();

var inputFileData = fs.readFileSync("sample-input.txt", "utf-8").split(/\r?\n/);

var rulesEngine = buildRulesEngine();

for (const singleInputLine of inputFileData) {
  //console.log(singleInputLine);
  splitLine(singleInputLine);
}

console.log("Done ");

console.log("New Mappings: ");

//TODO: The output map should be ordered in Descending order on the values. For example, the highest points given to a flavor should come first
//If two flavors have same points, the one with shorter name should appear first in the list

console.log(inputMap);

console.log("New Mappings Done ");
