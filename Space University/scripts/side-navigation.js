/**
 * Created by Republic Of Gamers on 7/16/2016.
 */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px
 and add a black background color to body */
function openNav() {
    let maxwidth = $(window).width();
    if(maxwidth < 361){
        document.getElementById("mySidenav").style.width = "70%";
        document.getElementById("main").style.marginLeft = "20%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    }else{
        document.getElementById("mySidenav").style.width = "20%";
        document.getElementById("main").style.marginLeft = "20%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"

    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    // let mo = $('span .container-sandwich[data-menuopen=false]');
    // if(!mo.attr('data-menuopen')){
    //     mo.toggle('change');
    //     mo.removeAttr('data-menuopen');
    // }
    // console.log(mo);
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
