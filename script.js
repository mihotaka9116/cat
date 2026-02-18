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

// 【追加】もし読み込みが遅くても5秒後には強制的に表示させる（保険）
setTimeout(function(){
  const spinner = document.getElementById("loading");
  if(!spinner.classList.contains("loaded")){
    spinner.classList.add("loaded");
  }
}, 5000);
