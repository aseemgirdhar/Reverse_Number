function reverseInt(x) {
  let rev = 0;
  let pop;

  while (x != 0) {
    pop = x % 10; // 123 % 10 = 12.3
    x = x / 10; //12.3 / 10 = 1.23
    x = parseInt(x); // 1.23 = 1
    rev = rev * 10 + pop; // 0 * 10 + 3 // 0 * 10 + 2 // 0 * 10 + 1 = 321
    console.log(rev);
  }
  return rev;
}
console.log(reverseInt(123));
