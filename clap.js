// ===== 拍手ボタンの設定 =====

// お礼ページのファイル名を、この [ ] の中に並べます。
// 増やしたいときは "thanks/04.html" のように , で区切って足してください。
const thanksPages = [
  "thanks/01.html",
  "thanks/02.html",
  "thanks/03.html"
];

// ===== ここから下は基本さわらなくてOK =====

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("clapBtn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    // お礼ページをランダムに1つ選んで移動する
    const pick = thanksPages[Math.floor(Math.random() * thanksPages.length)];
    window.location.href = pick;
  });
});
