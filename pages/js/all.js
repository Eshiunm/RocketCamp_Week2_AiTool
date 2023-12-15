//來自合作夥伴的輪播效果
const swiper1 = new Swiper('.myswiper', {
  // Optional parameters
  loop: true,
  mousewheel: false, //滑鼠滾輪可移動
  spaceBetween:24, // 圖片與圖片之間的距離
  // If we need pagination
  pagination: {
    el: '.swiper-pagination', //分頁效果
  },
});

//fliterbox 中間選項輪播特效
const swiper2 = new Swiper('.swiper_option_list', {
  // Optional parameters
  loop: true,
  mousewheel: true, //滑鼠滾輪可移動
  spaceBetween:6, // 圖片與圖片之間的距離
  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination', //分頁效果
  // },
  breakpoints: {
    768: {//width 768px 以上會顯示10個slide，且 slide 與 slide 之間的間隔為10px
      slidesPerView: 6,
      spaceBetween: 1,// 圖片與圖片之間的距離
    },
    375: {//width 768px 以上會顯示10個slide，且 slide 與 slide 之間的間隔為10px
      slidesPerView: 5,
      spaceBetween: 1,// 圖片與圖片之間的距離
    },
  },
});


function toggleImage() {
  var img = document.getElementById('menuIcon');
  var currentSrc = img.src;
  // 切換圖片
  if (currentSrc.endsWith('/menu.png')) {
      img.src = '../assets/images/icons/close.png';
  } else if (currentSrc.endsWith('/close.png')) {
    setTimeout(function(){
      img.src = '../assets/images/icons/menu.png';
    }, 400)
  }
}