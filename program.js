// this will output "this is variable using var" because var is gloabal scoped which means it can be used anywhere in the code.
if (true) {
    var varVariale = "this is variable using var";
}
console.log(varVariale);

console.log(a);
// this will output an error because "let" and "const" are block scoped. hence the interpreter doesnot recognise the letVariable outisde of the loop
if(true){
    let letVariable = "this is variable using let "
}
console.log(letVariable);


// var can be redeclared and it wont be an issue. which causes mistakes in the code base.
// const cannot be re-declared and the value cannot be changed 
// let value can be changed 