// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentHour = dayjs().format('HH')
  console.log(currentHour);
  
var plans = []

$('.btn').click(function () {
  console.log($(this).siblings('textarea').val());
  console.log($(this).parent().attr('id'));
});

var dateEl = $('#currentDay');
var timeEl = 0

setInterval(function() {
  //timeEl++;
  dateEl.text(dayjs().format('dddd, MMM D'))
}, 1000);

console.log(dateEl);

function colortimeblock() {

  $('.description').each(function (textarea) {
    var timeblock = $(this).parent().attr('id').split('-')[1];
  
   
    console.log(currentHour);
  
    if (timeblock.length < 2) {
      timeblock = '0'+timeblock
    }
    console.log(timeblock);
  
  
    if (timeblock < currentHour) {
      $(this).addClass('past')
      $(this).removeClass('present', 'future')
    }else if(timeblock == currentHour){
      $(this).addClass('present')
      $(this).removeClass('past', 'future')
      
  
    }else{
      $(this).addClass('future')
      $(this).removeClass('past', 'present')
    }
  
  });
}

colortimeblock()


});
