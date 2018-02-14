(function ($) {
    $(document).ready(function () {

        $("#submitButton").on("click", function () {

            $(".inputsForUserData").find("input").each(function () {

                var inputValue = $(this);

                if (!inputValue.val() == "") {

                    if ($(inputValue).hasClass("incorrectUserData")) {

                        $(inputValue).removeClass("incorrectUserData");

                        $(inputValue).addClass("correctUserData");
                        setTimeout(function () {
                            $(".inputsForUserData").find("input").removeClass("correctUserData");
                        }, 500);

                    } else {

                        $(inputValue).addClass("correctUserData");
                        setTimeout(function () {
                            $(".inputsForUserData").find("input").removeClass("correctUserData");
                        }, 500);
                    }
                    ;

                } else {
                    if ($(inputValue).hasClass("correctUserData")) {

                        $(inputValue).removeClass("correctUserData");

                        $(inputValue).addClass("incorrectUserData");

                    } else {

                        $(inputValue).addClass("incorrectUserData");
                    }
                    ;

                    setTimeout(function () {
                        $(".inputsForUserData").find("input").removeClass("incorrectUserData");
                    }, 500);

                }
                ;

            });

        });

    });
})(jQuery);
