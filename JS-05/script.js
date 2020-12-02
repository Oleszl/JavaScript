function makeBuffer() {
    let text = '';
  
    function buffer(param) {
      if (arguments.length == 0) { 
        return text;
      }
      text += param;
    }
  
    buffer.clear = function() {
      text = "";
    };
  
    return buffer;
  };

  var buffer = makeBuffer();

buffer("JavaScript");
buffer(" вчити");
buffer(" потрібно");
console.log(buffer());
buffer.clear();
console.log(buffer());

