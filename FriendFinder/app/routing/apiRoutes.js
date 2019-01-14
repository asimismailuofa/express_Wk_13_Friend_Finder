var friends = require("../data/friends");

module.exports = function (app) {

    app.post("/api/friends", function (req, res) {

        console.log("postApi");

        console.log(friends.length);

        var friendMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        var reqBody = req.body;

        var userScores = reqBody.scores;

        console.log(reqBody);

        console.log(userScores);

        var diff = -1;


        for (var i = 0; i < friends.length; i++) {

            var friend = friends[i];

            console.log(friend);

            for (var j = 0; j < friend.scores.length; j++) {
                var friendScore = parseInt(friend.scores[j]);

                var userScore = parseInt(userScores[j]);


                diff += Math.abs(friendScore - userScore);
            };

            if (diff <= friendMatch.friendDiff) {
                friendMatch.name = friend.name;

                friendMatch.photo = friend.photo;

                friendMatch.friendDiff = diff;
            }

        }
        console.log(friendMatch);

        res.json(friendMatch);



    });

}
