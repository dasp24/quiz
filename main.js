
$(document).ready(function () {

    $('.questions').hide();
    $('#question-1').show();


    var score = 0;
   
    runningTotal = document.getElementById('Total')
    runningTotal.innerHTML = "score: " + score;
    $(".correct").click(function () {
        $(this).removeClass("btn-primary").addClass("btn-success").off("click");
        $(this).siblings().removeClass("btn-primary").off("click");
        score += 1;
        $(this).parents().next('.questions').show();
        $("html,body").animate({ scrollTop:$(document).height() }, "slow");
        $('.correct').on("click", function () {
    if (score >= 9) {
            $("#picture").attr("src", "http://zubeezone.com/blog/wp-content/uploads/2015/02/picard-winning1.png");
        }
    else if (score >= 4) {
            $("#picture").attr("src", "http://www.roadkilltshirts.com/Assets/ProductImages/PS_0366_RELOAD_AGAIN.jpg");
        }
    
        return runningTotal.innerHTML = "score: " + score + "/10";
    });
    $(".incorrect").click(function () {
        $(this).removeClass("btn-primary").addClass("btn-danger").off("click");
        $(this).siblings().removeClass("btn-primary").off("click");
        $(this).parents().next('.questions').show();
        $("html,body").animate({ scrollTop:$(document).height() }, "slow");
    }); 
    })
});