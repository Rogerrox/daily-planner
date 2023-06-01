
$(document).ready(function(){
  $('#currentDay').text(dayjs().format('dddd MMM D, YYYY'));
  $('.saveBtn').on('click',function(){
   var textBox = $(this).siblings('.description').val()
   var hour = $(this).parent().attr("id").split("-")[1]
   localStorage.setItem(hour,textBox);
;
  });

  for(let i = 9; i < 18; i++){
    var userEntry = localStorage.getItem(i) || ""  // || or operator
    $("#hour-"+i).children("textarea").val(userEntry)
  }

  
function timeChange(){
  var currentHour = dayjs().hour();
      $('.time-block').each(function(){
        var idTime = parseInt($(this).attr("id").split("-")[1])
        if (idTime < currentHour){
            $(this).addClass("past");
        } else if (idTime === currentHour){
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {$(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
        }
    })
}
timeChange();

});





  