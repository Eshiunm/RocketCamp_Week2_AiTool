import ImgClose from "../images/icons/close.png";
import ImgBurger from "../images/icons/menu.png";

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

//漢堡選單開關特效
const burgerIcon = document.querySelector(".hamburgerMenu_Icon");
burgerIcon.addEventListener("click", () =>{
  toggleImage();
});
function toggleImage() {
  const img = document.querySelector("#menuIcon");
  const switcher = document.querySelector("#switch");
  
  if(!switcher.checked){
    img.src = ImgClose;
  }
  else{
    setTimeout(function(){
      img.src = ImgBurger;
    }, 400);
  }
}