const urlDecode = function(text) {
  let propertyKey = [];
  let propertyValue = [];
  let decodedObject = new Object();
  let moreToSearch = true;
  let indexOfEquals = -1;
  let indexOfAnd = -1;
  let remainingSearchSubstring = text;
  let currentIndex = 0;

  while (moreToSearch === true) {
    indexOfEquals = remainingSearchSubstring.search("=");
    indexOfAnd = remainingSearchSubstring.search("&");

    if (indexOfEquals > -1 && (indexOfEquals < indexOfAnd || indexOfAnd === -1)) {
      propertyKey.push(scrapeSpaces(remainingSearchSubstring.substring(currentIndex,indexOfEquals)))
    }
  }

};

const scrapeSpaces = function(searchString) {
  let spaceIndex = searchString.search("%20");  
  let currentIndex = 0;

  while (spaceIndex > -1) {
    searchString = searchString.substring(currentIndex, spaceIndex) + " " + searchString.substring(spaceIndex + 3);
    spaceIndex = searchString.search("%20");
  }

  return searchString;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);