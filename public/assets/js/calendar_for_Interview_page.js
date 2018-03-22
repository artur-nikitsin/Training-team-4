$(document).ready(function () {


    $('#calendar-for-interviews').fullCalendar({

        customButtons: {
            schedule: {
                text: 'schedule',
                click: function() {
                    alert('clicked the custom button!');
                }
            }
        },
        header: {
            left: 'prev next',
            center: 'title',
            right: 'agendaDay agendaWeek  month listWeek schedule'
        }

    })


});



















