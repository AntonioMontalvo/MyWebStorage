console.log("Hello Local and Session Storage!");


refreshData();


$('input[type=submit]').click(function() {

    var selectedMonth = $("#choose [name=selected-month").val();
    var numOfDays = $("#days").val();
    localStorage.setItem(selectedMonth, numOfDays);
    refreshData();
});

function refreshData() {

    for (key in localStorage) {
        $("#" + [key]).height(localStorage[key] * 50).text("").prepend(localStorage[key]+" in "  + key);
    }
}


