

//------------------------------------------------------------------
let random = Math.floor(Math.random() * 100) + 1;
let guess = 50; // demo cố định
if (guess === random) console.log("Đoán đúng!");
else if (guess > random) console.log("Số bạn đoán lớn hơn!");
else console.log("Số bạn đoán nhỏ hơn!");
console.log(`(Số đúng là ${random})`);

//------------------------------------------------------------------
let scores = [7, 8.5, 9, 5.5, 6];
let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
console.log(`Điểm TB: ${avg}`);
console.log("Cao nhất:", Math.max(...scores));
console.log("Thấp nhất:", Math.min(...scores));

//------------------------------------------------------------------
let d = 28, m = 2, y = 2024;
let date = new Date(y, m - 1, d);
date.setDate(date.getDate() + 1);
console.log(
  `Ngày kế tiếp của ${d}/${m}/${y} là: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
);

//------------------------------------------------------------------
let name = "   nguyễn văn a ";
let normalized = name
  .trim()
  .split(/\s+/)
  .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
  .join(" ");
console.log("Tên chuẩn:", normalized);

//------------------------------------------------------------------
let prizes = ["Xe máy", "Điện thoại", "Laptop", "Voucher"];
let lucky = prizes[Math.floor(Math.random() * prizes.length)];
console.log("Chúc mừng bạn trúng:", lucky);
