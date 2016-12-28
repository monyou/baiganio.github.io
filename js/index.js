/**
 * Created by Republic Of Gamers on 7/16/2016.
 */

$('#ganio-info').click(function () {
    document.getElementById('main-content').style.display = 'inline-block';
    document.getElementById('bai-ganio').style.display = 'block';
    document.getElementById('bai-ganio').style.width = '65%';
    $('#bai-ganio').css('margin', '0 auto');
});


$('.flip4o').click(function () {
    //        alert("here");
    $('#card').addClass('flipped');
    $("section").hide();
    $("#header").hide();
    $(".back").show();
    $('body').css("padding-top", "0px");
});
$('#arrLft').click(function () {
    //        alert("here");
    $('#card').removeClass('flipped');
    $("section").show();
    $("#header").show();
    $(".back").hide();
    $('body').css("padding-top","50px");
});