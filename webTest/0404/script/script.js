(function($){
//    $(".submenu").css("display", "block"); 
    //첫번째 유형 (this -자기자신 의 밑에있는 서브메뉴만)
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").css("display", "block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").css("display", "none");
    // });
    //두번째 유형 (다중선택자 - 다 찾아서 선택함)
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display", "block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display", "none");
    // });

    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500);
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().hide(500);
    // });
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().slideDown(500);
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().slideUp(500);
    // });

    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slideDown(500);
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp(500);
    });

    //탭매뉴
    var tabMenu = $(".notice");
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tablist(e){
        e.preventDefault();
        var target = $(this); //사용자가 선택한 메뉴
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }
    tabMenu.find("ul > li > a").click(tablist);
    // document.querySelector(".notice ul > li > ul").style.display="none";



})(jQuery);
