// 1-ODDs from 1 to 20
function odds() {
  for (var i = 1; i <= 20; i += 2) {
    console.log(i);
  }
}
odds();
// 2- Decreasing mutliples of 3
function threemultiples() {
  for (var i = 100; i > 0; i--) {
    if (i % 3 == 0) console.log(i);
  }
}
threemultiples();
// 3-Print the sequence
for (var i = 4; i >= -3.5; i -= 1.5) {
  console.log(i);
}
// 4-Sigma
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
// 5-Factorial
var fact = 1;
for (i = 12; i >= 1; i--) {
  fact = fact * i;
}
console.log(fact);
