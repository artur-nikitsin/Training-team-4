$(document).ready(function () {
    var $search, $filter, $persons, $status,$name ;
    function filters() {
        $search = $("#search-input").val().toUpperCase();
        $filter = $(".page-candidates-filter-candidates-input option:selected").html();
        $persons = $(".page-candidates-mini-profile");
    }
    $("#search-input").keyup(function () {
        filters();
        for (var i = 0; i < $persons.length; i++) {
            $status = $persons.eq(i).find(".mini-profile-stage-interview").html();
            $name = $persons.eq(i).find(".mini-profile-info-name-candidate").html();
            if ($status.indexOf($filter) > -1 && $name.toUpperCase().indexOf($search) > -1) {
                $persons.eq(i).show();
            } else {
                $persons.eq(i).hide();
            }
            if ($search === "") {
                $persons.eq(i).show();
            }
        }
    });
});


