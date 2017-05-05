
$(document).ready(function () {

    $('.questions').hide();
    $('#question-1').show();


    var score = 0;
    $('.correct').on("click", function () {
        if (score >= 9) {
            $("#picture").attr("src", "http://zubeezone.com/blog/wp-content/uploads/2015/02/picard-winning1.png");
        }
        else if (score >= 4) {
            $("#picture").attr("src", "http://c86og3avv551mqtcy2adcf845a.wpengine.netdna-cdn.com/wp-content/uploads/2016/12/charlie-sheen-not-winning.jpg");
        }
    })

    runningTotal = document.getElementById('Total')
    runningTotal.innerHTML = "score: " + score;
    $(".correct").click(function () {
        $(this).removeClass("btn-primary").addClass("btn-success").off("click");
        $(this).siblings().removeClass("btn-primary").off("click");
        score += 1;
        $(this).parents().next('.questions').show();
        $("html,body").animate({ scrollTop: $(document).height() }, "slow");
        return runningTotal.innerHTML = "score: " + score + "/10";



    });
    $(".incorrect").click(function () {
        $(this).removeClass("btn-primary").addClass("btn-danger").off("click");
        $(this).siblings().removeClass("btn-primary").off("click");
        $(this).parents().next('.questions').show();
        $("html,body").animate({ scrollTop: $(document).height() }, "slow");
    });

});