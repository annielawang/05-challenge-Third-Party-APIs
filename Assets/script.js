/**
 * declare variables
 */
var currentDay = document.getElementById("currentDay");

/**
 * define functions
 */
// Current day is displayed on the top of the webpage using moment.js.
var renderCurrentDay = function(){
    currentDay.textContent = "Today is "+ moment().format("dddd MMM Do YY");
}

// The textarea of each time block is color coded to show if it's in the past, present or future.
var renderColorBlock = function(){
    var currentHour = moment().hour();
    var textAreaArr = document.querySelectorAll("textarea");
    for(let i = 0; i < textAreaArr.length; i++){
        var element = textAreaArr[i];
        if(element.getAttribute("id") > currentHour){
            // add future style
            element.classList.add("future");
        } else if (element.getAttribute("id") == currentHour){
            // add present style
            element.classList.add("present");
        } else {
            // add past style
            element.classList.add("past");
        }
    }    
}

// Get key value data from local storage, parse them and render on relevant textarea. When refreshing page, the data persist on page.
var renderSavedEvents = function(){
    btnIdArray = ["hour_9_save", "hour_10_save", "hour_11_save", "hour_12_save", "hour_13_save", "hour_14_save", "hour_15_save", "hour_16_save", "hour_17_save"];
    for (let i = 0; i < btnIdArray.length; i++) {
        var btnID = btnIdArray[i];
        var localStorageValue = localStorage.getItem(btnID);
        if(localStorageValue != null){
            document.getElementById(btnID).previousElementSibling.value = localStorageValue;
        }
    }
}

// save input to local storage
var saveEvent = function(clickId){
    // Onclick, save this button's previous sibling element value (textarea value) to local storage.
    var inputValue = document.getElementById(clickId).previousElementSibling.value;
    localStorage.setItem(clickId, inputValue);
}

/**
 * call functions
 */
// When loading, current day, color coded time blocks and saved events are displayed on the webpage.
 renderCurrentDay();
 renderColorBlock();
 renderSavedEvents();