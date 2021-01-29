$( document ).ready(function() {
    
    //using moment for the date change on html
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //clear button, adds the text to the button on the html page
    var clrBtn = $(".clear-btn")
    clrBtn.text("Clear All!");
    
    //loops through, i is the amount of hours which is the amount of rows
    for (let i = 5; i < 19; i++) {

      //row
      var row = $(`<article data-key=${i} id='${i}' class="row time-block">`);

      //column1, sets a class to the column for bootstrap
      var column1 = $('<article class="col-2">'); 
      //puts a paragraph tag to the column with the time. It sets AM and PM.
      var formatTime = $("<p>");
      formatTime.addClass("hour");
      //if statement to put AM or PM.
      if(i < 12) {
        formatTime.text(i + " AM");
        } else if(i == 12) {
        formatTime.text(i + " PM");
        } else {
        formatTime.text(i - 12 + " PM");
        }
      //appends the time to the column
      column1.append(formatTime)

      //column 2
      var column2 = $(`<article class="col-8 past"><textarea id=textInput${i} class="textUser textarea" placeholder="Add Event Here... Then click the save icon."></textarea>`);        
     
      //column 3
      var column3 = $(`<div class="col-2"><button class="saveBtn save" id=${i}><i class="far fa-save fa-3x"></i></button>`); 

      
      // append columns to the row
      row.append(column1);
      row.append(column2);
      row.append(column3);

      //add rows to the container
      $(".container").append(row);

      //local storage call with reference to i (hour)
      getLS(i);
  }

// changes the color depending on the hour
function changeColor(){
    var currntT = new Date().getHours();
    //get current hours
    for (var i = 5; i < 19; i++) { 
    if($(`#` + i).data("key") == currntT){
        $(`#textInput` + i).addClass( "present");
    } else if (currntT < $(`#` + i).data("key")) {
        $(`#textInput` + i).addClass( "future");
    }
    }
}

//change color call
changeColor();

//save btn
var saveBtn = $('.saveBtn');
//click on function for save button, saves the info to the local storage
saveBtn.on('click', function(){
  var evntT = $(this).attr('id');
  var evntTxt = $(this).parent().siblings().children('.textUser').val();
  localStorage.setItem(evntT, evntTxt);
});


//clear description and local storage.
clrBtn.on('click', function(){
$('.textUser').val("");
localStorage.clear();
});

//get the local storage, gets the key from local storage
function getLS(key) {
    var eventText = localStorage.getItem(key);
    if (eventText) {
        $(`#textInput` + key).text(eventText);
    }
  }

});