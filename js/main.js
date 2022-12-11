const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
   const currentScroll = window.pageYOffset

   if(currentScroll <= 0){
    body.classList.remove("scroll-up")
   }
   if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
   }
   if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
   }
   lastScroll = currentScroll;
})

$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000')
        }
        else{
            $('.post-box').not('.' + value).hide('1000')
            $('.post-box').filter('.' + value).show('1000')
        }
    });

    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
