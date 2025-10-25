document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "admin" && pass === "123456") {
    window.location.href = "../Bai2/index.html"; 
  } else {
    alert("Sai thông tin đăng nhập! (Gợi ý: admin / 123456)");
  }
});
