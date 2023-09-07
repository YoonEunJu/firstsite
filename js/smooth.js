window.scroll({
    top:0,
    left:0,
    behavior: 'smooth'
});


function fnMove(seq){
        var offset = $("#div" + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    }

// btn 클릭하면 class추가
$(document).on("click", "button", function(e) {
e.preventDefault(); // 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드
// .siblings() 객체와 동일한 위치에 있는 모든 객체 (자신을 제외한 형제요소)를 검색하는 메소드
$(this).addClass("active").siblings().removeClass("active");
  
fnMove($(this).data("n"));
  
});

jQuery(function($){
    $(".menu-toggle-btn").click(function(){
    $(".gnb").stop().slideToggle("fast");
    });
});



