let k: number;
let str: string;
let i: number;
let j: number;
export default function equilateral(arg: number): void {
if (arg < 2 || arg > 10) {
    console.log('Please enter value between 2 and 10');
    return;
}
else {
    console.log('Print a equilateral with rows ' + arg);
    for (i = 0; i <= arg - 1; i++) {
    str = '';
    for (j = 0; j < arg - i; j++) {
      str = str + ' ';
    }
    for (k = 1; k <= (2 * i + 1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
  for (i = 1; i <= arg; i++) {
    str = '';
    for (j = 1; j <= i; j++) {
      str = str + ' ';
    }
    for (k = 1; k <= ( 2 *  ( arg - i) ) + 1; k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
}