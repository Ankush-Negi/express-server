let i: number;
let j: number;
let k: number;
let str: string;
export default function diamond(arg: number): void {
if (arg < 2 || arg >= 10) {
    console.log('Please enter value between 2 and 10');
    return;
}
else {
console.log('Print a eqilateral with rows ' + arg);
for (i = 0; i < arg; i++) {
    str = '';
    for (j = 1; j < arg - i; j++) {
      str = str + ' ';
    }
    for (k = 1; k <= (2 * i + 1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
}