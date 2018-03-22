$(function () {
    var vacancies_name = $('#vacancies_name');
    var pay = $('#pay');
    var skill = $('#skill');
    var candidate = $('#candidate');
    function showData(data) {
        var vacanciesData = "";
        vacanciesData += "<tr class='data-tr-from-json'>";
        vacanciesData += "<td>" + data.vacancies_name + "</td>";
        vacanciesData += "<td>" + data.pay + "</td>";
        vacanciesData += "<td>" + data.skill + "</td>";
        vacanciesData += "<td>" + data.candidate + "</td>";
        vacanciesData += "</tr>";
        $("#vacancies-table tbody").append(vacanciesData);
        $('.page-vacancies').jplist({
            itemsBox: '.table-data',
            itemPath: '.data-tr-from-json',
            panelPath: '.jplist-panel-vacancies'
        });
    }



    $.ajax({
        type: 'GET',
        url: '/vacancies',
        dataType: 'json',
        success: function (data) {

            $.each(data, function (key, value) {
                showData(value);
            });


        },
        error: function () {
            $('.no-result').show();
        }
    });

    $('#add-vacancy').on('click', function () {
        var vacancy = {
            vacancies_name: vacancies_name.val(),
            pay: pay.val(),
            skill: skill.val(),
            candidate: candidate.val()
        };
        var vacanciesData = "";
        $.ajax({
            type: 'POST',
            url: 'vacancies',
            data: vacancy,
            success: function (data) {
                showData(data);
            },
            error: function (xhr, textStatus, error) {
                alert(xhr.statusText + " " + textStatus + " " +error);
            }
        });
    });

});