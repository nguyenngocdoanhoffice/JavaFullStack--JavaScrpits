const btnThemMon = document.getElementById("btnThemMon");
const monHocContainer = document.getElementById("monHocContainer");
const btnThemLop = document.getElementById("btnThemLop");
const lopSelect = document.getElementById("lop");
const btnThemSV = document.getElementById("btnThemSV");
const tableSV = document.getElementById("tableSV").querySelector("tbody");

let monHocs = JSON.parse(localStorage.getItem("subjects")) || [];
let lops = JSON.parse(localStorage.getItem("classes")) || ["A", "B", "C"];
let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;


function renderSubjects() {
  monHocContainer.innerHTML = "";
  monHocs.forEach(subject => {
    const label = document.createElement("label");
    label.className = "ml-2";
    label.innerHTML = `<input type="checkbox" value="${subject}"> ${subject}`;
    monHocContainer.appendChild(label);
  });
}

function renderClasses() {
  lopSelect.innerHTML = "";
  lops.forEach(lop => {
    const opt = document.createElement("option");
    opt.value = lop;
    opt.textContent = lop;
    lopSelect.appendChild(opt);
  });
}


function renderStudents() {
  tableSV.innerHTML = "";
  students.forEach((sv, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${sv.name}</td>
      <td>${sv.class}</td>
      <td>${sv.birth}</td>
      <td>${sv.gender}</td>
      <td>${sv.subjects.join(", ")}</td>
      <td>
        <button class="btnSua btn" data-index="${index}">Sửa</button>
        <button class="btnXoa btn" data-index="${index}">Xóa</button>
      </td>
    `;
    tableSV.appendChild(row);
  });
}

renderSubjects();
renderClasses();
renderStudents();


btnThemMon.addEventListener("click", () => {
  const mon = prompt("Nhập tên môn học:");
  if (mon && !monHocs.includes(mon)) {
    monHocs.push(mon);
    localStorage.setItem("subjects", JSON.stringify(monHocs));
    renderSubjects();
  } else {
    alert("Môn đã tồn tại hoặc không hợp lệ!");
  }
});


btnThemLop.addEventListener("click", () => {
  const lop = prompt("Nhập tên lớp:");
  if (lop && !lops.includes(lop)) {
    lops.push(lop);
    localStorage.setItem("classes", JSON.stringify(lops));
    renderClasses();
  } else {
    alert("Lớp đã tồn tại hoặc không hợp lệ!");
  }
});


btnThemSV.addEventListener("click", () => {
  const ten = document.getElementById("tenSV").value.trim();
  const namSinh = document.getElementById("namSinh").value;
  const gioiTinh = document.querySelector('input[name="gioitinh"]:checked').value;
  const lop = lopSelect.value;
  const monhoc = [...monHocContainer.querySelectorAll("input:checked")].map(m => m.value);

  if (!ten || !namSinh || monhoc.length === 0) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const svData = {
    name: ten,
    birth: namSinh,
    gender: gioiTinh,
    class: lop,
    subjects: monhoc
  };

  if (editIndex !== null) {
    students[editIndex] = svData;
    btnThemSV.textContent = "Thêm sinh viên";
    editIndex = null;
  } else {
    students.push(svData);
  }

  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();

  document.getElementById("tenSV").value = "";
  document.getElementById("namSinh").value = "";
  monHocContainer.querySelectorAll("input").forEach(i => i.checked = false);
});

tableSV.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnXoa")) {
    const index = e.target.dataset.index;
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();
  }

  if (e.target.classList.contains("btnSua")) {
    const index = e.target.dataset.index;
    const sv = students[index];

    document.getElementById("tenSV").value = sv.name;
    document.getElementById("namSinh").value = sv.birth;
    document.querySelector(`input[value="${sv.gender}"]`).checked = true;
    lopSelect.value = sv.class;

    monHocContainer.querySelectorAll("input").forEach(input => {
      input.checked = sv.subjects.includes(input.value);
    });

    btnThemSV.textContent = "Cập nhật sinh viên";
    editIndex = index;
  }
});
