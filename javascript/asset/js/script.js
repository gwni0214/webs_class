
//결과 보기 토글
    document.querySelectorAll(".result").forEach(function(el){
        el.addEventListener("click", function(){
            el.classList.toggle("active");
        });
    });

    // document.querySelectorAll(".result").forEach(function(el){
    //     el.addEventListener("click", function(){
    //         document.querySelectorAll(".result > div").forEach(function(el){
    //             el.classList.toggle("on")
    //         });
    //     });
    // });
    
        
   
    
