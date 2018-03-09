$(document).ready(function () {
        $.getJSON("assets/js/data.json")
            .done(function (data) {
                var vacanciesData = "";
                $.each(data, function (key, value) {
                    vacanciesData += "<tr>";
                    vacanciesData += "<td>" + value.vacancy + "</td>";
                    vacanciesData += "<td>" + value.skill + "</td>";
                    vacanciesData += "<td>" + value.pay + "</td>";
                    vacanciesData += "<td>" + value.fullname + "</td>";
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

                // table.on( 'draw', function () {
                //     console.log( 'Redraw occurred at: '+new Date().getTime() );
                // } );


                // $('#vacancies-table').DataTable(
                //     {
                //         "pagingType": "simple_numbers",
                //         "searching": false,
                //         "scrollY": true,
                //         "scrollY": "600px",
                //         "info": false,
                //         "lengthMenu": [ 10, 20, 50 ],
                //         "responsive": true
                //
                //     }
                // );


            })
            .fail(function (jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
            });
        // $("#search-input").on("keyup", function () {
        //     var value = $(this).val().toLowerCase();
        //     $("#vacancies-table tr").filter(function (index) {
        //         if (index > 0) {
        //             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //         }
        //     });
        // });
    }
);
