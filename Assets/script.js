//updates date and time on page load
var hoursArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm,", "3pm","4pm", "5pm"] ;

var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);
    
//TODO

//function to add css style attributes to past, present, future time blocks by comparing current time to time block

//function to save event text input and store it to local

//function to clear event text input and clear it from local

//function to get stored events from local storage and put them on screen in their correct time blocks