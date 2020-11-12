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