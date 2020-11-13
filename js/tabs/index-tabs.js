//in focus first tab
document.getElementById("focus").focus();
//tabs on jQery
$(".card__header-tabs").click(function(event) {
    event.preventDefault();
    let id = $(this).attr("data-tab"),
        content = $('.card-body[data-tab="' + id + '"]');

    $(".card__header-tabs.active").removeClass("active");
    $(this).addClass("active");

    $(".card-body.active").removeClass("active");
    content.addClass("active");
});
//
let circle = document.querySelector("circle");
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
    const offset = circumference - (percent / 10) * circumference;
    circle.style.strokeDashoffset = offset;
}

let input = document.querySelector("input");
setProgress(input.value);

input.addEventListener("change", function(e) {
    if (input.value < 11 && input.value > -1) {
        setProgress(input.value);
    }
});

//
$(".links").on("click", "a", function() {
    var percentCurrent = $(".test-progress-bar").attr("data-percent");
    var percentUpdated = $(this).text();
    var i = percentCurrent;
    var animator = setInterval(function() {
        if (i < percentUpdated) {
            i++;
            $(".test-progress-bar").attr("data-percent", i);
            $(".test-progress-clip").text(i);
        } else if (i > percentUpdated) {
            i--;
            $(".test-progress-bar").attr("data-percent", i);
            $(".test-progress-clip").text(i);
        } else {
            clearInterval(animator);
        }
    }, 10);
});