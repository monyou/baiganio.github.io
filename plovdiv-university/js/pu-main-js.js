/**
 * Created by Republic Of Gamers on 11/7/2016.
 */

const kinveyAppID = 'kid_Sy8gFWAJg';
const kinveyAppSecret = '67bd1b307d9b4562b7ee74589ab17991';
const kinveyServiceBaseUrl = 'https://baas.kinvey.com/';


/* HANDLE THE ERRORS - ONCE FOR THE CREDENTIALS, ONCE FOR THE GET AND POST REQUESTS */
function showAJAXErrorRegister (data, status) {
    // let errorMsg = 'Error: ' + JSON.stringify(data) + " <br/> " +
        "Read this to know what's happening: User exist!!!Try another one.";
    let errorMsg = "Read this to know what's happening: User exist!!!Try another one.";

        showError(errorMsg);
}
function showAJAXErrorLogin(data, status) {
    let errorMsg = 'Error: Maybe incorrect credentials! Try again!';
    showError(errorMsg);
}
function showAJAXErrorLogout(data, status) {
     let errorMsg = 'Error: ' + JSON.stringify(data) + " <br/> ";
    // let errorMsg = 'Error: Something wrong happens. Call your Admin!!';
    showError(errorMsg);
}
function showError(msgText) {
    $('#errorBox').text(msgText).show();//.delay(2000).fadeOut(800);
}
function showInfo(msgText) {
    $('#infoBox').text(msgText).show().delay(2000).fadeOut(800);
}
/* END HANDLING THE ERRORS - ONCE FOR THE CREDENTIALS, ONCE FOR THE GET AND POST REQUESTS */

function showView(viewID) {
    /* Reset all existing views */
    $("main > section").hide();
    if(sessionStorage.authToken != null){
        if(sessionStorage.userData.admin == "Yes"){
            $('#viewSuperAdmin').show();
        }
    }
    else{
        $('#viewSuperAdmin').hide();
    }
    $("#" + viewID).show();

}

function showHomeView(){
    showView('viewHome');
}
function showLoginView(){
    showView("viewLogin");
}
function showRegisterView(){
    showView("viewRegister");
}
function showAdminView() {
    showView('viewAdmin')
    $('#previewUser').text('');

    // $('#previewUser')
    //     .append($('<div class="" id="postHolder">')
    //         .append($('<h2 class="guildof"></h2>').text("Hi " + sessionStorage.userData))
    //         // .append($('<h4 class="buxtonSketch"></h4>').text(book.Description))
    //         // .append($("<img>", {class: 'postImg', src: book.ImgUrl}))
    //         // .append($("<br>"))
    //         // .append($("<br>"))
    //         // .append($("<a>", { class: 'postUrl', href: book.ArticleUrl, target: "_blank"}).text("Read more..."))
    //         .append($('<span style="float: right; font-family: Alsandra">').text("Delete..."))
    //     );
}
function showSuperAdminView() {
    showView('viewSuperAdmin')
}

/* Choose what links to be seen when user is logged or not */
function showHideNavLinks() {
    let loggedIn = sessionStorage.custToken != null;

    if(loggedIn) {
        $('#linkLogin').hide();
        $('#linkRegister').hide();
        $('#linkLogout').show();

        let isadmin = sessionStorage.admin;
        if (isadmin === "Yes") {
            // alert("TRUE");
            $('#linkAdmin').show();
            $('#linkSuperAdmin').text("Здравей, Super Admin " + sessionStorage.fullName + " :)").show();
        } else {
            $('#linkAdmin').text("Здравей, Admin " + sessionStorage.fullName + " :)").show();
        }
    }else {
        $('#linkLogin').show();
        $('#linkRegister').show();
        $('#linkLogout').hide();
        $('#linkAdmin').hide();
        $('#linkSuperAdmin').hide();
    }
};




/* When DOM is ready then this function will be called */
$(function(){
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkLogout").click(logout);

    $("#linkAdmin").click(showAdminView);
    $("#linkSuperAdmin").click(showSuperAdminView);

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

