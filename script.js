$(document).ready(function () {
    //variables for each hour section of html
    $("#hour_9 .description").val(localStorage.getItem("hour_9"));
    $("#hour_10 .description").val(localStorage.getItem("hour_10"));
    $("#hour_11 .description").val(localStorage.getItem("hour_11"));
    $("#hour_12 .description").val(localStorage.getItem("hour_12"));
    $("#hour_13 .description").val(localStorage.getItem("hour_13"));
    $("#hour_14 .description").val(localStorage.getItem("hour_14"));
    $("#hour_15 .description").val(localStorage.getItem("hour_15"));
    $("#hour_16 .description").val(localStorage.getItem("hour_16"));
    $("#hour_17 .description").val(localStorage.getItem("hour_17"));

//time display on the top of screen
    $("#time-display").text(dayjs().format("MMMM D YYYY"));

    //TODO: need to fix save button to save to JSON 
    $(".saveBtn").on("click", planSaveHandler);

    function planSaveHandler (){
        let plan = $(this).siblings(".description").val();
        console.log("plan= ",plan);
        let planTime = $(this).parent().attr("id");
        console.log("planTime= ",planTime);

        localStorage.setItem(planTime, plan);
    }

    function hourFunction() {
        var thisHour = dayjs().hour();

       
        $(".time-block").each(function () {
            var timeSpot = parseInt($(this).attr("id").split("_")[1]);
            console.log( timeSpot, thisHour)

    
            if (timeSpot < thisHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeSpot === thisHour) {
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
