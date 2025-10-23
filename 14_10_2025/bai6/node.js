

function binhPhuong(n) {
  return n * n;
}

function tong1denN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

function soNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}

function daoNguocChuoi(s) {
  return s.split("").reverse().join("");
}

function soLonNhat(arr) {
  return Math.max(...arr);
}

function demNguyenAm(s) {
  let m = s.match(/[aeiou]/gi);
  return m ? m.length : 0;
}

function giaiThua(n) {
  return n === 0 ? 1 : n * giaiThua(n - 1);
}

function namNhuan(y) {
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function tongLe(arr) {
  return arr.filter(x => x % 2 !== 0).reduce((a, b) => a + b, 0);
}

// Kiểm thử nhanh
console.log("Bình phương 5:", binhPhuong(5));
console.log("Tổng 1→10:", tong1denN(10));
console.log("SNT 7:", soNguyenTo(7));
console.log("Đảo 'abc':", daoNguocChuoi("abc"));
console.log("Lớn nhất:", soLonNhat([2, 9, 7]));
console.log("Nguyên âm:", demNguyenAm("hello"));
console.log("5! =", giaiThua(5));
console.log("2024 nhuận?", namNhuan(2024));
console.log("Fibonacci(8):", fibonacci(8));
console.log("Tổng lẻ:", tongLe([1, 2, 3, 4, 5]));
