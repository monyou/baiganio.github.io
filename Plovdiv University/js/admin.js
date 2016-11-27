/**
 * Created by Republic Of Gamers on 11/26/2016.
 */
function encodeImageFileAsURL() {
    var filesSelected = document.getElementById("inputFileToLoad").files;
    var fileToLoad = filesSelected[0];
    if (filesSelected.length > 0) {
        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
            $('#user_img').attr('src', fileLoadedEvent.target.result);
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;
            /* Uncomment this if you want to see all the data converted. */
            document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            $('#imgTest').css({'width' : '50%' ,'border':'3px solid pink', 'margin' : '0 auto'});
            $('#imgTest img').css({'width' : '100%'});
            //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        }

        fileReader.readAsDataURL(fileToLoad);

    }
}

// function fileUpload(file) {
//     var filesSelected = document.getElementById("inputFileToLoad").files;
//     var file = filesSelected[0];
//     // var file = document.getElementById('_file').files[0];
//     var promise = Kinvey.Files.upload(file,{
//         filename: document.getElementById('fileinfo').toString(),
//         mimetype: document.getElementById('filetype').toString()
//     })
//     promise.then(function() {
//         alert("File Uploaded Successfully");
//     }, function(error){
//         alert("File Upload Failure:  " +  error.description);
//     });
// }