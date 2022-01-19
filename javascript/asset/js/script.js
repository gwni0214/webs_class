//결과보기
//제목을 클릭했을 때 ~~~~ 실행해라!

//for문을 이용해서 1~12까지 출력

// for(let i=1; i<=23; i++){    
//     document.querySelector(".result"+ i +"t h4").addEventListener("click", function(){         
//         document.querySelector(".result"+ i).style.display = "block";
//     });
// }

//forEach을 이용해서 1부터 12까지 출력
// document.querySelectorAll(".result h4").forEach(function(el){
//     // console.log(el)
//     el.addEventListener("click", function(){
//         alert("클릭");
//     })
// });

// num = [1,2,3,4,5,6,7,8,9,10,11,12];
// num.forEach(function(i) {
//     document.querySelector(".result"+ i +"t h4").addEventListener("click", function(){        
//         document.querySelector(".result"+ i).style.display = "block";
//     });
// });


//결과 보기 토글
    // document.querySelectorAll(".result").forEach(function(el){
    //     el.addEventListener("click", function(){
    //         document.querySelectorAll(".result > div").forEach(function(el){
    //             el.classList.toggle("on")
    //         });
    //     });
    // });
    document.querySelectorAll(".result").forEach(function(el){
        el.addEventListener("click", function(){
            el.classList.toggle("active");
        });
    });
    
        
   
    // document.querySelector(".result").addEventListener("click", ()=>{});
