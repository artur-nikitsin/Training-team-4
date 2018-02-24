$(document).ready(function () {
        $.getJSON('assets/js/data.json')
            .done(function (data) {
                var vacanciesData = '';
                $.each(data, function (key, value) {
                    vacanciesData += '<tr>';
                    vacanciesData += '<td>' + value.vacancy + '</td>';
                    vacanciesData += '<td>' + value.skill + '</td>';
                    vacanciesData += '<td>' + value.pay + '</td>';
                    vacanciesData += '<td>' + value.fullname + '</td>';
                    vacanciesData += '</tr>';
                });
                $("#vacancies-table").append(vacanciesData)
            })
            .fail(function (jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
            });
        $("#searchInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("table tr").filter(function (index) {
                if (index > 0) {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                }
            });
        });
    }
);
