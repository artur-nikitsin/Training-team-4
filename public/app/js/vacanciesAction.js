$(function () {
    var vacancy = $('#Vacancy');
    var experienceLevel = $('#ExperienceLevel');
    var salaryEstimate = $('#SalaryEstimate');
    var jobType = $('#JobType');

    function showData(data) {
        var vacanciesData = '';
        vacanciesData += '<tr class="data-tr-from-json">';
        vacanciesData += '<td>' + data.Vacancy + '</td>';
        vacanciesData += '<td>' + data.ExperienceLevel + '</td>';
        vacanciesData += '<td>' + data.SalaryEstimate + '</td>';
        vacanciesData += '<td>' + data.JobType + '</td>';
        vacanciesData += '<td>' + '<a href="#">Show</a> ' + '</td>';
        vacanciesData += '</tr>';
        $('#vacancies-table tbody').append(vacanciesData);
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
            if(data.length > 0){
                $.each(data, function (key, value) {
                    showData(value);
                });
            }
            else {
                $('.no-result').show();
            }
        },
        error: function (xhr, textStatus, error) {
            alert(xhr.statusText + ' ' + textStatus + ' ' + error);
        }
    });

    $('#add-vacancy').on('click', function () {
        var newVacancy = {
            Vacancy: vacancy.val(),
            ExperienceLevel: experienceLevel.val(),
            SalaryEstimate: salaryEstimate.val(),
            JobType: jobType.val()
        };
        $.ajax({
            type: 'POST',
            url: 'vacancies',
            data: newVacancy,
            success: function (data) {
                if (data.length > 0) {
                    showData(data);
                }
                else {
                    alert('No data');
                }
            },
            error: function (xhr, textStatus, error) {
                alert(xhr.statusText + ' ' + textStatus + ' ' + error);
            }
        });
    });

});