console.log("hello sessionStorage")
refreshDataSession();

$('input[type=submit]').click(function() {

    var numOfDayss = $("#dayss").val();
    sessionStorage.setItem("num", numOfDayss);
    refreshDataSession();
});

function refreshDataSession() {
    $("#session-num").text("");
    $("#session-num").append(sessionStorage.getItem('num'));    
}