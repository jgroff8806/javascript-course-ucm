var sum = [1, 2, 5, 15, 25, 50].reduce(add, 0);

function add(a, b) {
  return a + b;
}

console.log(sum);
