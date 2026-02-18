// 画面を監視して、要素が入ってきたら実行する「目印」を作ります
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // もし要素が画面内に10%以上入ってきたら
    if (entry.isIntersecting) {
      // CSSで動かすための「is-show」クラスを合体させる
      entry.target.classList.add('is-show');
    }
  });
}, {
  // 0.1（10%）見えたら動き出す設定
  threshold: 0.1 
});

// HTMLの中から「fade-up」という名前がついた場所をすべて探して、監視を開始します
document.querySelectorAll('.fade-up').forEach((el) => {
  observer.observe(el);
});

window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};

window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};


// 1. スクロールアニメーションの設定
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // 2. ローディング画面を消す設定
  function stopLoading() {
    const spinner = document.getElementById("loading");
    if (spinner) {
      spinner.classList.add("loaded");
    }
  }

  // ページが完全に読み込まれたら消す
  window.addEventListener('load', stopLoading);

  // 【追加】もし読み込みが遅くても5秒後には強制的に消す（保険）
  setTimeout(stopLoading, 5000);
