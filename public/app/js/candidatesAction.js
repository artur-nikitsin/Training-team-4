$(function () {
    function showData(data) {
        var vacanciesData = '';
        vacanciesData += '<tr class="data-tr-from-json">';
        vacanciesData += '<td>' + '<a href="HR_APP_Page_Mobile_One_Candidate.html">' + data.Name + '</a>' + '</td>';
        vacanciesData += '<td>' + data.ExperienceLevel + '</td>';
        vacanciesData += '<td>' + data.Status + '</td>';
        vacanciesData += '<td>' + data.SalaryEstimate + '</td>';
        vacanciesData += '</tr>';
        $('#candidates-table tbody').append(vacanciesData);
        $('.page-vacancies').jplist({
            itemsBox: '.table-data',
            itemPath: '.data-tr-from-json',
            panelPath: '.jplist-panel-vacancies'
        });
    }

    $.ajax({
        type: 'GET',
        url: '/candidates',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (key, value) {
                showData(value);
            });
        },
        error: function (xhr, textStatus, error) {
            console.log(xhr.statusText + ' ' + textStatus + ' ' + error);
        }
    });
});