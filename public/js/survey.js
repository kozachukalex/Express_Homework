//Waits for DOM to load then initializes
$(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        alert("clicked");
        //Create object of survey values
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        console.log(newFriend);
        //Verify each statement has an answer before posting
        if (newFriend.scores.indexOf("") >= 0) {
            alert("You must answer each question")
        } else {
            $.post("/api/newFriend", newFriend,
                function (data) {
                    if (data) {
                        alert("posted");
                    }
                    else {
                        alert("failed to post");
                    };
                });
        }
    });
});