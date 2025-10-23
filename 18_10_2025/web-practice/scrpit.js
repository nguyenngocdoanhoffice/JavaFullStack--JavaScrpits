document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    alert("Vui lòng nhập tên người liên hệ");
    return;
  }
  if (name.length > 100) {
    alert("Tên người liên hệ không được vượt quá 100 ký tự");
    return;
  }

  const phoneRegex = /^[0-9]{10,11}$/; 
  if (!phone) {
    alert("Vui lòng nhập số điện thoại");
    return;
  }
  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ! Vui lòng nhập lại (chỉ gồm 10–11 chữ số).");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    alert("Vui lòng nhập email");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Email không đúng định dạng, vui lòng nhập lại");
    return;
  }

  if (!message) {
    alert("Vui lòng nhập lời nhắn");
    return;
  }

  alert(
    `Cảm ơn ${name} đã liên lạc với chúng tôi.\n\n` +
    `Chúng tôi sẽ liên lạc theo ${phone} hoặc ${email} quý khách đã cung cấp.\n\n` +
    `Lời nhắn: ${message}`
  );
});
