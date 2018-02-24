$(document).ready(function () {
    $.getJSON('assets/js/data.json', function (data) {
        var vacanciesData = '';
        $.each(data, function (key, value) {
            vacanciesData += '<tr>';
            vacanciesData += '<td>' + value.vacancy + '</td>';
            vacanciesData += '<td>' + value.skill + '</td>';
            vacanciesData += '<td>' + value.pay + '</td>';
            vacanciesData += '<td>' + value.fullname + '</td>';
            vacanciesData += '</tr>';
        });
        $("#vacancies-table").append(vacanciesData);
    });
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function (index) {
            if (index > 0) {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            }
        });
    });
});
