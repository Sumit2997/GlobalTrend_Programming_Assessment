let ans = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    ans.push("FizzBuzz");
  } else if (i % 3 === 0) {
    ans.push("Fizz");
  } else if (i % 5 === 0) {
    ans.push("Buzz");
  } else {
    ans.push(i);
  }
}
console.log(ans);
