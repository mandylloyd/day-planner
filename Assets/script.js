//updates date and time on page load
var hoursArr = ["9", "10", "11", "12", "13", "14", "15","16", "17"] ;
// const saveBtn = document.querySelector('saveBtn');
const clearBtn = document.querySelector('clearBtn');
const textarea = document.querySelector('textarea');
let saveBtns = document.querySelectorAll('.saveBtn'); 
let clearBtns = document.querySelectorAll('.clearBtn'); 
//get all buttons
    // btns.forEach( btn => {
    //     btn.addEventListener('click', f-);
    // }


var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);
    
//TODO

var currentHour = moment().hour()
addStyles();
addSaveListeners();
addClearListeners();

//function to add css style attributes to past, present, future time blocks by comparing current time to time block
function addStyles() {
  var el;
  for (var i = 9; el = document.getElementById(i); i++) {
    if (i == currentHour) {
        el.classList.add("present");
    } else if (i < currentHour) {
        el.classList.add("past");
    }
    else {
        el.classList.add("future");
    }
}
}

function addSaveListeners(){
    console.log(saveBtns);
for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", save)
    // button.addEventListener('click', save) 
    console.log("added save button listener")      
    }
}

function addClearListeners(){
    console.log(clearBtns);
for (var i = 0; i < clearBtns.length; i++) {
    clearBtns[i].addEventListener("click", clear)
    // button.addEventListener('click', save) 
    console.log("added clear button listener")      
    }
}

function save(ev){
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    switch (btn.id.valueOf()) {
        case "saveBtn9":
            let newEvent = document.getElementById("textarea9").value;
            console.log(newEvent);
            let newEventSerialized = JSON.stringify(newEvent);
            localStorage.setItem('event', newEventSerialized);
            console.log(localStorage);
            break;
        case "saveBtn10":
            console.log("Textbox2");
            break;
        case "saveBtn11":
            console.log("textbox3");
            break;
        case "saveBtn12":
            break;
        case "saveBtn13":
            break;
        case "saveBtn14":
            break;
        case "saveBtn15":
            break;
        case "saveBtn16":
            break;
        case "saveBtn17":
            break;
        default:
            console.log("DEFAULT");
            break;
    }
}

//function to save event text input and store it to local
// saveBtn.addEventListener('onclick', function (e) {
//     e.preventDefault();
//     console.log("Hello");
    // localStorage.setItem('key', 'value')
  //save whatever is in the child textarea that is on the same parent element as the child saveBtn??
//   })

localStorage.setItem('key', 'value')

//function to clear event text input and clear it from local
function clear(ev){
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);
    switch (btn.id.valueOf()) {
        case "clearBtn9":
            console.log("first textbox");
            break;
        case "clearBtn10":
            console.log("Textbox2");
            break;
        case "clearBtn11":
            console.log("textbox3");
            break;
        case "clearBtn12":
            break;
        case "clearBtn13":
            break;
        case "clearBtn14":
            break;
        case "clearBtn15":
            break;
        case "clearBtn16":
            break;
        case "clearBtn17":
            break;
        default:
            console.log("DEFAULT");
            break;
    }
}



localStorage.removeItem('key')

//function to get stored events from local storage and put them on screen in their correct time blocks
localStorage.getItem('key')



//  Method	                Description
// setItem()	        Add key and value to local storage
// getItem()	        Retrieve a value by the key
// removeItem()	        Remove an item by key
// clear()	            Clear all storage