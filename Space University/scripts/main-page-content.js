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
function showInfo(msgText) {
    $('#infoBox').text(msgText).show().delay(3000).fadeOut(800);
}

function showBooksAjaxError(data, status) {
    let errorMsg = 'Error: ' + JSON.stringify(data);
    // or
    let errorMsgBk = "You need to be logged...";
    showError(errorMsgBk);
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
    $('#linkListPosts').click(showListPostsView);
    $('#linkCreatePost').click(showCreatePostView);
    $('#linkLogout').click(logout);

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
    $('#createPostForm').submit(function (e) {
        e.preventDefault();
        createPost();
    });

    $('#loginButton').click(login);
    $('#registerButton').click(register);
    $('#createPostButton').click(createPost);

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

let appended = false;
function showListPostsView() {
    showView('viewListPosts');
    $.ajax({
        method: "GET",
        url:kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/posts',
        headers: {
            "Authorization": "Kinvey " + sessionStorage.authToken
        },
        success: booksLoaded,
        error: showBooksAjaxError
    });

    function booksLoaded(data, status) {
        if(!appended && sessionStorage.authToken != null){
            for(let book of data){
                $('#previevwHolder')
                    .append($('<div class="col-md-6">')
                        .append($('<h2 class="guildof"></h2>').text(book.Title))
                        .append($('<h4 class="buxtonSketch"></h4>').text(book.Description))
                        .append($("<img>", {class: 'postImg', src: book.ImgUrl}))
                        .append($("<br>"))
                        .append($("<br>"))
                        .append($("<a>", {class: 'postUrl', href: book.ArticleUrl, target: "_blank"}).text("Read more..."))
                    );
            }
            appended = true;
        }
        showInfo('Posts loaded.');
    }
}
function logout() {
    sessionStorage.clear();
    $('#previevwHolder').empty();
    appended = false;
    showHideNavLinks();
    showHomeView();
}
