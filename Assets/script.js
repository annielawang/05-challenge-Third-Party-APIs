/**
 * declare variables
 */
var currentDay = document.getElementById("currentDay");







/**
 * define functions
 */
var renderCurrentDay = function(){
    currentDay.textContent = "Today is "+ moment().format("MMM Do YY");
}

var renderColorBlock = function(){
    // console.log("render color block func");
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
// TODO
var renderSavedEvents = function(){
    console.log("render saved events func");
}

// TODO:
var saveEvent = function(clickId){
    console.log("12345:", clickId);
}



/**
 * call functions
 */
 renderCurrentDay();
 renderColorBlock();
 renderSavedEvents();