/**
 * Created by Republic Of Gamers on 7/19/2016.
 */

$(function () {
    $('extract-url-info').submit(function (e) {
        e.preventDefault();
        extract();
    });

    $('#submitBtn').click(extract);

    function extract() {
        alert("I'm here!");
        let testUrl = 'http://www.ewao.com/a/former-minister-defense-world-leaders-covering-evidence-alien-visitations/';

        $.ajax({
            type: 'GET',
            url: testUrl,
            crossDomain: true,
            cache:false,
            success: success,
            error:function(jqXHR, textStatus, errorThrown){
                alert("I'm here!");
                alert(errorThrown);
            }
        });


        function success(data, status) {
            alert(data);
        }
    };



});