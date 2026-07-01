// ===== 拍手ボタンの設定 =====

// お礼ページのファイル名を、この [ ] の中に並べます。
// 増やしたいときは "thanks/04.html" のように , で区切って足してください。
const thanksPages = [
  "thanks/01.html",
  "thanks/02.html",
  "thanks/03.html"
];

// 1日に押せる上限回数
const dailyLimit = 10;

// ===== ここから下は基本さわらなくてOK =====

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("clapBtn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    // 今日の日付を「2026-7-1」のような文字にする
    const today = new Date().toLocaleDateString();

    // ブラウザに記録された「最後に押した日」と「その日の回数」を読み込む
    let savedDate = localStorage.getItem("clapDate");
    let count = Number(localStorage.getItem("clapCount")) || 0;

    // 日付が変わっていたら回数をリセット
    if (savedDate !== today) {
      count = 0;
      savedDate = today;
    }

    // 上限に達していたら、飛ばさずにメッセージだけ出す
    if (count >= dailyLimit) {
      alert("今日はもう十分いただきました。ありがとうございます！\nまた明日、押していただけたら嬉しいです。");
      return;
    }

    // 回数を1増やして記録
    count = count + 1;
    localStorage.setItem("clapDate", savedDate);
    localStorage.setItem("clapCount", count);

    // お礼ページをランダムに1つ選んで移動する
    const pick = thanksPages[Math.floor(Math.random() * thanksPages.length)];
    window.location.href = pick;
  });
});
