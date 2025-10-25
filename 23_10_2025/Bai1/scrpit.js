document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {
    window.location.href = "../Bai2/index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});
