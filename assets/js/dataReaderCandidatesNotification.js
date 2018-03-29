$(document).ready(function () {
        $.getJSON("assets/js/candidatesNotificationData.json")
            .done(function (data) {
                var candidatesData = "";
                $.each(data, function (key, value) {
                    candidatesData += "<div class=\"candidate-notification\"><div><img src=\"images/default_profile.jpg\"></div>";
                    candidatesData += "<div><p>" + value.fullname + "</p>";
                    candidatesData += "<p>" + value.salary + "</p>";
                    candidatesData += "<p>" + value.position + "</p></div>";
                    candidatesData += "</div>";
                });
                $(".candidates-notifications").append(candidatesData);


                $(".candidate-notification").hide().slice(0, 3).show();

            })
            .fail(function (jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
            });

        $(".view-candidates").click(function(){
            if($(".candidate-notification").last().css("display") == "none"){
                $(".candidate-notification").show();
            }
            else{
                $(".candidate-notification").hide().slice(0, 3).show();
            }
        });
    }
);
