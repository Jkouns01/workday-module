$(document).ready(function () {
    //display current day & time.
    $("#time-display").text(dayjs().format("MMMM D YYYY"));

    
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

     
        localStorage.setItem(time, text);
    })
    $("#hour9 .description").val(localStorage.getItem("hour_9"));
    $("#hour10 .description").val(localStorage.getItem("hour_10"));
    $("#hour11 .description").val(localStorage.getItem("hour_11"));
    $("#hour12 .description").val(localStorage.getItem("hour_12"));
    $("#hour13 .description").val(localStorage.getItem("hour_13"));
    $("#hour14 .description").val(localStorage.getItem("hour_14"));
    $("#hour15 .description").val(localStorage.getItem("hour_15"));
    $("#hour16 .description").val(localStorage.getItem("hour_16"));
    $("#hour17 .description").val(localStorage.getItem("hour_17"));


    function hourFunction() {
        var currentHour = dayjs().hour();

       
        $(".time-block").each(function () {
            var timeSpot = parseInt($(this).attr("id").split("hour")[1]);
            console.log( timeSpot, currentHour)

    
            if (timeSpot < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeSpot === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourFunction();
})