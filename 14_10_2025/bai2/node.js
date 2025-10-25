// =====================
// BÀI 2: CẤU TRÚC ĐIỀU KIỆN
// =====================

//------------------------------------------------------------------

let number = 7;
if (number % 2 === 0) {
  console.log(`${number} là số chẵn`);
} else {
  console.log(`${number} là số lẻ`);
}

//------------------------------------------------------------------
let num = -5;
if (num > 0) console.log(`${num} là số dương`);
else if (num < 0) console.log(`${num} là số âm`);
else console.log(`${num} là số 0`);

//------------------------------------------------------------------
let a = 10, b = 25, c = 18;
let max = a;
if (b > max) max = b;
if (c > max) max = c;
console.log(`Số lớn nhất trong ${a}, ${b}, ${c} là: ${max}`);

//------------------------------------------------------------------
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
  console.log(`${year} là năm nhuận`);
else
  console.log(`${year} không phải năm nhuận`);

//------------------------------------------------------------------
let avg = 8.2;
let grade = "";
if (avg >= 8.5) grade = "Giỏi";
else if (avg >= 7) grade = "Khá";
else if (avg >= 5) grade = "Trung bình";
else grade = "Yếu";
console.log(`Điểm TB: ${avg} → Xếp loại: ${grade}`);

//------------------------------------------------------------------
let kwh = 120;
let cost = 0;
if (kwh <= 50) cost = kwh * 1800;
else if (kwh <= 100) cost = 50 * 1800 + (kwh - 50) * 2000;
else cost = 50 * 1800 + 50 * 2000 + (kwh - 100) * 2500;
console.log(`Tiêu thụ: ${kwh} kWh → Tiền điện: ${cost.toLocaleString()} VNĐ`);

//------------------------------------------------------------------
let char = "e";
let vowels = "aeiouAEIOU";
if (vowels.includes(char))
  console.log(`${char} là nguyên âm`);
else
  console.log(`${char} là phụ âm`);

//------------------------------------------------------------------
let day = 3;
let dayName = "";
switch (day) {
  case 1: dayName = "Thứ Hai"; break;
  case 2: dayName = "Thứ Ba"; break;
  case 3: dayName = "Thứ Tư"; break;
  case 4: dayName = "Thứ Năm"; break;
  case 5: dayName = "Thứ Sáu"; break;
  case 6: dayName = "Thứ Bảy"; break;
  case 0:
  case 7: dayName = "Chủ Nhật"; break;
  default: dayName = "Không hợp lệ"; break;
}
console.log(`Ngày ${day} → ${dayName}`);

console.log("\n--- Kết thúc Bài 2 ---");
