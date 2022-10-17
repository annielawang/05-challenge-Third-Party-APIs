/**
 * declare variables
 */
var currentDay = document.getElementById("currentDay");

/**
 * define functions
 */
// Current day is displayed on the top of the webpage.
var renderCurrentDay = function(){
    // render current day using moment.js
    currentDay.textContent = "Today is "+ moment().format("MMM Do YY");
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
var renderSavedEvents = function(){
    // Get value from local storage and render on relevant textarea.
    console.log("rednder saved events");
    btnIdArray = [hour_9_save, hour_10_save, hour_11_save, hour_12_save, hour_13_save, hour_14_save, hour_15_save, hour_16_save, hour_17_save];
    for (let i = 0; i < btnIdArray.length; i++) {
        const btnID = btnIdArray[i];
        var textAreaEventObject = JSON.parse(localStorage.getItem(btnID));
        if(textAreaEventObject !== null){
            document.getElementById("btnID").previousElementSibling.value = textAreaEventObject.btnID;
        }
    }
}

var saveEvent = function(clickId){
    // Onclick, save this button's previous sibling element value (textarea value) to local storage.
    var inputValue = document.getElementById(clickId).previousElementSibling.value;
    localStorage.setItem(clickId, JSON.stringify(inputValue));
    renderSavedEvents();
}



/**
 * call functions
 */
 renderCurrentDay();
 renderColorBlock();
 renderSavedEvents();