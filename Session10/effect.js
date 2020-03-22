var $myCarousel = $('#carouselExampleIndicators');

// Initialize carousel
$myCarousel.carousel();


function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
        var $this = $(this),
        //lấy loại animation 
        $animationType = $this.data('animation');

        // thêm class animate.css vào phần tử
        // xóa class animate.css khi phần tử đã thực hiện animate 1 lần
        $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
        });
    });
}

// Chọn phần tử thực hiện animate ở lần đầu tiên khi load trang
var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
    .find('[data-animation ^= "animated"]');

// Apply animate sử dụng hàm doAnimations()
doAnimations($firstAnimatingElems);

// Gọi function doAnimations cả ở trong sự kiện slide.bs.carousel
$myCarousel.on('slide.bs.carousel', function (e) {
  // Chọn phần tử thực hiện animate bên trong slide đã active
    var $animatingElems = $(e.relatedTarget)
        .find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
});