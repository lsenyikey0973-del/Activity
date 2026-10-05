$(document).ready(function() {
    $("tbody td").click(function() {
        var cellData = $(this).text();

        if (cellData !== "Not Available") {
            
            $(this).toggleClass("selected");
        }
    });
});