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
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim(),
                $("#q5").val().trim(),
                $("#q6").val().trim(),
                $("#q7").val().trim(),
                $("#q8").val().trim(),
                $("#q9").val().trim(),
                $("#q10").val().trim()
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