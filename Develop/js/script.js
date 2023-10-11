// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
loadData()

$(function () {

  var currentDay = dayjs().format('dddd, MM D ');
  var currentHour = dayjs().format('HH')
  console.log(currentHour);
  
var plans = []

$('.btn').click(function () {
  console.log($(this).siblings('textarea').val());
  console.log($(this).parent().attr('id'));
});

var dateEl = $('#currentDay');
var timeEl = 0;

var userData = JSON.parse(localStorage.getItem("userData")) || [
  {id: "", text: ""},
  {id: "", text: ""},
  {id: "", text: ""},
  {id: "", text: ""},
  {id: "", text: ""},
  {id: "", text: ""},
  {id: "", text: ""},
  {id: "", text: ""},
  {id: "", text: ""},
];

$(".saveBtn").click(function(event){

  selectedID = $(event.target).parents(".time-block").attr("id");
  selectedText = $(event.target).parents("div").children(".description").val();
  
  userData[selectedID - 9].id = selectedID;
  userData[selectedID - 9].text = selectedText;
  localStorage.setItem("userData", JSON.stringify(userData));
});

function loadData(){

  console.log(userData);

  $(".time-block").each(function(){
    var thisID = $(this).attr("id");
    var thisText = $(this).children(".description").val();
    console.log(thisID + "//" + thisText);

    $(this).children(".description").val(userData[thisID - 9].text);
  });
};

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
