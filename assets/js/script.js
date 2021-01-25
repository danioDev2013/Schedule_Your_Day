//clear button text
$(".clear-btn").text("Clear!");

$( document ).ready(function() {

    //using moment for the date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //loop to put rows and columns, i is = to 9 rows.
    for(var i = 9; i < 18; i++){

        //row 1
        var row = $('<div class="row border border-primary">')

        //column 1, where time will go
        var column1 = $('<div class="col-2 border border-danger">');

        //column 2, where they write event
        var column2 = $('<div class="col-8 border border-dark">');

        //column3, save button
        var column3 = $('<div class="col-2 border border-danger">');

        //append each column to a row
        row.append(column1);
        row.append(column2);
        row.append(column3);

        //appends the row to the container class in the html
        $(".container").append(row);
        console.log("hi");

    }

    //creating save button
    var saveBtn = $("")
})