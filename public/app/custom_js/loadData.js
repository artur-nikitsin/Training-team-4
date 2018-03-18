$(function () {
    var vacancies_name = $('#vacancies_name');
    var pay = $('#pay');
    var skill = $('#skill');
    var candidate = $('#candidate');

    $.ajax({
        type: 'GET',
        url: '/vacancies',
        dataType: 'json',
        success: function (data) {
            var vacanciesData = "";
            $.each(data, function (key, value) {
                vacanciesData += "<tr>";
                vacanciesData += "<td>" + value.vacancies_name + "</td>";
                vacanciesData += "<td>" + value.pay + "</td>";
                vacanciesData += "<td>" + value.skill + "</td>";
                vacanciesData += "<td>" + value.candidate + "</td>";
                vacanciesData += "</tr>";
            });
            $("#vacancies-table tbody").append(vacanciesData)
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
                vacanciesData += "<tr>";
                vacanciesData += "<td>" + newVacancy.vacancies_name + "</td>";
                vacanciesData += "<td>" + newVacancy.pay + "</td>";
                vacanciesData += "<td>" + newVacancy.skill + "</td>";
                vacanciesData += "<td>" + newVacancy.candidate + "</td>";
                vacanciesData += "</tr>";
                $("#vacancies-table tbody").append(vacanciesData);
            },
            error: function () {
                alert('error');
            }
        });
    });

});