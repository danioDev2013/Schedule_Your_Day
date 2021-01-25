$(".clear-btn").text("Clear!");

$( document ).ready(function() {

    //using moment for the date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    for(let i = 9; i < 18; i++){
        var row = $('<div class="row">' + '</div>')

        var column1 = $('<div class="col-sm-2">' + '</div>');

        var column2 = $('<div class="col-sm-8>' + '</div>');

        var column3 = $('<div class="col-sm-1' + '</div>');

        row.append(column1);
        row.append(column2);
        row.append(column3);

        $(".container").append(row);
        console.log("hi");
    }







})