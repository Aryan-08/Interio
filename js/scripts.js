$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 2000 });
    $('#call').on("click", function () {
        window.location.assign('tel:0141-263121');
    });
    $('#mail1, #mail2').on("click", function () {
        window.location.assign('mailto:support@interio.in');
    });
});
