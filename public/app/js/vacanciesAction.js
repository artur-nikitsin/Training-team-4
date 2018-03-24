$(function () {
    var Vacancy = $('#Vacancy');
    var ExperienceLevel = $('#ExperienceLevel');
    var SalaryEstimate = $('#SalaryEstimate');
    var JobType = $('#JobType');
    var ReviewCandidates = $('#ReviewCandidates');

    function showData(data) {
        var vacanciesData = "";
        vacanciesData += "<tr class='data-tr-from-json'>";
        vacanciesData += "<td>" + data.Vacancy + "</td>";
        vacanciesData += "<td>" + data.ExperienceLevel + "</td>";
        vacanciesData += "<td>" + data.SalaryEstimate + "</td>";
        vacanciesData += "<td>" + data.JobType + "</td>";
        vacanciesData += "<td>" + data.ReviewCandidates + "</td>";
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
        var newVacancy = {
            Vacancy: Vacancy.val(),
            ExperienceLevel: ExperienceLevel.val(),
            SalaryEstimate: SalaryEstimate.val(),
            JobType: JobType.val(),
            ReviewCandidates :ReviewCandidates.val()
        };
        var vacanciesData = "";
        $.ajax({
            type: 'POST',
            url: 'vacancies',
            data: newVacancy,
            success: function (data) {
                showData(data);
            },
            error: function (xhr, textStatus, error) {
                alert(xhr.statusText + " " + textStatus + " " +error);
            }
        });
    });

});