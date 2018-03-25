$('document').ready(function () {


    $('#calendar-for-interviews').fullCalendar({

        googleCalendarApiKey: 'AIzaSyDmiZJ4bB-b9v2oGEdWjHzmCyDeLZZeTBg',
        events: {
            googleCalendarId: 'training.team.mifort@gmail.com'
        },

        eventClick: function(calEvent, jsEvent, view) {

            alert('Event: ' + calEvent.title);
            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            alert('View: ' + view.name);

            // change the border color just for fun
            $(this).css('border-color', 'red');

        },



        themeSystem: 'bootstrap3',
        customButtons: {
            schedule: {
                text: 'schedule',
                click: function() {

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



















