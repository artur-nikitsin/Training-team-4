/*TODO: this file is a copy of searchCandidatesScript.js */
$(document).ready(function () {
    var $noResult = $('.no-result');
    $("#search-input").keyup(function () {
        var index = 0;
        _this = this;
        $.each($("#vacancies-table tbody tr"), function () {
            if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
                $(this).hide();
            } else {
                $(this).show();
                index++;
            }
            if (index == '0') {
                $noResult.show();
            } else {
                $noResult.hide();
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
                        valid = false;
                    }
                }
            });
            if (valid === true) {
                $(this).show();
                index++;
            } else {
                $(this).hide();
            }
        });
        if (index == '0') {
            $noResult.show();
        } else {
            $noResult.hide();
        }
    }
});
