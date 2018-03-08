function remove_likes(){
    var buttons = document.querySelectorAll('#threadText .btn-group .btn-sm');
    [].forEach.call(buttons, function(button) {
        button.style.display = "none";
    });
}
remove_likes()
