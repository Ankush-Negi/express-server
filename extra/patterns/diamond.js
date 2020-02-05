let arg;
export default function diamond(arg){
if (arg < 2 || arg >= 10) {
    console.log('Please enter value between 2 and 10');
    return;
}
else{
console.log('Print a eqilateral with rows ' + arg);
for (var i = 0; i < arg; i++) {
    var str = '';
    for (var j = 1; j < arg-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
}