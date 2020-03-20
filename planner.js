// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd,MMMM Do YYYY'))
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hoursgetElementById("hour-9").getAttribute("value")
var hoursData = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "" }
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var currentHour = parseInt(moment().format('H'));
var timeBlockElements = $(".time-block");
// console.log((JSON.parse(localStorage.getItem("descripText"))))
timeBlockElements.each(function () {
  var timeBlockHour = parseInt(this.id.split("-")[1]);
  var description = hoursData[timeBlockHour.toString()];
  $(this).find("textarea").val(description);
  if (timeBlockHour < currentHour) {
    $(this).addClass("past")
  }
  else if (timeBlockHour === currentHour) {
    $(this).addClass("present")
  } else {
    $(this).addClass("future")
  }
  
  
})

$(document).on("click", ".btn", function(event) {
  var descripText = []
  event.preventDefault();
  
  
  var plannerText = $("textarea").val();
  descripText.push(plannerText);
  localStorage.setItem("descripText", JSON.stringify(descripText));
  console.log(descripText)
  displayPageContent(localStorage.getItem('descripText'))
  
});
$( window ).unload(function() {
  alert("I work");
});
// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock

// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```

