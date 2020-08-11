    //TODO:
    
    //update date and time function

    //function to change css styles to timeblocks if they are past, present, future compared to current time

    //function that adds/saves new events to the local storage 
  
    //function to get old events from local storage and displays in proper blocks

    //function to clear the event textarea on the screen and from local storage 

    //function to update time in seconds.. !!needs to be displayed!!

    $(document).ready(function() {

        //variables
        var timeNowDisplay; 
        var timeAndDateNow; 
        
        //call functions when page loads
        updateTime();

        //updates date and time on page load
        function updateTime () {
            dateAndTime = $("#currentDay"); 
            date = moment().format('MMMM Do YYYY');
            time = moment().format('h:mm a');
            dateAndTime.text("Date: " + date + " Time: " + time); 
        }
    });