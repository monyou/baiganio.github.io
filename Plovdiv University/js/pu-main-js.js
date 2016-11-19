/**
 * Created by Republic Of Gamers on 11/7/2016.
 */

const kinveyAppID = 'kid_Sy8gFWAJg';
const kinveyAppSecret = '67bd1b307d9b4562b7ee74589ab17991';
const kinveyServiceBaseUrl = 'https://baas.kinvey.com/';


/* HANDLE THE ERRORS - ONCE FOR THE CREDENTIALS, ONCE FOR THE GET AND POST REQUESTS */
function showAJAXError (data, status) {
    let errorMsg = 'Error: ' + JSON.stringify(data) + " <br/> " +
        "Read this to know what's happening: User exist!!!Try another one.";
    showError(errorMsg);
}
function showError(msgText) {
    $('#errorBox').text(msgText).show();
}
function showInfo(msgText) {
    $('#infoBox').text(msgText).show().delay(3000).fadeOut(800);
}

function showView(viewID) {
    /* Reset all existing views */
    $("main > section").hide();

    $("#" + viewID).show();
}

/* Choose what links to be seen when user is logged or not */
function showHideNavLinks() {
    let loggedIn = sessionStorage.authToken != null;

    if(loggedIn){
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkLogout').show();
    }else{
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkLogout').hide();
    }
};

function showHomeView(){
    showView('viewHome');
}
function showLoginView(){
    showView("viewLogin");
}
function login() {
    let loginData = {
        facultyNumber : $('#loginFacultyNumber').val(),
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
        error: showAJAXError
    });

    function loginSuccess(data, status) {

        sessionStorage.authToken = data._kmd.authtoken;
        showListPostsView();
        showHideNavLinks();

        showInfo('Login successful');
    }
}

function showRegisterView(){
    showView("viewRegister");
}
function register() {
    let registerData = {
        username : $('#registerFullName').val(),
        password : $('#registerPassword').val(),

        facNumb : $('#registerFacultyNumber').val()
    };

    $.ajax({
        method: "POST",
        url:kinveyServiceBaseUrl + 'user/' + kinveyAppID + '/',
        data:registerData,
        headers: {
            "Authorization": "Basic " + btoa(kinveyAppID + ":" + kinveyAppSecret)
        },
        success: registerSuccess,
        error: showAJAXError
    });

    function registerSuccess(data, status) {

        sessionStorage.authToken = data._kmd.authtoken;
        // showListPostsView();
        showHideNavLinks();

        showInfo('Register completed successfully.');
    }
}


function logout(){
    sessionStorage.clear();
   // alert('logout');
    showHideNavLinks();
    showHomeView();
}

/* When DOM is ready then this function will be called */

$(function(){
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkLogout").click(logout);


    /* Note that by default HTML forms submit their data as HTTP GET request.
     You should prevent this default action and replace it with JavaScript code.
     Use e.preventDefault() as shown above.
     Otherwise, the form will sometimes execute your JavaScript code,
     sometimes will post its data as HTTP GET request.
     */
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        login();
    });
    $('#registerForm').submit(function (e) {
        e.preventDefault();
        register();
    });

    /* Attach AJAX "loading" event listener*/
    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show();
        },
        ajaxStop: function () {
            $('#loadingBox').hide();
        }
    });

    showHomeView();
    showHideNavLinks();
});

