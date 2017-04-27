var score = 0;
$(document).ready(function(){
    $(".correct").click(function(){
         $(this).removeClass("btn-primary").addClass("answer_correct").off("click");
         $(this).siblings().removeClass("btn-primary").off("click");
         score+1;
    }); 
     $(".incorrect").click(function(){
         $(this).removeClass("btn-primary").addClass("answer_incorrect").off("click");
         $(this).siblings().removeClass("btn-primary").off("click");
    }); 
    
});	



