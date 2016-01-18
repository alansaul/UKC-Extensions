function remove_likes(){
    console.log("Removing likes");
    $('#threadText .btn-group .btn-sm').hide()
    //$('#threadText .btn-group .btn-sm').
    //// #threadText .btn-group .btn-sm
    //'*[(@id = "threadText")]//*[contains(concat( " ", @class, " " ), concat( " ", "btn-group", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "btn-sm", " " ))]'
    //console.log("All likes are being removed");
    //setTimeout(function(){remove_likes();}, 2000);  // Run every two seconds
}
console.log("loaded");
remove_likes()
