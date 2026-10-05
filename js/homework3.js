$(document).ready(function(){
    $("td").click(function() {
        var content = $(this).text();

        if (content != "Not Available") {

            var colIndex = $(this).index();
            var cliffSite = $("thead th").eq(colIndex).text();
            var fullText = content + " <span class='cliffSite'> at "+ cliffSite + "</span>";

            $(this).toggleClass("highlight");

            if ($(this).hasClass("highlight")) {

                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>" + fullText + "</p>");

            } else {
                $("#result p:contains('" + fullText + "')").remove();

                if ($("#result").has("p").length == false) {
                    $("#displaySelected").css("visibility", "hidden");
                    $("#displaySelected").css("margin-top", "0");
                }
            }
        }
    });
});