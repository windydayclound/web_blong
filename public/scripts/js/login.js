$(document).ready(function () {
    $("#formLogin").submit(function (e) { 
        e.preventDefault();
    const username = $("#txtUsername").val();
    const password = $("#txtPassword").val();

    // alert(username  +  + password);
    $.ajax({
        type: "POST",
        url: "/login",
        data: {username: username, password: password},
        success: function (response) {
            alert(response);
        },
        error: function (xhr){
            alert(xhr.responseText);
        }
    });
});
});