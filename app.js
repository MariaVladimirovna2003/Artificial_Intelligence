var burger = document.getElementById('burger');
var header = document.getElementById('header');
var nowscroll = document.documentElement.scrollTop

window.addEventListener('scroll', function() {
    let nowscroll = document.documentElement.scrollTop
    if (nowscroll>header.offsetHeight) {
        header.classList.add('fixed')
    }
    else {
        header.classList.remove('fixed')
    }
})

burger.onclick = function() {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active')
        nav.classList.remove('active')
    }

    else {
        burger.classList.add('active')
        nav.classList.add('active')
    }
}

window.addEventListener('scroll', function() {//скрытие меню при скролле
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
        burger.classList.remove('active')
    }
})

window.addEventListener('click', e => {
    const withinBoundaries__burger = e.composedPath().includes(burger) /*массив элементов, на которых сработает событие; проверяет, содержит ли массив искомый элемент*/
    if (!withinBoundaries__burger) {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active')
            burger.classList.remove('active')
        }
    }
})

/*Slider*/
$('.responsive').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
            }
        },

        {
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },

        {
            breakpoint: 240,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

$('#element').css('width', '');