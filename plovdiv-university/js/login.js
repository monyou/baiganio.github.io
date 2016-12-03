/**
 * Created by Republic Of Gamers on 11/26/2016.
 */
function login() {
    let loginData = {
        username : $('#loginFacultyNumber').val(),
        password : $('#loginPassword').val()
    };
    // alert('IN LOGIN');
    $.ajax({
        method: "POST",
        url:kinveyServiceBaseUrl + 'user/' + kinveyAppID + '/login',
        data:loginData,
        headers: {
            "Authorization": "Basic " + btoa(kinveyAppID + ":" + kinveyAppSecret)
        },
        success: loginSuccess,
        error: showAJAXErrorLogin
    });

    function loginSuccess(data, status) {
        sessionStorage.authToken = data._kmd.authtoken;
        sessionStorage.custToken = data._kmd.authtoken;
        sessionStorage.fullName = data.fullName;
        sessionStorage.admin = data.admin;
        let userData = [];
        userData.push(data.username);
        userData.push(data.fullName);
        userData.push(data.admin);
        sessionStorage.userData = JSON.stringify(userData);
        // alert(sessionStorage.id);
        // showListPostsView();
        //  $('#loginInfo').text("Hello, " + data._kmd.authtoken.fullName + " :)");
        showHideNavLinks();

        showInfo('Login successful!');
        showHomeView();
    }
}