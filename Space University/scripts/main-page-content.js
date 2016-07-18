/**
 * Created by Republic Of Gamers on 7/17/2016.
 */

const kinveyAppID = 'kid_rJXGMWdD';
const kinveyAppSecret = '5a27b3abc82449b2aabb58126e3899d8';
const kinveyServiceBaseUrl = 'https://baas.kinvey.com/';

function showAJAXError (data, status) {
    let errorMsg = 'Error: ' + JSON.stringify(data);
    showError(errorMsg);
}
function showError(msgText) {
    $('#errorBox').text(msgText).show();
}


function showView(viewID) {
    /*
     * Clear all views before that.
     */
    $('#main-page-content > section').hide();
    $('#' + viewID).show();
};

$(function () {
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkCreatePost').click(showCreatePostView);
    $('#linkListPosts').click(showListPostsView);
    $('#linkLogout').click(logout);

    $('#loginButton').click(login);
    $('#registerButton').click(register);
    $('#createPostButton').click(createPost);
    
    showHomeView();
    showHideNavLinks();
});

/* Choose what links to be seen when user is logged or not */
function showHideNavLinks() {
    let loggedIn = sessionStorage.authToken != null;
    if(loggedIn){
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkCreatePost').show();
        $('#linkListPosts').show();
        $('#linkLogout').show();
    }else{
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkCreatePost').hide();
        $('#linkListPosts').show();
        $('#linkLogout').hide();
    }
};

function showHomeView() {
    showView('viewHome');
}
function showLoginView() {
    showView('viewLogin');
}

function login() {
    let loginData = {
        username : $('#loginUsername').val(),
        password : $('#loginPassword').val()
    };
    alert('IN LOGIN');
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
        sessionStorage.authToken = data._kmd.authToken;
        showListPostsView();
        showHideNavLinks();

        showInfo('Login successful');
    };
};

function showInfo(msgText) {
    $('#infoBox').text(msgText).show().delay(3000).fadeOut();
}


function showRegisterView() {
    showView('viewRegister');
}
function register() {

}
function showCreatePostView() {
    showView('viewCreatePost');
}
function createPost() {
    
}
function showListPostsView() {
    showView('viewListPosts');
}
function logout() {
    sessionStorage.clear();
    showHideNavLinks();
    showHomeView();
}
