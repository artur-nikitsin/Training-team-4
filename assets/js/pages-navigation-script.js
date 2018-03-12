$(document).ready(function () {


    $('.page-vacancies').hide();
    $('.page-candidates').hide();
    $('.one-candidate-information').hide();


    $("#navbar-menu ").find("li div").on("click", function () {

        var a = this.getAttribute("id")

        if (a === "page-vacancies") {

            $('.page-vacancies').show();
            $('.page-candidates').hide();
            $('.one-candidate-information').hide();
            $('.button-edit-user-data').hide();
            $('.button-add-candidat').hide();
        }

        if (a === "page-candidates") {

            $('.page-candidates').show();
            $('.page-vacancies').hide();
            $('.one-candidate-information').hide();
            $('.button-edit-user-data').hide();
            $('.button-add-vacancy').hide();
            $('.button-add-candidat').show();

            $(".page-candidates-mini-profile").on("click", function () {


                $('.page-candidates').hide();
                $('.page-vacancies').hide();
                $('.one-candidate-information').show();
                $('.button-edit-user-data').show();
                $('.button-add-vacancy').hide();
                $('.button-add-candidat').hide();

            });


        }


    })


});
