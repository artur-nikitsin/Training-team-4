$(function () {
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

});