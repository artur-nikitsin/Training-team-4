$(function () {
    var vacancies_name = $('#vacancies_name');
    var pay = $('#pay');
    var skill = $('#skill');
    var candidate = $('#candidate');
    function showData(data) {
        var vacanciesData = "";
        vacanciesData += "<tr>";
        vacanciesData += "<td>" + data.vacancies_name + "</td>";
        vacanciesData += "<td>" + data.pay + "</td>";
        vacanciesData += "<td>" + data.skill + "</td>";
        vacanciesData += "<td>" + data.candidate + "</td>";
        vacanciesData += "</tr>";
        $("#vacancies-table tbody").append(vacanciesData)
    }

    $.ajax({
        type: 'GET',
        url: '/vacancies',
        dataType: 'json',
        success: function (data) {

            $.each(data, function (key, value) {
                showData(value);
            });

            var table = $('#vacancies-table').DataTable(
                {
                    "searching": false,
                    "lengthMenu": [10, 20, 50],
                    "info": false
                }
            );
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
            success: function (newVacancy) {
                showData(newVacancy);
            },
            error: function () {
                alert('error');
            }
        });
    });

});