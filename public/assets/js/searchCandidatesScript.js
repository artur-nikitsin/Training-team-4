$(document).ready(function () {
        $("#search-input").keyup(function () {
            var filter, search, person, status, name;
            search = document.getElementById("search-input").value.toUpperCase();
            filter = $(".page-candidates-filter-candidates-input option:selected").html();
            person = $(".page-candidates-mini-profile");
            for (i = 0; i < person.length; i++) {
                status = person[i].getElementsByClassName("mini-profile-stage-interview")[0];
                name = person[i].getElementsByClassName("mini-profile-info-name-candidate")[0];
                if (status.innerHTML.indexOf(filter) > -1 && name.innerHTML.toUpperCase().indexOf(search) > -1) {
                    person[i].style.display = "";
                } else {
                    person[i].style.display = "none";
                }
                if (search == "") {
                    person[i].style.display = "";
                }
            }
        });
    }
);

