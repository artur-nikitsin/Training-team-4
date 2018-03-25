// Email
// Address
// Phone

// ExperienceLevel
// SalaryEstimate
// Name

$(function () {

    var id = 1;
    $.ajax({
        url: '/candidates/1',
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
        url: '/skill/1',
        type: 'GET',
        dataType: 'json',
        success: function (Results) {
            if (Results.length > 0) {
                $.each(Results, function (key, value) {
                    $('#skills').append('<span class="skill-candidate">' + value.Skill + '</span>');
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




});