

//------------------------------------------------------------------
for (let i = 1; i <= 100; i++) console.log(i);

//------------------------------------------------------------------
for (let i = 2; i <= 100; i += 2) console.log(i);

//------------------------------------------------------------------
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) sum += i;
console.log(`Tổng từ 1 đến ${n} = ${sum}`);

//------------------------------------------------------------------
let fact = 1;
for (let i = 1; i <= n; i++) fact *= i;
console.log(`${n}! = ${fact}`);

//------------------------------------------------------------------
for (let i = 1; i <= 10; i++) {
  console.log(`\nBảng nhân ${i}`);
  for (let j = 1; j <= 10; j++) console.log(`${i} x ${j} = ${i * j}`);
}

//------------------------------------------------------------------
let fib = [0, 1];
let length = 10;
for (let i = 2; i < length; i++) fib.push(fib[i - 1] + fib[i - 2]);
console.log(`Dãy Fibonacci (${length} phần tử):`, fib);

//------------------------------------------------------------------
let num = 12345;
let total = 0;
while (num > 0) {
  total += num % 10;
  num = Math.floor(num / 10);
}
console.log(`Tổng chữ số: ${total}`);

//------------------------------------------------------------------
let count = 0, x = 987654;
while (x > 0) {
  count++;
  x = Math.floor(x / 10);
}
console.log(`Số có ${count} chữ số`);

//------------------------------------------------------------------
let original = 12345, reversed = 0;
while (original > 0) {
  reversed = reversed * 10 + (original % 10);
  original = Math.floor(original / 10);
}
console.log(`Số đảo ngược: ${reversed}`);

//------------------------------------------------------------------
let check = 17;
let isPrime = check > 1;
for (let i = 2; i <= Math.sqrt(check); i++) {
  if (check % i === 0) isPrime = false;
}
console.log(`${check} ${isPrime ? "là" : "không là"} số nguyên tố`);
