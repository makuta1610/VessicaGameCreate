const container = document.getElementById("game-container");

// URLから "blockbreaker" のようなキーを抽出
const path = window.location.pathname.split("/").pop();
const key = path.replace(".html", "").toLowerCase();

const work = workDetails[key];

if (work && container) {
  const article1 = document.createElement("article");
  article1.innerHTML = `
    <h1>${work.title}</h1>
    <iframe src="${work.iframeSrc}"></iframe>
  `;

  const article2 = document.createElement("article");
  article2.innerHTML = `
    <h2>ゲーム説明</h2>
    <ul>
      <li><p>概要：${work.description.overview}</p></li>
      <li><p>操作：${work.description.control}</p></li>
      <li><p>作成者:${work.description.creater}</p></li>
      <li><p>バージョン履歴:${work.description.version}</p></li>
    </ul>
  `;

  container.appendChild(article1);
  container.appendChild(article2);
}
