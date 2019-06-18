const urlDecode = function(text) {
  let propertyKey = [];
  let propertyValue = [];
  let decodedObject = new Object();
  let equalsFound = true;
  let indexOfEquals = -1;
  let remainingSearchSubstring = text;

  while (equalsFound === true) {
    indexOfEquals = remainingSearchSubstring.search("=");
    if (indexOfEquals > 0) {  
      propertyKey.push(remainingSearchSubstring.substring(0, (indexOfEquals)));
      remainingSearchSubstring = remainingSearchSubstring.substring(indexOfEquals + 1);
    } else {
       equalsFound = false;
    }
  }

  console.log(propertyKey);
};




console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);