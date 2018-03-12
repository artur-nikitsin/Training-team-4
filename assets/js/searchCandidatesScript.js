$(document).ready(function () {
    var $search, $filter, $persons;

    function Filters() {
        search = $("#search-input").val().toUpperCase();
        filter = $(".page-candidates-filter-candidates-input option:selected").html();
        $persons = $(".page-candidates-mini-profile");
    }

    $("#search-input").keyup(function () {
        Filters();
        var status, name;
        for (var i = 0; i < $persons.length; i++) {
            status = $persons[i].getElementsByClassName("mini-profile-stage-interview")[0];
            name = $persons[i].getElementsByClassName("mini-profile-info-name-candidate")[0];
            if (status.innerHTML.indexOf(filter) > -1 && name.innerHTML.toUpperCase().indexOf(search) > -1) {
                $persons.eq(i).show();
            } else {
                $persons.eq(i).hide();
            }
            if (search == "") {
                $persons.eq(i).show();
            }
        }
    });
});


