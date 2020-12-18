// activeクラスをtoggleする
// もし、topからXXpx（メイン画像の高さ分）までスクロールしてきたら、activeクラスを付ける
// もし、topからxxpxまで近づいたら、activeを外す

// .go-to-top をdocument.querySelectorで取得する
const btn = document.querySelector('.go-to-top');

// .go-to-top の上からの座標を取得
window.onscroll = function() {
  const pageYOffset = window.pageYOffset;

  if(y > 200) {
    btn.classList.add('active')
  } else {
    btn.classList.remove('active')
  }
}

// クリックしたら、ページの一番上へスクロールして戻るようにする
btn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
