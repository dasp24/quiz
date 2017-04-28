
$(document).ready(function(){
    
//   $('.questions').hide();
//   $('.answers').hide();
//   $('#question-1').show();
//   $('#answer-1').show();

    
    
    
    
    
    
    
    
    
    var score = 0;
    runningTotal=document.getElementById('Total')
    runningTotal.innerHTML = "score: "+ score;
    $(".correct").click(function(){
         $(this).removeClass("btn-primary").addClass("btn-success").off("click");
         $(this).siblings().removeClass("btn-primary").off("click");
         score +=1;
        //  $(this).parents().next('.questions').show();
        //  $(this).parents().next().contents('.answers').show();
         
         return runningTotal.innerHTML = "score: "+ score +"/10";
    }); 
     $(".incorrect").click(function(){
         $(this).removeClass("btn-primary").addClass("btn-danger").off("click");
         $(this).siblings().removeClass("btn-primary").off("click");
        //  $(this).parents().next('.questions').show();
        //  $(this).parents().next('.answers').show();
    }); 
    
});	



