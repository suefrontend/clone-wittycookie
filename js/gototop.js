// activeクラスをtoggleする
// もし、topからXXpx（メイン画像の高さ分）までスクロールしてきたら、activeクラスを付ける
// もし、topからxxpxまで近づいたら、activeを外す

// .go-to-top の上からの座標を取得
window.onscroll = function() {
  var y = window.pageYOffset;

  // .go-to-top をdocument.querySelectorで取得する
  const btn = document.querySelector('.go-to-top');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // クリックしたら、ページの一番上へスクロールして戻るようにする
  btn.addEventListener('click', scrollToTop);

  if(y > 200) {
    btn.classList.add('active')
  } else {
    btn.classList.remove('active')
  }
}
