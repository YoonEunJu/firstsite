const carouselSlide = document.querySelector('.carousel-slide');

const images = document.querySelectorAll('.carousel-slide img');


// 이미지들을 가로로 나열하기 위해 슬라이드 요소의 너비를 설정합니다.

carouselSlide.style.width = `${images.length * 100}%`;


// 이미지들을 왼쪽으로 이동시키는 애니메이션 효과를 추가합니다.

let counter = 0;

const slideWidth = 100 / images.length;

function slide() {

if (counter === images.length - 1) {

counter = 0;

} else {

counter++;

}

carouselSlide.style.transform = `translateX(-${slideWidth * counter}%)`;

}


// 일정 시간마다 슬라이드를 자동으로 이동시킵니다.

setInterval(slide, 3000);