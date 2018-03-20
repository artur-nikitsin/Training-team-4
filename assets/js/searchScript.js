/*TODO: this file is a copy of searchCandidatesScript.js */
$(document).ready(function () {
    $("#search-input").keyup(function () {
        var index = 0;
        _this = this;
        $.each($("#vacancies-table tbody tr"), function () { //TODO: use $("#vacancies-table").find("tbody tr") instead and put search for that element outside the trigger
            if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
                $(this).hide();
            } else {
                $(this).show();
                index++;
            }
            if (index == '0') { /*TODO: use === */
                $('.no-result').show(); /*TODO: put the jquery element searches outside the event trigger. No need to search for them on each keyup. Search for in once outside that trigger, put in the variable and use that variable here */
            } else {
                $('.no-result').hide(); /*TODO: put the jquery element searches outside the event trigger. No need to search for them on each keyup. Search for in once outside that trigger, put in the variable and use that variable here */
            }
        });
    });

    $('.table-filters input').on('input', function () {
        filterTable($(this).parents('table'));
    });

    function filterTable($table) {


        var $filters = $table.find('.table-filters th');
        var $rows = $table.find('.table-data tr');
        var index = 0;
        $rows.each(function (rowIndex) {
            var valid = true;
            $(this).find('td').each(function (colIndex) {
                if ($filters.eq(colIndex).find('input').val()) {
                    if ($(this).html().toLowerCase().indexOf(
                            $filters.eq(colIndex).find('input').val().toLowerCase()) == -1) {
                        valid = valid && false;
                    }
                }
            });
            if (valid === true) {
                $(this).css('display', '');
                index++;
            } else {
                $(this).css('display', 'none');
            }
        });
        if (index == '0') { /*TODO: use === */
            $('.no-result').show();
        } else {
            $('.no-result').hide();
        }
    }
});


