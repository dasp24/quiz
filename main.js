
$(document).ready(function(){
    var score = 0;
    runningTotal=document.getElementById('Total')
    runningTotal.innerHTML = "score: "+ score;
    $(".correct").click(function(){
         $(this).removeClass("btn-primary").addClass("answer_correct").off("click");
         $(this).siblings().removeClass("btn-primary").off("click");
         score +=1;
         return runningTotal.innerHTML = "score: "+ score;
    }); 
     $(".incorrect").click(function(){
         $(this).removeClass("btn-primary").addClass("answer_incorrect").off("click");
         $(this).siblings().removeClass("btn-primary").off("click");
    }); 
    
});	



