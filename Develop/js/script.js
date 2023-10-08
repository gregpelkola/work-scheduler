// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
var plans = []

$('.btn').click(function () {
  console.log($(this).siblings('text').val());
  console.log($(this).parent().atttr('id'));
});

var dateEl = $('#currentDay');
var timeEl = 0
setInterval(function() {
  timeEl++;
  dateEl.text(day.js().format('dddd, MMM D'))
}, 1000);

console.log(dateEl);

});
