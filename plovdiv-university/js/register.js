/**
 * Created by Republic Of Gamers on 11/26/2016.
 */
function register() {
    let registerData = {
        username : $('#registerFacultyNumber').val(),
        password : $('#registerPassword').val(),
        fullName : $('#registerFullName').val(),
        admin : "No"
    };

    $.ajax({
        method: "POST",
        url:kinveyServiceBaseUrl + 'user/' + kinveyAppID + '/',
        data:registerData,
        headers: {
            "Authorization": "Basic " + btoa(kinveyAppID + ":" + kinveyAppSecret)
        },
        success: registerSuccess,
        error: showAJAXErrorRegister
    });

    function registerSuccess(data, status) {
        sessionStorage.authToken = data._kmd.authtoken;
        // showListPostsView();
        $('#loginInfo').text("Hello, " + data.fullName);
        showHomeView();
        showHideNavLinks();
        showInfo('Register completed successfully.');
    }
}
