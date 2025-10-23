const postList = document.getElementById("postList");
const loadingText = document.getElementById("loadingText");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");

let postsData = []; 

async function fetchPosts() {
  try {
    loadingText.textContent = "Đang tải...";
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    postsData = data.slice(0, 10); // chỉ lấy 10 bài đầu
    renderPosts(postsData);
  } catch (err) {
    loadingText.textContent = "Lỗi tải dữ liệu!";
  } finally {
    loadingText.style.display = "none";
  }
}

function renderPosts(list) {
  postList.innerHTML = "";
  if (list.length === 0) {
    postList.innerHTML = `<li class="text-center text-gray-500">Không tìm thấy bài viết nào</li>`;
    return;
  }
  list.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3 class="font-semibold text-lg text-emerald-600">${post.title}</h3>
      <p class="text-gray-700 text-sm">${post.body}</p>
    `;
    postList.appendChild(li);
  });
}

function searchPosts() {
  const keyword = searchInput.value.toLowerCase();
  const filtered = postsData.filter(post => post.title.toLowerCase().includes(keyword));
  renderPosts(filtered);
}

btnSearch.addEventListener("click", searchPosts);
searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") searchPosts();
});

fetchPosts();
