const params = new URLSearchParams(window.location.search);
const key = params.get("key");

const work = works.find(w => w.key === key);

// 表示に反映
if (work) {
  document.getElementById("game-title").textContent = work.title;
  const iframe = document.getElementById("game-iframe");
  if (iframe && work.iframeSrc) {
    const separator = work.iframeSrc.includes("?") ? "&" : "?";
    iframe.src = `${work.iframeSrc}${separator}key=${key}`;
  }
  document.getElementById("discript").innerHTML = work.discript.replace(/\n/g, "<br>");;
  document.getElementById("operation").innerHTML = work.operation.replace(/\n/g, "<br>");;
  document.getElementById("other").innerHTML = work.other.replace(/\n/g, "<br>");;
  document.getElementById("creater").innerHTML = work.creater.replace(/\n/g, "<br>");;
  document.getElementById("version").innerHTML = work.version.replace(/\n/g, "<br>");;
} else {
  // エラー処理（例：該当データがない場合）
  document.querySelector(".game").innerHTML = "<p>指定された作品が見つかりませんでした。</p>";
}
