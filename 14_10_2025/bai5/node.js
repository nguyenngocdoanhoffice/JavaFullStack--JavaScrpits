
let str = "xin chào javascript";

//------------------------------------------------------------------
console.log("Số ký tự:", str.length);

//------------------------------------------------------------------
console.log("Viết hoa ký tự đầu:", str.charAt(0).toUpperCase() + str.slice(1));

//------------------------------------------------------------------
let vowels = str.match(/[aeiouàáảãạăâêôơư]/gi);
console.log("Số nguyên âm:", vowels ? vowels.length : 0);

//------------------------------------------------------------------
let text = "madam";
let isPalindrome = text === text.split("").reverse().join("");
console.log(`${text} ${isPalindrome ? "là" : "không là"} palindrome`);

//------------------------------------------------------------------
console.log(str.split(" "));

//------------------------------------------------------------------
let s1 = "Hello", s2 = "World";
console.log("Nối chuỗi:", s1 + " " + s2);

//------------------------------------------------------------------
console.log("Thay a → @:", str.replace(/a/g, "@"));

//------------------------------------------------------------------
console.log("Có chứa 'JS'?", str.includes("JS"));

//------------------------------------------------------------------
console.log("5 ký tự đầu:", str.slice(0, 5));

//------------------------------------------------------------------
console.log("Đảo ngược:", str.split("").reverse().join(""));
