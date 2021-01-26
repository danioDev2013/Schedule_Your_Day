//clear button text
$(".clear-btn").text("Clear!");

$( document ).ready(function() {

 
    //using moment for the date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //current time
    var currentT = new Date().getHours();
    currentT = moment(currentT, 'HH:mm:ss').format('h A');
    console.log(currentT);

   





    //loop to put rows and columns, i is = to 9 rows.
    for(var i = 9; i < 18; i++){

        //row 1
        var row = $("<article>");
        row.addClass("row");

        //column 1, where time will go
        var column1 = $("<article>");
        column1.addClass("col-2 time");
        //adds time to the first rows
        var timeShown = $("<p>");
        timeShown.addClass("hour");
        timeShown.text(i);
        if(i < 12) {
            timeShown.text(i + " AM");
        } else if(i == 12) {
            timeShown.text(i + " PM");
        } else {
            timeShown.text(i - 12 + " PM");
        }
        column1.append(timeShown);


        //column 2, where they write event
        var column2 = $("<input>");
        column2.addClass("col-8 textArea");

        //column3, save button
        var column3 = $("<article>");
        column3.addClass("col-1 save-button")
        var button = $("<button>");
        button.addClass("saveBtn save");
        column3.append(button);
        //var column3 = $(`<div class="col-1"> <button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`);

        //append each column to a row
        row.append(column1);
        row.append(column2);
        row.append(column3);

        //appends the row to the container class in the html
        $(".container").append(row);
        console.log("hi");
        
    }

    
    //creating save button
    $(".saveBtn").text("save");

   
    //colors
  
    
    
})