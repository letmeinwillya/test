var fs = require("fs");
var log = require('loglevel');
const path = require('path');


//setting log levels to INFO
log.setLevel(log.levels.DEBUG);


/**
 * Parses the string representing the single line from the inputfile, looks up its points from the business rules map, stores the corresponding points
 * in another Map
 * @param {*} lineFromFile 
 * @param {*} businessRules 
 * @param {*} inputMap 
 */
function processLine(lineFromFile, businessRules, inputMap) {
  var rating = parseInt(lineFromFile.slice(-1));
  var nameOfFlavor = lineFromFile.substr(0, lineFromFile.length - 2);

  if (inputMap.has(nameOfFlavor)) {
    log.debug(
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
    log.debug(nameOfFlavor + " does not exist" + ", adding points " + points);

    inputMap.set(nameOfFlavor, points); // store name of the flavor as the key and corresponding points as the value
  }
}

/**
 * Accepts array of single records read from the input file. Iterates through the array and processes each line 
 * builds an internal Map and returns it at the end of the process. The returned Map contains Flavor Names as the keys and 
 * effective points as the values
 * @param {*} fileData 
 */
function processInputData(fileData) {
    var inputMapLocal = new Map();
  var rulesEngine = buildRulesEngine();
  for (const singleInputLine of fileData) {
    processLine(singleInputLine, rulesEngine, inputMapLocal);
  }
  return inputMapLocal;
}

/*5 points should be given to an attendee's favorite flavor - favorite flavor denoted as 1 in the input file
  3 points to their second favorite,  - second favorite is denoted by 2
  2 points to their third favorite, 
  1 point to their fourth favorite and 
  0 points to their fifth favorite.
*/
function buildRulesEngine() {
  const favoriteToPointsMapping = new Map();
  favoriteToPointsMapping
    .set(1, 5)
    .set(2, 3)
    .set(3, 2)
    .set(4, 1)
    .set(5, 0);

  return favoriteToPointsMapping;
}

/**
 * Accepts a Map object, uses the spread operator to iterate through the key,value pairs, provides the sort method so it sorts 
 * the mapToSort to a sorted map in descending order. 
 * It takes care of the special case, when two elements have same points but chooses the one with smaller number of characters
 * @param {*} mapToSort 
 */
function sortMap(mapToSort){

/*
    for (var [key, value] of mapToSort) {
        log.debug(key, value);
    }
*/
    let sortedMap = new Map([...mapToSort].sort(([k, v], [k2, v2])=> {
        /*
        log.debug(' k ' + k);
        log.debug(' v ' + v);
        log.debug(' k2 ' + k2);
        log.debug(' v2 ' + v2);
      */

        if (v > v2) {
          return -1;
        }
        if (v < v2) {
          return 1;
        }
        if(v === v2 ){
            log.debug(' v === v2, v: ' + v);
            log.debug(' v === v2, v2: ' + v2);
            log.debug(' k.length: ' + k.length);
            log.debug(' k2.length: ' + k2.length);
            
            if(k.length < k2.length){
                return -1;
            }else{
                return 0;
            }
        }
        return 0; 
      }));

      return sortedMap;
}

/**
 * This function manages the overall Taste Testing system.
 */
function runTestingSystem(){

    var fileName = readCommandLine();

    log.debug('About to read the file: ' + fileName);

    var inputFileData = fs.readFileSync(fileName, "utf-8").split(/\r?\n/);

    var finalPoints = processInputData(inputFileData);

    var sortedMap = sortMap(finalPoints);

    log.debug(sortedMap);

}
/**
 * Reads command line values, assumes the filename will be provided 
 * If no input file name is provided, the program exists with code 1
 * It checks if file exists before return the file name, if the file pointed to be file name given on the command line doesn't exit, 
 * it exists with code 1 and displays the error message on console
 */ 
function readCommandLine(){
    var myArgs = process.argv;
    var fullPathToFile;
    var normalizedFilePath;
    

    if (myArgs.length < 3){
        log.error('Please provide input filename, format: <path to node> <path to input filename>')
        process.exit(1);
    }else{
        fullPathToFile = myArgs[2];
        normalizedFilePath = path.normalize(fullPathToFile);
        log.debug(normalizedFilePath);

        
            log.debug('About to check if file exists: ' + normalizedFilePath);
            //await fs.promises.access(normalizedFilePath);
            if(!fs.existsSync(normalizedFilePath)){
                log.error(normalizedFilePath + ' does not exist');
                process.exit(1);
            }       
    }
    
    return normalizedFilePath;
}

runTestingSystem();