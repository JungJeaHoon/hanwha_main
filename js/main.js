const header =document.querySelector('header')
window.addEventListener('scroll',function(){
    
    if(this.window.scrollY > 800){  
        header.classList.add('on');
    }else{
        header.classList.remove('on')
    }
})




var swiper2 = new Swiper(".mini_silder", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });