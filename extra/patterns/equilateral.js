let arg;
export default function equilateral(arg){
if (arg < 2 || arg > 10) {
    console.log('Please enter value between 2 and 10');
    return;
}
else{
    console.log('Print a equilateral with rows ' + arg);
    for (var i = 0; i <= arg-1; i++) {
    var str = '';
    for (var j = 0; j < arg-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
  for (var i = 1; i <= arg; i++) {
    var str = '';
    for (var j = 1; j <= i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*(arg-i))+1; k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
}