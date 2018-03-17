$(document).ready(function () {
        $("#search-input").keyup(function () {
            var filter, search, person, status, name;
            search = document.getElementById("search-input").value.toUpperCase();
            filter = $(".page-candidates-filter-candidates-input option:selected").html();/*TODO: put the jquery element searches outside the event trigger. No need to search for them on each keyup. Search for in once outside that trigger, put in the variable and use that variable here */
            person = $(".page-candidates-mini-profile");/*TODO: put the jquery element searches outside the event trigger. No need to search for them on each keyup. Search for in once outside that trigger, put in the variable and use that variable here */
            for (i = 0; i < person.length; i++) {
                status = person[i].getElementsByClassName("mini-profile-stage-interview")[0]; /*TODO: use jquery methods here*/
                name = person[i].getElementsByClassName("mini-profile-info-name-candidate")[0]; /*TODO: use jquery methods here*/
                if (status.innerHTML.indexOf(filter) > -1 && name.innerHTML.toUpperCase().indexOf(search) > -1) {
                    person[i].style.display = "";
                } else {
                    person[i].style.display = "none";
                }
                if (search == "") { /*TODO: use ===*/
                    person[i].style.display = "";
                }
            }
        });
    }
);

