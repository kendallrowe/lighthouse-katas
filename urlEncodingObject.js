const urlDecode = function(text) {
  let propertyKey = [];
  let propertyValue = [];
  let decodedObject = new Object();
  let currentSubstringPrint = "";

  for (let i = 0; i < text.length; i++) {
    if (text.substring(i).search("%20") === 0) {
      i += 2;
      currentSubstringPrint += " ";
    } else if (text.charAt(i) === "=") {
      propertyKey.push(currentSubstringPrint);
      currentSubstringPrint = "";
    } else if (text.charAt(i) === "&") {
      propertyValue.push(currentSubstringPrint);
      currentSubstringPrint = "";
    } else {
      currentSubstringPrint += text.charAt(i);
    }
  }
  propertyValue.push(currentSubstringPrint);

  propertyKey.forEach(function(currentKey, index){
    decodedObject[currentKey] = propertyValue[index];
  });

  return decodedObject
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);