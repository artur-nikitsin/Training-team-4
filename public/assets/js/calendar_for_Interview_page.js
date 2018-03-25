$('document').ready(function () {


    $('#calendar-for-interviews').fullCalendar({
        themeSystem: 'bootstrap3',
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



















