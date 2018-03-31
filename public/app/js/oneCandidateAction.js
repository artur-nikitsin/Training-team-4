// Email
// Address
// Phone

// ExperienceLevel
// SalaryEstimate
// Name

$(function () {

    //in future we can use it to take mo params than one(id)
    function getParams(){
        var idx = document.URL.indexOf('?');
        var params = new Array();
        if (idx != -1) {
            var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
            for (var i=0; i<pairs.length; i++){
                nameVal = pairs[i].split('=');
                params[nameVal[0]] = nameVal[1];
            }
        }
        return params;
    }

    var allParams = getParams();
    var id = allParams["id"];

    var skill = $('#new-skill');
    var newEmail = $('#email');
    var newAddress = $('#address');
    var newTelephone = $('#telephone');
    var newName = $('#name');

    function showSkill(data) {
        $('#skills').append('<span class="skill-candidate">' + data.Skill + '</span>');
    }

    $.ajax({
        url: '/candidates/' +id,
        type: 'GET',
        dataType: 'json',
        success: function (Results) {
            if (Results.length > 0) {
                $('#name').text(Results[0].Name);
                $('#experience-level').text(Results[0].ExperienceLevel);
                $('#salary-estimate').text(Results[0].SalaryEstimate);
                $('#email').text(Results[0].Email);
                $('#address').text(Results[0].Address);
                $('#telephone').text(Results[0].Phone);
            }
            else {
                alert('No data.');
            }
        },
        error: function (xhr, textStatus, err) {
            alert(err);
        }
    });

    $.ajax({
        url: '/skill/'+ id,
        type: 'GET',
        dataType: 'json',
        success: function (Results) {
            if (Results.length > 0) {
                $.each(Results, function (key, value) {
                    showSkill(value);
                });
            }
            else {
                alert('No data.');
            }
        },
        error: function (xhr, textStatus, err) {
            alert(err);
        }
    });

    $('#add-skill').on('click', function () {
        var newSkill = {
            Skill: skill.val(),
            idCandidate: id
        };
        $.ajax({
            type: 'POST',
            url: '/skill',
            data: newSkill,
            success: function (data) {
                if (data.length > 0) {
                    showSkill(data);
                }
                else {
                    alert('No data');
                }
            },
            error: function (xhr, textStatus, error) {
                console.log(xhr.statusText + ' ' + textStatus + ' ' + error);
            }
        });
    });
    $('#edit-profile').on('click', function () {
        var newSkill = {
            Skill: skill.val(),
            idCandidate: id
        };
        $.ajax({
            type: 'POST',
            url: '/skill',
            data: newSkill,
            success: function (data) {
                if (data.length > 0) {
                    showSkill(data);
                }
                else {
                    alert('No data');
                }
            },
            error: function (xhr, textStatus, error) {
                console.log(xhr.statusText + ' ' + textStatus + ' ' + error);
            }
        });
    });


});