/**
 * Created by Republic Of Gamers on 11/26/2016.
 */
/* Choose what's happening when user is logout. */
function logout(){
    sessionStorage.clear();
    showHideNavLinks();
    showHomeView();
}