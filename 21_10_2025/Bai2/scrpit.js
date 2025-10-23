const btnThemMon = document.getElementById("btnThemMon");
const monHocContainer = document.getElementById("monHocContainer");
const btnThemLop = document.getElementById("btnThemLop");
const lopSelect = document.getElementById("lop");
const btnThemSV = document.getElementById("btnThemSV");
const tableSV = document.getElementById("tableSV").querySelector("tbody");

let monHocs = [];
let editRow = null;

// Thêm môn học
btnThemMon.addEventListener("click", () => {
  const mon = prompt("Nhập tên môn học:");
  if (mon) {
    if (!monHocs.includes(mon)) {
      monHocs.push(mon);
      const label = document.createElement("label");
      label.className = "ml-2";
      label.innerHTML = `<input type="checkbox" value="${mon}" checked> ${mon}`;
      monHocContainer.appendChild(label);
    } else alert("Môn này đã tồn tại!");
  }
});

// Thêm lớp
btnThemLop.addEventListener("click", () => {
  const lop = prompt("Nhập tên lớp:");
  if (lop) {
    const opt = document.createElement("option");
    opt.value = lop;
    opt.textContent = lop;
    lopSelect.appendChild(opt);
  }
});

// Thêm hoặc cập nhật SV
btnThemSV.addEventListener("click", () => {
  const ten = document.getElementById("tenSV").value.trim();
  const namSinh = document.getElementById("namSinh").value;
  const gioiTinh = document.querySelector('input[name="gioitinh"]:checked').value;
  const lop = lopSelect.value;
  const monhoc = [...monHocContainer.querySelectorAll("input:checked")].map(m => m.value).join(", ");

  if (!ten || !namSinh || !monhoc) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (editRow) {
    editRow.innerHTML = `
      <td>${ten}</td>
      <td>${lop}</td>
      <td>${namSinh}</td>
      <td>${gioiTinh}</td>
      <td>${monhoc}</td>
      <td>
        <button class="btnSua btn">Sửa</button>
        <button class="btnXoa btn">Xóa</button>
      </td>`;
    btnThemSV.textContent = "Thêm sinh viên";
    editRow = null;
  } else {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ten}</td>
      <td>${lop}</td>
      <td>${namSinh}</td>
      <td>${gioiTinh}</td>
      <td>${monhoc}</td>
      <td>
        <button class="btnSua btn">Sửa</button>
        <button class="btnXoa btn">Xóa</button>
      </td>`;
    tableSV.appendChild(row);
  }

  document.getElementById("tenSV").value = "";
  document.getElementById("namSinh").value = "";
  monHocContainer.querySelectorAll("input").forEach(i => i.checked = false);
});

// Sửa / Xóa
tableSV.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnXoa")) {
    e.target.closest("tr").remove();
  }

  if (e.target.classList.contains("btnSua")) {
    editRow = e.target.closest("tr");
    const tds = editRow.querySelectorAll("td");
    document.getElementById("tenSV").value = tds[0].textContent;
    document.getElementById("namSinh").value = tds[2].textContent;
    document.querySelector(`input[value="${tds[3].textContent}"]`).checked = true;
    lopSelect.value = tds[1].textContent;
    monHocContainer.querySelectorAll("input").forEach(input => {
      input.checked = tds[4].textContent.includes(input.value);
    });
    btnThemSV.textContent = "Cập nhật sinh viên";
  }
});
