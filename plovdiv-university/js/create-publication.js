/**
 * Created by Republic Of Gamers on 11/27/2016.
 */
function createPublication() {
    let postUrl = kinveyServiceBaseUrl + 'appdata/' + kinveyAppID + '/posts';
    let authHeaders =  {
        "Authorization": "Kinvey " + sessionStorage.authToken,
        "Content-Type": "application/json"
    };

    let newPublicationData = {
        Title: $('#title').val(),
        Description: $('#description').val(),
        ImgUrl: $('#imgUrl').val(),
        ArticleUrl: $('#articleUrl').val()
    };


    $.ajax({
        method: "POST",
        url:postUrl,
        data: JSON.stringify(newPublicationData),
        headers: authHeaders,
        success: publicationCreated,
        error: showBooksAjaxError
    });

    function publicationCreated(data, status) {
        showHomeView();
        showInfo('Post created successfully.');
    }

}