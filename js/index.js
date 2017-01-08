/**
 * Created by Republic Of Gamers on 7/16/2016.
 */

/* Create loading animation */
$(window).on('load', function() { // makes sure the whole site is loaded
    setTimeout(function () {
        $('#status').fadeOut("slow");
    }, 2500); // will first fade out the loading animation
    $('#preloader').fadeOut(); // will fade out the white DIV that covers the website.
    // $('#status').fadeOut("slow");
    // $('body').css({'overflow':'visible'});
    setTimeout(showBody,500);
    function showBody(){
        $('body').css({'overflow':'visible'});
    }
});

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

/* Take IP address */
// $(document).ready(function () {
//     $.getJSON("http://jsonip.com/?callback=?", function (data) {
//         console.log(data);
//         alert(data.ip);
//     });
// });


function startAppLogic() {
    let userID = sessionStorage.getItem("userId");
    $("#linkLogout").click(logoutUser);

    if(userID){
        let userName = sessionStorage.getItem("userName");
        $('#userMsg').text("Welcome, " + userName + "!");
        $("#admin").hide();
        $("#loggedInUser").show();
        $("#linkLogout").show();
    }
    else{
        $("#admin").show();
        $("#loggedInUser").hide();
        $("#linkLogout").hide();
    }

    function logoutUser() {
        sessionStorage.clear();
        $("#user").hide();
        $("#linkLogout").hide();
        $("#admin").show();
        $('#userMsg').text("");
        showInfo("Logout successful.");

        function showInfo(message) {
            $('#infoBox').text(message);
            $('#infoBox').show();
            setTimeout(function () {
                $('#infoBox').fadeOut();
            }, 3000);
        }

    }

}