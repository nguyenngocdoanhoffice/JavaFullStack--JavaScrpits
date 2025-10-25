// =====================
// BÀI 1: BIẾN, KIỂU DỮ LIỆU & TOÁN TỬ
// =====================

// 1. Khai báo 3 biến name, age, isStudent và in ra màn hình
let name = "Nguyen Van A";
let age = 20;
let isStudent = true;

console.log("Tên:", name);
console.log("Tuổi:", age);
console.log("Là sinh viên:", isStudent);

// 2. Nhập vào hai số và in ra tổng, hiệu, tích, thương
let a = 10;
let b = 3;
console.log(`a = ${a}, b = ${b}`);
console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", b !== 0 ? (a / b).toFixed(2) : "Không chia được cho 0");

// 3. Chuyển đổi kiểu dữ liệu: nhập chuỗi "123" và ép sang kiểu số
let strNum = "123";
let num = Number(strNum);
console.log(`Chuỗi "${strNum}" sau khi ép kiểu thành số:`, num);

// 4. Tính chu vi và diện tích hình tròn (bán kính nhập từ bàn phím)
let radius = 5;
let perimeter = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
console.log(`Bán kính = ${radius}, Chu vi = ${perimeter.toFixed(2)}, Diện tích = ${area.toFixed(2)}`);

// 5. Tính BMI = cân nặng / (chiều cao²)
let weight = 68; // kg
let height = 1.7; // m
let bmi = weight / (height * height);
let result = "";
if (bmi < 18.5) result = "Gầy";
else if (bmi < 25) result = "Bình thường";
else if (bmi < 30) result = "Thừa cân";
else result = "Béo phì";
console.log(`BMI = ${bmi.toFixed(2)} → ${result}`);

// 6. Đổi đơn vị: nhập số giây, đổi sang giờ – phút – giây
let totalSeconds = 3665;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(`${totalSeconds}s = ${hours} giờ ${minutes} phút ${seconds} giây`);

// 7. Nhập nhiệt độ °C, chuyển sang °F theo công thức F = C * 9/5 + 32
let celsius = 30;
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// 8. Nhập số tiền VND, đổi sang USD theo tỉ giá cố định
let vnd = 230000;
let rate = 23000; // 1 USD = 23,000 VND
let usd = vnd / rate;
console.log(`${vnd.toLocaleString()} VND = ${usd.toFixed(2)} USD`);

console.log("\n--- Kết thúc Bài 1 ---");
