(function ($) {
    $(document).ready(function () {

        $('#submitBtn').on('click', function () {

            $(".login-form").find('input').each(function () {

                var inputValue = $(this).val();

                if (!inputValue == "") {

                    if ($(this).hasClass("incorrect")) {

                        $(this).removeClass("incorrect");

                        $(this).addClass("correct");
                        setTimeout(function () {
                            $(".login-form").find('input').removeClass("correct");
                        }, 500);

                    } else {

                        $(this).addClass("correct");
                        setTimeout(function () {
                            $(".login-form").find('input').removeClass("correct");
                        }, 500);
                    };

                } else {
                    if ($(this).hasClass("correct")) {

                        $(this).removeClass("correct");

                        $(this).addClass("incorrect");

                    } else {

                        $(this).addClass("incorrect");
                    };


                    setTimeout(function () {
                        $(".login-form").find('input').removeClass("incorrect");
                    }, 500);

                };

            });

        });

    });
})(jQuery);
