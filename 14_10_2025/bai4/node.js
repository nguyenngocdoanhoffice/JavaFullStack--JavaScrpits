//------------------------------------------------------------------


let arr = [5, 8, 12, 3, 9];

//------------------------------------------------------------------
let sum = arr.reduce((a, b) => a + b, 0);
console.log("Tổng phần tử:", sum);

//------------------------------------------------------------------
console.log("Lớn nhất:", Math.max(...arr));
console.log("Nhỏ nhất:", Math.min(...arr));

//------------------------------------------------------------------
let evenCount = arr.filter(x => x % 2 === 0).length;
console.log("Số lượng phần tử chẵn:", evenCount);

//------------------------------------------------------------------
console.log("Trung bình cộng:", sum / arr.length);

//------------------------------------------------------------------
let students = ["Huy", "An", "Dũng", "Bình"];
students.sort();
console.log("Sắp xếp A–Z:", students);

//------------------------------------------------------------------
let arr2 = [20, 30, 40];
let merged = arr.concat(arr2);
console.log("Mảng sau khi nối:", merged);

//------------------------------------------------------------------
let dup = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(dup)];
console.log("Không trùng lặp:", unique);

//------------------------------------------------------------------
let x = 12;
console.log(`Vị trí của ${x}:`, arr.indexOf(x));

//------------------------------------------------------------------
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) reversed.push(arr[i]);
console.log("Mảng đảo ngược:", reversed);

//------------------------------------------------------------------
let oddSum = arr.filter(x => x % 2 !== 0).reduce((a, b) => a + b, 0);
console.log("Tổng các số lẻ:", oddSum);
