// CLOSURE AND LEXICAL SCOPING IN JS


function outerFunction() {
    let outerVar = "I'm from the outer function";
    function innerFunction() {
      console.log(outerVar); 
    }
    return innerFunction;
  }
  const closure = outerFunction();
  closure(); 
  
// LEXICAL SCOPING is the property becaus eof which child functions can have access to the resources of the parent function
