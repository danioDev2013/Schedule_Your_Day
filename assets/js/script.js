
//using moment for the date change on html
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//variable for time array
var timeTextArr = [];


$( document ).ready(function() {

    //clear button, words that will show up on button
    $(".clear-btn").text("Clear!");

    //checking the array
    //console.log(timeTextArr);

    //formats the time
    var currentTime = moment().format('H');
    //console.log(currentTime);
    
    //loop to loop through the rows and columns, i = 9 for the amount of rows, 
    for(var i = 9; i < 18; i++) {

        
        //row 1, adds article tag to each row, class, and id with the associated i 
        var row = $("<article>");
        row.addClass("row time-block");
        row.attr("id", i);
        row.attr("data-time", i);


        //column 1, time will show up in the column
        var column1 = $("<article>");
        column1.addClass("col-2 time-block");

        //paragraph area in column that holds the time text, adds class and id to the paragraph
        var timeTextShow = $("<p>");
        timeTextShow.addClass("hour");
        timeTextShow.attr("data-time", i);
        timeTextShow.attr("id", i);
        //pushes the time to the time array, helps to store for color and other functions
        timeS = i;
        timeS = parseInt(timeS);
        timeTextArr.push({"time": timeS});
        //adds the AM and PM to the text
        if(i < 12) {
            timeTextShow.text(i + " AM");
        } else if(i == 12) {
            timeTextShow.text(i + " PM");
        } else {
            timeTextShow.text(i - 12 + " PM");
        }
        //appends the time to the column so it will show
        column1.append(timeTextShow);

        //column 2, where user writes event and adds class for past
        var column2 = $("<article>");
        column2.addClass("col-8 past");
        var inputArea = $("<input>");
        inputArea.attr("placeholder", "Enter Event Here!")
        inputArea.addClass("textarea textOfUser");
        inputArea.attr("id", "text" + i);
        column2.append(inputArea);

        //column3, save button, with icon
        var column3 = $("<article>");
        column3.addClass("col-1 save-button");
        var button = $("<button>");
        button.addClass("saveBtn save fas fa-save");
        button.attr("id", i);
        //appends button
        column3.append(button);

        //append each column to each row
        row.append(column1);
        row.append(column2);
        row.append(column3);

        //appends the row to the container class in the html
        $(".container").append(row);
       
    }

    //on click save function
    $(".saveBtn").on("click", function(){
        var userInputId = $(this).attr('id');
        var userText = $(this).parent().siblings().children('.textOfUser').val()
        localStorage.setItem(userInputId, userText);

    });

    //color function, changes color depending on present or current. It already was set to past.
    var colorChange = function() {
        console.log(currentTime);
        for(var i = 9; i < 18; i++){
            console.log(currentTime, $("#" + i).data("time"));
            if($("#" + i).data("time") == currentTime){
               $("#text" + i).addClass("present");
            } else if(currentTime < $("#" + i).data("time")) { 
                $("#text" + i).addClass("future");
            } 
        }
    }

    //call the color change function
    colorChange();

    //clear button click
    $(".clear-btn").on("click", function() {
        $(".textOfUser").val("");
        
    });

})